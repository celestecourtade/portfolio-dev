interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
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
