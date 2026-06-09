import styles from "./Navbar.module.css";
import { useLanguage } from "../../context/LanguageContext";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <button className={styles.title} onClick={() => scrollTo("hero")}>
        Portfolio
      </button>
      <ul className={styles.menuItems}>
        <li>
          <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
        </li>
        <li>
          <button onClick={() => scrollTo("experience")}>{t.nav.experience}</button>
        </li>
        {/* <li><button onClick={() => scrollTo("projects")}>{t.nav.projects}</button></li> */}
        <li>
          <button onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
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
