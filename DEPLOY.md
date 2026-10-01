# Deploying the Split landing site to Netlify

The site is **plain static files** (no build step). There are two easy ways to host it.

## Option A — Drag & drop (fastest, no tools)
1. Go to https://app.netlify.com/drop
2. Drag the **`site`** folder (the one containing `index.html`) onto the page.
3. Netlify gives you a live URL instantly. Done.

> Note: with drag & drop, the `netlify.toml` at the project root isn't used, but
> everything still works. Forms are auto-detected (see below).

## Option B — Netlify CLI (repeatable deploys)
From the project root (`E:\split`):

```bash
npm install -g netlify-cli      # once
netlify login                   # opens the browser to authorize (you must run this)
netlify deploy --dir=site       # creates a draft preview URL
netlify deploy --dir=site --prod   # publishes to production
```

`netlify.toml` (at the project root) already sets `publish = "site"`, security
headers, and asset caching.

## Option C — Connect a Git repo (auto-deploy on push)
1. Push this project to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: *(leave empty)* · Publish directory: **`site`** (from `netlify.toml`).
4. Every push to the main branch auto-deploys.

## Call-to-action buttons (no on-page forms)
The "Get started" and "List your property" / "Sign in" buttons link directly to the
product sign-up / sign-in entry points — there are no lead forms to wire up:
- Customer CTAs → **https://app.split.sa**
- Owner / broker CTAs → **https://owners.split.sa**

Set up those two subdomains (the customer app and the owner portal) so the buttons
resolve. Until they exist, the buttons will 404.

## Before you go live — replace placeholders
The brand deck didn't include final contact details, so these are placeholders:
- Email: `hello@split.sa`  ·  Phone: `+966 50 000 0000`
- Social links (X / LinkedIn / Instagram) point to `#`
- Privacy / Terms links point to `#`

Search the project for these strings and update them, plus the announcement-bar
copy in `assets/js/app.js` (`announce.text`).
