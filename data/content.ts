export const profile = {
  name: "Nathan Roberto",
  role: "Full Stack Developer",
  location: "Sorocaba, Brazil",
  photo: "/images/me/professionalPhoto.jpeg",
  aboutPhoto: "/images/me/meLondon.jpeg",
  summary:
    "Detail-oriented Full Stack Developer with a solid background in Computer Engineering and international experience as a software developer in Germany. Skilled in building scalable web applications using JavaScript, TypeScript, Node.js, and modern front-end frameworks. Seeking to contribute to a product-driven team focused on innovation, quality, and real-world impact.",
  quote: {
    text: "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains",
    author: "Bill Gates",
  },
  yearsOfExperience: "6+",
};

export const links = {
  cv: "https://drive.google.com/uc?export=download&id=1czCuP7hg740EeK8e_DSE12Xe61DFhIX5",
  email: "nathan.rgs@gmail.com",
  phone: "+55 (15) 99741-1076",
  whatsapp: "https://wa.me/5515997411076",
  github: "https://github.com/Nathan-Rgs",
  linkedin: "https://www.linkedin.com/in/nathan-rgs/",
  instagram: "https://www.instagram.com/_nathan_rgs/",
  maps: "https://www.google.com/maps/place/sorocaba/data=!4m2!3m1!1s0x94c58abceb48f503:0x947f99ac59d0781b",
};

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack", desktopOnly: true },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience", desktopOnly: true },
  { href: "#contact", label: "Contact" },
];

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
      "4.5 year's experience developing api's and microservices using a wide variety of architectures and databases.",
  },
  {
    title: "Fullstack",
    years: "End to end",
    description:
      "Developing end-to-end applications from database architecture and api's / microservices to the client interface",
  },
];

export type Skill = {
  title: string;
  since: string;
  description: string;
  tools: string[];
  /** Experience comes only from university coursework, not professional work. */
  academic?: boolean;
};

export const skills: Skill[] = [
  {
    title: "Vue.js",
    since: "2021 - Present",
    description: "Used in my first internship at Huawei and currently at Omie, building CRM flows and design-system components.",
    tools: ["Vue.js", "JavaScript", "Design systems"],
  },
  {
    title: "React + TypeScript",
    since: "2022 - Present",
    description: "Interfaces, websites and systems, from cloud simulation tools at Fraunhofer to full-stack products.",
    tools: ["React", "TypeScript", "TanStack Query", "Zod", "shadcn/ui"],
  },
  {
    title: "Node.js & NestJS",
    since: "2023 - Present",
    description: "APIs and microservices for the most varied applications; led back-end development at Epiousion IT.",
    tools: ["Node.js", "NestJS", "Express"],
  },
  {
    title: "Python & FastAPI",
    since: "2023 - Present",
    description: "Engineering microservices at Fraunhofer IPT and layered REST APIs with auth, migrations and tests.",
    tools: ["Python", "FastAPI", "SQLAlchemy", "Pytest"],
  },
  {
    title: "Databases & ORMs",
    since: "2023 - Present",
    description: "Relational and NoSQL data modeling with typed data-access layers.",
    tools: ["PostgreSQL", "SQL Server", "MongoDB", "Prisma", "TypeORM", "Drizzle"],
  },
  {
    title: "AI & Computer Vision",
    since: "2024 - 2025",
    description: "Academic experience only: object detection and gesture recognition projects from my Computer Engineering degree.",
    tools: ["YOLOv8", "OpenCV", "MediaPipe", "scikit-learn"],
    academic: true,
  },
];

export const stack = [
  "TypeScript", "JavaScript", "Vue.js", "React", "Next.js", "Vite", "TanStack Query", "Zod",
  "shadcn/ui", "MUI", "Tailwind", "Node.js", "NestJS", "Express", "Python", "FastAPI",
  "Java", "Spring", "GraphQL", "PostgreSQL", "SQL Server", "MongoDB", "Prisma", "Drizzle",
  "SQLAlchemy", "Pytest", "Docker", "Git/GitHub", "React Native", "HTML", "CSS",
];

