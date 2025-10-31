export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "UX/UI", "Git", "Figma" , "Astro"];

  return (
    <section id="skills" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-10 drop-shadow-[0_0_15px_#ff00ff]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 border border-fuchsia-500 rounded-xl text-fuchsia-300 hover:bg-fuchsia-600 hover:text-white transition shadow-[0_0_10px_#ff00ff]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
