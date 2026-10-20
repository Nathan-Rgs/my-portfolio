export const profile = {
  name: "Nathan Roberto",
  role: "Full Stack Developer",
  location: "Sorocaba, Brazil",
  photo: "/images/me/professionalPhoto.jpeg",
  aboutPhoto: "/images/me/meLondon.jpeg",
  summary:
    "Full Stack Developer with a Computer Engineering degree and international experience at Fraunhofer IPT in Germany. At Omie, I build CRM features end to end: Python and FastAPI services on AWS Serverless (Lambda, SQS, DynamoDB) on the back end, Vue on the front end with some React, plus integrations with external platforms and an AI-assisted sales flow. I work close to product: I write the technical refinement of each feature before building it and join design reviews, so what ships solves the real business problem.",
  quote: {
    text: "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains",
    author: "Bill Gates",
  },
  yearsOfExperience: "6+",
}

export const links = {
  cv: "https://drive.google.com/uc?export=download&id=1czCuP7hg740EeK8e_DSE12Xe61DFhIX5",
  email: "nathan.rgs@gmail.com",
  phone: "+55 (15) 99741-1076",
  whatsapp: "https://wa.me/5515997411076",
  github: "https://github.com/Nathan-Rgs",
  linkedin: "https://www.linkedin.com/in/nathan-rgs/",
  instagram: "https://www.instagram.com/_nathan_rgs/",
  aws: "https://www.credly.com/badges/28a4540b-7bc6-41b2-b1e3-29f8fbdd24c3",
  maps: "https://www.google.com/maps/place/sorocaba/data=!4m2!3m1!1s0x94c58abceb48f503:0x947f99ac59d0781b",
}

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack", desktopOnly: true },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience", desktopOnly: true },
  { href: "#contact", label: "Contact" },
]

export const services = [
  {
    title: "Frontend",
    years: "6 years",
    description:
      "6 years of experience in web development, always seeking to evolve with the latest technologies on the market.",
  },
  {
    title: "Backend",
    years: "4.5 years",
    description:
      "4.5 years building APIs and microservices: Python and FastAPI on AWS Serverless today, Node.js and NestJS before.",
  },
  {
    title: "Fullstack",
    years: "End to end",
    description:
      "Developing end-to-end applications from database architecture and api's / microservices to the client interface",
  },
]

export type Skill = {
  title: string
  since: string
  description: string
  tools: string[]
  /** Experience comes only from university coursework, not professional work. */
  academic?: boolean
}

export const skills: Skill[] = [
  {
    title: "Python & FastAPI",
    since: "2023 - Present",
    description:
      "Production CRM APIs at Omie with async SQLAlchemy and Alembic migrations; earlier, engineering microservices at Fraunhofer IPT.",
    tools: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "Alembic", "Pytest"],
  },
  {
    title: "AWS Serverless",
    since: "2024 - Present",
    description:
      "Event-driven back ends at Omie: Lambda functions fed by SQS queues, DynamoDB storage, secrets in Secrets Manager, search and cache with OpenSearch and Redis.",
    tools: [
      "AWS Lambda",
      "SQS",
      "DynamoDB",
      "Secrets Manager",
      "OpenSearch",
      "Redis",
    ],
  },
  {
    title: "Vue, React & TypeScript",
    since: "2021 - Present",
    description:
      "Vue since my Huawei internship; at Omie a legacy Nuxt 2 app, a new Vue 3 app and a React client portal. React interfaces for cloud simulation at Fraunhofer.",
    tools: [
      "Vue",
      "Nuxt",
      "Vuetify",
      "React",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
    ],
  },
  {
    title: "Node.js & NestJS",
    since: "2023 - Present",
    description:
      "APIs and microservices for the most varied applications; led back-end development at Epiousion IT.",
    tools: ["Node.js", "NestJS", "Express"],
  },
  {
    title: "Databases & ORMs",
    since: "2023 - Present",
    description:
      "Relational and NoSQL data modeling with typed data-access layers.",
    tools: [
      "PostgreSQL",
      "DynamoDB",
      "SQL Server",
      "MongoDB",
      "Prisma",
      "TypeORM",
      "Drizzle",
    ],
  },
  {
    title: "AI & Computer Vision",
    since: "2024 - 2025",
    description:
      "Academic experience only: object detection and gesture recognition projects from my Computer Engineering degree.",
    tools: ["YOLOv8", "OpenCV", "MediaPipe", "scikit-learn"],
    academic: true,
  },
]

