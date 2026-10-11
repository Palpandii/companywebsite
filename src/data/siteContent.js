// All copy for the static sections lives here, so editing text never means touching components.

export const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Projects' },
  { id: 'estimator', label: 'Planner' },
  { id: 'contact', label: 'Contact' }
];

export const SERVICES = [
  {
    icon: 'globe',
    title: 'Premium websites',
    desc: 'Company and brand websites that load fast, read well on a phone and give search engines clean markup to work with.',
    features: [
      'Responsive layouts from small phones to wide desktops',
      'Semantic HTML, meta tags and social share previews',
      'Optimised images and lean CSS and JavaScript'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    icon: 'layers',
    title: 'Web applications',
    desc: 'React interfaces on top of a Spring Boot API and a MySQL database: dashboards, portals and internal tools with real data behind them.',
    features: [
      'REST APIs with validation and clear error messages',
      'Relational database design in MySQL',
      'Login and role-based access where the project needs it'
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'REST']
  },
  {
    icon: 'cart',
    title: 'E-commerce platforms',
    desc: 'Online stores with a product catalog, cart and order management, scoped to what your business actually sells.',
    features: [
      'Product catalog with categories and filtering',
      'Cart and order flow stored in MySQL',
      'Payment gateway integration, scoped per project'
    ],
    tech: ['React', 'Spring Boot', 'MySQL', 'REST']
  },
  {
    icon: 'tool',
    title: 'Custom digital solutions',
    desc: 'Software built around one specific job: booking systems, admin panels, third-party integrations and real-time tools.',
    features: [
      'Integrations with third-party APIs',
      'Admin panels to manage your own content and data',
      'Live audio and video features with WebRTC'
    ],
    tech: ['Java', 'Spring Boot', 'WebRTC', 'MySQL']
  }
];

export const ABOUT = {
  headline: 'One developer from database to interface.',
  quote:
    "I'm Palpandi M, a Full Stack Developer running LenoTech. I build modern web products that pair a clean interface with dependable engineering and practical business value.",
  paragraphs: [
    'Proficient in React.js, Core Java, Advanced Java, OOP and Spring Boot. I build responsive frontends, RESTful APIs and backend services, and I keep the code clean and under version control.',
    'You work directly with the person who designs the system, writes the code and releases it to production. There are no account managers between your idea and the developer.'
  ],
  pillars: [
    { icon: 'users', title: 'Direct communication', text: 'Requirements, timelines and trade-offs are discussed with the developer who builds the product.' },
    { icon: 'layers', title: 'Full stack ownership', text: 'Database schema, server logic and responsive UI are designed together.' },
    { icon: 'zap', title: 'Performance first', text: 'Lean bundles, compressed images and pages that stay stable while loading.' },
    { icon: 'code', title: 'Maintainable code', text: 'Modular structure and readable code that is ready for the next feature.' }
  ],
  skills: ['Core Java & OOP', 'Spring Boot', 'MySQL', 'React.js', 'JavaScript', 'RESTful APIs', 'WebRTC', 'Multithreading']
};

export const STACK = [
  {
    icon: 'code',
    title: 'Frontend',
    items: [
      { name: 'React.js', note: 'Components and hooks' },
      { name: 'JavaScript (ES6+)', note: 'Application logic' },
      { name: 'HTML5 and CSS3', note: 'Responsive layouts' }
    ]
  },
  {
    icon: 'layers',
    title: 'Backend',
    items: [
      { name: 'Core and Advanced Java', note: 'OOP, multithreading' },
      { name: 'Spring Boot', note: 'REST APIs' },
      { name: 'WebRTC', note: 'Live audio and video' }
    ]
  },
  {
    icon: 'database',
    title: 'Data and workflow',
    items: [
      { name: 'MySQL', note: 'Relational modelling, JDBC' },
      { name: 'Git', note: 'Version control' },
      { name: 'Agile delivery', note: 'Milestone releases' }
    ]
  }
];

export const ADVANTAGES = [
  { icon: 'users', title: 'Direct developer access', text: 'Every conversation about requirements, architecture and timelines happens with the developer building the product.' },
  { icon: 'layers', title: 'Full stack consistency', text: 'The interface and the database are designed by the same person, so the two fit together without hand-offs.' },
  { icon: 'shield', title: 'Reviewable progress', text: 'Work is delivered in milestones, with code kept in a repository you can look at.' }
];

export const SERVICE_OPTIONS = [
  'Premium Website',
  'Web Application',
  'E-Commerce Platform',
  'Custom Digital Solution'
];
