import { motion } from "motion/react";
import styles from "./Hero.module.css";
import me from "../../assets/perfil.png";
import { useLanguage } from "../../context/LanguageContext";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

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
    <section className={styles.container} id="hero">
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
            <MdOutlineEmail size={20}/>
            {cta}
          </a>
          <a href={cvFile} download className={styles.btnSecondary}>
            <IoMdDownload size={20}/>
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
