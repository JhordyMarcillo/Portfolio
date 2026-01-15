// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  stack: string[];
  images?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Dashboard web para gestión de productos, órdenes y métricas en tiempo real.",
    category: "Web App",
    stack: ["Laravel", "php", "PostgreSQL", "Docker"],
     images: [
    "/projects/ecommerce/img1.png",
    "/projects/ecommerce/img2.png",
    "/projects/ecommerce/img3.png",
    "/projects/ecommerce/img4.png",
  ], 
    github: "https://github.com/JhordyMarcillo",
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
    "/projects/ecommerce/91R3.png",
    "/projects/ecommerce/01808.png",
    "/projects/ecommerce/014078.png",
  ], 
    github: "https://github.com/JhordyMarcillo/Salas_Proyecto_Distribuidas",
    demo: "https://salas-chat-app.onrender.com",
  },
  {
    id: 3,
    title: "Backend bancario",
    description:
      "API bancaria con autenticación JWT y base de datos en Azure SQL.",
    category: "Backend",
    stack: ["Flask", "Python", "Azure SQL", "JWT"],
     images: [
    "/projects/ecommerce/91R3.png",
    "/projects/ecommerce/01808.png",
    "/projects/ecommerce/014078.png",
  ], 
    github: "https://github.com/JhordyMarcillo",
  },
  {
    id: 4,
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
    id: 5,
    title: "ETL – Datos MIES",
    description:
      "Proceso ETL con datos reales del MIES para análisis y transformación.",
    category: "Data Engineering",
    stack: ["SQL Server", "SSIS", "ETL"],
     images: [
    "/projects/ecommerce/91R3.png",   
    "/projects/ecommerce/01808.png",
    "/projects/ecommerce/014078.png",
  ], 
    github: "https://github.com/JhordyMarcillo",
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
];
