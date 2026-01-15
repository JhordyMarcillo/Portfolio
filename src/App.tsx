// src/App.tsx
import { useState } from "react"; 
import "./styles/global.css";
import profileImg from "./assets/foto.jpg";
import ProjectCard from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm"; 
import { content, projectsData } from "./data/languages";
import cvEs from "./assets/CV_Es.pdf"; 
import cvEn from "./assets/CV_En.pdf";

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
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const t = content[lang];
  const currentProjects = projectsData[lang];
  const currentCvFile = lang === 'es' ? cvEs : cvEn; // Switch de PDF

  return (
    <>
        <a 
            href={currentCvFile} 
            download={t.header.cvFile} 
            className="floating-cv-btn"
        >
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
        <span className="cv-text">{t.header.cvBtn}</span>
      </a>

      <button 
        className="lang-switch" 
        onClick={() => setLang(prev => prev === 'es' ? 'en' : 'es')}
      >
        <span className={lang === 'es' ? 'active' : ''}>ES</span>
        <span className="divider">/</span>
        <span className={lang === 'en' ? 'active' : ''}>EN</span>
      </button>

      <div className="header animate-enter delay-1" >
        <div className="header-content">
            <img
            src={profileImg}
            alt="Foto de Jhordy Marcillo"
            className="profile-photo"
            />
            <div>
                <h1>Jhordy Marcillo</h1>
               <p>{t.header.role}</p>
  
            </div>
        </div>
      </div>

      <main className="container animate-enter delay-2">
        <section className="about">
          <h2>{t.about.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>
            {t.about.description}
          </p>

          <div className="tech-stack">
            <h3>{t.about.stackTitle}</h3>
            <div className="tech-grid">
              {techStack.map((group) => (
                <div key={group.category} className="tech-card">
                  <h4>{group.category}</h4>
                  <div className="tech-tags">
                    {group.skills.map(skill => <span key={skill} className="tech-tag">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects animate-enter delay-3">
          <h2>{t.projects.title}</h2>

          <div className="projects-grid">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="contact animate-enter delay-4">
          <h2>{t.contact.title}</h2>
          <p className="contact-text">{t.contact.text}</p>

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
                <span>{t.contact.emailCard}</span>
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
                <span>{t.contact.whatsappCard}</span>
                <strong>+593 995743691</strong>
              </div>
            </a>
          </div>
        </section>
      </main>

      {isContactOpen && (
        <ContactForm 
           onClose={() => setIsContactOpen(false)} 
           labels={t.contact.form} 
        />
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
