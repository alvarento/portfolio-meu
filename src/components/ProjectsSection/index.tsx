"use client"

import './ProjectsSection.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import SectionTitle from '../SectionTitle'
import CardPorject from '../CardProject'
import AlternativeText from '../AlternativeText';
import { FolderIcon } from '../svgs'

import { useEffect, useState } from 'react';

interface ProjectType {
   id: string
   name: string,
   image: string,
   description: string,
   deploy: string,
   repository: string,
   stacks: string[]
}

const projectsMock: ProjectType[] = [
   {
      id: "1",
      name: "project 1",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 1",
      deploy: "https://google.com.br",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: []
   },
   {
      id: "2",
      name: "project 2 e este e o seu titulo sadvsdv dfgsgfdgfds fbsdfb ajkksd aihoipdhga iafobi8hao oinhoifdhoi oihndog",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 2",
      deploy: "",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: []
   },
   {
      id: "3",
      name: "project 3",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 3",
      deploy: "https://google.com.br",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      id: "4",
      name: "project 3",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 3",
      deploy: "https://google.com.br",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      id: "5",
      name: "project 3",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 3",
      deploy: "https://google.com.br",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      id: "6",
      name: "project 4",
      image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      description: "Este é o projeto 4",
      deploy: "https://google.com.br",
      repository: "https://github.com/alvaronascimento-dev",
      stacks: [
         "javascript",
         "nodejs",
         "mongodb",
         "html",
         "mysql",
         "postgres",
         "typescript",
         "mongoose",
         "javascript",
         "nodejs",
         "mongodb",
         "html",
         "mysql",
         "postgres",
         "typescript",
         "mongoose",
         "javascript",
         "nodejs",
         "mongodb",
         "html",
         "mysql",
         "postgres",
         "typescript"
      ]
   }
]


export default function ProjectsSection({ projects }: any) {

   // const [projects, setProjects] = useState<ProjectType[]>([])

   // useEffect(() => {
   //    async function fetchProjects() {
   //       try {
   //          const response = await fetch('http://localhost:8080/projects');
   //          const projects: ProjectType[] = await response.json()
   //          setProjects(projects)

   //       } catch (error) {
   //          setProjects(projectsMock)
   //          return;
   //       }
   //    }
   //    fetchProjects();
   // }, [])

   const hideSwiperButton = (swiper: any) => {
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
            {projects.length > 0 ?
               projects.map((project: any, index: any) => <SwiperSlide key={index}>{<CardPorject project={project} />}</SwiperSlide>) : <AlternativeText imageSrc="/images/projects-build.png" />
            }
         </Swiper>
      </section>
   )
}