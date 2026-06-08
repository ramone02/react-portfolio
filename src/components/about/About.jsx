import styles from "./About.module.css";
import me from "../../assets/perfil2.png";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const {
    sectionLabel,
    headlineStart,
    headlineAccent1,
    headlineMiddle,
    headlineAccent2,
    name,
    role,
    description,
  } = t.about;

  return (
    <section className={styles.container} id="about">
      <span className={styles.sectionLabel}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
        {sectionLabel}
      </span>

      <div className={styles.body}>
        <div className={styles.text}>
          <h2 className={styles.headline}>
            {headlineStart}{" "}
            <span className={styles.accentGreen}>{headlineAccent1}</span>{" "}
            {headlineMiddle}{" "}
            <span className={styles.accentGreen}>{headlineAccent2}</span>
          </h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={me} alt="Leonardo Bellido" className={styles.photo} />
        </div>
      </div>
    </section>
  );
};

export default About;
