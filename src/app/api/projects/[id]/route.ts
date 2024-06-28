import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "../../database/prismaClient";
import db from "../../database/dbConfig";


export async function DELETE(request: NextRequest, response: NextResponse) {
   const urlArray = request.nextUrl.pathname.split("/")
   const id = urlArray[urlArray.length -1]
   // console.log(query)
   console.log(id)

   try {
      await prismaClient.project.delete({
         where: {
            id: Number(id)
         }
      })
      
      return Response.json({ message: "project was deleted!" })

   } catch (error: any) {
      console.log(error.message)
   }



   // 
}