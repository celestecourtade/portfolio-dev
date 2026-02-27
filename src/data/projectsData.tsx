export interface Project {
    title: string;
    description: string;
    image: string;
    link?: string;
    page?: string;
    video?: string;
    tech?: string;
  }
  
  export const frontendProjects: Project[] = [
    {
      title: "Tienda Tech",
      description: "Tienda de tecnología",
      image: "img/project1.webp",
      link: "https://storetecch.netlify.app/",
      tech: "REACT | VITE | TYPESCRIPT | TAILWINDCSS | GIT | GITHUB",
    },
    {
      title: "Basilico Ice Cream",
      description: "Sitio web interactivo",
      image: "img/project-4.png",
      link: "https://basilicocream.netlify.app/",
      tech: "HTML5 | CSS3 | JAVASCRIPT | GIT | GITHUB",
    },
    {
      title: "Argenpedia",
      description: "Enciclopedia interactiva para niños",
      image: "img/argenpedia.webp",
      link: "https://argenpedia.netlify.app/",
      tech: "HTML5 | CSS3 | JAVASCRIPT | ASTRO | GIT | GITHUB",
    },
  ];
  
  export const backendProjects: Project[] = [
    {
      title: "Sistema de gestión de turnos médicos",
      description:
        "Sistema fullstack para gestion de turnos medicos.",
      image: "img/back-1.jpeg",
      page: "/projects/medical-appointment",
      video: "https://youtu.be/QhCF5aOlEwo",
      tech:
        "REACT | TAILWIND | TYPESCRIPT | NESTJS | POSTGRESQL | PRISMA | DOCKER",
    },
  ];
  
  export const uxProjects: Project[] = [
    {
      title: "Patitas Perdidas",
      description:
        "Diseño UX/UI de app para buscar mascotas perdidas.",
      image: "img/project-uxui.png",
      link: "https://www.figma.com/proto/5Y6oj2eadx6v1djjfXXFSR/Proyecto-Patitas-Perdidas",
      tech: "UX RESEARCH | UI DESIGN | FIGMA | PROTOTYPE",
    },
  ];