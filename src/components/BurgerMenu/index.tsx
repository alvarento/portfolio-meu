"use client"

import { useContext, useEffect } from 'react';
import styles from './BurgerMenu.module.scss';
import { IsOpenMenuContext } from '@/contexts/OpenMenuContext';


export default function BurguerMenu() {

   const { isOpen, changeOpening } = useContext(IsOpenMenuContext)

   useEffect(() => {
      const allElements = document.querySelectorAll<HTMLElement>('body > div, #header, #main, #footer, .logo, .navbar')
      if (isOpen) {
         document.body.style.overflow = 'hidden'
         allElements.forEach(element => element.style.filter = 'blur(7px)')
      } else {
         document.body.style.overflow = 'initial'
         allElements.forEach(element => element.style.filter = 'none')
      }
   }, [isOpen])


   return (
      <div
         id='burgerMenu'
         className={
            `${styles.burgerMenu}
            ${isOpen ? styles["open"] : ""}
         `}
         onClick={changeOpening}
      >
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
   )
}