"use client"

import styles from './HeaderMobile.module.scss'

import BurguerMenu from "../BurgerMenu";
import Logo from "../Logo";
import Navbar from "../Navbar";
import MenuMobile from '../MenuMobile';
import { IsOpenMenuContextProvider } from '@/contexts/OpenMenuContext';

import { useEffect, useRef } from 'react';


export default function HeaderMobile() {

   const headerMobileRef = useRef<HTMLElement>(null)

   useEffect(() => {
      const headerMobile = headerMobileRef.current;
      
      window.addEventListener('scroll', () => {
            window.scrollY > 0 ? headerMobile?.classList.add('scrolling') : '';
            window.scrollY < 1 ? headerMobile?.classList.remove('scrolling') : '';
      })
   }, [])

   return (
      <IsOpenMenuContextProvider>
         <header id='headerMobile' ref={headerMobileRef} className={`${styles.headerMobile} headerMobile`}>
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