import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Particles from "./components/particles/Particles";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className={styles.App}>
        <Particles />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          {/* <Projects /> */}
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
