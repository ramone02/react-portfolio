import styles from "./Experience.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const { sectionLabel, company, role, period, projects } = t.experience;

  return (
    <section className={styles.container} id="experience">
      <span className={styles.sectionLabel}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
        {sectionLabel}
      </span>

      <h2 className={styles.headline}>{t.experience.title}</h2>

      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.company}>{company}</span>
          <span className={styles.period}>{period}</span>
        </div>
        <span className={styles.role}>{role}</span>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project.name} className={styles.project}>
              <h4 className={styles.projectName}>{project.name}</h4>
              <ul className={styles.bullets}>
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
