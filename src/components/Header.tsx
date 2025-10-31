import { FaLinkedin, FaEnvelope, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-violet-950/60 border-b border-violet-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nombre en la esquina superior izquierda */}
        <h1 className="text-violet-300 font-bold text-xl tracking-wide hover:text-violet-100 transition-all">
          💜 CelesDev
        </h1>

        {/* Links centrados solo en md+ */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-violet-200 font-medium">
            <li>
              <a
                href="#skills"
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Estudios
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes y menú hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Redes */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/celeste-courtade-417763304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:celestecourtade1@gmail.com"
              className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl"
              title="Enviar correo"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Botón menú hamburguesa solo en móvil */}
          <button
            className="md:hidden text-violet-300 hover:text-violet-400 text-2xl transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-violet-950/90 backdrop-blur-md py-4 text-center space-y-4 border-t border-violet-500/30">
          <a
            href="#skills"
            className="block text-violet-200 font-medium hover:text-violet-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-violet-200 font-medium hover:text-violet-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </a>
          <a
            href="#education"
            className="block text-violet-200 font-medium hover:text-violet-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Estudios
          </a>
          <a
            href="#contact"
            className="block text-violet-200 font-medium hover:text-violet-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          {/* Redes también visibles en menú móvil */}
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/celeste-courtade-417763304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-400 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-violet-400 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:celestecourtade1@gmail.com"
              className="text-violet-300 hover:text-violet-400 text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
