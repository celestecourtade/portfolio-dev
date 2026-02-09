import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Importar useNavigate

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string;
}

/* =======================
   DATA
======================= */

export const frontendProjects: Project[] = [
  {
    title: "Tienda Tech",
    description: "Tienda de tecnología",
    image: "img/project1.webp",
    link: "https://storetecch.netlify.app/",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | GIT | GITHUB",
  },
  {
    title: "Argenpedia",
    description: "Enciclopedia interactiva para niños",
    image: "img/argenpedia.webp",
    link: "https://argenpedia.netlify.app/",
    tech: "HTML5 | CSS3 | JAVASCRIPT | ASTRO | GIT | GITHUB",
  },
  {
    title: "Basilico Ice Cream ",
    description: "Sitio web responsivo de heladería con HTML, CSS y JavaScript",
    image: "img/project-4.png",
    link: "https://basilicocream.netlify.app/",
    tech: "HTML | CSS | JAVASCRIPT | LIBRERIA SWIPPER",
  },
];

export const uxProjects: Project[] = [
  {
    title: "Patitas Perdidas",
    description: "Diseño UX/UI de app para buscar mascotas perdidas, utilizando FIGMA. ¡Mira el prototipo final!",
    image: "img/project-uxui.png",
    tech: "Diseño de experiencia de usuario y prototpo de alta fidelidad con figma.",
    link: "https://www.figma.com/proto/5Y6oj2eadx6v1djjfXXFSR/Proyecto-Patitas-Perdidas?node-id=786-13840&p=f&t=iPdXxvN2pIG9mJzI-1&scaling=min-zoom&content-scaling=fixed&page-id=786%3A6521",
  },
];

/* =======================
   COMPONENT
======================= */

export default function Projects() {
  const [category, setCategory] = useState<"frontend" | "ux">("frontend");

  return (
    <section
      id="projects"
      className="py-24 text-center bg-gradient-to-b from-purple-950 to-black"
    >
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Proyectos
      </h2>

      {/* CATEGORÍAS */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["frontend", "ux"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as "frontend" | "ux")}
            className={`px-6 py-2 rounded-xl font-semibold transition
              ${
                category === cat
                  ? "bg-fuchsia-500 text-black shadow-[0_0_15px_#ff00ff]"
                  : "bg-black/40 text-fuchsia-300 border border-fuchsia-500 hover:shadow-[0_0_15px_#ff00ff]"
              }`}
          >
            {cat === "frontend" ? "Frontend" : "UX/UI"}
          </button>
        ))}
      </div>

      {/* FRONTEND */}
      {category === "frontend" && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <ActionButton />
        </>
      )}

      {/* UX/UI */}
      {category === "ux" && (
        <>
          <div className="max-w-sm mx-auto px-4">
            {uxProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <ActionButton />
        </>
      )}
    </section>
  );
}

/* =======================
   REUSABLE CARD
======================= */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-black/40 border border-fuchsia-500 rounded-3xl shadow-[0_0_20px_#ff00ff] min-h-[430px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-t-3xl"
      />

      <div className="p-5 flex flex-col flex-1 text-left">
        <h3 className="text-xl font-bold text-fuchsia-300 mb-1 drop-shadow-[0_0_6px_#ff00ff]">
          {project.title}
        </h3>

        <p className="text-purple-200 text-sm mb-2">{project.description}</p>

        {project.tech && (
          <p className="text-fuchsia-400 font-semibold text-xs mb-4 border-l-4 border-fuchsia-500 pl-2">
            {project.tech}
          </p>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-3 py-2 text-sm font-semibold rounded-xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_15px_#ff00ff] text-center"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}

/* =======================
   BUTTON
======================= */

function ActionButton() {
  const navigate = useNavigate(); // <-- Hook para navegar

  return (
    <div className="mt-12">
      <button
        onClick={() => navigate("/projects")} // <-- Navega a la nueva página
        className="px-8 py-3 rounded-2xl font-semibold border border-fuchsia-500 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-black transition shadow-[0_0_20px_#ff00ff]"
      >
        Ver todos los proyectos
      </button>
    </div>
  );
}