/** Nodes shown in the Stack beam diagram: left = client, right = server. */
export const beamNodes = {
  left: ["TypeScript", "Vue.js", "React"],
  right: ["Node.js", "FastAPI", "PostgreSQL"],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  image?: string;
  /** Visual style of the generated preview when there is no screenshot. */
  mock: "dashboard" | "api" | "vision" | "gesture" | "mobile";
  featured?: boolean;
  /** University coursework project. */
  academic?: boolean;
};

export const projects: Project[] = [
  {
    title: "Coin Collection Platform",
    description:
      "Full-stack inventory and catalog for an inherited coin collection: CRUD, advanced filters, image uploads, JWT auth and an analytics dashboard. Layered FastAPI backend (routers → services → repositories) with Alembic migrations.",
    tags: ["React", "TypeScript", "TanStack Query", "FastAPI", "PostgreSQL", "Docker"],
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
];

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
      "Developed responsive and maintainable user interfaces by translating product requirements and UI/UX designs into production-ready code. Improved the scalability and stability of the company’s CRM, supporting continuous product evolution. Collaborated with back-end engineers to integrate APIs and services, ensuring reliable data flow and smooth user experiences. Contributed to the creation and maintenance of design system repositories, promoting component reuse and UI consistency. Participated in code reviews, testing, and knowledge sharing to maintain code quality and team alignment. Worked with JavaScript and Vue.js in an agile development environment, using GitHub for version control and collaboration.",
  },
  {
    company: "Epiousion IT",
    logo: "/images/companies/epiousion.png",
    role: "Fullstack Developer",
    location: "Sorocaba - Brazil",
    period: "February 2024 - August 2024",
    description:
      "Led back-end development using Node.js, NestJS, and TypeScript to deliver robust and scalable APIs. Built and maintained data access layers with TypeORM and PrismaORM, ensuring consistency and performance. Developed full-stack features using React.js and Tailwind, integrating front-end and back-end components. Designed and worked with relational databases (PostgreSQL, SQL Server) and NoSQL databases (MongoDB), applying solid data modeling principles.",
  },
  {
    company: "Fraunhofer IPT",
    logo: "/images/companies/fraunhofer.png",
    url: "https://www.ipt.fraunhofer.de",
    role: "Software Developer for Cloud Computing",
    location: "Aachen - Germany",
    period: "January 2023 - January 2024",
    description:
      "Development and maintenance of cloud simulation interfaces, using React, Typescript, JavaScript and MUI on the front-end. Creation of microservices for automating engineering simulations with Python, focusing on parameter validation and CRUD operations. Management and integration of microservices in the cloud computing infrastructure, focusing on the organization and administration of parameters and dependencies. Development of microservices to unify simulation result files into a single structured HDF file, facilitating visualization and analysis. Experience with the acquisition, processing and analysis of data obtained during the milling of aero engine components, using LabView, DIAdem and GraphQL.",
  },
  {
    company: "Huawei",
    logo: "/images/companies/huawei.png",
    url: "https://www.huawei.com",
    role: "Web Development Internship",
    location: "Sorocaba - Brazil",
    period: "May 2021 - December 2022",
    description:
      "Frontend developer of websites and systems, where every day I was able to put my skills to use: JavaScript, VueJs, HTML, CSS and SQL to the test, aiming for constant improvement and learning",
  },
  {
    company: "VCP Automation",
    logo: "/images/companies/vcp.png",
    role: "Mechatronics Technician",
    location: "Sorocaba - Brazil",
    period: "January 2020 - May 2021",
    description:
      "Working with IT, projecting parts in CAD, providing services, assembling and designing panels, among others",
  },
];

export const education = [
  { school: "Facens", course: "Computer Engineering", period: "Jan 2020 - Dec 2025", url: "https://facens.br" },
  { school: "Senai", course: "Mechatronic Technician", period: "Jan 2017 - Dec 2019", url: "https://www.sp.senai.br" },
  { school: "Wizard", course: "English", period: "Jan 2011 - Dec 2017", url: "https://www.wizard.com.br" },
  { school: "Sesi", course: "High School", period: "Jan 2016 - Dec 2019", url: "https://www.sesisp.org.br" },
];
