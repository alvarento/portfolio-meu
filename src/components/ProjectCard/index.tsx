'use client'

/* eslint-disable react/prop-types */
import styles from './ProjectCard.module.scss';

import ExternalButton from '../ExternalButton';

import { CodeIcon, WebIcon, PreviewIcon } from '../svgs';

import { useSwiper } from 'swiper/react';
import { useContext, useEffect, useRef } from 'react';
import ProjectPreview from '../ProjectPreview';
import { IsModalOpenContext, IsModalOpenContextProvider } from '@/contexts/OpenModalContext';

import { ProjectType } from '@/app/page';

interface ProjectCardProps {
   project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {

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

   const { id, image, name, description, stacks, keywords, deploy, repository } = project;

   // console.log(stacks)

   const stacksList = stacks.split(",")
   const keywordsList = keywords.split(",")
   // console.log(stacksList)
   // console.log(keywordsList)
   // console.log(stacksList.length > 0)

   // console.log(id)

   const projectImage = { "--projectImage": image } as React.CSSProperties;

   return (
      <>
         <div data-id={id} className={`${styles.swiperSlide} cardProject`} style={projectImage}>
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
                     <p className={styles.stackListTitle}>Stack</p>
                     <ul className={styles.stackList}>
                        {stacksList.map((stack, index) => <li className={styles.stack} key={index}>{stack}</li>)}
                     </ul>
                  </div>
                  <div className={styles.stackListContainer}>
                     <p className={styles.stackListTitle}>Keywords</p>
                     <ul className={styles.stackList}>
                        {keywordsList.map((keyword, index) => <li className={styles.stack} key={index}>{keyword}</li>)}
                     </ul>
                  </div>
               </div>
               <div className={styles.buttons}>
                  {(stacksList.length > 0 || keywordsList.length > 0) &&
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