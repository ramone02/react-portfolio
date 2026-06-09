import styles from "./Projects.module.css";
import { useLanguage } from "../../context/LanguageContext";


const ProjectCard = ({ project }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{project.title}</h3>
    <p className={styles.cardDesc}>{project.description}</p>
    <div className={styles.techList}>
      {project.tech.map((tech) => (
        <span key={tech} className={styles.techBadge}>{tech}</span>
      ))}
    </div>
    <div className={styles.links}>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className={styles.link}>
          GitHub ↗
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className={styles.link}>
          Live ↗
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const { t } = useLanguage();
  const { sectionLabel, title, comingSoon, items } = t.projects;

  return (
    <section className={styles.container} id="projects">
      <span className={styles.sectionLabel}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
        {sectionLabel}
      </span>
      <h2 className={styles.headline}>{title}</h2>
      {items.length === 0 ? (
        <p className={styles.empty}>{comingSoon}</p>
      ) : (
        <div className={styles.grid}>
          {items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
