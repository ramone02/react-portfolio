import styles from "./About.module.css";
import me from "../../assets/perfil2.png";
import { useLanguage } from "../../context/LanguageContext";
import { FaRegUser } from "react-icons/fa";

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
        <FaRegUser />
        {sectionLabel}
      </span>

      <div className={styles.body}>
        <div className={styles.text}>
          <h2 className={styles.headline}>
            {headlineStart}{" "}
            <span className={styles.accent}>{headlineAccent1}</span>{" "}
            {headlineMiddle}{" "}
            <span className={styles.accent}>{headlineAccent2}</span>
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
