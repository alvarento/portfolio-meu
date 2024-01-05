'use client'

import styles from './ThemeSwitch.module.css'

import moon from '../../assets/icons/moon.svg?url';
import sun from '../../assets/icons/sun.svg?url';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ThemeSwitch() {
   // localStorage.clear()
   const initialTheme = localStorage.getItem('theme') ?? 'light'
   const initialLegendTheme = initialTheme === 'light' ? 'Claro' : 'Escuro';
   const [theme, setThemeState] = useState(initialTheme)
   const [legendTheme, setLegendTheme] = useState(initialLegendTheme)

   useEffect(() => {
      document.documentElement.classList[theme === 'dark' ? "add" : "remove"]("dark")
      localStorage.setItem('theme', theme)
   }, [theme])

   // const [storage, setStorage] = useState(useEffect(() => { setStorage(localStorage) }, []))

   

   // let theme = localStorage.getItem('theme')

   // console.log(theme)
   // // localStorage.clear()
   // const [legend, setLegend] = useState(theme || 'Claro')

   // if (theme === 'Claro') {
   //    document.body.classList.remove('dark')
   // }


   // if (theme === 'Escuro') {
   //    document.body.classList.add('dark')
   // }

   // console.log(theme === 'Escuro')

   // const changeTheme = () => {
   //    document.body.classList.toggle('dark');
   //    if (theme === 'Escuro') {
   //       localStorage.setItem('theme', 'Claro');
   //       document.body.classList.remove('dark');
   //       setLegend('Claro')
   //    } else {
   //       localStorage.setItem('theme', 'Escuro');
   //       document.body.classList.add('dark')
   //       setLegend('Escuro')
   //    }
   // }

   return (
      <fieldset className={styles.themeSwitch}>
         <legend id='legendTheme' className={styles.legend}>{legendTheme}</legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div
               id='sliderButton'
               className={`${styles.slider} slider`}
               onClick={() => {
                  setThemeState(theme === "light" ? "dark" : "light")
                  setLegendTheme(theme === "light" ? "Escuro" : "Claro")
               }}
            > 
            </div>
            <div className={styles.icons}>
               <Image
                  src={moon} alt="moon" width={18} height={18}
               />
               <Image
                  src={sun} alt="sun" width={18} height={18}
               />
            </div>
         </div>
      </fieldset>
   )
}