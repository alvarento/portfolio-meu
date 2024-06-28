import styles from './Main.module.css';

import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import Inicio from '../Inicio';

import { ProjectType } from '@/app/page';

interface MainProps {
   projects: ProjectType[];
}


export default function Main({ projects }: MainProps) {
   return (
      <main id="main" className={styles.main}>
         <Inicio />
         <AboutSection />
         <ProjectsSection projects={projects} />
      </main>
   )
}