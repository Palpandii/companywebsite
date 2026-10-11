// Copy and data for the newer sections (process, pricing, FAQ, testimonials, tech strip, case studies).
// Edit text here. English and Tamil share the same shape.

// ---- PRICES: placeholders, replace with your real starting prices before going live ----
export const PRICES = ['₹15,000', '₹40,000', null]; // null shows "Let's talk"
export const PLAN_SERVICE = ['Premium Website', 'Web Application', 'Custom Digital Solution']; // English names used by the contact form

// ---- TESTIMONIALS: add ONLY real quotes you have permission to use. Empty list hides the section. ----
// { quote: 'One or two real sentences from the client.', name: 'Client name', business: 'Business name' }
export const TESTIMONIALS = [];

export const TECH = [
    { name: 'React', mark: 'react', color: '#0ea5e9' },
    { name: 'Spring Boot', mark: 'Sb', color: '#16a34a' },
    { name: 'MySQL', mark: 'My', color: '#1d4ed8' },
    { name: 'Vercel', mark: 'vercel', color: '#0b1a44' },
    { name: 'Railway', mark: 'Ry', color: '#7c3aed' }
];

export const COPY = {
    en: {
        process: {
            title: 'How we work together',
            desc: 'Four clear steps. Tap a step to see what happens in it.',
            steps: [
                { title: 'Discuss', sub: 'Your goal, audience and budget', body: 'A short call or WhatsApp chat. You tell me what the business does and what the site must achieve. I reply with a clear scope, timeline and quote.' },
                { title: 'Design', sub: 'Layout and look, before any code', body: 'You see the page structure and visual direction first. We adjust before development starts, so changes stay quick and cheap.' },
                { title: 'Build', sub: 'React front end, Spring Boot back end', body: 'Built with React, Spring Boot and MySQL. You can review progress as pages come together, so nothing is a surprise at the end.' },
                { title: 'Launch', sub: 'Go live, then support', body: 'The site is deployed, tested on phone and desktop, and handed over. I stay available for fixes after launch.' }
            ]
        },
        pricing: {
            title: 'Packages',
            desc: 'Starting prices. The final quote depends on your exact scope.',
            popular: 'Most popular', from: 'Starting from', talk: "Let's talk", cta: 'Ask about this package',
            msg: 'Hi {name}, I would like to discuss the {plan} package.',
            plans: [
                { name: 'Starter', text: 'For small businesses and personal sites', features: ['Up to 5 pages', 'Mobile-first, responsive design', 'WhatsApp and email contact', 'Basic SEO setup'] },
                { name: 'Business', text: 'For growing businesses', features: ['Everything in Starter', 'Login and admin panel', 'MySQL database', 'Spring Boot API'] },
                { name: 'Custom', text: 'For larger or unusual needs', features: ['E-commerce, payment gateway', 'Complex workflows', 'Multiple user roles', 'Priority support'] }
            ]
        },
        faq: {
            title: 'Common questions',
            desc: 'Short answers. For anything else, message me.',
            items: [
                { title: 'How long will it take?', body: 'Roughly 2–3 weeks for a website and 4–5 weeks for a web app or e-commerce site, depending on features. The planner above gives an estimate for your scope.' },
                { title: 'Do you include hosting?', body: 'I set up and deploy your site on hosting such as Vercel or Railway and hand the accounts over to you. Hosting and domain fees are paid to the provider directly.' },
                { title: 'How does payment work?', body: 'Usually a part upfront to start, the rest at milestones and before launch. UPI and bank transfer both work. The exact split is agreed in the quote.' }
            ]
        },
        testimonials: { title: 'What clients say', desc: 'In their own words.' },
        tech: { label: 'Built with' },
        float: 'Chat on WhatsApp',
        success: { title: 'Message ready', text: 'Send it from the app that just opened. I will reply soon.' },
        case: { problem: 'Problem', solution: 'Solution', result: 'Result', shots: 'Screenshots' }
    },
    ta: {
        process: {
            title: 'நாம் எப்படி வேலை செய்கிறோம்',
            desc: 'நான்கு தெளிவான படிகள். ஒரு படியைத் தொட்டால் விவரம் தெரியும்.',
            steps: [
                { title: 'பேசுவோம்', sub: 'உங்கள் இலக்கு, பட்ஜெட்', body: 'ஒரு சிறிய அழைப்பு அல்லது WhatsApp உரையாடல். உங்கள் தொழில் என்ன, தளம் எதை சாதிக்க வேண்டும் என்று சொல்லுங்கள். நான் தெளிவான வரம்பு, கால அளவு, விலை மதிப்பீட்டுடன் பதில் தருகிறேன்.' },
                { title: 'வடிவமைப்பு', sub: 'கோடு எழுதும் முன் தோற்றம்', body: 'வளர்ச்சி தொடங்கும் முன் பக்க அமைப்பையும் தோற்றத்தையும் முதலில் பார்ப்பீர்கள். மாற்றங்கள் இந்தக் கட்டத்தில் எளிதாகவும் செலவு குறைவாகவும் இருக்கும்.' },
                { title: 'உருவாக்கம்', sub: 'React முன்பக்கம், Spring Boot பின்பக்கம்', body: 'React, Spring Boot, MySQL கொண்டு உருவாக்குகிறேன். வேலை நடக்கும்போதே முன்னேற்றத்தைப் பார்க்கலாம், கடைசியில் ஆச்சரியம் இருக்காது.' },
                { title: 'வெளியீடு', sub: 'லைவ் ஆனபின்பும் துணை', body: 'தளம் இணையத்தில் ஏற்றப்பட்டு, மொபைல் மற்றும் டெஸ்க்டாப்பில் சோதிக்கப்பட்டு ஒப்படைக்கப்படும். வெளியீட்டுக்குப் பிறகும் திருத்தங்களுக்கு நான் இருக்கிறேன்.' }
            ]
        },
        pricing: {
            title: 'தொகுப்புகள்',
            desc: 'தொடக்க விலைகள். இறுதி விலை உங்கள் தேவைக்கு ஏற்ப முடிவாகும்.',
            popular: 'மிகவும் தேர்வு செய்யப்படுவது', from: 'தொடக்கம்', talk: 'பேசலாம்', cta: 'இந்தத் தொகுப்பைப் பற்றிக் கேளுங்கள்',
            msg: 'வணக்கம் {name}, {plan} தொகுப்பைப் பற்றிப் பேச விரும்புகிறேன்.',
            plans: [
                { name: 'ஸ்டார்ட்டர்', text: 'சிறு தொழில், தனிநபர் தளங்களுக்கு', features: ['5 பக்கங்கள் வரை', 'மொபைல் முதல் வடிவமைப்பு', 'WhatsApp, மின்னஞ்சல் தொடர்பு', 'அடிப்படை SEO'] },
                { name: 'பிசினஸ்', text: 'வளரும் தொழில்களுக்கு', features: ['ஸ்டார்ட்டரில் உள்ள அனைத்தும்', 'லாகின், அட்மின் பேனல்', 'MySQL டேட்டாபேஸ்', 'Spring Boot API'] },
                { name: 'கஸ்டம்', text: 'பெரிய அல்லது தனிப்பட்ட தேவைகளுக்கு', features: ['இ-காமர்ஸ், பேமெண்ட் கேட்வே', 'சிக்கலான வேலைப்போக்குகள்', 'பல பயனர் ரோல்கள்', 'முன்னுரிமை ஆதரவு'] }
            ]
        },
        faq: {
            title: 'அடிக்கடி கேட்கப்படுபவை',
            desc: 'சுருக்கமான பதில்கள். வேறு ஏதாவது இருந்தால் மெசேஜ் செய்யுங்கள்.',
            items: [
                { title: 'எவ்வளவு நாள் ஆகும்?', body: 'வெப்சைட்டுக்கு சுமார் 2–3 வாரங்கள்; வெப் அப்ளிகேஷன் அல்லது இ-காமர்ஸுக்கு 4–5 வாரங்கள் (வசதிகளைப் பொறுத்து). மேலே உள்ள பிளானர் உங்கள் தேவைக்கு மதிப்பீடு தரும்.' },
                { title: 'ஹோஸ்டிங்கும் சேர்த்துத் தருவீர்களா?', body: 'Vercel, Railway போன்ற ஹோஸ்டிங்கில் தளத்தை அமைத்து ஏற்றி, அக்கவுண்ட்களை உங்களிடம் ஒப்படைப்பேன். ஹோஸ்டிங், டொமைன் கட்டணங்களை நீங்கள் நேரடியாக வழங்குநருக்குச் செலுத்துவீர்கள்.' },
                { title: 'பணம் எப்படிச் செலுத்துவது?', body: 'பொதுவாகத் தொடங்க ஒரு பகுதி முன்பணம், மீதி முக்கிய கட்டங்களிலும் வெளியீட்டுக்கு முன்பும். UPI, வங்கி பரிமாற்றம் இரண்டும் சரி. சரியான பிரிவு விலை மதிப்பீட்டில் முடிவாகும்.' }
            ]
        },
        testimonials: { title: 'வாடிக்கையாளர்கள் சொன்னது', desc: 'அவர்களின் சொந்த வார்த்தைகளில்.' },
        tech: { label: 'பயன்படுத்தும் தொழில்நுட்பம்' },
        float: 'WhatsApp-ல் பேசுங்கள்',
        success: { title: 'செய்தி தயார்', text: 'இப்போது திறந்த ஆப்பிலிருந்து அனுப்புங்கள். விரைவில் பதில் தருகிறேன்.' },
        case: { problem: 'பிரச்சினை', solution: 'தீர்வு', result: 'முடிவு', shots: 'ஸ்கிரீன்ஷாட்கள்' }
    }
};