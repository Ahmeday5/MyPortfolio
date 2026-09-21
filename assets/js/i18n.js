/**
 * Simple, dependency-free i18n for the portfolio site.
 *
 * Elements carry `data-i18n="key"` for text content, or
 * `data-i18n-attr="attr1:key1,attr2:key2"` for attributes (e.g. placeholder,
 * title, aria-label) that need translation too.
 *
 * PortfolioI18n.apply(lang) walks the DOM once and swaps text/attributes
 * from the dictionary below. Called on load (after DOMContentLoaded) and
 * again whenever the language toggle is clicked.
 */
(function () {
  "use strict";

  var dict = {
    en: {
      // Nav
      "nav.home": "Home",
      "nav.about": "About",
      "nav.resume": "Resume",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "nav.hireme": "Hire Me",

      "logo.title": "Front-End Developer",

      // Theme / language toggle buttons
      "toggle.theme.toLight": "Switch to light theme",
      "toggle.theme.toDark": "Switch to dark theme",
      "toggle.lang": "AR",

      // Hero
      "hero.badge": "Available for Work",
      "hero.greeting": "Hello, I'm",
      "hero.name": "Ahmed Ali",
      "hero.typed": "Front-End Developer (Angular), Junior Full-Stack Developer, WordPress & WooCommerce Developer, REST API Integration",
      "hero.description": "Front-end focused developer with close to one year of production experience. I build Angular admin dashboards, integrate REST APIs, and develop WordPress–ERP integrations with clean, scalable code.",
      "hero.viewProjects": "View Projects",
      "hero.downloadCV": "Download CV",
      "hero.scroll": "Scroll",
      "hero.card.angular": "Angular",
      "hero.card.laravel": "Laravel",
      "hero.card.wordpress": "WordPress",
      "hero.scrollAria": "Scroll to about section",

      // About
      "about.subtitle": "About Me",
      "about.title": "About Me",
      "about.intro": "Front-end developer with hands-on experience building Angular dashboards, integrating REST APIs, and customizing WordPress solutions. I focus on clean code, performance, and creating smooth user experiences that solve real business problems.",
      "about.profile.name": "Ahmed AYF",
      "about.profile.role": "Front-End Developer (Angular)",
      "about.stat.projects": "Projects",
      "about.stat.years": "Years",
      "about.stat.stacks": "Tech Stacks",
      "about.contact": "Contact",
      "about.tag": "About Me",
      "about.heading": "Building Fast & Clean Web Apps",
      "about.bio1": "I’m a Front-End Developer specialized in Angular. I build responsive, high-performance web applications with clean UI and smooth user experience.",
      "about.bio2": "I also have experience integrating APIs and working with Laravel & WordPress when needed.",
      "about.detail.experience": "Experience",
      "about.detail.experienceValue": "1+ Years",
      "about.detail.degree": "Degree",
      "about.detail.degreeValue": "Bachelor of Computer & Information",
      "about.detail.based": "Based In",
      "about.detail.basedValue": "Egypt",
      "about.detail.email": "Email",
      "about.detail.phone": "Phone",
      "about.detail.availability": "Availability",
      "about.detail.availabilityValue": "Available for Full-Time / Part-Time / Remote",
      "about.skillsTag": "Core Skills",
      "about.skillsHeading": "Technical Proficiency",
      "about.skill.angular": "Angular",
      "about.skill.typescript": "TypeScript",
      "about.skill.htmlcss": "HTML / CSS / Bootstrap",
      "about.skill.javascript": "JavaScript",
      "about.skill.php": "PHP / Laravel / REST APIs",
      "about.skill.mysql": "MySQL",
      "about.skill.wordpress": "WordPress",

      // Resume
      "resume.subtitle": "Resume",
      "resume.title": "Resume",
      "resume.intro": "Front-end focused developer with close to one year of production experience building Angular admin dashboards, integrating REST APIs, and developing WordPress & WooCommerce integrations with external ERP systems.",

      "resume.exp.badge": "Experience",
      "resume.exp.heading": "Professional Journey",
      "resume.exp.intro": "Focused on building data-heavy dashboards, improving performance, and delivering real-world features used daily by real users.",

      "resume.exp1.current": "Current",
      "resume.exp1.title": "Front-End Developer (Angular)",
      "resume.exp1.company": "TheOne System",
      "resume.exp1.duration": "Feb 2025 - Present",
      "resume.exp1.description": "Built and maintained Angular admin dashboards, integrated APIs with role-based access, and delivered real-time features using Firebase across multiple production applications.",
      "resume.exp1.tag.angular": "Angular",
      "resume.exp1.tag.rest": "REST APIs",
      "resume.exp1.tag.firebase": "Firebase",
      "resume.exp1.tag.rbac": "RBAC",
      "resume.exp1.tag.performance": "Performance",

      "resume.exp2.title": "Key Achievements",
      "resume.exp2.company": "Highlights",
      "resume.exp2.duration": "2025",
      "resume.exp2.description": "• Resolved complex Angular frontend bugs that improved page load speed by 25% <br>• Coordinated feature delivery across 3 web applications <br>• Integrated REST APIs and role-based dashboards for 200+ users <br>• Implemented real-time notifications using Firebase for medical consultation workflows",

      "resume.exp3.title": "Junior Full-Stack (Side Project)",
      "resume.exp3.company": "Laravel Internal System",
      "resume.exp3.duration": "2025",
      "resume.exp3.description": "Engineered a Laravel-based management system with authentication, role-based access control, and database-driven workflows.",
      "resume.exp3.tag.laravel": "Laravel",
      "resume.exp3.tag.mysql": "MySQL",
      "resume.exp3.tag.auth": "Authentication",
      "resume.exp3.tag.crud": "CRUD",

      "resume.edu.badge": "Education",
      "resume.edu.heading": "Academic Background",
      "resume.edu.intro": "Strong computer science foundation with hands-on experience building real systems and production-ready dashboards.",

      "resume.edu1.years": "Aug 2019 - May 2023",
      "resume.edu1.level": "Bachelor",
      "resume.edu1.title": "Bachelor of Computers and Information (Computer Science)",
      "resume.edu1.institution": "Al-Shorouk Academy",
      "resume.edu1.description": "GPA: 70% (Good). Focused on software development fundamentals, databases, and practical programming.",
      "resume.edu1.achievement": "Graduated with Good grade",

      "resume.edu2.years": "2024 - 2025",
      "resume.edu2.level": "Certificates",
      "resume.edu2.title": "Courses & Learning",
      "resume.edu2.cert1.name": "Angular & Front-End Development",
      "resume.edu2.cert1.year": "2025",
      "resume.edu2.cert2.name": "WordPress & WooCommerce Customization",
      "resume.edu2.cert2.year": "2024",
      "resume.edu2.cert3.name": "Laravel & REST API Integration",
      "resume.edu2.cert3.year": "2024",

      // Services
      "services.subtitle": "Services",
      "services.title": "Services",
      "services.intro": "I build fast, responsive web applications and dashboards using Angular, and I develop WordPress solutions integrated with external APIs and ERP systems.",
      "services.contact": "Contact",

      "services.s1.title": "Angular Web Apps",
      "services.s1.desc": "Modern SPA applications with clean UI, reusable components, and scalable architecture.",
      "services.s2.featured": "Featured",
      "services.s2.title": "Admin Dashboards",
      "services.s2.desc": "Data-heavy dashboards with role-based access, tables, filters, and real-time updates.",
      "services.s3.title": "API Integration",
      "services.s3.desc": "Integrate REST APIs with secure authentication and clean error handling.",
      "services.s4.title": "WordPress Development",
      "services.s4.desc": "Custom pages with Elementor, performance optimization, and clean responsive design.",
      "services.s5.title": "WooCommerce Customization",
      "services.s5.desc": "Customize shop pages, categories, filters, and product layouts based on business needs.",
      "services.s6.title": "ERP Integration",
      "services.s6.desc": "Sync products & categories from external ERP APIs with secure and automated updates.",
      "services.s7.title": "Laravel Back-End",
      "services.s7.desc": "Build secure back-end systems with authentication, CRUD, and database design.",
      "services.s8.title": "Performance Optimization",
      "services.s8.desc": "Improve website speed, fix bottlenecks, and optimize UX for better conversions.",

      // Portfolio
      "portfolio.subtitle": "Portfolio",
      "portfolio.title": "Portfolio",
      "portfolio.intro": "A selection of my best work in Angular, Laravel, WordPress, and API-based dashboards. Screenshots are used for confidential projects.",

      "portfolio.filter.all": "All",
      "portfolio.filter.dashboards": "Dashboards",
      "portfolio.filter.ecommerce": "WooCommerce",
      "portfolio.filter.wordpress": "WordPress",
      "portfolio.filter.laravel": "Laravel / PHP",
      "portfolio.filter.frontend": "Frontend",
      "portfolio.filter.system": "System",

      "portfolio.cat.dashboards": "Dashboards",
      "portfolio.cat.ecommerce": "WooCommerce",
      "portfolio.cat.wordpress": "WordPress",
      "portfolio.cat.laravel": "Laravel / PHP",
      "portfolio.cat.frontend": "Frontend",
      "portfolio.cat.system": "System",

      "portfolio.p1.title": "Order Dashboard",
      "portfolio.p2.title": "WooCommerce + External API Products",
      "portfolio.p3.title": "Plan Interior",
      "portfolio.p4.title": "Medical Consultation Platform (sheffa)",
      "portfolio.p5.title": "Hekma Dashboard",
      "portfolio.p6.title": "Bayya Supplier Dashboard",
      "portfolio.p7.title": "Rehana",
      "portfolio.p8.title": "law-office System",
      "portfolio.p9.title": "WordPress Website (Elementor)",
      "portfolio.p10.title": "Responsive Landing Page",
      "portfolio.p11.title": "CRM System",
      "portfolio.p12.title": "Installment System",

      // Contact
      "contact.subtitle": "Contact",
      "contact.title": "Contact",
      "contact.intro": "If you have an opportunity or a project in mind, feel free to reach out. I’ll get back to you as soon as possible.",
      "contact.address.title": "Address",
      "contact.address.value": "Cairo, Egypt",
      "contact.call.title": "Call Me",
      "contact.email.title": "Email Me",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.loading": "Loading",
      "contact.form.sent": "Your message has been sent. Thank you!",
      "contact.form.send": "Send Message",

      // Footer
      "footer.copyright": "Copyright",
      "footer.name": "Ahmed",
      "footer.rights": "All Rights Reserved",
      "footer.designedBy": "Designed by"
    },

    ar: {
      // Nav
      "nav.home": "الرئيسية",
      "nav.about": "نبذة عني",
      "nav.resume": "السيرة الذاتية",
      "nav.services": "الخدمات",
      "nav.portfolio": "الأعمال",
      "nav.contact": "تواصل",
      "nav.hireme": "وظفني",

      "logo.title": "مطور واجهات أمامية",

      "toggle.theme.toLight": "التبديل إلى الوضع الفاتح",
      "toggle.theme.toDark": "التبديل إلى الوضع الداكن",
      "toggle.lang": "EN",

      // Hero
      "hero.badge": "متاح للعمل",
      "hero.greeting": "مرحباً، أنا",
      "hero.name": "أحمد علي",
      "hero.typed": "مطور واجهات أمامية (Angular), مطور Full-Stack مبتدئ, مطور ووردبريس و WooCommerce, دمج REST API",
      "hero.description": "مطور واجهات أمامية بخبرة عملية تقارب العام في بيئة إنتاجية. أقوم ببناء لوحات تحكم Angular، ودمج REST APIs، وتطوير تكاملات ووردبريس مع أنظمة ERP بأكواد نظيفة وقابلة للتوسع.",
      "hero.viewProjects": "عرض المشاريع",
      "hero.downloadCV": "تحميل السيرة الذاتية",
      "hero.scroll": "مرر للأسفل",
      "hero.card.angular": "Angular",
      "hero.card.laravel": "Laravel",
      "hero.card.wordpress": "ووردبريس",
      "hero.scrollAria": "الانتقال إلى قسم نبذة عني",

      // About
      "about.subtitle": "نبذة عني",
      "about.title": "نبذة عني",
      "about.intro": "مطور واجهات أمامية بخبرة عملية في بناء لوحات تحكم Angular، ودمج REST APIs، وتخصيص حلول ووردبريس. أركز على الأكواد النظيفة والأداء العالي وخلق تجارب استخدام سلسة تحل مشاكل حقيقية للأعمال.",
      "about.profile.name": "أحمد علي",
      "about.profile.role": "مطور واجهات أمامية (Angular)",
      "about.stat.projects": "مشروع",
      "about.stat.years": "سنوات خبرة",
      "about.stat.stacks": "تقنيات",
      "about.contact": "تواصل",
      "about.tag": "نبذة عني",
      "about.heading": "بناء تطبيقات ويب سريعة ونظيفة",
      "about.bio1": "أنا مطور واجهات أمامية متخصص في Angular. أبني تطبيقات ويب متجاوبة وعالية الأداء بواجهة نظيفة وتجربة استخدام سلسة.",
      "about.bio2": "لدي أيضاً خبرة في دمج الـ APIs والعمل مع Laravel وووردبريس عند الحاجة.",
      "about.detail.experience": "الخبرة",
      "about.detail.experienceValue": "أكثر من سنة",
      "about.detail.degree": "المؤهل",
      "about.detail.degreeValue": "بكالوريوس حاسبات ومعلومات",
      "about.detail.based": "المقر",
      "about.detail.basedValue": "مصر",
      "about.detail.email": "البريد الإلكتروني",
      "about.detail.phone": "الهاتف",
      "about.detail.availability": "التوفر",
      "about.detail.availabilityValue": "متاح للعمل بدوام كامل / جزئي / عن بُعد",
      "about.skillsTag": "المهارات الأساسية",
      "about.skillsHeading": "الكفاءة التقنية",
      "about.skill.angular": "Angular",
      "about.skill.typescript": "TypeScript",
      "about.skill.htmlcss": "HTML / CSS / Bootstrap",
      "about.skill.javascript": "JavaScript",
      "about.skill.php": "PHP / Laravel / REST APIs",
      "about.skill.mysql": "MySQL",
      "about.skill.wordpress": "ووردبريس",

      // Resume
      "resume.subtitle": "السيرة الذاتية",
      "resume.title": "السيرة الذاتية",
      "resume.intro": "مطور واجهات أمامية بخبرة عملية تقارب العام في بناء لوحات تحكم Angular، ودمج REST APIs، وتطوير تكاملات ووردبريس و WooCommerce مع أنظمة ERP خارجية.",

      "resume.exp.badge": "الخبرة العملية",
      "resume.exp.heading": "المسار المهني",
      "resume.exp.intro": "التركيز على بناء لوحات تحكم غنية بالبيانات، وتحسين الأداء، وتقديم ميزات فعلية يستخدمها مستخدمون حقيقيون يومياً.",

      "resume.exp1.current": "حالياً",
      "resume.exp1.title": "مطور واجهات أمامية (Angular)",
      "resume.exp1.company": "TheOne System",
      "resume.exp1.duration": "فبراير 2025 - حتى الآن",
      "resume.exp1.description": "بناء وصيانة لوحات تحكم Angular، ودمج APIs مع صلاحيات مبنية على الأدوار، وتقديم ميزات لحظية باستخدام Firebase عبر عدة تطبيقات إنتاجية.",
      "resume.exp1.tag.angular": "Angular",
      "resume.exp1.tag.rest": "REST APIs",
      "resume.exp1.tag.firebase": "Firebase",
      "resume.exp1.tag.rbac": "صلاحيات الأدوار",
      "resume.exp1.tag.performance": "الأداء",

      "resume.exp2.title": "أبرز الإنجازات",
      "resume.exp2.company": "أبرز النقاط",
      "resume.exp2.duration": "2025",
      "resume.exp2.description": "• حل مشاكل معقدة في واجهة Angular أدت لتحسين سرعة تحميل الصفحة بنسبة 25% <br>• تنسيق تسليم الميزات عبر 3 تطبيقات ويب <br>• دمج REST APIs ولوحات تحكم مبنية على الأدوار لأكثر من 200 مستخدم <br>• تنفيذ إشعارات لحظية باستخدام Firebase لمسارات الاستشارات الطبية",

      "resume.exp3.title": "مطور Full-Stack مبتدئ (مشروع جانبي)",
      "resume.exp3.company": "نظام Laravel داخلي",
      "resume.exp3.duration": "2025",
      "resume.exp3.description": "بناء نظام إدارة باستخدام Laravel يتضمن المصادقة، والتحكم بالصلاحيات حسب الدور، وسير عمل مبني على قاعدة البيانات.",
      "resume.exp3.tag.laravel": "Laravel",
      "resume.exp3.tag.mysql": "MySQL",
      "resume.exp3.tag.auth": "المصادقة",
      "resume.exp3.tag.crud": "عمليات CRUD",

      "resume.edu.badge": "التعليم",
      "resume.edu.heading": "الخلفية الأكاديمية",
      "resume.edu.intro": "أساس قوي في علوم الحاسب مع خبرة عملية في بناء أنظمة حقيقية ولوحات تحكم جاهزة للإنتاج.",

      "resume.edu1.years": "أغسطس 2019 - مايو 2023",
      "resume.edu1.level": "بكالوريوس",
      "resume.edu1.title": "بكالوريوس حاسبات ومعلومات (علوم حاسب)",
      "resume.edu1.institution": "أكاديمية الشروق",
      "resume.edu1.description": "المعدل التراكمي: 70% (جيد). التركيز على أساسيات تطوير البرمجيات وقواعد البيانات والبرمجة العملية.",
      "resume.edu1.achievement": "تخرج بتقدير جيد",

      "resume.edu2.years": "2024 - 2025",
      "resume.edu2.level": "شهادات",
      "resume.edu2.title": "الدورات والتعلم",
      "resume.edu2.cert1.name": "Angular وتطوير الواجهات الأمامية",
      "resume.edu2.cert1.year": "2025",
      "resume.edu2.cert2.name": "تخصيص ووردبريس و WooCommerce",
      "resume.edu2.cert2.year": "2024",
      "resume.edu2.cert3.name": "Laravel ودمج REST API",
      "resume.edu2.cert3.year": "2024",

      // Services
      "services.subtitle": "الخدمات",
      "services.title": "الخدمات",
      "services.intro": "أبني تطبيقات ويب ولوحات تحكم سريعة ومتجاوبة باستخدام Angular، وأطور حلول ووردبريس مدمجة مع APIs خارجية وأنظمة ERP.",
      "services.contact": "تواصل",

      "services.s1.title": "تطبيقات Angular",
      "services.s1.desc": "تطبيقات SPA حديثة بواجهة نظيفة ومكونات قابلة لإعادة الاستخدام وبنية قابلة للتوسع.",
      "services.s2.featured": "مميز",
      "services.s2.title": "لوحات تحكم إدارية",
      "services.s2.desc": "لوحات تحكم غنية بالبيانات مع صلاحيات حسب الدور وجداول وفلاتر وتحديثات لحظية.",
      "services.s3.title": "دمج الـ APIs",
      "services.s3.desc": "دمج REST APIs مع مصادقة آمنة ومعالجة أخطاء نظيفة.",
      "services.s4.title": "تطوير ووردبريس",
      "services.s4.desc": "صفحات مخصصة باستخدام Elementor، وتحسين الأداء، وتصميم متجاوب نظيف.",
      "services.s5.title": "تخصيص WooCommerce",
      "services.s5.desc": "تخصيص صفحات المتجر والفئات والفلاتر وتنسيقات المنتجات حسب احتياجات العمل.",
      "services.s6.title": "دمج أنظمة ERP",
      "services.s6.desc": "مزامنة المنتجات والفئات من APIs خارجية لأنظمة ERP مع تحديثات آمنة وتلقائية.",
      "services.s7.title": "الواجهة الخلفية Laravel",
      "services.s7.desc": "بناء أنظمة خلفية آمنة مع المصادقة وعمليات CRUD وتصميم قواعد البيانات.",
      "services.s8.title": "تحسين الأداء",
      "services.s8.desc": "تحسين سرعة الموقع، وإصلاح نقاط الاختناق، وتحسين تجربة المستخدم لزيادة معدلات التحويل.",

      // Portfolio
      "portfolio.subtitle": "الأعمال",
      "portfolio.title": "الأعمال",
      "portfolio.intro": "مجموعة مختارة من أفضل أعمالي في Angular و Laravel وووردبريس ولوحات التحكم المعتمدة على APIs. تُستخدم لقطات الشاشة للمشاريع السرية.",

      "portfolio.filter.all": "الكل",
      "portfolio.filter.dashboards": "لوحات التحكم",
      "portfolio.filter.ecommerce": "WooCommerce",
      "portfolio.filter.wordpress": "ووردبريس",
      "portfolio.filter.laravel": "Laravel / PHP",
      "portfolio.filter.frontend": "واجهات أمامية",
      "portfolio.filter.system": "أنظمة",

      "portfolio.cat.dashboards": "لوحات التحكم",
      "portfolio.cat.ecommerce": "WooCommerce",
      "portfolio.cat.wordpress": "ووردبريس",
      "portfolio.cat.laravel": "Laravel / PHP",
      "portfolio.cat.frontend": "واجهات أمامية",
      "portfolio.cat.system": "أنظمة",

      "portfolio.p1.title": "لوحة تحكم الطلبات",
      "portfolio.p2.title": "WooCommerce ومنتجات API خارجي",
      "portfolio.p3.title": "Plan Interior",
      "portfolio.p4.title": "منصة الاستشارات الطبية (شفاء)",
      "portfolio.p5.title": "لوحة تحكم حكمة",
      "portfolio.p6.title": "لوحة تحكم موردي بيّاع",
      "portfolio.p7.title": "Rehana",
      "portfolio.p8.title": "نظام المكتب القانوني",
      "portfolio.p9.title": "موقع ووردبريس (Elementor)",
      "portfolio.p10.title": "صفحة هبوط متجاوبة",
      "portfolio.p11.title": "نظام CRM",
      "portfolio.p12.title": "نظام الأقساط",

      // Contact
      "contact.subtitle": "تواصل",
      "contact.title": "تواصل",
      "contact.intro": "إذا كانت لديك فرصة عمل أو مشروع في ذهنك، لا تتردد في التواصل. سأرد عليك في أقرب وقت ممكن.",
      "contact.address.title": "العنوان",
      "contact.address.value": "القاهرة، مصر",
      "contact.call.title": "اتصل بي",
      "contact.email.title": "راسلني",
      "contact.form.name": "اسمك",
      "contact.form.email": "بريدك الإلكتروني",
      "contact.form.subject": "الموضوع",
      "contact.form.message": "الرسالة",
      "contact.form.loading": "جارٍ التحميل",
      "contact.form.sent": "تم إرسال رسالتك. شكراً لك!",
      "contact.form.send": "إرسال الرسالة",

      // Footer
      "footer.copyright": "جميع الحقوق",
      "footer.name": "أحمد",
      "footer.rights": "جميع الحقوق محفوظة",
      "footer.designedBy": "تصميم بواسطة"
    }
  };

  function translate(lang, key) {
    var table = dict[lang] || dict.en;
    if (Object.prototype.hasOwnProperty.call(table, key)) {
      return table[key];
    }
    // Fallback to English if a key is missing in the target language.
    if (dict.en && Object.prototype.hasOwnProperty.call(dict.en, key)) {
      return dict.en[key];
    }
    return null;
  }

  function apply(lang) {
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = translate(lang, key);
      if (value === null) {
        return;
      }
      // Allow a small set of translations to contain inline <br> markup
      // (used for the "Key Achievements" bullet list).
      if (value.indexOf("<br>") !== -1) {
        node.innerHTML = value;
      } else {
        node.textContent = value;
      }
    });

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    attrNodes.forEach(function (node) {
      var spec = node.getAttribute("data-i18n-attr");
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) {
          return;
        }
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var value = translate(lang, key);
        if (value !== null) {
          node.setAttribute(attr, value);
        }
      });
    });
  }

  window.PortfolioI18n = {
    apply: apply,
    translate: translate
  };
})();
