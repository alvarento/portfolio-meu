'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import HeaderMobile from '@/components/HeaderMobile';
import Main from "@/components/Main";
import ProjectPreview from '@/components/ProjectPreview';
import ScrollIndicator from '@/components/ScrollIndicator';
import { IsModalOpenContextProvider } from '@/contexts/OpenModalContext';
import { useFetch } from '@/hooks/useFetch';
import { memo } from 'react';

export interface ProjectType {
  id: number
  name: string,
  image: string,
  description: string,
  deploy: string,
  repository: string,
  stacks: string,
  keywords: string,
  visibility: string
}


const projectsMock: ProjectType[] = [
  {
    id: 1,
    name: "project 1",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 1",
    deploy: "https://google.com.br",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "",
    keywords: "TDD,DDD",
    visibility: "visible"
  },
  {
    id: 2,
    name: "project 2 e este e o seu titulo sadvsdv dfgsgfdgfds fbsdfb ajkksd aihoipdhga iafobi8hao oinhoifdhoi oihndog",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 2",
    deploy: "",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "",
    keywords: "",
    visibility: "visible"
  },
  {
    id: 3,
    name: "project 3",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 3",
    deploy: "https://google.com.br",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "jest,mysql,nodejs",
    keywords: "",
    visibility: "visible"
  },
  {
    id: 4,
    name: "project 3",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 3",
    deploy: "https://google.com.br",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "jest,mysql,nodejs",
    keywords: "",
    visibility: "visible"
  },
  {
    id: 5,
    name: "project 3",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 3",
    deploy: "https://google.com.br",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "jest,mysql,nodejs",
    keywords: "",
    visibility: "visible"
  },
  {
    id: 6,
    name: "project 4",
    image: "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
    description: "Este é o projeto 4",
    deploy: "https://google.com.br",
    repository: "https://github.com/alvaronascimento-dev",
    stacks: "jest,mysql,nodejs",
    keywords: "",
    visibility: "visible"
  }
]

export default function Portifolio() {

  console.log("Renderizou: Portifolio");

  const { data: projects} = useFetch<ProjectType[]>("api/projects");
  // const projects = projectsMock;
  const visibleProjects = projects!?.filter(project => project.visibility === "visible");

  return (
    <IsModalOpenContextProvider>
      <ScrollIndicator />
      <HeaderMobile />
      <Header />
      <Main projects={visibleProjects} />
      <Footer />
      <ProjectPreview projects={visibleProjects} />
    </IsModalOpenContextProvider>
  )
}

// export default memo(Portifolio);
