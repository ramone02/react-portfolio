import { useState } from "react";
import styles from "./Contact.module.css";
import me from "../../assets/perfil2.png";
import { useLanguage } from "../../context/LanguageContext";

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
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        {sectionLabel}
      </span>
      <div className={styles.headlineContainer}>
        <h2 className={styles.headline}>
          <span className={styles.accent}>{headline1}</span>{" "}
        </h2>
        <span>{headline3}</span>
      </div>

      <div className={styles.body}>
        {/* Form */}
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
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Card */}
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
            <a href="mailto:leobellido@gmail.com" className={styles.cardLink}>
              leobellido@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/leonardo-bellido"
              target="_blank"
              rel="noreferrer"
              className={styles.cardLink}
            >
              linkedin.com/in/leonardo-bellido
            </a>
            <a
              href="https://github.com/ramone02"
              target="_blank"
              rel="noreferrer"
              className={styles.cardLink}
            >
              github.com/ramone02
            </a>
            <span className={styles.cardLocation}>📍 {location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
