import ProjectCard from "../components/ProjectCard"; // ✅ funciona

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string;
}

/* =======================
   TODOS LOS PROYECTOS
======================= */

const allProjects: Project[] = [
  {
    title: "Daily News",
    description: "Sitio web responsivo de noticias con HTML, CSS y JavaScript, utilizando JSON.",
    image: "img/project-1.png",
    link: "https://dailynewwes.netlify.app/",
    tech: "HTML| CSS | JAVASCRIPT | GIT | GITHUB",
  },
  {
    title: "CRM CLIENT",
    description: "CRM para empresas que necesiten gestionar información de clientes.",
    image: "img/project-2.png",
    link: "https://clientmanagerr.netlify.app/",
    tech: "REACT.JS | TAILWIND | GIT | GITHUB | VITE | FETCH API | TYPESCRIPT",
  },
  {
    title: "Blog de Viajes",
    description: "Blog interactivo sobre turismo",
    image: "img/blogviajes.webp",
    link: "#",
    tech: "HTML5 | CSS3 | JAVASCRIPT | TAILWINDCSS",
  },
  {
    title: "Basilico Ice Cream ",
    description: "Sitio web responsivo de heladería con HTML, CSS y JavaScript.",
    image: "img/project-4.png",
    link: "https://basilicocream.netlify.app/",
    tech: "HTML | CSS | JAVASCRIPT | Librerias",
  },
  // Agregá aquí todos los proyectos nuevos que quieras mostrar
];

/* =======================
   COMPONENTE
======================= */

export default function AllProjectsPage() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-purple-950 to-black">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Todos los proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {allProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
