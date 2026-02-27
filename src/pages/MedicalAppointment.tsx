export default function MedicalAppointment() {
    return (
      <section className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
  
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-10 
                         drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]">
            🩺 Sistema de Gestión de Citas Médicas
          </h1>
  
          <div className="space-y-12 text-purple-200">
  
            {/* DESCRIPCIÓN */}
            <div className="bg-black/40 backdrop-blur-md border border-fuchsia-500/40 
                            rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl text-cyan-400 font-semibold mb-4">
                📌 Descripción del Proyecto
              </h2>
              <p>
                Aplicación web fullstack para la gestión de citas médicas.
                Permite crear, editar, visualizar y administrar turnos mediante
                una interfaz moderna y clara.
              </p>
              <p className="mt-4">
                El objetivo fue construir una solución completa integrando
                frontend y backend, aplicando buenas prácticas de arquitectura.
              </p>
            </div>
  
  
            {/* FUNCIONALIDADES */}
            <div className="bg-black/40 backdrop-blur-md border border-cyan-400/40 
                            rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl text-cyan-400 font-semibold mb-6">
                🚀 Funcionalidades
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                <li>✔ Crear nuevas citas</li>
                <li>✔ Editar citas</li>
                <li>✔ Cancelar citas</li>
                <li>✔ Visualización en lista</li>
                <li>✔ Calendario mensual</li>
                <li>✔ Vista diaria por horario</li>
                <li>✔ Manejo de estados</li>
                <li>✔ Duración personalizada</li>
              </ul>
            </div>
  
            {/* STACK */}
            <div>
              <h2 className="text-2xl text-cyan-400 font-semibold mb-6">
                🛠 Stack Tecnológico
              </h2>
  
              <div className="grid md:grid-cols-2 gap-8">
  
                <div className="bg-black/40 backdrop-blur-md border border-fuchsia-500/40 
                                rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
                  <h3 className="text-xl text-fuchsia-300 font-bold mb-4">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-purple-200">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Context API</li>
                    <li>React Router</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
  
                <div className="bg-black/40 backdrop-blur-md border border-cyan-400/40 
                                rounded-2xl p-8 hover:scale-[1.02] transition duration-300">
                  <h3 className="text-xl text-cyan-300 font-bold mb-4">
                    Backend
                  </h3>
                  <ul className="space-y-2 text-purple-200">
                    <li>NestJS</li>
                    <li>Prisma ORM</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                  </ul>
                </div>
  
              </div>
            </div>
  
            {/* ARQUITECTURA */}
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/40 
                            rounded-2xl p-8">
              <h2 className="text-2xl text-cyan-400 font-semibold mb-4">
                🏗 Arquitectura
              </h2>
              <p>
                Backend modular con NestJS, separación clara entre controladores,
                servicios y acceso a datos mediante Prisma.
              </p>
              <p className="mt-4">
                Frontend basado en componentes con manejo global de estado
                y navegación dinámica entre vistas.
              </p>
            </div>
  
            {/* MEJORAS */}
            <div className="bg-black/40 backdrop-blur-md border border-fuchsia-500/40 
                            rounded-2xl p-8">
              <h2 className="text-2xl text-cyan-400 font-semibold mb-4">
                🔮 Próximas mejoras
              </h2>
              <ul className="space-y-2">
                <li>Autenticación con JWT</li>
                <li>Roles de usuario</li>
                <li>Filtros avanzados</li>
                <li>Deploy en producción</li>
              </ul>
            </div> 
          </div>
        </div>
      </section>
    );
  }