export const images = (import.meta as any).glob("../assets/img/*", { eager: true });

export interface Language {
  name: string;
  logo: string;
}

export const languages: Language[] = [
  { name: "React JS", logo: images["../assets/img/react-1.svg"].default },
  { name: "Golang", logo: images["../assets/img/golang-1.svg"].default },
  { name: "TypeScript", logo: images["../assets/img/typescript.svg"].default },
  { name: "Next JS", logo: images["../assets/img/next-js.svg"].default },
  { name: "Javascript", logo: images["../assets/img/javascript.svg"].default },
  { name: "Node JS", logo: images["../assets/img/nodejs-icon.svg"].default },
  { name: "Docker", logo: images["../assets/img/docker.svg"].default },
  { name: "Jenkins", logo: images["../assets/img/jenkins-1.svg"].default },
  { name: "NPM", logo: images["../assets/img/npm-square-red-1.svg"].default },
  { name: "Vite", logo: images["../assets/img/vitejs.svg"].default },
  { name: "PostgresSQL", logo: images["../assets/img/postgresql.svg"].default },
  { name: "MySQL", logo: images["../assets/img/mysql-3.svg"].default },
  {
    name: "TailwindCSS",
    logo: images["../assets/img/tailwind-css-2.svg"].default,
  },
  { name: "GCP", logo: images["../assets/img/google-cloud-1.svg"].default },
  { name: "Material UI", logo: images["../assets/img/mui.png"].default },
  { name: "vue", logo: images["../assets/img/vue.svg"].default },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "PT. PLN Icon Plus",
    period: "September 2025 - Juli 2026",
    tasks: [
      "Led the frontend development of the AP2T (Integrated Service Application), supporting the digitalization of PLN’s customer service operations.",
      "Built and maintained a scalable and responsive user interface using Vue.js and Vuex.",
      "Integrated frontend applications with enterprise backend APIs to ensure real-time and accurate customer data.",
      "Improved application performance, stability, and reliability through optimization and bug fixing.",
      "Established coding standards and built reusable component architecture to improve team productivity and consistency.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "PT. Praisindo Teknologi",
    period: "May 2025 - August 2025",
    tasks: [
      "Developed the frontend of a Wealth Management System (WMS) for Bank Danamon Indonesia using React, TypeScript, Tailwind CSS, and Material UI (MUI).",
      "Implemented micro-frontend architecture to enable scalable and modular development.",
      "Managed CI/CD pipelines and deployments through Azure DevOps.",
      "Improved application performance and reduced errors by 25% through debugging and optimization.",
    ],
  },
  {
    title: "Application Support",
    company: "Swakarya Insan Mandiri",
    period: "January 2023 - January 2025",
    tasks: [
      "Performed SIT and UAT testing to validate system readiness before production release.",
      "Created technical documentation, user guides, and project timelines for internal teams.",
      "Used SQL queries to validate, correct, and maintain data integrity in production databases.",
      "Assisted developers by identifying bugs, verifying fixes, and supporting production issues.",
      "Produced operational and performance reports for management and stakeholders.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "July 2023 - Present",
    tasks: [
      "Built and maintained production-ready web applications using React.js.",
      "Designed responsive and modern user interfaces with Tailwind CSS.",
      "Implemented secure authentication and API integration using JWT.",
      "Optimized application performance, SEO, and overall user experience.",
      "Continuously improved applications through bug fixing and feature enhancements.",
    ],
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certificateImages = (import.meta as any).glob("../assets/Certificate/*", {
  eager: true,
});

export const certificates: Certificate[] = [
  {
    title: "React Developer",
    issuer: "Pijar Camp",
    year: "2024",
    image: certificateImages["../assets/Certificate/react.png"].default,
  },
  {
    title: "Backend Developer",
    issuer: "Pijar Camp",
    year: "2024",
    image: certificateImages["../assets/Certificate/bacend_dev.png"].default,
  },
  {
    title: "Web Design Development",
    issuer: "kampus Gratis",
    year: "2024",
    image: certificateImages["../assets/Certificate/kampus_gratis.png"].default,
  },
  {
    title: "Backend Golang",
    issuer: "Great Lernning",
    year: "2024",
    image: certificateImages["../assets/Certificate/golang.png"].default,
  },
  {
    title: "Frontend Developer (React JS)",
    issuer: "Hacker Rank",
    year: "2025",
    image: certificateImages["../assets/Certificate/hacrank.png"].default,
  },
  {
    title: "Web Development",
    issuer: "Dicoding",
    year: "2022",
    image: certificateImages["../assets/Certificate/dicoding.png"].default,
  },
  {
    title: "Frontend Developer Fundamental",
    issuer: "Coding Studio by Kawan Koding",
    year: "2022",
    image: certificateImages["../assets/Certificate/coding_studio.jpg"].default,
  },
  {
    title: "Google ADS Fundamental",
    issuer: "Gogle Gapura Digital",
    year: "2021",
    image:
      certificateImages["../assets/Certificate/gapura_digital.jpg"].default,
  },
  {
    title: "Udemy CCNA",
    issuer: "Udemy",
    year: "2023",
    image: certificateImages["../assets/Certificate/udemy_ccna.jpg"].default,
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const imgProject = (import.meta as any).glob("../assets/*.png", { eager: true });

export const projects: Project[] = [
  {
  title: "Tumbuh – Professional Networking Platform",
  description:
    "Developed and maintained scalable frontend features for Tumbuh, a professional networking platform focused on community engagement and knowledge sharing. Built responsive user interfaces, media management, social interactions, content discovery, and optimized user experience across desktop and mobile devices.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API"
  ],
  image: imgProject["../assets/tumbuh.png"].default,
  link: "https://tumbuh.coorvo.com/en",
},
  {
    title: "SIGESIT – Attendance Management System for Cleaning Services",
    description:
      "Built and maintained an internal attendance management system used by cleaning service teams to track daily work, shifts, and reports. The system was deployed on GCP using Docker, with PostgreSQL as the main database to ensure reliable and scalable data storage.",
    technologies: ["Laravel", "Bootstrap", "PostgreSQL", "GCP", "Docker"],
    image: imgProject["../assets/sigesit.png"].default,
    link: "https://github.com/fahrulfahmi/SIGESIT",
  },
  {
    title: "IDNS – Company Profile & Business Website",
    description:
      "Designed and developed a company profile and business website for Infotech Digital Nusantara using a modern full-stack approach. The system was built with React and Node.js to provide fast, responsive UI and flexible backend content management.",
    technologies: ["React.js", "Node.js", "MySQL", "TailwindCSS"],
    image: imgProject["../assets/IDNS.png"].default,
    link: "https://idns.co.id/",
  },
  {
    title: "Gallery Application – Content Calendar & IT Ticketing System",
    description:
      "Developed an internal application for managing company content calendars, payroll-related data, and IT ticketing. The system centralized operational workflows into one platform to improve visibility and reduce manual coordination.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    image: imgProject["../assets/gallery.png"].default,
    link: "https://devgallery.simgroup.co.id/login",
  },
  {
    title: "SIM Group – Corporate Website",
    description:
      "Enhanced and extended a corporate website built on WordPress by adding new features and improving content management, helping the company maintain a modern and up-to-date online presence.",
    technologies: ["WordPress", "PostgreSQL"],
    image: imgProject["../assets/websim.png"].default,
    link: "https://sim.co.id/",
  },
  {
    title: "Arzetti Law Firm – Corporate Website",
    description:
      "Built a professional corporate website for a law firm using Laravel and MySQL, providing a clean and reliable platform to present legal services and company information.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    image: imgProject["../assets/arzetti.png"].default,
    link: "https://arzettilaw.co.id/",
  },
  {
    title: "Gajian Duluan – Fintech Landing Page",
    description:
      "Developed a responsive fintech landing page using React and Tailwind CSS to support marketing campaigns and improve user engagement for the Gajian Duluan platform.",
    technologies: ["React.js", "Tailwind CSS"],
    image: imgProject["../assets/gd.png"].default,
    link: "https://web.gajianduluan.id/",
  },
  {
    title: "PHL – Corporate Website",
    description:
      "Created a company profile website for PHL using Laravel and Bootstrap, helping the business present its services in a clear and professional way.",
    technologies: ["Laravel", "Bootstrap"],
    image: imgProject["../assets/phl.png"].default,
    link: "https://phl.co.id/",
  },
  {
    title: "JAGOTI – Learning Management System (LMS)",
    description:
      "Built a cloud-based Learning Management System to manage employee attendance and learning activities, using PostgreSQL and Google Cloud Platform to support reliable data processing and scalability.",
    technologies: ["Laravel", "GCP", "PostgreSQL", "Bootstrap"],
    image: imgProject["../assets/lms.png"].default,
    link: "https://attendancesystem.com",
  },
  {
    title: "MyTravelindo – Travel Management Website",
    description:
      "Developed a full-stack travel company website with admin role management for content and data updates, enabling efficient operation and easy maintenance for business users.",
    technologies: [
      "React JS",
      "Node JS",
      "Express JS",
      "SQL",
      "Tailwind CSS",
      "Hosting",
    ],
    image: imgProject["../assets/myone.png"].default,
    link: "https://myonetravelindo.com/",
  },
];

