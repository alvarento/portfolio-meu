'use client'

import Image from 'next/image';
import { PT_Mono } from 'next/font/google'
import styles from './ProjectPreview.module.scss';
import { useContext, useState } from 'react';

import { IsModalOpenContext, IsModalOpenContextProvider } from '@/contexts/OpenModalContext';
import ExternalButton from '../ExternalButton';

import { PreviewIcon } from '../svgs';

const ptMono = PT_Mono({ weight: '400', subsets: ['latin'] })


interface ProjectPreviewProps {
   srcImage: string
}

export default function ProjectPreview({ projects }: any) {


   // const [isModalOpen, setIsModalOpen] = useState(false)
   const { isModalOpen, projectId, changeModalOpening } = useContext(IsModalOpenContext)
   // style = {{ backgroundImage: `url(${srcImage})` }}

   const project = projects.find((project: any) => project.id === projectId)

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