// 'use client'

import styles from './SkillList.module.scss';

import AlternativeText from '../AlternativeText';

import { memo, useEffect, useState } from 'react';
import CircleTempleteIcon from '../CircleTempleteIcon';
import SkillCard from '../SkillCard';
import { useFetch } from '@/hooks/useFetch';

interface SkillType {
   id?: string,
   name: string,
   icon: string
}

const skillsMock: SkillType[] = [
   {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
   },
   {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
   },
   {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
   },
   {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
   },
   {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
   }
]


function SkillList() {

   const { data: skills } = useFetch<SkillType[]>("api/skills");

   console.log("minhas skills", skills)

   return (
      <ul className={styles.skillList}>
         {
            skills!?.length > 0 ?
               skills?.map((skill) => {
                  const { id, name, icon } = skill
                  return <SkillCard
                     key={id}
                     name={name}
                     srcIcon={icon}
                  // proportion={1.2}
                  />
               }) :
               <AlternativeText imageSrc="/images/skills-build.png" />
         }
      </ul>
   )
}

export default SkillList;