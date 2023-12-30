import styles from './Main.module.css';
import AboutSection from "../AboutSection";
import Home from "../Home";
import ProjectsSection from "../ProjectsSection";


export default function Main() {
   return (
      <main id="main" className={styles.main}>
         <Home/>
         <AboutSection/>
         <ProjectsSection/>
      </main>
   )
}