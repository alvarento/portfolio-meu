'use client'

import styles from './ThemeSwitch.module.css'

import moon from '../../assets/icons/moon.svg?url';
import sun from '../../assets/icons/sun.svg?url';
// import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ThemeSwitch({ changeTheme, legend }) {

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
         <legend className={styles.legend}>{legend}</legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div className={`${styles.slider} slider`} onClick={changeTheme}></div>
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