'use client'

/* eslint-disable react/prop-types */
import styles from './CardProject.module.scss';

import ExternalButton from '../ExternalButton';

import { CodeIcon, WebIcon, PreviewIcon } from '../svgs';

import { useSwiper } from 'swiper/react';
import { useContext, useEffect, useRef } from 'react';
import ProjectPreview from '../ProjectPreview';
import { IsModalOpenContext, IsModalOpenContextProvider } from '@/contexts/OpenModalContext';

interface projectType {
   id: string
   image: string,
   name: string,
   description: string,
   stacks: string[],
   deploy: string,
   repository: string
}

export interface CardProjectProps {
   project: projectType
}

export default function CardPorject({ project }: CardProjectProps) {

   const { isModalOpen, changeModalOpening } = useContext(IsModalOpenContext)

   const projectDetails = useRef<HTMLDivElement>(null);



   const swiper = useSwiper();
   const buttonNext = swiper.navigation.nextEl;
   const buttonPrev = swiper.navigation.prevEl;


   const showProjectsDetails = () => {
      projectDetails.current!.style.visibility = 'visible';
      buttonNext.style.opacity = '0';
      buttonPrev.style.opacity = '0';
   }

   const hideProjectsDetails = () => {
      projectDetails.current!.style.visibility = 'hidden';
      buttonNext.style.opacity = '1';
      buttonPrev.style.opacity = '1';
   }

   const { id, image, name, description, stacks, deploy, repository } = project

   // console.log(id)

   const projectImage = { "--projectImage": image } as React.CSSProperties;

   return (
      <>

         <div id={id} data-id={id} className={`${styles.swiperSlide} cardProject`} style={projectImage}>
            <div className={styles.previewContainer}>
               <div className={styles.img} style={{ backgroundImage: `url(${image})` }}></div>
               <button
                  className={styles.previewButton}
                  onClick={changeModalOpening}
               >
               </button>
            </div>
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
                  {stacks.length > 0 &&
                     <div
                        className={styles.stackButton}
                        onMouseOver={showProjectsDetails}
                        onMouseOut={hideProjectsDetails}
                     >
                        <span>i</span>
                     </div>}

                  {deploy.length > 0 &&
                     <ExternalButton
                        externalLink={deploy}
                        textButton="Demo"
                        typeIcon={<WebIcon />}
                     />}

                  <ExternalButton
                     externalLink={repository}
                     textButton="Código"
                     typeIcon={<CodeIcon />}
                  />
               </div>
            </div>
         </div >
      </>
   )
}