"use client"

import './ProjectsSection.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard'
import AlternativeText from '../AlternativeText';
import { FolderIcon } from '../svgs'
import { useEffect, useState } from 'react';

import { ProjectType } from '@/app/page';


interface ProjectsSectionProps {
   projects: ProjectType[];
}


export default function ProjectsSection({ projects }: ProjectsSectionProps) {

   const hideSwiperButton = (swiper: SwiperClass) => {
      const navNext = swiper.navigation.nextEl;
      const navPrev = swiper.navigation.prevEl;

      swiper.isEnd ? navNext.style.visibility = "hidden" : navNext.style.visibility = "visible";
      swiper.isBeginning ? navPrev.style.visibility = "hidden" : navPrev.style.visibility = "visible";
   }

   console.log("projetos", projects?.length)

   let alignment = projects?.length < 3 ? "center" : "none";
   console.log(alignment)



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
            {projects?.length > 0 ?
               projects.map((project, index) => <SwiperSlide key={index}>{<ProjectCard project={project} />}</SwiperSlide>) : <AlternativeText imageSrc="/images/projects-build.png" />
            }
         </Swiper>
      </section>
   )
}