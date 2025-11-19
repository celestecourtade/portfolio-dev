import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string;
}

const frontendProjects: Project[] = [
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
    title: "CRM ClientManager",
    description: "Sistema de gestión de clientes",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | FETCH API | GIT | GITHUB",

  },
  {
    title: "Sistema de Inventario",
    description: "Gestor de inventarios de productos",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | FETCH API | GIT | GITHUB",
  },
  {
    title: "Gestor de Turnos y Reservas",
    description: "Plataforma de reservas",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "HTML5 | CSS3 | TAILWINDCSS | JAVASCRIPT | FETCH API | GIT | GITHUB",
  },
  {
    title: "Tablero Kanban estilo Trello",
    description: "Tablero para gestionar proyectos",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | FETCH API | GIT | GITHUB",
  },
];

const backendProjects: Project[] = [
  {
    title: "Sistema de Reservas para Centro de Estética",
    description: "Gestión de turnos, servicios y horarios para un centro de estética.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | NESTJS | POSTGRESQL | DOCKER | GIT | GITHUB",
  },
  {
    title: "Sistema de Inventario para Tienda de Ropa “UrbanStyle”",
    description: "Control de productos, categorías y stock para una tienda de ropa.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | NESTJS | POSTGRESQL | DOCKER | GIT | GITHUB",
  },
  {
    title: "Sistema de Usuarios y Autenticación para Academia Online “EduTech”",
    description: "egistro, login y roles para plataforma educativa.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
    tech: "REACT.JS | VITE | TYPESCRIPT | TAILWINDCSS | NESTJS | POSTGRESQL | DOCKER | GIT | GITHUB",
  },
];

const uxProjects: Project[] = [
  {
    title: "Patitas Perdidas",
    description: "Diseño ux/ui de app para buscar mascotas",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

export default function Projects() {
  const [category, setCategory] = useState<"frontend" | "backend" | "ux">("frontend");
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
      setStartIndex(0); // reset al cambiar tamaño
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getProjects = () => {
    if (category === "frontend") return frontendProjects;
    if (category === "backend") return backendProjects;
    return uxProjects;
  };

  const handlePrev = () => setStartIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex(prev => Math.min(prev + 1, frontendProjects.length - visibleCount));

  return (
    <section
      id="projects"
      className="py-24 text-center bg-gradient-to-b from-purple-950 to-black"
    >
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Proyectos
      </h2>

      {/* Botones de categoría */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["frontend", "backend", "ux"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat as any);
              setStartIndex(0);
            }}
            className={`px-6 py-2 rounded-xl font-semibold transition
              ${
                category === cat
                  ? "bg-fuchsia-500 text-black shadow-[0_0_15px_#ff00ff]"
                  : "bg-black/40 text-fuchsia-300 border border-fuchsia-500 hover:shadow-[0_0_15px_#ff00ff]"
              }`}
          >
            {cat === "frontend" ? "Frontend" : cat === "backend" ? "Backend" : "UX/UI"}
          </button>
        ))}
      </div>

      {/* FRONTEND - Carrusel */}
      {category === "frontend" && (
        <div className="relative max-w-6xl mx-auto">
          {/* Flechas redondas */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-fuchsia-500 text-black rounded-full shadow-lg hover:bg-fuchsia-600 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={startIndex === 0}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-fuchsia-500 text-black rounded-full shadow-lg hover:bg-fuchsia-600 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={startIndex >= frontendProjects.length - visibleCount}
          >
            ❯
          </button>

          {/* Carrusel */}
          <div className="flex gap-6 justify-center">
            {frontendProjects
              .slice(startIndex, startIndex + visibleCount)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-[300px] bg-black/40 border border-fuchsia-500 rounded-2xl shadow-[0_0_20px_#ff00ff]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1 text-left">
                    <h3 className="text-xl font-bold text-fuchsia-300 mb-1 drop-shadow-[0_0_6px_#ff00ff]">
                      {project.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-2">{project.description}</p>
                    {project.tech && (
                      <p className="text-fuchsia-400 font-semibold text-xs mb-3 border-l-4 border-fuchsia-500 pl-2">
                        {project.tech}
                      </p>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-3 py-2 text-sm font-semibold rounded-2xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_15px_#ff00ff] text-center"
                    >
                      Ver proyecto
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 gap-2">
            {frontendProjects.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx >= startIndex && idx < startIndex + visibleCount
                    ? "bg-fuchsia-500"
                    : "bg-purple-700"
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}

      {/* BACKEND */}
      {category === "backend" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {backendProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-black/40 border border-fuchsia-500 rounded-2xl shadow-[0_0_20px_#ff00ff]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-1 text-left">
                <h3 className="text-xl font-bold text-fuchsia-300 mb-1 drop-shadow-[0_0_6px_#ff00ff]">
                  {project.title}
                </h3>
                <p className="text-purple-200 text-sm mb-2">{project.description}</p>
                {project.tech && (
                      <p className="text-fuchsia-400 font-semibold text-xs mb-3 border-l-4 border-fuchsia-500 pl-2">
                        {project.tech}
                      </p>
                    )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-3 py-2 text-sm font-semibold rounded-2xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_15px_#ff00ff] text-center"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* UX/UI */}
      {category === "ux" && (
        <div className="max-w-sm mx-auto px-4">
          {uxProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-black/40 border border-fuchsia-500 rounded-2xl shadow-[0_0_20px_#ff00ff]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-1 text-left">
                <h3 className="text-xl font-bold text-fuchsia-300 mb-1 drop-shadow-[0_0_6px_#ff00ff]">
                  {project.title}
                </h3>
                <p className="text-purple-200 text-sm mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-3 py-2 text-sm font-semibold rounded-2xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_15px_#ff00ff] text-center"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
