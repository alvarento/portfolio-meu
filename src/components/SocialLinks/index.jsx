"use client"

import styles from './SocialLinks.module.scss';

import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import VitrinedevIcon from '../../assets/icons/vitrinedev.svg'
import { useState } from 'react';
import SocialIcon from '../SocialIcon';



export default function SocialLinks() {
   const [legend, setLegend] = useState("Minhas Redes")

   const changeLegend = (legend) => {
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
            href="https://www.linkedin.com/in/alvaronascimento-dev"
         />
         <SocialIcon
            icon={<GithubIcon className={`${styles.github} icon`} />}
            socialMidia="Github"
            changeLegend={changeLegend}
            href="https://github.com/alvaronascimento-dev"
         />
         <SocialIcon
            icon={<VitrinedevIcon className={`${styles.vitrinedev} icon`} />}
            socialMidia="Vitrinedev"
            changeLegend={changeLegend}
            href="https://cursos.alura.com.br/vitrinedev/alvaronascimento-dev"
         />
      </fieldset>
   )
}