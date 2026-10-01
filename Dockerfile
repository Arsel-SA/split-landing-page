# syntax=docker/dockerfile:1
#
# Split marketing site (apps/marketing) — hand-written static HTML, no build step.
#
# Build from the REPO ROOT, not from this directory:
#   docker build -f apps/marketing/Dockerfile -t split-marketing .
# The context root is needed for one file: docker/static-server.mjs.
#
# TWO THINGS TO KNOW BEFORE YOU RELY ON THIS IMAGE:
#
#   1. `apps/marketing/` HAS ITS OWN GIT REPOSITORY and is listed in the parent repo's
#      .gitignore ("Has its own git repo + remote (BasicsEngage/split-landing-page)").
#      It is NOT tracked here. A fresh `git clone` of this monorepo therefore does not
#      contain the directory, and this build will fail with "apps/marketing: not found"
#      until someone clones the landing-page repo into that path. That is why the
#      compose service is behind a profile rather than part of the default stack.
#   2. There is genuinely nothing to build. `package.json` declares
#      `"build": "echo static site — nothing to build"`. This is a single-stage image
#      that copies the files and serves them.
#
# WHY node:22-slim FOR A STATIC SITE. It is heavier than nginx:alpine, and that is a
# deliberate trade: one server implementation across every Split image (see
# docker/static-server.mjs) beats saving ~150 MB by adding a second server with its own
# config language, its own proxy semantics and its own path-traversal behaviour to
# review. If image size ever matters more than that, replace all three static images
# together, not just this one.

FROM node:22-bookworm-slim AS runtime

ENV NODE_ENV=production
ENV PORT=4500
ENV HOST=0.0.0.0
ENV SPLIT_STATIC_ROOT=/app/site
ENV SPLIT_SERVICE_NAME=split-marketing
# OFF. This is a multi-page site (index.html, owners.html), not a single-page app:
# an unknown URL must be a real 404, not the homepage served with a 200. The server
# still resolves `/owners` to `owners.html` and `/x/` to `x/index.html`.
ENV SPLIT_SPA_FALLBACK=false
# NOT EMPTY ANY MORE. The site's payment calculator renders `GET /pricing/quote`
# rather than multiplying by a rate constant of its own — it used to advertise a 5%
# fee, amortised, on a page headed "no hidden costs", while the engine charged 7.39%
# collected with the first instalment. Same-origin `/api/v1` keeps the page free of
# CORS and of an absolute host that would have to be rebuilt per environment; this
# proxy is what makes same-origin true. Override at run time to point at a different
# API. If it is unset the calculator hides its figures rather than inventing them.
ENV SPLIT_API_BASE_URL="http://api:3000"

WORKDIR /app

COPY --chown=node:node apps/marketing ./site
COPY --chown=node:node docker/static-server.mjs ./static-server.mjs

# The site's own manifest, deploy notes and packaging files are not web content, and
# serving them would publish internal deployment detail on the public site.
RUN rm -f ./site/package.json ./site/DEPLOY.md ./site/Dockerfile ./site/Dockerfile.dockerignore

USER node

EXPOSE 4500

HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=5 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||4500)+'/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "static-server.mjs"]