export const stack = [
  "Python",
  "FastAPI",
  "AWS Lambda",
  "SQS",
  "DynamoDB",
  "Pydantic",
  "SQLAlchemy",
  "Alembic",
  "Pytest",
  "Redis",
  "OpenSearch",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "Nuxt",
  "Vuetify",
  "React",
  "Next.js",
  "Vite",
  "TanStack Query",
  "Zod",
  "shadcn/ui",
  "MUI",
  "Tailwind",
  "Node.js",
  "NestJS",
  "Express",
  "Java",
  "Spring",
  "GraphQL",
  "PostgreSQL",
  "SQL Server",
  "MongoDB",
  "Prisma",
  "Drizzle",
  "Docker",
  "Git/GitHub",
  "React Native",
  "HTML",
  "CSS",
]

/** Nodes shown in the Stack beam diagram: left = client, right = server. */
export const beamNodes = {
  left: ["TypeScript", "Vue.js", "React"],
  right: ["Python", "FastAPI", "AWS"],
}

export type Project = {
  title: string
  description: string
  tags: string[]
  repo: string
  live?: string
  image?: string
  /** Visual style of the generated preview when there is no screenshot. */
  mock: "dashboard" | "api" | "vision" | "gesture" | "mobile"
  featured?: boolean
  /** University coursework project. */
  academic?: boolean
}

export const projects: Project[] = [
  {
    title: "Coin Collection Platform",
    description:
      "Full-stack inventory and catalog for an inherited coin collection: CRUD, advanced filters, image uploads, JWT auth and an analytics dashboard. Layered FastAPI backend (routers → services → repositories) with Alembic migrations.",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    repo: "https://github.com/Nathan-Rgs/currency-platform-stock",
    mock: "dashboard",
    featured: true,
  },
  {
    title: "Buzzy Labs",
    description:
      "Landing page and platform for an operational-intelligence consultancy. Full-stack TypeScript with an Express API, Drizzle ORM, Zod validation and Framer Motion.",
    tags: ["React", "Express", "Drizzle ORM", "Zod"],
    repo: "https://github.com/Nathan-Rgs/buzzyLabs",
    image: "/images/projects/buzzylabs.jpg",
    mock: "dashboard",
  },
  {
    title: "Stock Wise API",
    description:
      "Multi-tenant stock management API with role-based access per tenant, JWT auth, seed data, OpenAPI docs and automated tests.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Pytest"],
    repo: "https://github.com/Nathan-Rgs/stock-wise-backend",
    mock: "api",
  },
  {
    title: "Restricted-Zone Object Detection",
    description:
      "Computer-vision monitor that tracks forbidden objects inside configurable zones and only alerts after a dwell-time threshold, cutting false positives. Works with webcam, files or RTSP streams.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    repo: "https://github.com/Nathan-Rgs/computerVision-forbiddenObjects",
    mock: "vision",
    academic: true,
  },
  {
    title: "Sign Language Detector",
    description:
      "Real-time hand-gesture recognition that helps people practice the sign-language alphabet, with its own image-collection and dataset pipeline.",
    tags: ["Python", "MediaPipe", "scikit-learn"],
    repo: "https://github.com/Nathan-Rgs/signLanguageDetector",
    mock: "gesture",
    academic: true,
  },
  {
    title: "eSports Duo Finder",
    description:
      "Full-stack project to help you find friends at your favorite game, with a web app, a mobile app and a shared Node API.",
    tags: ["React", "React Native", "Node.js", "TypeScript"],
    repo: "https://github.com/Nathan-Rgs/eSports_FullStackProject",
    mock: "mobile",
  },
]

