import styles from './Main.module.css';

import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import Inicio from '../Inicio';

import { ProjectType } from '@/app/page';
import { CardProjectProps } from '../CardProject';

export default function Main({ projects }: any) {
   return (
      <main id="main" className={styles.main}>
         <Inicio />
         <AboutSection />
         <ProjectsSection projects={projects} />
      </main>
   )
}