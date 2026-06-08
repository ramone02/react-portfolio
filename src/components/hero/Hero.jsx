import { motion } from "motion/react";
import styles from "./Hero.module.css";
import me from "../../assets/perfil.png";
import { useLanguage } from "../../context/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero = () => {
  const { t } = useLanguage();
  const { badge, greeting, name, description, cta, cv, cvFile } = t.hero;

  return (
    <section className={styles.container}>
      <div className={styles.textCol}>
        <motion.h1
          className={styles.heading}
          custom={1}
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          {greeting} <span className={styles.accent}>{name}</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          custom={2}
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          {description}
        </motion.p>

        <motion.div
          className={styles.ctas}
          custom={3}
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <a href="mailto:leobellido@gmail.com" className={styles.btnPrimary}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {cta}
          </a>
          <a href={cvFile} download className={styles.btnSecondary}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            {cv}
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.imageCol}
        variants={fadeRight}
        initial="initial"
        animate="animate"
      >
        <img src={me} alt="Leonardo Bellido" className={styles.heroImg} />
      </motion.div>
    </section>
  );
};

export default Hero;