export const experience = [
  {
    company: "Omie",
    logo: "/images/companies/omie.png",
    url: "https://www.omie.com.br",
    role: "Fullstack Developer",
    location: "Remote - Brazil",
    period: "August 2024 - Present",
    current: true,
    description:
      "Full-stack developer on the CRM squad, shipping features on both ends with a strong grasp of the business domain. Back end in Python and FastAPI (Pydantic, async SQLAlchemy, Alembic) running on AWS Serverless with Lambda, SQS, DynamoDB and Secrets Manager, plus OpenSearch and Redis, tested with pytest. Front end across three apps: legacy Nuxt 2 / Vue 2 / Vuetify, a new Vue 3 + Vite app and a React + TypeScript + Tailwind client portal. Built integrations with Zoom, Google Calendar, Telegram, WhatsApp (Weni) and Clicksign; currently leading the Zoom integration and an AI-assisted sales flow. Write the technical refinement of each card before implementation and take part in design reviews.",
    stack: [
      "Python",
      "FastAPI",
      "AWS Lambda",
      "AWS SQS",
      "DynamoDB",
      "Secrets Manager",
      "Pydantic",
      "SQLAlchemy",
      "Alembic",
      "Pytest",
      "OpenSearch",
      "Redis",
      "Vue",
      "Nuxt",
      "Vuetify",
      "JavaScript",
    ],
    highlight: [
      "Python",
      "FastAPI",
      "AWS Lambda",
      "AWS SQS",
      "DynamoDB",
      "Vue",
      "React",
      "JavaScript",
    ],
  },
  {
    company: "Epiousion IT",
    logo: "/images/companies/epiousion.png",
    role: "Fullstack Developer",
    location: "Sorocaba - Brazil",
    period: "February 2024 - August 2024",
    description:
      "Led back-end development using Node.js, NestJS, and TypeScript to deliver robust and scalable APIs. Built and maintained data access layers with TypeORM and PrismaORM, ensuring consistency and performance. Developed full-stack features using React.js and Tailwind, integrating front-end and back-end components. Designed and worked with relational databases (PostgreSQL, SQL Server) and NoSQL databases (MongoDB), applying solid data modeling principles.",
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "TypeORM",
      "Prisma",
      "React",
      "Tailwind",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
    ],
    highlight: ["Node.js", "NestJS", "TypeScript", "React", "PostgreSQL"],
  },
  {
    company: "Fraunhofer IPT",
    logo: "/images/companies/fraunhofer.png",
    url: "https://www.ipt.fraunhofer.de",
    role: "Software Developer for Cloud Computing",
    location: "Aachen - Germany",
    period: "January 2023 - February 2024",
    description:
      "Development and maintenance of cloud simulation interfaces, using React, Typescript, JavaScript and MUI on the front-end. Creation of microservices for automating engineering simulations with Python, focusing on parameter validation and CRUD operations. Management and integration of microservices in the cloud computing infrastructure, focusing on the organization and administration of parameters and dependencies. Development of microservices to unify simulation result files into a single structured HDF file, facilitating visualization and analysis. Experience with the acquisition, processing and analysis of data obtained during the milling of aero engine components, using LabView, DIAdem and GraphQL.",
    stack: [
      "Python",
      "Microservices",
      "React",
      "TypeScript",
      "MUI",
      "HDF5",
      "GraphQL",
      "LabVIEW",
      "DIAdem",
    ],
    highlight: ["Python", "Microservices", "React", "TypeScript"],
  },
  {
    company: "Huawei",
    logo: "/images/companies/huawei.png",
    url: "https://www.huawei.com",
    role: "Frontend Developer",
    location: "Sorocaba - Brazil · Internship",
    period: "May 2021 - December 2022",
    description:
      "Frontend developer of websites and systems, where every day I was able to put my skills to use: JavaScript, VueJs, HTML, CSS and SQL to the test, aiming for constant improvement and learning",
    stack: ["Vue.js", "JavaScript", "HTML", "CSS", "SQL"],
    highlight: ["Vue.js", "JavaScript"],
  },
  {
    company: "VCP Automation",
    logo: "/images/companies/vcp.png",
    role: "Mechatronics Technician",
    location: "Sorocaba - Brazil",
    period: "January 2020 - May 2021",
    description:
      "Working with IT, projecting parts in CAD, providing services, assembling and designing panels, among others",
    stack: ["IT support", "CAD", "Electrical panels"],
    highlight: ["IT support"],
  },
]

export const education = [
  {
    school: "AWS",
    course: "Certified Cloud Practitioner",
    period: "Jun 2026",
    url: "https://www.credly.com/badges/28a4540b-7bc6-41b2-b1e3-29f8fbdd24c3",
  },
  {
    school: "Facens",
    course: "Computer Engineering",
    period: "Jan 2020 - Dec 2025",
    url: "https://facens.br",
  },
  {
    school: "Senai",
    course: "Mechatronic Technician",
    period: "Jan 2017 - Dec 2019",
    url: "https://www.sp.senai.br",
  },
  {
    school: "Wizard",
    course: "English",
    period: "Jan 2011 - Dec 2017",
    url: "https://www.wizard.com.br",
  },
  {
    school: "Sesi",
    course: "High School",
    period: "Jan 2016 - Dec 2019",
    url: "https://www.sesisp.org.br",
  },
]
