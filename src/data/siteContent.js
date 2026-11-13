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
    "Software engineer delivering internal and customer solutions across .NET web platforms, Python services, and embedded systems.",
    "Architected and shipped an internal app ecosystem for quality, admin, deployment, supplier, leave, and workflow operations using C#/.NET 8, Python/Flask, SQL Server, TypeScript, Docker, and IIS.",
    "Built a Python Flask data analysis platform for project and timesheet insights via the WorkflowMax API, with a vanilla TypeScript frontend, and extended the wider toolchain with GitLab and local-LLM integrations.",
    "Led modernization work migrating legacy WinCE healthcare software to Linux-based platforms with C#, .NET, and Avalonia, improving maintainability and delivery speed.",
    "Developed embedded C modules for CAN-based motorcycle control units and contributed to EV load-balancing web applications."
  ],
  location: 'Based in Birmingham, UK',
  availability: 'Open to new opportunities',
}

export const skills = [
  {
    title: 'Backend / Server-side',
    items: [
      'C# (.NET Framework, .NET 6/.NET 8)',
      'ASP.NET Core, Razor Pages',
      'Python (Flask)',
      'Node.js (Express)',
      'Microsoft SQL Server, LDAP auth',
      'REST APIs (WorkflowMax, GitLab, Zoom)',
    ],
  },
  {
    title: 'Embedded & systems',
    items: ['C (embedded)', 'CAN-based control systems', 'WinCE to Linux migration', '.NET on embedded Linux'],
  },
  {
    title: 'Web / full-stack',
    items: ['Razor Pages', 'TypeScript, JavaScript', 'HTML/CSS', 'PHP', 'Vanilla TypeScript SPAs'],
  },
  {
    title: 'Databases & tooling',
    items: ['SQL Server', 'Docker', 'IIS, Nginx/Apache', 'Git, CI/CD', 'Local LLM / AI tooling'],
  },
]

export const experience = [
  {
    company: 'ByteSnap Design Ltd',
    role: 'Software Engineer',
    dates: 'Aug 2023 – Present',
    url: 'https://www.bytesnap.com/', // optional: 'https://company.com'
    bullets: [
      'Pioneered and architected an internal applications ecosystem spanning quality logs, hardware database library, supplier tooling, homepage, CDN, feedback app, deployment app, annual leave management, and WorkflowMax analytics.',
      'Built a Python Flask data analysis platform for project and timesheet data via the WorkflowMax API, with a vanilla TypeScript frontend for interactive reporting and operational visibility.',
      'Extended the same ecosystem with GitLab integration and local-LLM AI tooling to process Zoom messages automatically and to summarise git commits for release-note generation.',
      'Delivered full-stack internal platforms using C# Razor Pages/.NET 8, Python/Flask, SQL Server, TypeScript/JavaScript, Docker, IIS, and LDAP-based authentication.',
      'Led two major healthcare modernization projects migrating legacy WinCE systems to Linux-based platforms with C#, .NET 3.5 CF/.NET 6/.NET 8, and Avalonia.',
      'Built dynamic embedded C modules for CAN motorcycle control units, enabling model-specific behavior across multiple hardware variants.',
      'Contributed to an EV load-balancing web application by implementing intuitive UI flows with PHP, HTML, CSS, and JavaScript across Nginx/Apache environments.',
    ],
  },
]

export const projects = [
  {
    name: 'WorkflowMax Data Analysis Platform',
    type: 'webapp', // 'webapp' | 'embedded' | 'migration'
    role: 'Full-stack engineer (Python + TypeScript)',
    description:
      'Built an internal data analysis platform focused on project and timesheet insights via the WorkflowMax API. Python Flask powers the backend APIs and data processing; a vanilla TypeScript frontend delivers interactive reporting. Part of a wider internal toolchain that also includes annual leave management, GitLab integration, and local-LLM automation for Zoom message processing, commit summarisation, and release-note generation.',
    tech: [
      'Python',
      'Flask',
      'TypeScript',
      'WorkflowMax API',
      'GitLab API',
      'Zoom API',
      'Local LLM',
      'REST',
    ],
    outcome:
      'Centralised project/timesheet visibility and automated message and release-note workflows that previously relied on manual effort.',
    link: null,
    repo: null,
  },
  {
    name: 'Internal Apps Ecosystem',
    type: 'webapp',
    role: 'Architecture and full-stack delivery',
    description:
      'Designed and delivered a suite of internal applications: quality log, hardware database library, suppliers list, homepage, CDN, feedback app, deployment app, annual leave management, and WorkflowMax analytics—spanning .NET and Python services.',
    tech: [
      'C#',
      '.NET 8',
      'ASP.NET Core',
      'Razor Pages',
      'Python',
      'Flask',
      'SQL Server',
      'TypeScript',
      'JavaScript',
      'Docker',
      'IIS',
      'LDAP',
    ],
    outcome:
      'Improved operational visibility and reduced manual work across quality, admin, leave, deployment, and workflow processes.',
    link: null,
    repo: null,
  },
  {
    name: 'Healthcare Platform Migration (WinCE to Linux)',
    type: 'migration',
    role: 'Technical lead and migration engineer',
    description:
      'Led two projects modernizing legacy healthcare systems from WinCE to Linux platforms while transitioning application stacks to modern .NET.',
    tech: ['C#', '.NET 3.5 CF', '.NET 6', '.NET 8', 'Avalonia', 'Linux', 'WinCE'],
    outcome: 'Increased maintainability, improved delivery velocity, and reduced long-term platform risk.',
    link: null,
    repo: null,
  },
  {
    name: 'CAN Control Modules for Motorcycle ECUs',
    type: 'embedded',
    role: 'Embedded software engineer',
    description:
      'Developed specification-driven embedded C modules for CAN systems, supporting multiple control unit variants and model configurations.',
    tech: ['C', 'CAN'],
    outcome: 'Enabled scalable feature variation across product models while maintaining reliable control behavior.',
    link: null,
    repo: null,
  },
  {
    name: 'EV Load-Balancing Web Application',
    type: 'webapp',
    role: 'Web application developer',
    description:
      'Built user-facing pages for an EV load-balancing platform with a focus on clarity and ease of use.',
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
