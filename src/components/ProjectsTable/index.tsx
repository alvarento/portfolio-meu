'use client'

import { ProjectType } from "@/app/page";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";





export default function ProjectsTable() {

   const { data: projects } = useFetch<ProjectType[]>("api/projects");

   const projectProps = [
      "id",
      "name",
      "image",
      "description",
      "deploy",
      "repository",
      "stacks",
      "keywords",
      "visibility",
      "created_at",
      "actions"
   ]

   const TableHead = () => {
      return (
         <th>
            <span></span>
         </th>
      )
   }

   return (
      <table>
         <thead>
            {projectProps.map((value, index) => {
               return (
                  <th key={index}>
                     <span>{value}</span>
                  </th>
               )
            })}
         </thead>
         <tbody>
            {projects?.map((project) => {
               return (
                  <tr key={project.id}>
                     <td>{project.id}</td>
                     <td>{project.name}</td>
                     <td>
                        <Image
                           src={project.image}
                           alt="Imagem do Projeto"
                           height={32.4}
                           width={57.6}
                           // fill
                           // objectFit="cover"
                           // style={{width: "100px1920", height: "50px", objectFit: "contain"}}
                        />
                     </td>
                     <td>{project.description}</td>
                     <td><a href={project.deploy} target="_blank">{project.deploy}</a></td>
                     <td><a href={project.repository} target="_blank">{project.repository}</a></td>
                     <td>{project.stacks}</td>
                     <td>{project.keywords}</td>
                     <td>
                           
                     </td>
                     <td>
                     
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}