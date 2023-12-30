"use client"

import AboutItem from '../AboutItem';
import styles from './AboutList.module.css';


import SoftwareDeveloperIcon from '../../assets/icons/software-developer.svg';
import LocationIcon  from '../../assets/icons/location.svg';
import SchoolIcon  from '../../assets/icons/school.svg';
import RocketLauchIcon  from '../../assets/icons/rocket-launch.svg';
import BullseyeArrowIcon  from '../../assets/icons/bullseye-arrow.svg';
import BooksStudyIcon  from '../../assets/icons/books-study.svg';

import { useState } from 'react';
// import { useEffect } from 'react';

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
            icon={<SoftwareDeveloperIcon className="icon" />}
            aboutText={<span>Tenho {currentAge} anos e sou apaixonado por tecnologia de computadores</span>}
         />
         <AboutItem
            icon={<LocationIcon className="icon" />}
            aboutText={<span>Salvador, BA</span>}
         />
         <AboutItem
            icon={<SchoolIcon className="icon" />}
            aboutText={<span>Cursando Análise e Desenvolvimento de Sistemas na <a
               href="https://descomplica.com.br/faculdade/">Descomplica Faculdade Digital</a></span>}
         />
         <AboutItem
            icon={<RocketLauchIcon className="icon" />}
            aboutText={<span>Buscando oportunidade para atuar como desenvolvedor Backend</span>}
         />
         <AboutItem
            icon={<BullseyeArrowIcon className="icon" />}
            aboutText={
                     <span className={styles.destaque}>Tenho como objetivo me tornar um <a href="https://techguide.sh/" target="_blank"     rel="noreferrer" className={styles.linkDevT}>dev em
                              &lt;T&gt; </a>
                        <div className={styles.devT}>Profissionais em &lt;T&gt; têm profundidade (especialistas) em uma
                           determinada área, além de possuírem conhecimento generalista
                           em assuntos auxiliares. <strong>Clique para ver o techguide!</strong>
                        </div>
                     </span>}
         />
         <AboutItem
            icon={<BooksStudyIcon className="icon" />}
            aboutText={<span>Em busca do &quot;Never stop learning&quot;</span>}
         />
      </ul>
   )
}