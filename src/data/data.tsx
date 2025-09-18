export const images = import.meta.glob("../assets/img/*", { eager: true });

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
  { name: "HTML", logo: images["../assets/img/html-1.svg"].default },
  { name: "CSS", logo: images["../assets/img/css-3.svg"].default },
  { name: "Node JS", logo: images["../assets/img/nodejs-icon.svg"].default },
  { name: "Docker", logo: images["../assets/img/docker.svg"].default },
  { name: "Jenkins", logo: images["../assets/img/jenkins-1.svg"].default },
  { name: "NPM", logo: images["../assets/img/npm-square-red-1.svg"].default },
  { name: "Vite", logo: images["../assets/img/vitejs.svg"].default },
  { name: "PostgresSQL", logo: images["../assets/img/postgresql.svg"].default },
  { name: "MySQL", logo: images["../assets/img/mysql-3.svg"].default },
  { name: "TailwindCSS", logo: images["../assets/img/tailwind-css-2.svg"].default },
  { name: "GCP", logo: images["../assets/img/google-cloud-1.svg"].default },
  { name: "Material UI", logo: images["../assets/img/mui.png"].default },
  { name: "GitHub", logo: images["../assets/img/github.png"].default },
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
    title: "Frontend Developer",
    company: "PT. PLN Icon Plus",
    period: "September 2025 - Present",
    tasks: [

    ]
  },
  {
    title: "Frontend Developer",
    company: "Pt. Praisindo Teknologi",
    period: "May 2025 - August 2025",
    tasks: [
      "Developed the frontend of the Wealth Management System (WMS) for Bank Danamon Indonesia using React, TypeScript, Tailwind CSS, and Material UI (MUI).",
      "Applied micro-frontend architecture for scalable and modular development.",
      "Managed CI/CD pipelines and deployments via Azure DevOps.",
      "Improved app performance and reduced errors by 25% through debugging.",
    ],
  },
  {
    title: "Support Apps",
    company: "Swakarya Insan Mandiri",
    period: "January 2023 - January 2025",
    tasks: [
      "Basic Testing of SIT and UAT Systems.",
      "Create Documentation such as Guides & Project Timelines.",
      "Understanding Basic SQL Query.",
      "Developing and fixing bugs in coding.",
      "Monitor full storage.",
      "Make reports on work results.",
      "Correct data from database.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    period: "July 2023 - Present",
    tasks: [
      "Building and maintaining web applications using React.js.",
      "Creating responsive UI with Tailwind CSS.",
      "Implementing authentication with JWT.",
      "Optimizing performance and SEO.",
      "Fixing bugs and enhancing UI/UX.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const imgProject = import.meta.glob("../assets/*.png", { eager: true });

export const projects: Project[] = [
  {
    title: "SIGESIT – Attendance Management System for Cleaning Services",
    description:
      "As part of the Support Apps team, I played a role in developing and maintaining an attendance management application for a cleaning service...",
    technologies: ["Laravel", "Bootstrap", "PostgreSQL", "GCP", "Docker"],
    image: imgProject["../assets/sigesit.png"].default,
    link: "https://github.com/fahrulfahmi/SIGESIT",
  },
  {
    title: "IDNS (Infotech Digital Nusantara) – Company Profile Website",
    description:
      "As a full-stack developer, I designed and built a company profile website for IDNS...",
    technologies: ["React.js", "Node.js", "MySQL", "TailwindCSS"],
    image: imgProject["../assets/IDNS.png"].default,
    link: "https://idns.co.id/",
  },
  {
    title: "Gallery Application – Content Calendar & IT Ticketing System",
    description: "This application is used for company activity calendar content, payroll management...",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    image: imgProject["../assets/gallery.png"].default,
    link: "https://devgallery.simgroup.co.id/login",
  },
  {
    title: "Company Profile Website",
    description: "In this project, I helped add new features to a company profile website built using WordPress...",
    technologies: ["WordPress", "PostgreSQL"],
    image: imgProject["../assets/websim.png"].default,
    link: "https://sim.co.id/",
  },
  {
    title: "Arzetti Law Firm – Company Profile Landing Page",
    description: "In this project, I developed a company profile landing page for Arzetti Law Firm...",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    image: imgProject["../assets/arzetti.png"].default,
    link: "https://arzettilaw.co.id/",
  },
  {
    title: "Gajian Duluan – Company Profile Landing Page",
    description: "In this project, I developed a company profile landing page for Gajian Duluan...",
    technologies: ["React.js", "Tailwind CSS"],
    image: imgProject["../assets/gd.png"].default,
    link: "https://web.gajianduluan.id/",
  },
  {
    title: "PHL – Company Profile Landing Page",
    description: "In this project, I developed a company profile landing page for PHL...",
    technologies: ["Laravel", "Bootstrap"],
    image: imgProject["../assets/phl.png"].default,
    link: "https://phl.co.id/",
  },
  {
    title: "JAGOTI – Learning Management System (LMS)",
    description: "JAGOTI is a cloud-based Learning Management System designed to track employee attendance...",
    technologies: ["Laravel", "GCP", "PostgreSQL", "Bootstrap"],
    image: imgProject["../assets/lms.png"].default,
    link: "https://attendancesystem.com",
  },
  {
    title: "MyTravelindo",
    description:
      "Website company profile yang menyediakan fitur role admin untuk mengelola konten secara mudah dan efisien...",
    technologies: ["React JS", "Hosting", "SQL", "Tailwind CSS", "Node JS", "Express JS"],
    image: imgProject["../assets/myone.png"].default,
    link: "https://myonetravelindo.com/",
  },
];
