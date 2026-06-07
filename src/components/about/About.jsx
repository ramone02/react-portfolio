import styles from "./About.module.css";
import dev from "../../assets/dev.png";
const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.imgText}>
        <div className={styles.content}>
          <img src={dev} alt="Me working" className={styles.aboutImage} />
        </div>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>SOFTWARE DEVELOPER</h3>
              <p>
                Desarrollador Fullstack especializado en Frontend con
                experiencia en React. Mi objetivo es seguir creciendo como
                profesional, especializándome en el desarrollo Frontend,
                mientras continúo fortaleciendo mis habilidades en el Backend.
                Mi enfoque colaborativo me permite integrarme bien en equipos,
                contribuyendo tanto en la toma de decisiones técnicas como en la
                resolución de problemas. Me motiva enfrentar nuevos desafíos en
                el desarrollo web que impulsen mi crecimiento y me permitan
                seguir aprendiendo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
