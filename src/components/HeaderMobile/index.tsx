"use client"

import styles from './HeaderMobile.module.scss'

import BurguerMenu from "../BurgerMenu";
import Logo from "../Logo";
import Navbar from "../Navbar";
import SocialLinks from "../SocialLinks";
import ThemeSwitch from "../ThemeSwitch";
import { IsOpenMenuContext, IsOpenMenuContextProvider } from '@/contexts/OpenMenuContext';
import { useContext, useEffect, useRef } from 'react';
import MenuMobile from '../MenuMobile';
import Script from 'next/script';

// type headerMobileRefProps = {
//    headerMobile: HTMLElement
// }

export default function HeaderMobile() {


   const headerMobileRef = useRef<HTMLElement>(null)
   // headerMobileRef.current


   useEffect(() => {
      window.addEventListener('scroll', () => {
         const headerMobile = document.querySelector('#headerMobile')
         // headerMobileRef.current.style.backgroundColor = "red"
         window.scrollY > 0 ? headerMobile?.classList.add('scrolling') : '';
         window.scrollY < 1 ? headerMobile?.classList.remove('scrolling') : '';
      })
   }, [])


   return (
      <IsOpenMenuContextProvider>
         <header ref={headerMobileRef} className={`${styles.headerMobile} headerMobile`} id='headerMobile'>
            <div className={styles.topHeader}>
               <Logo />
               <BurguerMenu />
            </div>
            <Navbar />
            <MenuMobile />
         </header >
      </IsOpenMenuContextProvider>
   )
}