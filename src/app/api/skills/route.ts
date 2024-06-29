import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "../database/prismaClient";

const projects = [
   {
      "id": "1",
      "name": "project 1",
      "image": "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      "description": "Este é o projeto 1",
      "deploy": "https://google.com.br",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": []
   },
   {
      "id": "2",
      "name": "project 2 e este e o seu titulo sadvsdv dfgsgfdgfds fbsdfb ajkksd aihoipdhga iafobi8hao oinhoifdhoi oihndog",
      "image": "https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_640.jpg",
      "description": "Este é o projeto 2",
      "deploy": "",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": []
   },
   {
      "id": "3",
      "name": "project 3",
      "image": "https://cdn.pixabay.com/photo/2015/01/12/17/40/padlock-597495_640.jpg",
      "description": "Este é o projeto 3",
      "deploy": "https://google.com.br",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      "id": "4",
      "name": "project 3",
      "image": "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/portifolio-1.png",
      "description": "Este é o projeto 3",
      "deploy": "https://google.com.br",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      "id": "5",
      "name": "project 3",
      "image": "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      "description": "Este é o projeto 3",
      "deploy": "https://google.com.br",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": [
         "jest",
         "mysql",
         "nodejs"
      ]
   },
   {
      "id": "6",
      "name": "project 4",
      "image": "https://raw.githubusercontent.com/alvaronascimento-dev/images/main/meta-og.jpg",
      "description": "Este é o projeto 4",
      "deploy": "https://google.com.br",
      "repository": "https://github.com/alvaronascimento-dev",
      "stacks": [
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

export async function GET() {
   const skills = await prismaClient.skill.findMany()
   return Response.json(skills)
}

export async function POST(request: NextRequest, response: NextResponse) {
   const { name, icon } = await request.json();
   const skill = await prismaClient.skill.create({
      data: {
         name,
         icon
      }
   })

   return Response.json({ message: "skill created", project: skill })
}


export async function DELETE(request: NextRequest, response: NextResponse) {
   const id = request.nextUrl.searchParams.get("id")
   // const id = urlArray[urlArray.length - 1]
   // console.log(query)

   try {
      await prismaClient.skill.delete({
         where: {
            id: id!
         }
      })

      return Response.json({ message: "skill was deleted!" })

   } catch (error: any) {
      console.log(error.message)
   }
}