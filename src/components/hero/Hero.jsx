import styles from "./Hero.module.css";
import me from "../../assets/perfil2.png";

import { motion } from "motion/react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className={styles.title} variants={textVariants}>
          Leonardo Bellido
        </motion.h1>
        <motion.h2 className={styles.subtitle} variants={textVariants}>
          Frontend Developer
        </motion.h2>
        <motion.p className={styles.description} variants={textVariants}>
          I m a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you d like to learn more!
        </motion.p>
        <motion.a
          href="mailto:myemail@email.com"
          className={styles.contactBtn}
          variants={textVariants}
          animate="scrollButton"
        >
          Contact Me
        </motion.a>
      </motion.div>
      {/* <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Leonardo Bellido</motion.h2>
          <motion.h1 variants={textVariants}>Frontend developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt=""
          />
        </motion.div>
      </div> */}
      <motion.div
        className={styles.slidingTextContainer}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer
      </motion.div>
      <img src={me} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
