
export const content = {
  es: {
    header: {
      role: "Software Engineer · Backend · Web & Mobile",
      cvBtn: "Descargar CV",
      cvFile: "CV_Jhordy_Marcillo_ES.pdf" 
    },
    about: {
      title: "Sobre mí",
      description: "Estudiante de Ingeniería de Software con enfoque en desarrollo backend, móviles aplicaciones web. \nCuento con experiencia en el diseño e implementación de lógica de negocio, manejo de APIs, estructuración de aplicaciones y programación orientada a objetos. \nEstoy intereso por construir soluciones escalables, mantenibles y bien organizadas, aplicando buenas prácticas de desarrollo, control de versiones y mejora continua del código",
      stackTitle: "Tecnologías"
    },
    projects: {
      title: "Proyectos"
    },
    contact: {
      title: "Contacto",
      text: "¿Tienes alguna idea o proyecto en mente? Hablemos.",
      emailCard: "Mándame un correo",
      whatsappCard: "Escríbeme al WhatsApp",
      formTitle: "Envíame un mensaje",
      form: {
        name: "¿Quién me contacta?",
        namePlaceholder: "Tu nombre",
        subject: "Asunto",
        message: "Mensaje",
        placeholderMensaje: "Quiero contactarte para...",
        btn: "Redactar el correo"
      }
    }
  },
  en: {
    header: {
      role: "Software Engineer · Backend · Web & Mobile",
      cvBtn: "Download CV",
      cvFile: "CV_Jhordy_Marcillo_EN.pdf"
    },
    about: {
      title: "About Me",
      description: "Software Engineering student specializing in backend development, mobile applications, and web applications. \nI have experience in designing and implementing business logic, API management, application structuring, and object-oriented programming. \nI am interested in building scalable, maintainable, and well-organized solutions, applying best development practices, version control, and continuous code improvement.",
      stackTitle: "Tech Stack"
    },
    projects: {
      title: "Projects"
    },
    contact: {
      title: "Contact",
      text: "Do you have an idea or project in mind? Let's talk.",
      emailCard: "Send me an email",
      whatsappCard: "Chat on WhatsApp",
      formTitle: "Send me a message",
      form: {
        name: "Who contacts me?",
        namePlaceholder: "Your name",
        subject: "Subject",
        message: "Message",
        placeholderMensaje: "I want to contact you for...",
        btn: "Draft email"
      }
    }
  }
};


export const projectsData = {
  es: [
    {
    id: 1,
    title: "Variedad en Calzado - E-commerce",
    description:
      "E-commerce web para gestión de productos, órdenes y métricas en tiempo real.",
    category: "Web App",
    stack: ["Laravel", "php", "PostgreSQL", "Docker"],
     images: [
    "/projects/ecommerce/img1.png",
    "/projects/ecommerce/img2.png",
    "/projects/ecommerce/img3.png",
    "/projects/ecommerce/img4.png",
    "/projects/ecommerce/IMG5.png",
  ], 
    demo: "https://variedadencalzado.infinityfreeapp.com",
  },
  {
    id: 2,
    title: "Chat con WebSockets",
    description:
      "Sistema de chat en tiempo real con salas y manejo de múltiples conexiones.",
    category: "Sistemas Distribuidos",
    stack: ["Node.js", "WebSocket", "Express", "Python", "TypeScript", "React"],
     images: [
    "/projects/chats/img1.png",
    "/projects/chats/img2.png",
    "/projects/chats/img4.png",
    "/projects/chats/img3.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Salas_Proyecto_Distribuidas",
  },
  {
    id: 3,
    title: "Recreación de Paint",
    description:
      "Aplicación de escritorio inspirada en Paint, enfocada en gráficos y eventos.",
    category: "Desktop App",
    stack: ["C#", ".NET"],
     images: [
    "/projects/paint/img1.png",
    "/projects/paint/img2.png",
    "/projects/paint/img3.png",
    "/projects/paint/img4.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Paint-C-",
  },
  {
    id: 4,
    title: "ETL – Datos MIES",
    description:
      "Proceso ETL con datos reales del MIES para análisis y transformación.",
    category: "Data Engineering",
    stack: ["SQL Server", "SSIS", "ETL"],
     images: [
    "/projects/etl- datos mies/img1.png",
    "/projects/etl- datos mies/img2.png",
    "/projects/etl- datos mies/img3.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Proceso-de-ETL-SQLServer",
  },
  {
    id: 5,
    title: "Backend bancario",
    description:
      "API bancaria con autenticación JWT y base de datos en Azure SQL.",
    category: "Backend",
    stack: ["Flask", "Python", "Azure SQL", "JWT"],
    github: "https://github.com/JhordyMarcillo/Banca_Cajero_AzureSQL",
  },
  {
    id: 6,
    title: "SPA Modern - Sistema de Administración",
    description:
      "Sistema de administración de usuarios y roles con SPA moderna.",
    category: "Web App",
    stack: ["TypeScript", "Angular", "Node.js", "MongoDB"],
    github: "https://github.com/JhordyMarcillo/ProyectoPrueba",
  },
  ],



  en: [
    {
    id: 1,
    title: "Variedad en Calzado - E-commerce",
    description:
      "E-commerce website for managing products, orders, and real-time metrics.",
    category: "Web App",
    stack: ["Laravel", "php", "PostgreSQL", "Docker"],
     images: [
    "/projects/ecommerce/img1.png",
    "/projects/ecommerce/img2.png",
    "/projects/ecommerce/img3.png",
    "/projects/ecommerce/img4.png",
    "/projects/ecommerce/IMG5.png",
  ], 
    demo: "https://variedadencalzado.infinityfreeapp.com",
  },
  {
    id: 2,
    title: "Chat con WebSockets",
    description:
      "Real-time chat system with rooms and handling of multiple connections.",
    category: "Distributed Systems",
    stack: ["Node.js", "WebSocket", "Express", "Python", "TypeScript", "React"],
     images: [
    "/projects/chats/img1.png",
    "/projects/chats/img2.png",
    "/projects/chats/img4.png",
    "/projects/chats/img3.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Salas_Proyecto_Distribuidas",
  },
  {
    id: 3,
    title: "Paint recreation",
    description:
      "Desktop application inspired by Paint, focused on graphics and events.",
    category: "Desktop App",
    stack: ["C#", ".NET"],
     images: [
    "/projects/paint/img1.png",
    "/projects/paint/img2.png",
    "/projects/paint/img3.png",
    "/projects/paint/img4.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Paint-C-",
  },
  {
    id: 4,
    title: "ETL – MIES Data",
    description:
      "ETL process with real data from MIES for analysis and transformation.",
    category: "Data Engineering",
    stack: ["SQL Server", "SSIS", "ETL"],
     images: [
    "/projects/etl- datos mies/img1.png",
    "/projects/etl- datos mies/img2.png",
    "/projects/etl- datos mies/img3.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Proceso-de-ETL-SQLServer",
  },
  {
    id: 5,
    title: "Banking backend",
    description:
      "Banking API with JWT authentication and Azure SQL database.",
    category: "Backend",
    stack: ["Flask", "Python", "Azure SQL", "JWT"],
    github: "https://github.com/JhordyMarcillo/Banca_Cajero_AzureSQL",
  },
  {
    id: 6,
    title: "SPA Modern - Management System",
    description:
      "Management system for users and roles with a modern SPA.",
    category: "Web App",
    stack: ["TypeScript", "Angular", "Node.js", "MongoDB"],
    github: "https://github.com/JhordyMarcillo/ProyectoPrueba",
  },
  ]
};