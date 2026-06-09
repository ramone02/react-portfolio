import { useState } from "react";
import styles from "./Contact.module.css";
import me from "../../assets/perfil2.png";
import { useLanguage } from "../../context/LanguageContext";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

/*
  El formulario actualmente es solo UI.
  Para hacerlo funcional podés conectarlo a:
  - EmailJS (https://emailjs.com) — gratis, sin backend
  - Formspree (https://formspree.io) — más simple aún
  Avisame y lo implementamos.
*/

const Contact = () => {
  const { t } = useLanguage();
  const {
    sectionLabel,
    headline1,
    headline2,
    headline3,
    nameLabel,
    emailLabel,
    messageLabel,
    namePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    send,
    cardSubtitle,
    cardText,
    location,
  } = t.contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar a EmailJS o Formspree
    console.log("Form submitted:", form);
  };

  return (
    <section className={styles.container} id="contact">
      <span className={styles.sectionLabel}>
        <MdOutlineEmail />
        {sectionLabel}
      </span>
      <div className={styles.headlineContainer}>
        <h2 className={styles.headline}>
          <span className={styles.accent}>{headline1}</span>{" "}
        </h2>
        <span>{headline3}</span>
      </div>

      <div className={styles.body}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>{nameLabel}</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder={namePlaceholder}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{emailLabel}</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{messageLabel}</label>
            <textarea
              className={styles.textarea}
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button type="submit" className={styles.btnSend}>
            {send}
            <IoIosSend />
          </button>
        </form>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img
              src={me}
              alt="Leonardo Bellido"
              className={styles.cardAvatar}
            />
            <div>
              <p className={styles.cardName}>Leonardo Bellido</p>
              <p className={styles.cardRole}>{cardSubtitle}</p>
            </div>
          </div>
          <p className={styles.cardText}>{cardText}</p>
          <div className={styles.cardLinks}>
            <div className={styles.iconLink}>
              <MdOutlineEmail />
              <a href="mailto:leobellido@gmail.com" className={styles.cardLink}>
                leobellido@gmail.com
              </a>
            </div>
            <div className={styles.iconLink}>
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/leonardo-bellido"
                target="_blank"
                rel="noreferrer"
                className={styles.cardLink}
              >
                linkedin.com/in/leonardo-bellido
              </a>
            </div>
            <div className={styles.iconLink}>
              <FaGithub />
              <a
                href="https://github.com/ramone02"
                target="_blank"
                rel="noreferrer"
                className={styles.cardLink}
              >
                github.com/ramone02
              </a>
            </div>
            <span className={styles.cardLocation}>📍 {location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
