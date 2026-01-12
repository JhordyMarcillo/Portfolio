import type { Project } from "../data/projects";
import { ImageSlider } from "./ImageSlider";
import "./ProjectCard.css";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      {project.images && (
        <ImageSlider images={project.images} autoSlide interval={4500} />
      )}
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
