import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  frontendProjects,
  backendProjects,
  uxProjects,
} from "../data/projectsData";

import type { Project } from "../data/projectsData";

export default function Projects() {
  const [category, setCategory] = useState<
    "frontend" | "backend" | "ux"
  >("frontend");

  const currentProjects =
    category === "frontend"
      ? frontendProjects
      : category === "backend"
      ? backendProjects
      : uxProjects;

  return (
    <section
      id="projects"
      className="py-24 text-center bg-gradient-to-b from-purple-950 to-black"
    >
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10">
        Proyectos
      </h2>

      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {["frontend", "backend", "ux"].map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat as "frontend" | "backend" | "ux")
            }
            className={`px-6 py-2 rounded-xl font-semibold transition
              ${
                category === cat
                  ? "bg-fuchsia-500 text-black"
                  : "bg-black/40 text-fuchsia-300 border border-fuchsia-500"
              }`}
          >
            {cat === "frontend"
              ? "Frontend"
              : cat === "backend"
              ? "Backend"
              : "UX/UI"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  category,
}: {
  project: Project;
  category: "frontend" | "backend" | "ux";
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-black/40 border border-fuchsia-500 rounded-3xl min-h-[430px] hover:scale-105 transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-t-3xl"
      />

      <div className="p-5 flex flex-col flex-1 text-left">
        <h3 className="text-xl font-bold text-fuchsia-300 mb-2">
          {project.title}
        </h3>

        <p className="text-purple-200 text-sm mb-3">
          {project.description}
        </p>

        {project.tech && (
          <p className="text-cyan-300 font-semibold text-xs mb-4 border-l-4 border-cyan-400 pl-2">
            {project.tech}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-2">
          {category === "frontend" && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 rounded-xl font-semibold border border-fuchsia-500 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-black transition"
            >
              Ver sitio web
            </a>
          )}

          {category === "ux" && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 rounded-xl font-semibold border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
            >
              Ver prototipo
            </a>
          )}

          {category === "backend" && (
            <>
              {project.page && (
                <button
                  onClick={() => navigate(project.page!)}
                  className="
                    w-full
                    px-4
                    py-2
                    rounded-xl
                    font-semibold
                    border
                    border-fuchsia-500
                    text-fuchsia-300
                    bg-black/40
                    backdrop-blur-md
                    transition
                    duration-300
                    hover:bg-fuchsia-500
                    hover:text-black
                    hover:shadow-[0_0_15px_#ff00ff]
                    active:scale-95
                  "
                >
                  Ver detalles
                </button>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 rounded-xl font-semibold border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
                >
                  Ver video
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}