import { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#experience">{t.nav.experience}</a></li>
          {/* <li><a href="#projects">{t.nav.projects}</a></li> */}
          <li><a href="#contact">{t.nav.contact}</a></li>
          <li>
            <button className={styles.langToggle} onClick={(e) => { e.stopPropagation(); toggleLang(); }}>
              {lang === "en" ? "ES" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
