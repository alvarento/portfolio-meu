'use client'

import styles from './SkillList.module.css';


import { skills as skills2 } from '@/api-portifolio.json';
import SkillCard from '../SkillCard';
import { useEffect, useState } from 'react';
import AlternativeText from '../AlternativeText';

import skillBuild from "../../../public/images/skills-build.png"



export default function SkillList() {

   const [skills, setSkills] = useState([])

   useEffect(() => {
      async function fetchSkills() {
         try {
            const response = await fetch('http://localhost:8080/skills')
            const skills = await response.json()
            setSkills(skills)
         } catch (error) {
            return;
         }
      }
      fetchSkills();

   }, [])
   return (
      <ul className={styles.skillList}>
         {
            skills.length > 0 ?
               skills.map((skill) =>
                  <SkillCard
                     key={skill.name}
                     name={skill.name}
                     srcIcon={skill.srcIcon}
                  />) :
               <AlternativeText text="Skills em construção!" imageSrc={skillBuild}/>
         }
      </ul>
   )
}