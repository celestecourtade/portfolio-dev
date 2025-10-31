export default function Education() {
  const studies = [
    {
      year: "2023",
      title: "Desarrollo Web",
      institute: "Coderhouse",
      description: "HTML, CSS, Grid, Flexbox, Responsive, Hosting",
      certificateLink: "#",
    },
    {
      year: "2024",
      title: "Diseño UX/UI",
      institute: "Agencia de Habilidades (Programa Codo a Codo)",
      description: "Aprendizaje de diseño centrado en el usuario y prototipado",
      certificateLink: "#",
    },
    {
      year: "2025",
      title: "Licenciatura en Informática",
      institute: "Universidad X",
      description: "Primer año cursando la licenciatura en informática, fundamentos de programación y matemáticas",
      certificateLink: "#",
    },
    {
      year: "2025",
      title: "Programación Fullstack",
      institute: "Fundación Integrar (Programa Integrar Tec)",
      description: "Desarrollo de aplicaciones web fullstack con React, Node.js y bases de datos",
      certificateLink: "#",
    },
  ];

  // Ordenar por año ascendente
  const sortedStudies = studies.sort((a, b) => Number(a.year) - Number(b.year));

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-purple-950 to-black text-center">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-12 drop-shadow-[0_0_15px_#ff00ff]">
        Educación
      </h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Línea central visible solo en md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fuchsia-500/50 rounded-full"></div>

        <div className="flex flex-col space-y-12">
          {sortedStudies.map((study, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="bg-black/40 border border-fuchsia-500 rounded-2xl p-6 shadow-[0_0_20px_#ff00ff] w-full md:w-5/12 hover:scale-105 transition">
                <h3 className="text-xl text-fuchsia-300 font-semibold">{study.title}</h3>
                <span className="text-purple-300 text-sm">{study.institute}</span>
                <p className="text-purple-200 mt-2 text-sm">{study.description}</p>
                <span className="text-fuchsia-400 mt-2 block font-bold">{study.year}</span>

                {/* Botón ver certificado */}
                <a
                  href={study.certificateLink}
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 border border-fuchsia-400 rounded-xl text-fuchsia-400 font-semibold hover:bg-fuchsia-500 hover:text-black shadow-[0_0_10px_#ff00ff] hover:shadow-[0_0_20px_#ff00ff] transition"
                >
                  Ver certificado
                </a>
              </div>

              {/* Indicador de línea central solo en md+ */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-fuchsia-400 border-2 border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
