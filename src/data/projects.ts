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
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    /*images: [
    "/projects/ecommerce/91R3.png",
    "/projects/ecommerce/01808.png",
    "/projects/ecommerce/014078.png",
  ],*/
    github: "https://github.com/JhordyMarcillo",
    demo: "",
  },
  {
    id: 2,
    title: "Chat con WebSockets",
    description:
      "Sistema de chat en tiempo real con salas y manejo de múltiples conexiones.",
    category: "Sistemas Distribuidos",
    stack: ["Node.js", "WebSocket", "Express"],
    github: "https://github.com/JhordyMarcillo",
  },
  {
    id: 3,
    title: "Backend bancario",
    description:
      "API bancaria con autenticación JWT y base de datos en Azure SQL.",
    category: "Backend",
    stack: ["Flask", "Python", "Azure SQL", "JWT"],
    github: "https://github.com/JhordyMarcillo",
  },
  {
    id: 4,
    title: "Recreación de Paint",
    description:
      "Aplicación de escritorio inspirada en Paint, enfocada en gráficos y eventos.",
    category: "Desktop App",
    stack: ["C#", ".NET"],
    github: "https://github.com/JhordyMarcillo/Paint-C-",
  },
  {
    id: 5,
    title: "ETL – Datos MIES",
    description:
      "Proceso ETL con datos reales del MIES para análisis y transformación.",
    category: "Data Engineering",
    stack: ["SQL Server", "SSIS", "ETL"],
    github: "https://github.com/JhordyMarcillo",
  },
];
