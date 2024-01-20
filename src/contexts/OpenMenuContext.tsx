'use client'

import { MouseEventHandler, createContext, useState } from "react";

type IsOpenContextProps = {
   isOpen: boolean,
   changeOpening: MouseEventHandler;
}

export const IsOpenMenuContext = createContext<IsOpenContextProps>({} as IsOpenContextProps)

export function IsOpenMenuContextProvider({ children, }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const changeOpening: MouseEventHandler = () => setIsOpen(prev => !prev)

   return (
      <IsOpenMenuContext.Provider value={{ isOpen, changeOpening }}>
         {children}
      </IsOpenMenuContext.Provider>
   )
}