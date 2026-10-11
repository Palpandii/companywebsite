// UI strings for the language switch. Long-form section copy lives in siteContent.js (English)
// and siteContent.ta.js (Tamil); project copy lives in projects.json and projects.ta.json.
// Use {name} placeholders for values that are filled in at render time.

export const ui = {
  en: {
    'meta.title': 'LenoTech | Websites and web apps by Palpandi M, Full Stack Developer',
    'meta.description':
      'LenoTech is run by Palpandi M, a Full Stack Developer building premium websites, web applications, e-commerce platforms and custom tools with React, Spring Boot and MySQL.',

    'site.role': 'Full Stack Developer',
    'site.location': '424/p4 North Street Mettamalai, Virudhunagar, Tamil Nadu. 626203',

    'lang.label': 'Language',

    // Header / skip link / toast
    'a11y.skip': 'Skip to content',
    'a11y.home': 'LenoTech home',
    'a11y.primaryNav': 'Primary',
    'a11y.menuOpen': 'Open menu',
    'a11y.menuClose': 'Close menu',
    'header.cta': 'Start a project',
    'toast.scope': 'Your scope is in the message box. Add your details and send.',
    'dock.label': 'Quick contact',
    'dock.call': 'Call',
    'dock.start': 'Start a project',
    'dock.waText': 'Hi Palpandi, I found LenoTech and would like to discuss a project.',

    // Hero
    'hero.pill': 'Open for select client projects',
    'hero.title1': 'Premium websites and web applications,',
    'hero.title2': 'built by one developer, start to finish.',
    'hero.subtitle':
      'LenoTech is {owner}\u2019s full stack studio. React interfaces, Spring Boot APIs and MySQL databases for businesses that want something fast, clean and easy to maintain.',
    'hero.ctaProjects': 'See the projects',
    'hero.ctaPlan': 'Plan your project',
    'hero.meta1': 'Built directly by {owner}',
    'hero.meta2': 'No account managers in between',
    'hero.meta3': 'React, Spring Boot and MySQL',
    'hero.urlBar': 'LenoTech project preview',
    'hero.status': 'Accepting projects',
    'hero.imgAlt': 'Abstract network visual representing a connected full-stack system',
    'hero.metricBackend': 'Backend',
    'hero.metricFrontend': 'Frontend',

    // Services
    'services.title': 'What LenoTech builds',
    'services.desc':
      'Four kinds of project, each built on the same stack so the frontend, the API and the database always fit together.',

    // About
    'about.founder': 'Founder, LenoTech',
    'about.profileLabel': '{owner} profile',
    'about.studio': 'Studio',
    'about.callout':
      '{brand} is run by {owner}, delivering production-ready web engineering with clear technical guidance and reliable execution.',
    'about.skills': 'Core skills',
    'about.contact': 'Get in touch',

    // Stack
    'stack.title': 'The tools behind every build',
    'stack.desc':
      'A focused stack I use day to day, chosen for speed, security and code that stays easy to change.',

    // Projects
    'projects.title': 'Projects',
    'projects.desc':
      'Applications I have built across React, Java, Spring Boot and MySQL. Open a card for the details behind it.',
    'projects.all': 'All projects',
    'projects.filter': 'Filter projects',
    'projects.view': 'View project details',
    'projects.live': 'Live site',
    'projects.source': 'Source code',
    'projects.close': 'Close project details',
    'projects.overview': 'Overview',
    'projects.builtWith': 'Built with',
    'projects.built': 'What was built',

    // Estimator
    'est.title': 'Plan your project',
    'est.desc':
      'Choose what you want to build and get a rough delivery time. Send it with your message to start the conversation.',
    'est.q1': 'What are you building?',
    'est.q2': 'How big is it?',
    'est.q3': 'What does it need?',
    'est.type.WEBSITE.title': 'Premium Website',
    'est.type.WEBSITE.desc': 'Brand presentation, SEO, speed',
    'est.type.WEB_APP.title': 'Web Application',
    'est.type.WEB_APP.desc': 'Dashboard, portal, SaaS-style app',
    'est.type.ECOMMERCE.title': 'E-Commerce Platform',
    'est.type.ECOMMERCE.desc': 'Storefront, cart, checkout',
    'est.type.CUSTOM.title': 'Custom Digital Solution',
    'est.type.CUSTOM.desc': 'API systems, tools, automation',
    'est.scale.MVP.title': 'Sprint / MVP',
    'est.scale.MVP.desc': 'Focused first release',
    'est.scale.STANDARD.title': 'Standard application',
    'est.scale.STANDARD.desc': 'Complete release',
    'est.scale.ENTERPRISE.title': 'Multi-tier system',
    'est.scale.ENTERPRISE.desc': 'Complex data, multiple user roles',
    'est.mod.AUTH': 'User auth and roles',
    'est.mod.DATABASE': 'Database schema design',
    'est.mod.PAYMENT': 'Payment gateway',
    'est.mod.REALTIME': 'Real-time features',
    'est.mod.EMAIL': 'Email notifications',
    'est.mod.CMS': 'CMS or admin panel',
    'est.summaryLabel': 'Estimate summary',
    'est.summaryTitle': 'Your estimate',
    'est.summarySub': 'Based on one developer working full time.',
    'est.delivery': 'Delivery',
    'est.weeks': '{min} - {max} weeks',
    'est.workDays': 'Work days',
    'est.rowProject': 'Project',
    'est.rowScale': 'Scale',
    'est.rowModules': 'Modules',
    'est.modulesNone': 'None added',
    'est.modulesCount': '{n} selected',
    'est.apply': 'Use this in my message',
    'est.note':
      'A planning estimate, not a quote. The final timeline is agreed after we discuss the details.',
    'est.msgHello':
      'Hi {name}, I\'d like to build a {type} ({scale}).\nModules I need: {features}.\nYour planner estimated {label}. Let\'s talk about the details.',
    'est.msgNoModules': 'core foundation only',

    // Advantage
    'adv.title': 'Why work with LenoTech',
    'adv.desc':
      'One developer means fewer hand-offs, faster answers and no surprises about who is building your product.',

    // Contact
    'contact.title': 'Tell me what you want to build',
    'contact.desc':
      'Send a short description of the project. You get a reply from the developer, not a sales team.',
    'contact.roleLine': '{role}, LenoTech',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.basedIn': 'Based in',
    'contact.copy': 'Copy email address',
    'contact.name': 'Your name',
    'contact.phoneLabel': 'Phone number',
    'contact.phoneHint': 'Enter a phone number with at least 10 digits',
    'contact.need': 'What do you need?',
    'contact.details': 'Project details',
    'contact.placeholder': 'What should it do, who is it for, and when do you need it?',
    'contact.chatNow': 'Chat now',
    'contact.sendEmail': 'Send by email',
    'contact.sendWhatsapp': 'Send on WhatsApp',
    'contact.toastWhatsapp': 'WhatsApp should open with your message ready to send.',
    'contact.toastMail': 'Your email app should open with the message ready to send.',
    'contact.toastCopied': 'Copied {email}',
    'contact.toastEmail': 'Email: {email}',

    // Footer
    'footer.mission':
      'Websites and web applications built end to end with React, Spring Boot and MySQL.',
    'footer.runBy': 'Run by {owner}',
    'footer.navigate': 'Navigate',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copy': '\u00a9 {year} {brand}. Run by {owner}.',
    'footer.top': 'Back to top'
  },

  ta: {
    'meta.title': 'LenoTech | Palpandi M உருவாக்கும் வெப்சைட்டுகளும் வெப் ஆப்களும் (ஃபுல் ஸ்டாக் டெவலப்பர்)',
    'meta.description':
      'LenoTech-ஐ நடத்தும் ஃபுல் ஸ்டாக் டெவலப்பர் Palpandi M, React, Spring Boot மற்றும் MySQL கொண்டு பிரீமியம் வெப்சைட்டுகள், வெப் அப்ளிகேஷன்கள், இ-காமர்ஸ் தளங்கள் மற்றும் தனிப்பயன் கருவிகளை உருவாக்குகிறார்.',

    'site.role': 'ஃபுல் ஸ்டாக் டெவலப்பர்',
    'site.location': 'விருதுநகர், தமிழ்நாடு',

    'lang.label': 'மொழி',

    'a11y.skip': 'உள்ளடக்கத்திற்குச் செல்',
    'a11y.home': 'LenoTech முகப்பு',
    'a11y.primaryNav': 'முதன்மை',
    'a11y.menuOpen': 'மெனுவைத் திற',
    'a11y.menuClose': 'மெனுவை மூடு',
    'header.cta': 'திட்டத்தைத் தொடங்குங்கள்',
    'toast.scope': 'உங்கள் திட்ட வரம்பு செய்திப் பெட்டியில் உள்ளது. விவரங்களைச் சேர்த்து அனுப்புங்கள்.',
    'dock.label': 'விரைவுத் தொடர்பு',
    'dock.call': 'அழைக்க',
    'dock.start': 'திட்டத்தைத் தொடங்க',
    'dock.waText': 'வணக்கம் Palpandi, LenoTech-ஐப் பார்த்தேன். ஒரு திட்டம் பற்றிப் பேச விரும்புகிறேன்.',

    'hero.pill': 'தேர்ந்தெடுத்த கிளையன்ட் திட்டங்களை ஏற்கத் தயார்',
    'hero.title1': 'பிரீமியம் வெப்சைட்டுகளும் வெப் அப்ளிகேஷன்களும்,',
    'hero.title2': 'ஒரே டெவலப்பரால் தொடக்கம் முதல் முடிவு வரை உருவாக்கப்படுகின்றன.',
    'hero.subtitle':
      'LenoTech என்பது {owner}-இன் ஃபுல் ஸ்டாக் ஸ்டுடியோ. வேகமான, சுத்தமான, பராமரிக்க எளிதான தீர்வு தேவைப்படும் வணிகங்களுக்காக React இன்டர்ஃபேஸ்கள், Spring Boot API-கள் மற்றும் MySQL டேட்டாபேஸ்கள்.',
    'hero.ctaProjects': 'திட்டங்களைப் பாருங்கள்',
    'hero.ctaPlan': 'உங்கள் திட்டத்தைத் திட்டமிடுங்கள்',
    'hero.meta1': '{owner} நேரடியாக உருவாக்குகிறார்',
    'hero.meta2': 'இடையில் அக்கவுண்ட் மேனேஜர்கள் இல்லை',
    'hero.meta3': 'React, Spring Boot மற்றும் MySQL',
    'hero.urlBar': 'LenoTech திட்ட முன்னோட்டம்',
    'hero.status': 'திட்டங்கள் ஏற்கப்படுகின்றன',
    'hero.imgAlt': 'இணைக்கப்பட்ட ஃபுல் ஸ்டாக் அமைப்பைக் குறிக்கும் சுருக்கமான நெட்வொர்க் காட்சி',
    'hero.metricBackend': 'பேக்எண்ட்',
    'hero.metricFrontend': 'ஃப்ரன்ட்எண்ட்',

    'services.title': 'LenoTech உருவாக்குவது என்ன',
    'services.desc':
      'நான்கு வகைத் திட்டங்கள். ஒவ்வொன்றும் ஒரே தொழில்நுட்பத் தொகுப்பில் உருவாக்கப்படுவதால், ஃப்ரன்ட்எண்ட், API, டேட்டாபேஸ் ஆகியவை எப்போதும் சீராகப் பொருந்தும்.',

    'about.founder': 'நிறுவனர், LenoTech',
    'about.profileLabel': '{owner} சுயவிவரம்',
    'about.studio': 'ஸ்டுடியோ',
    'about.callout':
      '{brand}-ஐ {owner} நடத்துகிறார்; தெளிவான தொழில்நுட்ப வழிகாட்டுதலுடனும் நம்பகமான செயலாக்கத்துடனும் புரொடக்ஷனுக்குத் தயாரான வெப் இன்ஜினியரிங்கை வழங்குகிறார்.',
    'about.skills': 'முக்கியத் திறன்கள்',
    'about.contact': 'தொடர்பு கொள்ளுங்கள்',

    'stack.title': 'ஒவ்வொரு உருவாக்கத்திற்குப் பின்னும் உள்ள கருவிகள்',
    'stack.desc':
      'வேகம், பாதுகாப்பு, எளிதாக மாற்றக்கூடிய கோடு ஆகியவற்றுக்காகத் தேர்ந்தெடுத்து, தினமும் நான் பயன்படுத்தும் தொகுப்பு.',

    'projects.title': 'திட்டங்கள்',
    'projects.desc':
      'React, Java, Spring Boot மற்றும் MySQL கொண்டு நான் உருவாக்கிய அப்ளிகேஷன்கள். விவரங்களுக்கு ஒரு கார்டைத் திறக்கவும்.',
    'projects.all': 'அனைத்துத் திட்டங்கள்',
    'projects.filter': 'திட்டங்களை வடிகட்டு',
    'projects.view': 'திட்ட விவரங்களைப் பார்',
    'projects.live': 'நேரடித் தளம்',
    'projects.source': 'மூலக் கோடு',
    'projects.close': 'திட்ட விவரங்களை மூடு',
    'projects.overview': 'கண்ணோட்டம்',
    'projects.builtWith': 'பயன்படுத்தியவை',
    'projects.built': 'என்ன உருவாக்கப்பட்டது',

    'est.title': 'உங்கள் திட்டத்தைத் திட்டமிடுங்கள்',
    'est.desc':
      'எதை உருவாக்க விரும்புகிறீர்கள் என்பதைத் தேர்ந்தெடுத்து, தோராயமான டெலிவரி நேரத்தைப் பெறுங்கள். உரையாடலைத் தொடங்க அதை உங்கள் செய்தியுடன் அனுப்புங்கள்.',
    'est.q1': 'எதை உருவாக்குகிறீர்கள்?',
    'est.q2': 'எவ்வளவு பெரியது?',
    'est.q3': 'அதற்கு என்ன தேவை?',
    'est.type.WEBSITE.title': 'பிரீமியம் வெப்சைட்',
    'est.type.WEBSITE.desc': 'பிராண்ட் வெளிப்பாடு, SEO, வேகம்',
    'est.type.WEB_APP.title': 'வெப் அப்ளிகேஷன்',
    'est.type.WEB_APP.desc': 'டாஷ்போர்டு, போர்ட்டல், SaaS வகை ஆப்',
    'est.type.ECOMMERCE.title': 'இ-காமர்ஸ் தளம்',
    'est.type.ECOMMERCE.desc': 'ஸ்டோர்ஃப்ரன்ட், கார்ட், செக்அவுட்',
    'est.type.CUSTOM.title': 'தனிப்பயன் டிஜிட்டல் தீர்வு',
    'est.type.CUSTOM.desc': 'API அமைப்புகள், கருவிகள், ஆட்டோமேஷன்',
    'est.scale.MVP.title': 'ஸ்பிரிண்ட் / MVP',
    'est.scale.MVP.desc': 'கவனம் செலுத்திய முதல் வெளியீடு',
    'est.scale.STANDARD.title': 'நிலையான அப்ளிகேஷன்',
    'est.scale.STANDARD.desc': 'முழுமையான வெளியீடு',
    'est.scale.ENTERPRISE.title': 'பல அடுக்கு அமைப்பு',
    'est.scale.ENTERPRISE.desc': 'சிக்கலான டேட்டா, பல பயனர் ரோல்கள்',
    'est.mod.AUTH': 'பயனர் அங்கீகாரமும் ரோல்களும்',
    'est.mod.DATABASE': 'டேட்டாபேஸ் ஸ்கீமா வடிவமைப்பு',
    'est.mod.PAYMENT': 'பேமெண்ட் கேட்வே',
    'est.mod.REALTIME': 'ரியல்-டைம் வசதிகள்',
    'est.mod.EMAIL': 'மின்னஞ்சல் அறிவிப்புகள்',
    'est.mod.CMS': 'CMS அல்லது அட்மின் பேனல்',
    'est.summaryLabel': 'மதிப்பீட்டுச் சுருக்கம்',
    'est.summaryTitle': 'உங்கள் மதிப்பீடு',
    'est.summarySub': 'ஒரு டெவலப்பர் முழு நேரமும் பணியாற்றுவதை அடிப்படையாகக் கொண்டது.',
    'est.delivery': 'டெலிவரி',
    'est.weeks': '{min} - {max} வாரங்கள்',
    'est.workDays': 'வேலை நாட்கள்',
    'est.rowProject': 'திட்டம்',
    'est.rowScale': 'அளவு',
    'est.rowModules': 'மாட்யூல்கள்',
    'est.modulesNone': 'எதுவும் சேர்க்கப்படவில்லை',
    'est.modulesCount': '{n} தேர்ந்தெடுக்கப்பட்டன',
    'est.apply': 'இதை என் செய்தியில் பயன்படுத்து',
    'est.note':
      'இது திட்டமிடலுக்கான மதிப்பீடு, விலைப்புள்ளி அல்ல. விவரங்களைப் பேசிய பிறகே இறுதிக் கால அட்டவணை முடிவு செய்யப்படும்.',
    'est.msgHello':
      'வணக்கம் {name}, நான் ஒரு {type} ({scale}) உருவாக்க விரும்புகிறேன்.\nதேவையான மாட்யூல்கள்: {features}.\nஉங்கள் திட்டமிடல் கருவி {label} என மதிப்பிட்டது. விவரங்களைப் பேசலாம்.',
    'est.msgNoModules': 'அடிப்படை மட்டும்',

    'adv.title': 'LenoTech-உடன் ஏன் பணியாற்ற வேண்டும்',
    'adv.desc':
      'ஒரே டெவலப்பர் என்றால் குறைவான கைமாற்றம், விரைவான பதில்கள், உங்கள் தயாரிப்பை யார் உருவாக்குகிறார் என்பதில் ஆச்சரியங்கள் இல்லை.',

    'contact.title': 'என்ன உருவாக்க விரும்புகிறீர்கள் என்று சொல்லுங்கள்',
    'contact.desc':
      'திட்டத்தைப் பற்றிய சிறு விளக்கத்தை அனுப்புங்கள். விற்பனைக் குழுவிடமிருந்து அல்ல, டெவலப்பரிடமிருந்தே பதில் வரும்.',
    'contact.roleLine': '{role}, LenoTech',
    'contact.email': 'மின்னஞ்சல்',
    'contact.phone': 'தொலைபேசி',
    'contact.basedIn': 'இருப்பிடம்',
    'contact.copy': 'மின்னஞ்சல் முகவரியை நகலெடு',
    'contact.name': 'உங்கள் பெயர்',
    'contact.phoneLabel': 'தொலைபேசி எண்',
    'contact.phoneHint': 'குறைந்தது 10 இலக்கங்கள் கொண்ட தொலைபேசி எண்ணை உள்ளிடவும்',
    'contact.need': 'உங்களுக்கு என்ன தேவை?',
    'contact.details': 'திட்ட விவரங்கள்',
    'contact.placeholder': 'இது என்ன செய்ய வேண்டும், யாருக்காக, எப்போது தேவை?',
    'contact.chatNow': 'அரட்டை',
    'contact.sendEmail': 'மின்னஞ்சலில் அனுப்பு',
    'contact.sendWhatsapp': 'வாட்ஸ்அப்பில் அனுப்பு',
    'contact.toastWhatsapp': 'உங்கள் செய்தியுடன் வாட்ஸ்அப் திறக்கும்.',
    'contact.toastMail': 'உங்கள் மின்னஞ்சல் ஆப் செய்தியுடன் திறக்கும்.',
    'contact.toastCopied': 'நகலெடுக்கப்பட்டது: {email}',
    'contact.toastEmail': 'மின்னஞ்சல்: {email}',

    'footer.mission':
      'React, Spring Boot மற்றும் MySQL கொண்டு தொடக்கம் முதல் முடிவு வரை உருவாக்கப்படும் வெப்சைட்டுகளும் வெப் அப்ளிகேஷன்களும்.',
    'footer.runBy': 'நடத்துபவர்: {owner}',
    'footer.navigate': 'வழிசெலுத்தல்',
    'footer.services': 'சேவைகள்',
    'footer.contact': 'தொடர்புக்கு',
    'footer.copy': '\u00a9 {year} {brand}. நடத்துபவர்: {owner}.',
    'footer.top': 'மேலே செல்'
  }
};
