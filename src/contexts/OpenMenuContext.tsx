'use client'

import { createContext, useState } from "react";

type IsOpenContextProps = {
   isOpen: boolean,
   changeOpening: () => void;
}

export const IsOpenMenuContext = createContext<IsOpenContextProps>({} as IsOpenContextProps)

export function IsOpenMenuContextProvider({ children, }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const changeOpening = () => setIsOpen(prev => !prev)

   return (
      <IsOpenMenuContext.Provider value={{ isOpen, changeOpening }}>
         {children}
      </IsOpenMenuContext.Provider>
   )
}