/* =========================================================
   SPLIT — landing page behaviour
   i18n (AR/EN + RTL), nav, FAQ, calculator, reveal, form
   ========================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---------------- Translations ---------------- */
  var I18N = {
    ar: {
      'doc.title': 'سبليت | استأجر الآن، وادفع لاحقاً',
      'meta.desc': 'سبليت منصة عقارية سعودية تتيح لك تقسيم إيجارك السنوي إلى دفعات شهرية ميسّرة، بينما يحصل المالك على إيجار السنة كاملاً مقدماً.',
      'a11y.skip': 'تخطَّ إلى المحتوى',
      'lang.toggle': 'English',
      'sar': 'ريال',
      'cta.getStarted': 'ابدأ الآن',
      'cta.signin': 'تسجيل الدخول',

      'announce.text': 'سبليت يصل إلى السعودية — قسّم إيجارك إلى 12 دفعة شهرية ميسّرة.',
      'announce.cta': 'ابدأ الآن',
      'announce.dismiss': 'إغلاق',

      'op.hero.badge': 'للملاك والوسطاء',
      'op.hero.title': 'احصل على إيجار سنة كاملة… اليوم',
      'op.hero.sub': 'اعرض وحدتك مع سبليت واستلم إيجارك السنوي مقدماً، بينما نتولّى نحن تحصيل الأقساط الشهرية من المستأجر. إشغال أسرع، وتدفّق نقدي مضمون، وبلا متاعب.',
      'op.hero.cta': 'اعرض وحدتك', 'op.hero.cta2': 'كيف يعمل', 'op.hero.photoAlt': 'مبنى سكني',
      'op.stat1.b': '100%', 'op.stat1.s': 'من الإيجار السنوي مقدماً',
      'op.stat2.b': 'أسرع', 'op.stat2.s': 'إشغال لوحداتك',
      'op.stat3.b': 'صفر', 'op.stat3.s': 'متاعب تحصيل شهري',

      'op.ben.kicker': 'لماذا يختار الملّاك سبليت', 'op.ben.title': 'إيجارك مضمون… ومقدماً',
      'op.b1.t': 'إيجار سنة كاملة مقدماً', 'op.b1.b': 'نحوّل لك قيمة الإيجار السنوي دفعة واحدة فور توقيع العقد.',
      'op.b2.t': 'تدفّق نقدي مضمون', 'op.b2.b': 'تحصيل المستأجر مسؤوليتنا، فلا تأخّر ولا مطاردة دفعات.',
      'op.b3.t': 'إشغال أسرع', 'op.b3.b': 'خيار الدفع الشهري يوسّع شريحة المستأجرين ويملأ وحداتك بسرعة.',
      'op.b4.t': 'مستأجرون موثوقون', 'op.b4.b': 'نتحقّق من أهلية كل مستأجر قبل اعتماده.',
      'op.b5.t': 'عقود رقمية سلسة', 'op.b5.b': 'إجراءات وعقود إلكترونية موثّقة بخطوات بسيطة.',
      'op.b6.t': 'أنت محمي', 'op.b6.b': 'حتى لو تأخّر المستأجر، فإيجارك قد وصلك بالفعل.',

      'op.how.kicker': 'كيف يعمل للملاك', 'op.how.title': 'من العرض إلى الدفع، في 4 خطوات',
      'op.s1.t': 'اعرض وحدتك', 'op.s1.b': 'أضف تفاصيل عقارك وقيمة الإيجار المطلوبة.',
      'op.s2.t': 'نطابق ونوثّق المستأجر', 'op.s2.b': 'نجد مستأجراً مؤهّلاً ونتحقّق منه نيابةً عنك.',
      'op.s3.t': 'توقيع العقد', 'op.s3.b': 'نوثّق عقد الإيجار رسمياً بخطوات سهلة.',
      'op.s4.t': 'استلم إيجارك مقدماً', 'op.s4.b': 'نحوّل لك إيجار السنة كاملاً، ونتولّى نحن التحصيل الشهري.',

      'op.form.kicker': 'ابدأ الآن', 'op.form.title': 'اعرض وحدتك مع سبليت',
      'op.form.sub': 'أنشئ حساب المالك عبر بوّابة سبليت، أو سجّل دخولك، وابدأ بعرض وحداتك وإدارتها خلال دقائق.',
      'op.form.name': 'الاسم الكامل', 'op.form.namePh': 'اكتب اسمك',
      'op.form.email': 'البريد الإلكتروني', 'op.form.emailPh': 'name@email.com',
      'op.form.phone': 'رقم الجوال', 'op.form.phonePh': '05X XXX XXXX',
      'op.form.city': 'المدينة', 'op.form.cityPh': 'مثال: الرياض',
      'op.form.units': 'عدد الوحدات', 'op.form.msg': 'تفاصيل إضافية (اختياري)', 'op.form.msgPh': 'أخبرنا المزيد عن عقارك…',
      'op.form.submit': 'أرسل الطلب', 'op.form.success': 'شكراً لك! سيتواصل معك فريق سبليت قريباً.',

      'op.faq.title': 'أسئلة الملّاك الشائعة',
      'op.faq.q1': 'متى أستلم إيجاري؟', 'op.faq.a1': 'تستلم قيمة الإيجار السنوي مقدماً فور توقيع العقد وإتمام الإجراءات.',
      'op.faq.q2': 'هل هناك رسوم على المالك؟', 'op.faq.a2': 'نموذجنا قائم على رسوم خدمة بسيطة وواضحة، ويوضّح لك فريقنا أي تفاصيل قبل الاتفاق.',
      'op.faq.q3': 'ماذا لو تأخّر المستأجر أو تعثّر؟', 'op.faq.a3': 'التحصيل مسؤوليتنا بالكامل؛ إيجارك يصلك مقدماً بصرف النظر عن التزام المستأجر.',
      'op.faq.q4': 'هل تتوافق العقود مع الأنظمة؟', 'op.faq.a4': 'نوثّق العقود إلكترونياً ونعمل على مواءمتها مع الأنظمة العقارية في المملكة.',
      'op.cta.title': 'جاهز لتأجير وحدتك بثقة؟', 'op.cta.body': 'انضمّ إلى ملّاك سبليت واستلم إيجارك مقدماً مع تدفّق نقدي مضمون.',
      'op.title': 'سبليت للملّاك | استلم إيجارك مقدماً',
      'op.start.t': 'جاهز للبدء؟', 'op.start.b': 'أنشئ حساب المالك أو سجّل دخولك للبدء بإدارة وحداتك فوراً.',

      'nav.how': 'كيف يعمل', 'nav.calculator': 'احسب قسطك', 'nav.why': 'لماذا سبليت',
      'nav.owners': 'للملاك', 'nav.about': 'من نحن', 'nav.faq': 'الأسئلة الشائعة', 'nav.contact': 'تواصل معنا',

      'hero.badge': 'استأجر الآن، وادفع لاحقاً',
      'hero.title': 'قسّم إيجارك السنوي إلى دفعات شهرية ميسّرة',
      'hero.sub': 'سبليت منصة عقارية سعودية تتيح لك دفع الإيجار شهرياً، بينما يحصل المالك على إيجار السنة كاملاً مقدماً. لا دفعات كبيرة بعد اليوم — فقط أقساط بسيطة وواضحة.',
      'hero.ctaPrimary': 'ابدأ الآن', 'hero.ctaSecondary': 'كيف يعمل',
      'hero.trust1': 'بدون دفعة كبيرة مقدماً', 'hero.trust2': 'حتى 12 قسطاً شهرياً', 'hero.trust3': 'رسوم واضحة بلا مفاجآت',
      'hero.photoAlt': 'مبنى سكني عصري',
      'hero.card.annual': 'الإيجار السنوي', 'hero.card.with': 'مع سبليت', 'hero.card.monthly': 'قسطك الشهري', 'hero.card.note': '12 دفعة شهرية متساوية',

      'strip.lead': 'مصمّم خصيصاً للسوق السعودي',
      'strip.i1': 'احتياج عقاري حقيقي', 'strip.i2': 'دفعات شهرية ميسّرة', 'strip.i3': 'شفافية كاملة', 'strip.i4': 'للأفراد والشركات',

      'problem.kicker': 'المشكلة',
      'problem.title': 'دفع إيجار سنة كاملة مقدماً أمرٌ مرهق',
      'problem.lead': 'يفرض نظام الإيجار التقليدي دفعات كبيرة مقدماً، ما يشكّل عبئاً على الكثير من الأفراد والعائلات، ويؤدي إلى:',
      'problem.c1.t': 'ضغط مالي', 'problem.c1.b': 'الدفعات الكبيرة دفعة واحدة تستنزف المدّخرات وتحدّ من مرونتك المالية في باقي مصاريف الحياة.',
      'problem.c2.t': 'خيارات سكن محدودة', 'problem.c2.b': 'عدم القدرة على توفير الدفعة المقدمة يحرمك من الوصول إلى السكن الذي تريده فعلاً.',
      'problem.c3.t': 'تعثّر في التدفّق النقدي', 'problem.c3.b': 'دفعة واحدة ضخمة تربك ميزانيتك الشهرية وتؤخّر أهدافك في الادخار والاستثمار.',

      'solution.kicker': 'الحل',
      'solution.title': 'استأجر الآن وادفع لاحقاً مع سبليت',
      'solution.lead': 'نتعاون مع الملّاك ومديري العقارات لنمنحك حلاً عصرياً بديلاً عن النظام التقليدي:',
      'solution.f1.t': 'وزّع دفعات الإيجار', 'solution.f1.b': 'حوّل إيجارك السنوي إلى أقساط شهرية مريحة تناسب دخلك.',
      'solution.f2.t': 'سكن أفضل في متناولك', 'solution.f2.b': 'تجاوز عائق الدفعة الكبيرة المقدمة، ووسّع خياراتك بين عقارات أكثر.',
      'solution.f3.t': 'تحكّم أفضل بميزانيتك', 'solution.f3.b': 'دفعات شهرية ثابتة ومتوقّعة تجعل التخطيط المالي أسهل بكثير.',
      'solution.f4.t': 'تدفّق نقدي أفضل للشركات', 'solution.f4.b': 'قلّل الدفعات الأولية لسكن الموظفين وحسّن دورة التدفّق النقدي لشركتك.',

      'how.kicker': 'كيف يعمل', 'how.title': 'الإيجار ببساطة، في 4 خطوات',
      'how.s1.t': 'قدّم طلبك في دقائق', 'how.s1.b': 'أخبرنا عنك وعن السكن الذي ترغب به — بخطوات بسيطة وسريعة.',
      'how.s2.t': 'احصل على الموافقة', 'how.s2.b': 'تحقّق سريع وشفّاف من الأهلية، مع عرض واضح لقسطك قبل أي التزام.',
      'how.s3.t': 'يُدفع للمالك مقدماً', 'how.s3.b': 'ندفع لمالك العقار إيجار السنة كاملاً، فيطمئن الجميع.',
      'how.s4.t': 'ادفع شهرياً', 'how.s4.b': 'تسدّد لنا على أقساط شهرية ميسّرة طوال مدة العقد.',

      'calc.kicker': 'شفافية مطلقة', 'calc.title': 'اعرف قسطك الشهري فوراً',
      'calc.sub': 'لا تكاليف خفية ولا مفاجآت. حرّك المؤشّر لترى بالضبط ما ستدفعه أولاً وكل شهر بعدها.',
      'calc.p1': 'رسوم خدمة واضحة وشاملة للضريبة', 'calc.p2': 'تعرف الإجمالي قبل أن تبدأ', 'calc.p3': 'دون الحاجة لتحميل أي تطبيق',
      'calc.annual': 'الإيجار السنوي (ريال)', 'calc.months': 'عدد الأقساط', 'calc.monthly': 'قسطك الشهري',
      // Two instalment figures, because the fee is collected with the first one.
      'calc.first': 'دفعتك الأولى', 'calc.then': 'ثم كل شهر',
      'calc.fee': 'تكلفة التقسيط (شاملة الضريبة)', 'calc.total': 'الإجمالي المستحق',
      'calc.offline': 'تعذّر تحميل قائمة الأسعار الآن. جرّب مرة أخرى بعد قليل.',
      'calc.disclaimer': 'قيمة تقديرية فقط وتخضع للأهلية والموافقة النهائية. الرسوم النهائية تُعرض قبل توقيع العقد.',

      'why.kicker': 'لماذا سبليت', 'why.title': 'مصمّمون لهدف واحد: إيجارك',
      'why.c1.t': 'تركيز على الإيجار', 'why.c1.b': 'تخصّصنا في دفعات الإيجار يتيح لنا تقديم منصة مصمّمة بدقة وسهلة الاستخدام.',
      'why.c2.t': 'التزام بالقدرة على التحمّل', 'why.c2.b': 'خطط أقساط ميسّرة ورسوم منخفضة وشفافة، حتى يبقى السكن في متناولك.',
      'why.c3.t': 'نهج تقني متطوّر', 'why.c3.b': 'نوظّف التقنية لتبسيط عملية الدفع بالكامل للمستأجرين والملّاك على حدّ سواء.',

      'market.kicker': 'لمن صُمّم؟', 'market.title': 'يناسب طريقة حياتك',
      'market.c1.t': 'المهنيون العاملون', 'market.c1.b': 'أفراد وعائلات يفضّلون دفعات شهرية يمكن إدارتها لتحسين تدفّقهم النقدي.',
      'market.c2.t': 'القادمون الجدد للمدينة', 'market.c2.b': 'من انتقلوا حديثاً وقد لا تتوفّر لديهم سيولة فورية لدفعة مقدمة كبيرة.',
      'market.c3.t': 'عملاء الشركات', 'market.c3.b': 'شركات تبحث عن حلول سكن مرنة لموظفيها مع تدفّق نقدي أفضل.',

      'owners.kicker': 'للملاك والوسطاء', 'owners.title': 'احصل على إيجار السنة كاملاً، مقدماً',
      'owners.body': 'اعرض عقارك مع سبليت واستلم إيجارك السنوي فوراً، بينما يدفع المستأجر لنا شهرياً. أقل عناءً، إشغال أسرع، وتدفّق نقدي مضمون.',
      'owners.l1': 'إيجار السنة كاملاً مقدماً', 'owners.l2': 'إشغال أسرع لوحداتك', 'owners.l3': 'بلا متاعب التحصيل الشهري', 'owners.l4': 'عقود وإجراءات سلسة',
      'owners.cta': 'اعرض عقارك لدينا', 'owners.imgAlt': 'مبنى عصري',

      'about.kicker': 'من نحن', 'about.title': 'نجعل الإيجار أكثر عدلاً وسهولة',
      'about.body': 'سبليت شركة تقنية عقارية ناشئة مكرّسة لتقديم حلول دفع إيجار مرنة وسهلة المنال للمستأجرين. خدمتنا الأساسية «استأجر الآن، وادفع لاحقاً» تمكّن المستأجرين من تقسيم دفعة الإيجار السنوية إلى أقساط شهرية ميسّرة، لتمنحهم مرونة مالية وراحة بال، ولنبني سوقاً عقارياً أكثر صحّة وشمولاً للمستأجرين والملّاك معاً.',
      'mission.t': 'رسالتنا', 'mission.b': 'تمكين المستأجرين بمرونة مالية وراحة بال عبر حلول دفع مبتكرة وسهلة المنال، وبناء سوق إيجاري أكثر عدلاً وشمولاً يفيد المستأجرين والملّاك على حدّ سواء.',
      'vision.t': 'رؤيتنا', 'vision.b': 'مستقبل يصبح فيه عبء دفعات الإيجار الكبيرة المقدمة من الماضي. نطمح أن نكون المزوّد الرائد لحلول دفع الإيجار المرنة، ونحوّل تجربة الإيجار إلى الأفضل.',

      'faq.kicker': 'الأسئلة الشائعة', 'faq.title': 'إجابات لأهمّ أسئلتك',
      'faq.q1': 'ما هي خدمة «استأجر الآن، وادفع لاحقاً»؟', 'faq.a1': 'هي خدمة تتيح لك دفع إيجارك السنوي على أقساط شهرية بدلاً من دفعة واحدة كبيرة، بينما يحصل المالك على إيجار السنة كاملاً مقدماً.',
      'faq.q2': 'كم تبلغ التكلفة؟', 'faq.a2': 'نحتسب رسوم خدمة بسيطة وواضحة على كل عملية دفع تتم عبر منصتنا. تُعرض الرسوم والإجمالي بالكامل قبل أي التزام، بلا أي تكاليف خفية.',
      'faq.q3': 'من يمكنه التقديم؟', 'faq.a3': 'يمكن التقديم لكل سعودي أو مقيم على رأس عمل بدخل شهري ثابت لا يقل عن 5,000 ريال، وبإيجار سنوي يبدأ من 20,000 ريال. ويظل القبول النهائي خاضعاً لتحقّق سريع من الأهلية.',
      'faq.q4': 'هل أحتاج إلى تطبيق لاستخدام الخدمة؟', 'faq.a4': 'لا. يمكنك معرفة أهليتك وقسطك الشهري والبدء بالكامل عبر الموقع، وسيتوفّر تطبيق الجوال أيضاً لإدارة دفعاتك بسهولة.',
      'faq.q5': 'هل النموذج قائم على الشفافية والتوافق؟', 'faq.a5': 'نلتزم بنموذج قائم على رسوم خدمة واضحة وشفافة، ونعمل على مواءمته مع المتطلبات الشرعية والتنظيمية في المملكة.',
      'faq.q6': 'كيف أدفع كل شهر؟', 'faq.a6': 'عبر وسائل دفع آمنة ومألوفة مثل مدى والبطاقات وApple Pay، مع تذكيرات وإيصالات واضحة لكل دفعة.',

      'cta.title': 'انضمّ إلينا لنغيّر طريقة الإيجار',
      'cta.body': 'تواصل مع سبليت اليوم لتعرف كيف يمكننا مساعدتك على تحقيق أهدافك المالية.',
      'cta.placeholder': 'بريدك الإلكتروني', 'cta.button': 'ابدأ الآن', 'cta.success': 'شكراً لك! سنتواصل معك قريباً.',

      'footer.tagline': 'استأجر الآن، وادفع لاحقاً — مرونة مالية لكل مستأجر في المملكة.',
      'footer.product': 'المنتج', 'footer.company': 'الشركة', 'footer.contact': 'تواصل',
      'footer.rights': '© 2026 سبليت. جميع الحقوق محفوظة.', 'footer.privacy': 'سياسة الخصوصية', 'footer.terms': 'الشروط والأحكام'
    },

    en: {
      'doc.title': 'Split | Rent Now, Pay Later',
      'meta.desc': 'Split is a Saudi PropTech that lets you pay your annual rent in easy monthly installments, while your landlord receives the full year upfront.',
      'a11y.skip': 'Skip to content',
      'lang.toggle': 'العربية',
      'sar': 'SAR',
      'cta.getStarted': 'Get started',
      'cta.signin': 'Sign in',

      'announce.text': 'Split is coming to Saudi Arabia — break your rent into 12 easy monthly payments.',
      'announce.cta': 'Get started',
      'announce.dismiss': 'Dismiss',

      'op.hero.badge': 'For owners & brokers',
      'op.hero.title': "Get a full year's rent — today",
      'op.hero.sub': 'List your unit with Split and receive your annual rent upfront, while we collect the monthly installments from the tenant. Faster occupancy, guaranteed cash flow, zero hassle.',
      'op.hero.cta': 'List your property', 'op.hero.cta2': 'How it works', 'op.hero.photoAlt': 'Residential building',
      'op.stat1.b': '100%', 'op.stat1.s': 'of annual rent, upfront',
      'op.stat2.b': 'Faster', 'op.stat2.s': 'occupancy for your units',
      'op.stat3.b': 'Zero', 'op.stat3.s': 'monthly collection hassle',

      'op.ben.kicker': 'Why owners choose Split', 'op.ben.title': 'Your rent, guaranteed and upfront',
      'op.b1.t': 'Full year upfront', 'op.b1.b': 'We transfer your full annual rent in one payment as soon as the lease is signed.',
      'op.b2.t': 'Guaranteed cash flow', 'op.b2.b': 'Collecting from the tenant is our job — no delays, no chasing payments.',
      'op.b3.t': 'Faster occupancy', 'op.b3.b': 'Monthly payments widen your pool of tenants and fill units faster.',
      'op.b4.t': 'Vetted tenants', 'op.b4.b': "We verify every tenant's eligibility before approval.",
      'op.b5.t': 'Seamless digital contracts', 'op.b5.b': 'Documented e-contracts and procedures in a few simple steps.',
      'op.b6.t': "You're protected", 'op.b6.b': "Even if the tenant is late, you've already been paid.",

      'op.how.kicker': 'How it works for owners', 'op.how.title': 'From listing to payout, in 4 steps',
      'op.s1.t': 'List your unit', 'op.s1.b': 'Add your property details and the rent you want.',
      'op.s2.t': 'We match & vet a tenant', 'op.s2.b': 'We find a qualified tenant and verify them on your behalf.',
      'op.s3.t': 'Sign the lease', 'op.s3.b': 'We document the lease officially in a few easy steps.',
      'op.s4.t': 'Get paid upfront', 'op.s4.b': "We pay you the full year's rent and handle the monthly collection.",

      'op.form.kicker': 'Get started', 'op.form.title': 'List your property with Split',
      'op.form.sub': 'Create your owner account on the Split portal, or sign in, and start listing and managing your units in minutes.',
      'op.form.name': 'Full name', 'op.form.namePh': 'Your name',
      'op.form.email': 'Email address', 'op.form.emailPh': 'name@email.com',
      'op.form.phone': 'Mobile number', 'op.form.phonePh': '05X XXX XXXX',
      'op.form.city': 'City', 'op.form.cityPh': 'e.g. Riyadh',
      'op.form.units': 'Number of units', 'op.form.msg': 'Additional details (optional)', 'op.form.msgPh': 'Tell us more about your property…',
      'op.form.submit': 'Submit request', 'op.form.success': 'Thank you! The Split team will be in touch shortly.',

      'op.faq.title': 'Owner FAQ',
      'op.faq.q1': 'When do I get paid?', 'op.faq.a1': "You receive the full annual rent upfront once the lease is signed and the procedures are complete.",
      'op.faq.q2': 'Are there fees for owners?', 'op.faq.a2': 'Our model is based on a simple, clear service fee; our team explains any details before you commit.',
      'op.faq.q3': 'What if the tenant is late or defaults?', 'op.faq.a3': 'Collection is entirely our responsibility; your rent reaches you upfront regardless of the tenant.',
      'op.faq.q4': 'Are the contracts compliant?', 'op.faq.a4': "We document contracts electronically and align them with the Kingdom's real-estate regulations.",
      'op.cta.title': 'Ready to rent out your unit with confidence?', 'op.cta.body': "Join Split's owners and get your rent upfront with guaranteed cash flow.",
      'op.title': 'Split for Owners | Get your rent upfront',
      'op.start.t': 'Ready to start?', 'op.start.b': 'Create your owner account or sign in to start managing your units right away.',

      'nav.how': 'How it works', 'nav.calculator': 'Calculator', 'nav.why': 'Why Split',
      'nav.owners': 'For owners', 'nav.about': 'About', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',

      'hero.badge': 'Rent Now, Pay Later',
      'hero.title': 'Split your yearly rent into easy monthly payments',
      'hero.sub': 'Split is a Saudi PropTech that lets you pay rent monthly while your landlord receives the full year upfront. No more big lump sums — just simple, predictable payments.',
      'hero.ctaPrimary': 'Get started', 'hero.ctaSecondary': 'How it works',
      'hero.trust1': 'No big upfront payment', 'hero.trust2': 'Up to 12 monthly installments', 'hero.trust3': 'Transparent fees, no surprises',
      'hero.photoAlt': 'Modern residential building',
      'hero.card.annual': 'Annual rent', 'hero.card.with': 'With Split', 'hero.card.monthly': 'Your monthly payment', 'hero.card.note': '12 equal monthly payments',

      'strip.lead': 'Built for Saudi Arabia',
      'strip.i1': 'A real housing need', 'strip.i2': 'Easy monthly payments', 'strip.i3': 'Full transparency', 'strip.i4': 'For individuals & companies',

      'problem.kicker': 'The problem',
      'problem.title': 'Paying a year of rent upfront is hard',
      'problem.lead': 'The traditional rental system often demands large upfront payments — a real burden for many individuals and families, leading to:',
      'problem.c1.t': 'Financial strain', 'problem.c1.b': "Large lump-sum payments deplete savings and limit your flexibility for life's other essentials.",
      'problem.c2.t': 'Limited housing options', 'problem.c2.b': 'Not being able to cover the upfront payment keeps you from the home you actually want.',
      'problem.c3.t': 'Cash-flow pressure', 'problem.c3.b': 'One big payment disrupts your monthly budget and delays your saving and investing goals.',

      'solution.kicker': 'The solution',
      'solution.title': 'Rent Now, Pay Later with Split',
      'solution.lead': 'We partner with property owners and managers to give you a modern alternative to the old system:',
      'solution.f1.t': 'Spread out rent payments', 'solution.f1.b': 'Turn your annual rent into comfortable monthly installments that fit your income.',
      'solution.f2.t': 'Access better housing', 'solution.f2.b': 'Overcome the barrier of a large upfront payment and widen your choice of homes.',
      'solution.f3.t': 'Improve your budgeting', 'solution.f3.b': 'Fixed, predictable monthly payments make financial planning far easier.',
      'solution.f4.t': 'Better cash flow for companies', 'solution.f4.b': "Cut the upfront cost of employee housing and improve your company's cash-flow cycle.",

      'how.kicker': 'How it works', 'how.title': 'Renting made simple, in 4 steps',
      'how.s1.t': 'Apply in minutes', 'how.s1.b': 'Tell us about you and the home you want — quick and simple.',
      'how.s2.t': 'Get approved', 'how.s2.b': 'A fast, transparent eligibility check, with your installment shown before any commitment.',
      'how.s3.t': 'Owner paid upfront', 'how.s3.b': "We pay the property owner the full year's rent, so everyone's at ease.",
      'how.s4.t': 'Pay monthly', 'how.s4.b': 'Repay us in easy monthly installments throughout your lease.',

      'calc.kicker': 'Transparent by design', 'calc.title': 'See your monthly payment instantly',
      'calc.sub': "No hidden costs, no surprises. Move the slider to see exactly what you pay first, and every month after that.",
      'calc.p1': 'Clear service fee, VAT included', 'calc.p2': 'Know the total before you start', 'calc.p3': 'No app download required',
      'calc.annual': 'Annual rent (SAR)', 'calc.months': 'Number of installments', 'calc.monthly': 'Your monthly payment',
      'calc.first': 'Your first payment', 'calc.then': 'Then every month',
      'calc.fee': 'Cost of paying monthly (incl. VAT)', 'calc.total': 'Total payable',
      'calc.offline': 'The rate card could not be loaded just now. Please try again shortly.',
      'calc.disclaimer': 'Indicative only and subject to eligibility and final approval. Final fees are shown before you sign.',

      'why.kicker': 'Why Split', 'why.title': 'Built around one thing: your rent',
      'why.c1.t': 'Focus on rent', 'why.c1.b': 'Specializing in rent payments lets us build a precise, genuinely easy-to-use platform.',
      'why.c2.t': 'Commitment to affordability', 'why.c2.b': 'Easy installment plans with low, transparent fees, so housing stays within reach.',
      'why.c3.t': 'Technology-driven', 'why.c3.b': 'We use technology to streamline the entire payment process for tenants and owners alike.',

      'market.kicker': "Who it's for", 'market.title': 'Made for the way you live',
      'market.c1.t': 'Working professionals', 'market.c1.b': 'Individuals and families who prefer manageable monthly payments to optimize cash flow.',
      'market.c2.t': 'Newcomers to the city', 'market.c2.b': "People who've just moved and may not have immediate funds for a large upfront payment.",
      'market.c3.t': 'Corporate clients', 'market.c3.b': 'Companies seeking flexible housing solutions for employees with better cash flow.',

      'owners.kicker': 'For owners & brokers', 'owners.title': "Get the full year's rent, upfront",
      'owners.body': 'List with Split and receive your annual rent immediately, while your tenant pays us monthly. Less hassle, faster occupancy, guaranteed cash flow.',
      'owners.l1': 'Full annual rent upfront', 'owners.l2': 'Faster occupancy for your units', 'owners.l3': 'No monthly collection headaches', 'owners.l4': 'Smooth contracts and procedures',
      'owners.cta': 'List your property with us', 'owners.imgAlt': 'Modern building',

      'about.kicker': 'Who we are', 'about.title': "We're making renting fairer and simpler",
      'about.body': 'Split is a PropTech startup dedicated to flexible, accessible rent-payment solutions for tenants. Our core service, “Rent Now, Pay Later,” empowers renters to break their annual rent into manageable monthly installments — offering financial flexibility and peace of mind, and building a healthier, more inclusive rental market for tenants and owners alike.',
      'mission.t': 'Our mission', 'mission.b': 'To empower renters with financial flexibility and peace of mind through accessible, innovative rent-payment solutions, and to create a fairer, more inclusive rental market that benefits tenants and owners alike.',
      'vision.t': 'Our vision', 'vision.b': 'A future where the stress of large upfront rent payments is a thing of the past. We aim to be the leading provider of flexible rent-payment solutions, transforming the renting experience for the better.',

      'faq.kicker': 'FAQ', 'faq.title': 'Questions, answered',
      'faq.q1': 'What is “Rent Now, Pay Later”?', 'faq.a1': "It lets you pay your annual rent in monthly installments instead of one large lump sum, while the owner receives the full year's rent upfront.",
      'faq.q2': 'How much does it cost?', 'faq.a2': 'We charge a simple, clear service fee on each payment made through our platform. The fee and total are shown in full before any commitment — with no hidden costs.',
      'faq.q3': 'Who can apply?', 'faq.a3': "You can apply if you're a Saudi national or resident, employed with a steady monthly income of at least SAR 5,000, renting a home with annual rent starting from SAR 20,000. Final approval is subject to a quick eligibility check.",
      'faq.q4': 'Do I need an app to use it?', 'faq.a4': 'No. You can check eligibility, see your monthly payment, and get started entirely on the web. A mobile app will also be available to manage your payments easily.',
      'faq.q5': 'Is the model transparent and compliant?', 'faq.a5': "We're committed to a clear, transparent fee-based model and are aligning it with Sharia and regulatory requirements in the Kingdom.",
      'faq.q6': 'How do I pay each month?', 'faq.a6': 'Through secure, familiar methods like mada, cards, and Apple Pay, with clear reminders and receipts for every payment.',

      'cta.title': 'Join us in revolutionizing the way people rent',
      'cta.body': 'Contact Split today to learn how we can help you reach your financial goals.',
      'cta.placeholder': 'Your email address', 'cta.button': 'Get started', 'cta.success': "Thank you! We'll be in touch soon.",

      'footer.tagline': 'Rent Now, Pay Later — financial flexibility for every tenant in the Kingdom.',
      'footer.product': 'Product', 'footer.company': 'Company', 'footer.contact': 'Contact',
      'footer.rights': '© 2026 Split. All rights reserved.', 'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms & Conditions'
    }
  };

  /* ---------------- i18n apply ---------------- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ar';
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var val = dict[key];
      if (val == null) continue;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    }
    var tkey = document.documentElement.getAttribute('data-title-key') || 'doc.title';
    if (dict[tkey]) document.title = dict[tkey];
    try { localStorage.setItem('split-lang', lang); } catch (e) {}
    updateCalc(); // re-localize numbers/units if needed
  }

  function currentLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'ar';
  }
  function toggleLang() {
    applyLang(currentLang() === 'ar' ? 'en' : 'ar');
  }

  /* ---------------- Calculator ---------------- */
  /*
   * THE PRICE COMES FROM THE ENGINE, NOT FROM A CONSTANT IN THIS FILE.
   *
   * This block used to be:
   *
   *     var FEE_RATE = 0.05;
   *     var fee = annual * FEE_RATE;
   *     var monthly = (annual + fee) / months;
   *
   * Three things were wrong with it, all on the section headed "no hidden
   * costs". The rate was 5% when the engine charges 7.39%. It ignored VAT and
   * the Ejar registration fee, so the "total payable" was short. And it
   * AMORTISED a fee Split collects entirely with instalment 1 — on a 60,000 SAR
   * rent it advertised 5,250 a month against a real first payment of 10,388.
   *
   * Everything below now renders `GET /pricing/quote`, the same endpoint the
   * product's own calculator uses, so the marketing page and the app cannot
   * quote different prices. When the endpoint cannot be reached the figures are
   * HIDDEN and a message takes their place: a stale number that looks live is
   * how the old ones survived this long.
   *
   * The API base is read from `<meta name="split-api-base">` so a static deploy
   * can point at whichever environment serves it, defaulting to same-origin.
   */
  var API_BASE = (function () {
    var meta = document.querySelector('meta[name="split-api-base"]');
    var base = (meta && meta.getAttribute('content')) || '/api/v1';
    return base.replace(/\/+$/, '');
  })();

  var rentRange = document.getElementById('rentRange');
  var monthsChoice = document.getElementById('monthsChoice');
  var rentOut = document.getElementById('rentOut');
  var monthsOut = document.getElementById('monthsOut');
  var resFirst = document.getElementById('resFirst');
  var resMonthly = document.getElementById('resMonthly');
  var resFee = document.getElementById('resFee');
  var resTotal = document.getElementById('resTotal');
  var calcOffline = document.getElementById('calcOffline');
  var calcResult = document.querySelector('.calc-result');

  var selectedMonths = 12;
  var quoteSeq = 0;

  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
  function setLeadNum(el, val) { if (el && el.firstChild) el.firstChild.nodeValue = val + ' '; }

  /** Show the figures, or the "could not load" line — never both. */
  function setFiguresVisible(visible) {
    if (calcOffline) calcOffline.hidden = visible;
    if (!calcResult) return;
    var blocks = calcResult.querySelectorAll('.calc-monthly, .calc-break');
    for (var i = 0; i < blocks.length; i++) blocks[i].hidden = !visible;
  }

  /** Build the term buttons from whatever the rate card offers. */
  function renderTerms(terms) {
    if (!monthsChoice) return;
    monthsChoice.innerHTML = '';
    terms.forEach(function (months) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'calc-term';
      btn.setAttribute('role', 'radio');
      btn.textContent = months;
      btn.setAttribute('aria-checked', months === selectedMonths ? 'true' : 'false');
      btn.addEventListener('click', function () {
        selectedMonths = months;
        var all = monthsChoice.querySelectorAll('.calc-term');
        for (var i = 0; i < all.length; i++) {
          all[i].setAttribute('aria-checked', all[i] === btn ? 'true' : 'false');
        }
        if (monthsOut) monthsOut.textContent = months;
        updateCalc();
      });
      monthsChoice.appendChild(btn);
    });
    if (monthsOut) monthsOut.textContent = selectedMonths;
  }

  function updateCalc() {
    if (!rentRange) return;
    var annual = +rentRange.value;
    if (rentOut) rentOut.textContent = fmt(annual);

    // Sequence guard: the slider fires far faster than the round trip, and an
    // older quote landing last would paint the previous rent's numbers.
    var seq = ++quoteSeq;
    fetch(API_BASE + '/pricing/quote?annualRent=' + annual)
      .then(function (r) { if (!r.ok) throw new Error('quote ' + r.status); return r.json(); })
      .then(function (quote) {
        if (seq !== quoteSeq) return;
        var terms = quote.terms || [];
        var term = null;
        for (var i = 0; i < terms.length; i++) {
          if (terms[i].months === selectedMonths) { term = terms[i]; break; }
        }
        if (!term) term = terms[terms.length - 1];
        if (!term) throw new Error('no terms');
        setFiguresVisible(true);
        if (resFirst) resFirst.textContent = fmt(term.firstInstalment);
        setLeadNum(resMonthly, fmt(term.subsequentInstalment));
        setLeadNum(resFee, fmt(term.costOfSplitting));
        setLeadNum(resTotal, fmt(term.totalPayable));
      })
      .catch(function () {
        if (seq !== quoteSeq) return;
        setFiguresVisible(false);
      });
  }

  if (rentRange) {
    rentRange.addEventListener('input', updateCalc);
    // The band and the offered terms are the engine's, not this file's.
    fetch(API_BASE + '/pricing')
      .then(function (r) { if (!r.ok) throw new Error('card ' + r.status); return r.json(); })
      .then(function (card) {
        var terms = (card.offeredTerms || []).slice().sort(function (a, b) { return a - b; });
        if (terms.length) {
          if (terms.indexOf(selectedMonths) === -1) selectedMonths = terms[terms.length - 1];
          renderTerms(terms);
        }
        if (card.minAnnualRent) {
          rentRange.min = card.minAnnualRent;
          var lo = document.querySelector('.range-ends span:first-child');
          if (lo) lo.textContent = fmt(card.minAnnualRent);
        }
        if (card.maxAnnualRent) {
          rentRange.max = card.maxAnnualRent;
          var hi = document.querySelector('.range-ends span:last-child');
          if (hi) hi.textContent = fmt(card.maxAnnualRent);
        }
        if (+rentRange.value < +rentRange.min) rentRange.value = rentRange.min;
        if (+rentRange.value > +rentRange.max) rentRange.value = rentRange.max;
        updateCalc();
      })
      .catch(function () {
        renderTerms([6, 12]);
        updateCalc();
      });
  }

  /* ---------------- Header shadow on scroll ---------------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav ---------------- */
  var burger = document.getElementById('navBurger');
  var nav = document.getElementById('mainNav');
  function closeNav() {
    document.body.classList.remove('nav-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && nav && header) {
        // anchor the panel to the bottom of the (sticky) header, accounting for the announcement bar
        nav.style.top = Math.max(0, header.getBoundingClientRect().bottom) + 'px';
      }
    });
  }
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) closeNav();
  });

  /* ---------------- Language toggle buttons ---------------- */
  ['langToggle', 'langToggleMobile', 'langToggleFooter'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleLang);
  });

  /* ---------------- FAQ single-open accordion ---------------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll('#faqList details'));
  faqItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqItems.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---------------- Lead forms (Netlify Forms via AJAX) ---------------- */
  function encode(d) {
    return Object.keys(d).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(d[k]);
    }).join('&');
  }
  Array.prototype.slice.call(document.querySelectorAll('form[data-lead]')).forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.focus(); return; }
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      var done = function () {
        var sid = form.getAttribute('data-success');
        var s = sid && document.getElementById(sid);
        form.style.display = 'none';
        if (s) s.hidden = false;
      };
      // Netlify Forms endpoint (works on the deployed site; degrades gracefully locally)
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode(data) })
        .then(done, done);
    });
  });

  /* ---------------- Announcement bar ---------------- */
  var announceClose = document.getElementById('announceClose');
  try { if (localStorage.getItem('split-announce') === 'closed') document.body.classList.add('announce-closed'); } catch (e) {}
  if (announceClose) {
    announceClose.addEventListener('click', function () {
      document.body.classList.add('announce-closed');
      try { localStorage.setItem('split-announce', 'closed'); } catch (e) {}
    });
  }

  /* ---------------- Scroll-spy (in-page anchors only) ---------------- */
  var spyMap = {};
  Array.prototype.slice.call(document.querySelectorAll('.main-nav > a[href^="#"]')).forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = id && document.getElementById(id);
    if (sec) spyMap[id] = a;
  });
  var spyIds = Object.keys(spyMap);
  if (spyIds.length && 'IntersectionObserver' in window) {
    var spyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          spyIds.forEach(function (id) { spyMap[id].classList.remove('active'); });
          if (spyMap[en.target.id]) spyMap[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    spyIds.forEach(function (id) { spyObs.observe(document.getElementById(id)); });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll(
    '.section-head, .card, .feature, .step, .persona, .mv-card, .calc-card, .calc-intro, .hero-copy, .hero-visual, .owners-copy, .owners-visual, .faq-item'
  );
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el, idx) {
      el.classList.add('reveal');
      el.style.transitionDelay = (idx % 4) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* ---------------- Init ---------------- */
  var saved = null, urlLang = null;
  try { saved = localStorage.getItem('split-lang'); } catch (e) {}
  try { urlLang = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  applyLang(urlLang || saved || 'ar');
})();
