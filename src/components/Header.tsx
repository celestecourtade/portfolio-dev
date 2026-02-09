import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string, id?: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setMenuOpen(false);

    // Si pasamos un ID y estamos en la misma página, hacemos scroll
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-violet-950/60 border-b border-violet-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-violet-300 font-bold text-xl tracking-wide hover:text-violet-100 transition-all">
          💜 CelesDev
        </h1>

        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-violet-200 font-medium">
            <li>
              <button
                onClick={() => handleNav("/", "skills")}
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/", "projects")}
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/", "education")}
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Estudios
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/", "contact")}
                className="hover:text-violet-400 transition-all hover:drop-shadow-[0_0_6px_#a78bfa]"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/celeste-courtade-417763304/" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/celestecourtade" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl">
              <FaGithub />
            </a>
            <a href="mailto:celestecourtade1@gmail.com" className="text-violet-300 hover:text-violet-400 hover:drop-shadow-[0_0_8px_#a78bfa] transition-all text-xl">
              <FaEnvelope />
            </a>
          </div>

          <button className="md:hidden text-violet-300 hover:text-violet-400 text-2xl transition-all" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-violet-950/90 backdrop-blur-md py-4 text-center space-y-4 border-t border-violet-500/30">
          <button className="block text-violet-200 font-medium hover:text-violet-400 transition-all" onClick={() => handleNav("/", "skills")}>Skills</button>
          <button className="block text-violet-200 font-medium hover:text-violet-400 transition-all" onClick={() => handleNav("/", "projects")}>Proyectos</button>
          <button className="block text-violet-200 font-medium hover:text-violet-400 transition-all" onClick={() => handleNav("/", "education")}>Estudios</button>
          <button className="block text-violet-200 font-medium hover:text-violet-400 transition-all" onClick={() => handleNav("/", "contact")}>Contacto</button>

          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://www.linkedin.com/in/celeste-courtade-417763304/" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-400 text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/celestecourtade" target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-400 text-xl">
              <FaGithub />
            </a>
            <a href="mailto:celestecourtade1@gmail.com" className="text-violet-300 hover:text-violet-400 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
