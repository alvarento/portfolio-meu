'use client'

import Image from 'next/image';
import { PT_Mono } from 'next/font/google'
import styles from './ProjectPreview.module.scss';
import { useContext, useState } from 'react';

import { IsModalOpenContext, IsModalOpenContextProvider } from '@/contexts/OpenModalContext';
import ExternalButton from '../ExternalButton';

import { ProjectType } from '@/app/page';

import { PreviewIcon } from '../svgs';

const ptMono = PT_Mono({ weight: '400', subsets: ['latin'] })


interface ProjectPreviewProps {
   projects: ProjectType[]
}

export default function ProjectPreview({ projects }: ProjectPreviewProps) {

   const { isModalOpen, projectId, changeModalOpening } = useContext(IsModalOpenContext);

   let project;
   if (isModalOpen) {
      project = projects.find((project: ProjectType) => {
         if (project.id === projectId) {
            return project;
         }
      })
   }


   return (
      <div id='modal' className={`${styles.modalContainer} ${isModalOpen ? styles["show"] : ""}`}>
         <div
            className={styles.modal}
            style={{ backgroundImage: `url(${project?.image})` }}
         >
            <button
               className={`${styles.closeButton} ${ptMono.className}`}
               onClick={changeModalOpening}
            >x</button>
         </div>
      </div>
   )
}