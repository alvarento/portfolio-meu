"use client"

import styles from './SocialLinks.module.scss';

import SocialIcon from '../SocialIcon';
import { GithubIcon, LinkedinIcon, VitrinedevIcon, MediumIcon } from '../svgs';

import { useState } from 'react';

export default function SocialLinks() {
   const [legend, setLegend] = useState("Minhas Redes")

   const changeLegend = (legend: string) => {
      setLegend(legend)
   }


   return (
      <fieldset
         className={styles.socialLinks}
      >
         <legend className={styles.legend}>{legend}</legend>
         <SocialIcon
            icon={<LinkedinIcon className={`${styles.linkedin} icon`} />}
            socialMidia="Linkedin"
            changeLegend={changeLegend}
            href="https://www.linkedin.com/in/alvarento"
         />
         <SocialIcon
            icon={<GithubIcon className={`${styles.github} icon`} />}
            socialMidia="Github"
            changeLegend={changeLegend}
            href="https://github.com/alvarento"
         />
         <SocialIcon
            icon={<MediumIcon className={`${styles.medium} icon`} />}
            socialMidia="Medium (Blog)"
            changeLegend={changeLegend}
            href="https://medium.com/@alvarento"
         />
         <SocialIcon
            icon={<VitrinedevIcon className={`${styles.vitrinedev} icon`} />}
            socialMidia="Vitrinedev"
            changeLegend={changeLegend}
            href="https://cursos.alura.com.br/vitrinedev/alvarento"
         />
      </fieldset>
   )
}