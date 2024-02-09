'use client'

import { MouseEventHandler, createContext, useState } from "react";

type IsModalOpenContextProps = {
   isModalOpen: boolean
   projectId: string
   changeModalOpening: MouseEventHandler;
}

export const IsModalOpenContext = createContext<IsModalOpenContextProps>({} as IsModalOpenContextProps)

export function IsModalOpenContextProvider({ children, }: { children: React.ReactNode }) {
   const [isModalOpen, setIsOpen] = useState<boolean>(false)
   const [projectId, setProjectId] = useState<string>("")

   const changeModalOpening = (event: any): void => {
      setIsOpen((prev) => !prev)
      console.log(isModalOpen)
      console.log(event)
      // console.log(event.target.parentElement.parentElement.id)
      setProjectId(event.target.parentElement.parentElement.id)
   }

   return (
      <IsModalOpenContext.Provider value={{ isModalOpen, projectId, changeModalOpening }}>
         {children}
      </IsModalOpenContext.Provider>
   )
}