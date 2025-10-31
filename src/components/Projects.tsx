import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string; // URL de la imagen
  link: string; // URL del proyecto
}

const frontendProjects: Project[] = [
  {
    title: "Frontend 1",
    description: "Breve descripción del proyecto frontend 1",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Frontend 2",
    description: "Breve descripción del proyecto frontend 2",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Frontend 3",
    description: "Breve descripción del proyecto frontend 3",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const backendProjects: Project[] = [
  {
    title: "Backend 1",
    description: "Breve descripción del proyecto backend 1",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Backend 2",
    description: "Breve descripción del proyecto backend 2",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Backend 3",
    description: "Breve descripción del proyecto backend 3",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const uxProjects: Project[] = [
  {
    title: "UX/UI 1",
    description: "Breve descripción del proyecto UX/UI 1",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "UX/UI 2",
    description: "Breve descripción del proyecto UX/UI 2",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "UX/UI 3",
    description: "Breve descripción del proyecto UX/UI 3",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

export default function Projects() {
  const [category, setCategory] = useState<"frontend" | "backend" | "ux">("frontend");

  const getProjects = () => {
    if (category === "frontend") return frontendProjects;
    if (category === "backend") return backendProjects;
    return uxProjects;
  };

  return (
    <section id="projects" className="py-24 text-center bg-gradient-to-b from-purple-950 to-black">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Proyectos
      </h2>

      {/* Botones de categoría */}
      <div className="flex justify-center gap-6 mb-12">
        {["frontend", "backend", "ux"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as any)}
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

      {/* Cards de proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {getProjects().map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-black/40 border border-fuchsia-500 rounded-2xl shadow-[0_0_20px_#ff00ff] hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl text-fuchsia-300 mb-2">{project.title}</h3>
              <p className="text-purple-200 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 text-lg font-semibold rounded-2xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_15px_#ff00ff]"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
