// src/App.tsx
import { useState } from "react"; 
import "./styles/global.css";
import { projects } from "./data/projects";
import profileImg from "./assets/foto.jpg";
import ProjectCard from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm"; 
import cvFile from "./assets/CV.pdf";

const techStack = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "HTML5", "CSS3/Tailwind", "Angular", "React"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Flask", "JWT Auth"],
  },
  {
    category: "Database",
    skills: ["Oracle", "SQL Server", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git/GitHub", "Docker", "Postman", "Linux", "k6", "JMeter"],
  },
];

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
    <a href={cvFile} download="CV_Jhordy_Marcillo.pdf" className="floating-cv-btn btn-cv animate-enter delay-0">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span className="cv-text">Descargar CV</span>
      </a>

      <div className="header animate-enter delay-1" >
        <div className="header-content">
            <img
            src={profileImg}
            alt="Foto de Jhordy Marcillo"
            className="profile-photo"
            />
            <div>
                <h1>Jhordy Marcillo</h1>
                <p>Software Engineer · Backend · Web · Mobile</p>
  
            </div>
        </div>
      </div>

      <main className="container animate-enter delay-2">
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Ingeniero de Software especializado en Arquitectura Backend y diseño de datos (SQL/NoSQL), con capacidad sólida para integrar interfaces modernas en Web y Móvil.  <br></br>
            Cuento con experiencia en el diseño e implementación de lógica de negocio, manejo de APIs, estructuración de aplicaciones y programación orientada a objetos. <br></br>
            Tengo interes por construir soluciones escalables, mantenibles y bien organizadas, aplicando buenas prácticas de desarrollo, control de versiones y mejora continua del código.
          </p>

          <div className="tech-stack">
            <h3>Tecnologías</h3>
            <div className="tech-grid">
              {techStack.map((group) => (
                <div key={group.category} className="tech-card">
                  <h4>{group.category}</h4>
                  <div className="tech-tags">
                    {group.skills.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects animate-enter delay-3">
          <h2>Proyectos</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="contact animate-enter delay-4">
          <h2>Contacto</h2>
          <p className="contact-text">
            ¿Tienes alguna idea o proyecto? Puedes escribirme directamente al
            WhatsApp o redactar un correo.
          </p>

          <div className="contact-grid">
            {/*Correo */}
            <div 
              className="contact-card email"
              onClick={() => setIsContactOpen(true)}
            >
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="contact-info">
                <span>Mándame un correo</span>
                <strong>jhordypaulsb2@gmail.com</strong>
              </div>
            </div>

            {/*WhatsApp */}
            <a
              href="https://wa.me/593995743691?text=Hola%20Jhordy,%20vi%20tu%20portafolio%20y%20quiero%20contactarte%20para..."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card whatsapp"
            >
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </div>
              <div className="contact-info">
                <span>Escríbeme al WhatsApp</span>
                <strong>+593 995743691</strong>
              </div>
            </a>
          </div>
        </section>
      </main>

      {isContactOpen && (
        <ContactForm onClose={() => setIsContactOpen(false)} />
      )}


      <footer className="footer">
        <p>
          Realizado en React por: Jhordy Marcillo
          <p>
            
          </p>GitHub:{" "}
          <a
            href="https://github.com/JhordyMarcillo"
            target="_blank"
            rel="noreferrer"
          >
            github.com/JhordyMarcillo
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
