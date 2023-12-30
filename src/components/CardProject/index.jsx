/* eslint-disable react/prop-types */
import styles from './CardProject.module.css';
import { useSwiper } from 'swiper/react';

import ExternalButton from '../ExternalButton';
import { useRef } from 'react';

export default function CardPorject({ project }) {
   console.log("rendezirou o card")

   const projectDetails = useRef(null)


   const swiper = useSwiper();
   const buttonNext = swiper.navigation.nextEl;
   const buttonPrev = swiper.navigation.prevEl;


   const showProjectsDetails = () => {
      projectDetails.current.style.visibility = 'visible';
      buttonNext.style.opacity = '0';
      buttonPrev.style.opacity = '0';
   }

   const hideProjectsDetails = () => {
      projectDetails.current.style.visibility = 'hidden';
      buttonNext.style.opacity = '1';
      buttonPrev.style.opacity = '1';
   }

   const { image, name, description, stacks, deploy, repository } = project


   return (
      <div className={`${styles.swiperSlide} cardProject`}>
         <div className={styles.img} style={{ backgroundImage: `url(${image})` }}></div>
         <div className={styles.projectDescription}>
            <div className={styles.projectText}>
               <h2 className={styles.projectName}>{name}</h2>
               <span className={styles.descriptionText}>{description}</span>
            </div>
            <div className={styles.projectDetails} data-project-name="${name}" ref={projectDetails}>
               <h2>Detalhes do Projeto</h2>
               <div className={styles.stackListContainer}>
                  <p className={styles.stackListTitle}>Stack do projeto :</p>
                  <ul className={styles.stackList}>
                     {stacks.map((stack, index) => <li className={styles.stack} key={index}>{stack}</li>)}
                  </ul>
               </div>
            </div>
            <div className={styles.buttons}>
               {stacks.length > 0
                  ? <div 
                        className={styles.stackButton}
                        onMouseOver={showProjectsDetails}
                        onMouseOut={hideProjectsDetails}
                     >
                     <span>i</span>
                  </div>
                  : ""}

               {deploy.length > 0 ?
                  <ExternalButton
                     externalLink={deploy}
                     textButton="Demo"
                  /> : ""}

               <ExternalButton
                  externalLink={repository}
                  textButton="Repositório"
               />
            </div>
         </div>
      </div>
   )
}