import styles from "./Navbar.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#hero">
        Portfolio
      </a>
      <ul className={styles.menuItems}>
        <li>
          <a href="#about">{t.nav.about}</a>
        </li>
        <li>
          <a href="#experience">{t.nav.experience}</a>
        </li>
        {/* <li><a href="#projects">{t.nav.projects}</a></li> */}
        <li>
          <a href="#contact">{t.nav.contact}</a>
        </li>
        <li>
          <button className={styles.langToggle} onClick={toggleLang}>
            {lang === "en" ? "ES" : "EN"}
            {lang === "en" ? (
              <img
                alt="Español"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
              />
            ) : (
              <img
                alt="United States"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
