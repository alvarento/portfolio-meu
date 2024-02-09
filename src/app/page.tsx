'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import HeaderMobile from '@/components/HeaderMobile';
import Main from "@/components/Main";
import ProjectPreview from '@/components/ProjectPreview';
import ScrollIndicator from '@/components/ScrollIndicator';
import { IsModalOpenContextProvider } from '@/contexts/OpenModalContext';
import { useEffect, useState } from 'react';

 export interface ProjectType {
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

export default function Portifolio() {
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('http://localhost:8080/projects');
        const projects: ProjectType[] = await response.json()
        setProjects(projects)

      } catch (error) {
        setProjects(projectsMock)
        return;
      }
    }
    fetchProjects();
  }, [])

  return (
    <IsModalOpenContextProvider>

      <ScrollIndicator />
      <Header />
      <HeaderMobile />
      <Main projects={projects}/>
      <Footer />
      <ProjectPreview projects={projects} />
    </IsModalOpenContextProvider>
  )
}
