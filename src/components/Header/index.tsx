'use client';

import styles from './Header.module.css';

import Logo from '../Logo';
import Navbar from '../Navbar'
import ThemeSwitch from '../ThemeSwitch';
import SocialLinks from '../SocialLinks'

import { useEffect, useRef } from 'react';

export default function Header() {
   const headerRef = useRef<HTMLElement>(null)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         const header = headerRef.current
         window.scrollY > 0 ? header!.classList.add('scrolling') : '';
         window.scrollY < 1 ? header!.classList.remove('scrolling') : '';
      })
   }, [])

   return (
      <header ref={headerRef} id='header' className={`${styles.header} header`}>
         <Logo />
         <Navbar />
         <ThemeSwitch />
         <SocialLinks />
      </header>
   )
}