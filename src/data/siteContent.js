/**
 * Portfolio content — edit this file to change all site text and data.
 * No need to touch components unless you want to change layout or behaviour.
 */

export const hero = {
  name: 'Likto Chung',
  title: 'Software Engineer',
  tagline: 'Embedded systems, platform migrations, and full-stack delivery',
  ctaText: 'Experience',
  ctaHref: '#projects',
  // Optional: set to path like '/avatar.jpg' if you add an image to public/
  avatar: '/avatar.jpg',
}

export const about = {
  summary: [
    "Software engineer delivering internal and customer solutions across .NET web platforms and embedded systems.",
    "Architected and shipped an internal app ecosystem for quality, admin, deployment, supplier, and workflow operations using C#/.NET 8, SQL Server, JavaScript, Docker, and IIS.",
    "Led modernization work migrating legacy WinCE healthcare software to Linux-based platforms with C#, .NET, and Avalonia, improving maintainability and delivery speed.",
    "Developed embedded C modules for CAN-based motorcycle control units and contributed to EV load-balancing web applications."
  ],
  location: 'Based in Birmingham, UK',
  availability: 'Open to new opportunities',
}

export const skills = [
  {
    title: 'Backend / Server-side',
    items: ['C# (.NET Framework, .NET 6/.NET 8)', 'ASP.NET Core, Razor Pages', 'Node.js (Express)', 'Microsoft SQL Server, LDAP auth'],
  },
  {
    title: 'Embedded & systems',
    items: ['C (embedded)', 'CAN-based control systems', 'WinCE to Linux migration', '.NET on embedded Linux'],
  },
  {
    title: 'Web / full-stack',
    items: ['Razor Pages', 'HTML/CSS, JavaScript', 'PHP', 'Python (Flask)'],
  },
  {
    title: 'Databases & tooling',
    items: ['SQL Server', 'Docker', 'IIS, Nginx/Apache', 'Git, CI/CD'],
  },
]

export const experience = [
  {
    company: 'ByteSnap Design Ltd',
    role: 'Software Engineer',
    dates: 'Aug 2023 – Present',
    url: 'https://www.bytesnap.com/', // optional: 'https://company.com'
    bullets: [
      'Pioneered and architected an internal applications ecosystem spanning quality logs, hardware database library, supplier tooling, homepage, CDN, feedback app, deployment app, and WorkflowMax dashboard.',
      'Delivered full-stack internal platforms using C# Razor Pages/.NET 8, SQL Server, JavaScript, Docker, IIS, and LDAP-based authentication.',
      'Led two major healthcare modernization projects migrating legacy WinCE systems to Linux-based platforms with C#, .NET 3.5 CF/.NET 6/.NET 8, and Avalonia.',
      'Built dynamic embedded C modules for CAN motorcycle control units, enabling model-specific behavior across multiple hardware variants.',
      'Contributed to an EV load-balancing web application by implementing intuitive UI flows with PHP, HTML, CSS, and JavaScript across Nginx/Apache environments.',
    ],
  },
]

export const projects = [
  {
    name: 'Internal Apps Ecosystem',
    type: 'webapp', // 'webapp' | 'embedded' | 'migration'
    role: 'Architecture and full-stack delivery',
    description: 'Designed and delivered a suite of internal applications: quality log, hardware database library, suppliers list, homepage, CDN, feedback app, deployment app, and WorkflowMax dashboard.',
    tech: ['C#', '.NET 8', 'ASP.NET Core', 'Razor Pages', 'SQL Server', 'JavaScript', 'Docker', 'IIS', 'LDAP'],
    outcome: 'Improved operational visibility and reduced manual work across quality, admin, and deployment workflows.',
    link: null,
    repo: null,
  },
  {
    name: 'Healthcare Platform Migration (WinCE to Linux)',
    type: 'migration',
    role: 'Technical lead and migration engineer',
    description: 'Led two projects modernizing legacy healthcare systems from WinCE to Linux platforms while transitioning application stacks to modern .NET.',
    tech: ['C#', '.NET 3.5 CF', '.NET 6', '.NET 8', 'Avalonia', 'Linux', 'WinCE'],
    outcome: 'Increased maintainability, improved delivery velocity, and reduced long-term platform risk.',
    link: null,
    repo: null,
  },
  {
    name: 'CAN Control Modules for Motorcycle ECUs',
    type: 'embedded',
    role: 'Embedded software engineer',
    description: 'Developed specification-driven embedded C modules for CAN systems, supporting multiple control unit variants and model configurations.',
    tech: ['C', 'CAN'],
    outcome: 'Enabled scalable feature variation across product models while maintaining reliable control behavior.',
    link: null,
    repo: null,
  },
  {
    name: 'EV Load-Balancing Web Application',
    type: 'webapp',
    role: 'Web application developer',
    description: 'Built user-facing pages for an EV load-balancing platform with a focus on clarity and ease of use.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Nginx', 'Apache'],
    outcome: 'Improved usability for day-to-day configuration and monitoring workflows.',
    link: null,
    repo: null,
  },
]

export const education = [
  {
    institution: 'University of Warwick',
    degree: 'BSc Computer Science',
    years: '2020 - 2023',
    notes: 'Gained basic skills in Java, C, HTML/CSS, Bash scripting' 
  },
]

export const site = {
  title: 'Portfolio | Likto Chung',
  footerText: '',
  footerContact: {
    email: 'app@likto.uk',
    phone: null,
    location: 'Birmingham, UK',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/likto-chung', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/LiktoChung', icon: 'github' },
    ],
  },
}
