'use client';

import styles from './Header.module.css';
// import './Header.css'

import Logo from '../Logo';
import Navbar from '../Navbar'
import ThemeSwitch from '../ThemeSwitch';
import SocialLinks from '../SocialLinks'
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

export default function Header() {
   console.log('renderizouuuuuuu')


   const [_body, setBody] = useState(null)
   const [_localStorage, setLocalStorage] = useState(null)
   const [_theme, setTheme] = useState("Claro")

   useLayoutEffect(() => {
      let theme = localStorage.getItem('theme')
      setTheme(theme || "Claro")
      setBody(document.body)
      setLocalStorage(localStorage)


      if (theme === 'Claro') {
         document.body.classList.remove('dark')
      }


      if (theme === 'Escuro') {
         document.body.classList.add('dark')
      }

      console.log(theme === 'Escuro')
   }, [_theme])

   const changeTheme = () => {
      console.log('eu')
      _body.classList.toggle('dark');
      if (_theme === 'Escuro') {
         _localStorage.setItem('theme', 'Claro');
         _body.classList.remove('dark');
         setTheme('Claro')
      } else {
         _localStorage.setItem('theme', 'Escuro');
         _body.classList.add('dark')
         setTheme('Escuro')
      }
   }
   

   const headerRef = useRef()


   useEffect(() => {
      window.addEventListener('scroll', () => {
         const header = document.querySelector('#header')
         window.scrollY > 0 ? header.classList.add('scrolling') : '';
         window.scrollY < 1 ? header.classList.remove('scrolling') : '';
      })
   }, [])



   return (
      <header ref={headerRef} id='header' className={`${styles.header} header`}>
         <Logo />
         <Navbar />
         <ThemeSwitch changeTheme={changeTheme} legend={_theme} />
         <SocialLinks />
      </header>
   )
}