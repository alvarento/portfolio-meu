import styles from './Main.module.css';

import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import Inicio from '../Inicio';

export default function Main() {
   return (
      <main id="main" className={styles.main}>
         <Inicio/>
         <AboutSection/>
         <ProjectsSection/>
      </main>
   )
}