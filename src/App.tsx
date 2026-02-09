import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AllProjects from "./pages/AllProjects";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans bg-blackcustom text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <Skills />
            <Projects /> {/* Tu Projects.tsx con botón funciona aquí */}
            <Education />
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/projects"
        element={
          <Layout>
            <AllProjects /> {/* Aquí mostrarás todos los proyectos */}
          </Layout>
        }
      />
    </Routes>
  );
}

