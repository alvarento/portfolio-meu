"use client"


import './ProjectsSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionTitle from '../SectionTitle'

import FolderIcon from '../../assets/icons/folder.svg'

import { projects as projects2 } from '../../api-portifolio.json'


import CardPorject from '../CardProject'
import { useEffect, useState } from 'react';



export default function ProjectsSection() {
   console.log('renderizou a Seção de projetos')
   
   const [projects, setProjects] = useState([])

   useEffect( () => {
      async function fetchProjects() {
         const response = await fetch('http://localhost:8080/projects')
         const projects = await response.json()
         setProjects(projects || projects2)
      }
      fetchProjects();
   }, [])

   const hideSwiperButton = (swiper) => {
      const navNext = swiper.navigation.nextEl
      const navPrev = swiper.navigation.prevEl

      swiper.isEnd ? navNext.style.visibility = "hidden" : navNext.style.visibility = "visible"
      swiper.isBeginning ? navPrev.style.visibility = "hidden" : navPrev.style.visibility = "visible"
   }



   return (
      <section id='projects' className="projects">
         <SectionTitle
            icon={<FolderIcon className="iconT3" />}
            textTitle="Meus projetos"
         />
         <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            spaceBetween={15}
            className="swiper"
            breakpoints={{
               768: {
                  slidesPerView: 2
               },
               1300: {
                  slidesPerView: 3
               }
            }}
            onSlideChange={(swiper) => hideSwiperButton(swiper)}
            pagination={{
               clickable: true,
               renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
               }
            }}
         >

            {projects.map((project, index) => <SwiperSlide key={index}>{<CardPorject project={project} />}</SwiperSlide>)}
         </Swiper>
      </section>
   )
}