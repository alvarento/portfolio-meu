"use client"

import AboutItem from '../AboutItem';
import styles from './AboutList.module.scss';

import {
   SoftwareDeveloperIcon,
   LocationIcon,
   SchoolIcon,
   RocketLauchIcon,
   BullseyeArrowIcon,
   BooksStudyIcon
} from '../svgs';

import { useState } from 'react';

export default function AboutList() {

   const calculateCurrentAge = () => {
      const today = new Date();
      const birthDate = new Date('1998/05/04');
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
         age--;
      }
      return age;
   }

   const [currentAge] = useState(() => calculateCurrentAge())


   return (
      <ul className={styles.aboutList}>
         <AboutItem
            icon={<div className={styles.boxIcon}><SoftwareDeveloperIcon className="icon" /></div>}
            aboutText={<span>Tenho {currentAge} anos e sou apaixonado por tecnologia de computadores</span>}
         />
         <AboutItem
            icon={<div className={styles.boxIcon}><LocationIcon className="icon" /></div>}
            aboutText={<span>Salvador, BA</span>}
         />
         <AboutItem
            icon={<div className={styles.boxIcon}><SchoolIcon className="icon" /></div>}
            aboutText={<span>Cursando Análise e Desenvolvimento de Sistemas na <a
               href="https://descomplica.com.br/faculdade/">Descomplica Faculdade Digital</a></span>}
         />
         <AboutItem
            icon={<div className={styles.boxIcon}><RocketLauchIcon className="icon"/></div>}
            aboutText={<span>Buscando oportunidade para atuar como desenvolvedor Backend</span>}
         />
         <AboutItem
            icon={<div className={styles.boxIcon}><BullseyeArrowIcon className="icon" /></div>}
            aboutText={
               <span className={styles.destaque}>Tenho como objetivo me tornar um <a href="https://techguide.sh/" target="_blank" rel="noreferrer" className={styles.linkDevT}>dev em
                  &lt;T&gt; </a>
                  <div className={styles.devT}>Profissionais em &lt;T&gt; têm profundidade (especialistas) em uma
                     determinada área, além de possuírem conhecimento generalista
                     em assuntos auxiliares. <strong>Clique para ver o techguide!</strong>
                  </div>
               </span>}
         />
         <AboutItem
            icon={<div className={styles.boxIcon}><BooksStudyIcon className="icon" /></div>}
            aboutText={<span>Em busca do &quot;Never stop learning&quot;</span>}
         />
      </ul>
   )
}