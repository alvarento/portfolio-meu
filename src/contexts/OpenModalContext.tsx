'use client'

import { ChangeEvent, MouseEvent, MouseEventHandler, createContext, useState } from "react";

type IsModalOpenContextProps = {
   isModalOpen: boolean;
   projectId: number | null;
   changeModalOpening: MouseEventHandler;
};

export const IsModalOpenContext = createContext<IsModalOpenContextProps>({} as IsModalOpenContextProps);

export function IsModalOpenContextProvider({ children, }: { children: React.ReactNode }) {
   const [isModalOpen, setIsOpen] = useState<boolean>(false);
   const [projectId, setProjectId] = useState<number| null>(null);

   const changeModalOpening = ((event: any): void => {
      setIsOpen((prev) => !prev);
      if(!isModalOpen) {
         setProjectId(Number(event.target.parentElement.parentElement.dataset.id))
      };
   });


   return (
      <IsModalOpenContext.Provider value={{ isModalOpen, projectId, changeModalOpening }}>
         {children}
      </IsModalOpenContext.Provider>
   )
}