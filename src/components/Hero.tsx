export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-purple-900 to-black overflow-hidden"
    >
      {/* Capa superior para suavizar el corte con el header */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-950 to-transparent" />

      <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 drop-shadow-[0_0_25px_#ff00ff] relative z-10">
        Celeste Courtade
      </h1>
      <p className="mt-4 text-xl text-purple-200 relative z-10">
        Desarrolladora Fullstack | React.js | TypeScript | NestJS | PostgreSQL | UX/UI Designer
      </p>
      <a
        href="#projects"
        className="mt-8 px-8 py-3 text-lg font-semibold rounded-2xl border border-fuchsia-500 hover:bg-fuchsia-600 transition shadow-[0_0_20px_#ff00ff] relative z-10"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}
