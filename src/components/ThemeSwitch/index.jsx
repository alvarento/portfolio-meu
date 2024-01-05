'use client'

import styles from './ThemeSwitch.module.css'

import moon from '../../assets/icons/moon.svg?url';
import sun from '../../assets/icons/sun.svg?url';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

export default function ThemeSwitch() {

   const [theme, setTheme] = useState("Claro")
   
   useEffect(() => {
      setTheme(localStorage.getItem("theme"))
   }, [])

   useEffect(() => {
      setTheme(window.__theme)
   }, [])

   useEffect(() => {
      localStorage.setItem("theme", theme)
      if (theme === 'Escuro') {
         document.documentElement.classList.add('dark');
      } else if (theme === 'Claro') {
         document.documentElement.classList.remove('dark');
      }
   }, [theme])

   return (
      <fieldset className={styles.themeSwitch}>
         <legend id='legendTheme' className={styles.legend}></legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div
               id='sliderButton'
               className={`${styles.slider} slider`}
               onClick={() => {
                  if (theme === "Claro") {
                     setTheme("Escuro")
                  } else if (theme === "Escuro") {
                     setTheme("Claro")
                  }
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
         <script
            dangerouslySetInnerHTML={{
               __html: customScript,
            }}
         ></script>
      </fieldset>
   )
}


const customScript = `
  (function () {
   function setTheme(newTheme) {
      window.__theme = newTheme;
      if (newTheme === 'Escuro') {
         document.documentElement.classList.add('dark');
      } else if (newTheme === 'Claro') {
         document.documentElement.classList.remove('dark');
      }
   }

   // const legendThemeEl = document.querySelector('#legendTheme')
   // legendThemeEl.textContent = window.__theme
   // console.log(legendThemeEl)

   var preferredTheme;
   try {
      preferredTheme = localStorage.getItem('theme');
   } catch (err) { }

   window.__setPreferredTheme = function(newTheme) {
      preferredTheme = newTheme;
      setTheme(newTheme);
      try {
         localStorage.setItem('theme', newTheme);
      } catch (err) { }
   };

   var initialTheme = preferredTheme;
   // var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

   if (!initialTheme) {
      // initialTheme = darkQuery.matches ? 'dark' : 'light';
      initialTheme = "Claro";
   }
   setTheme(initialTheme);

   // darkQuery.addEventListener('change', function (e) {
   //    if (!preferredTheme) {
   //       setTheme(e.matches ? 'dark' : 'light');
   //    }
   // });

   // Detect whether the browser is Mac to display platform specific content
   // An example of such content can be the keyboard shortcut displayed in the search bar
   document.documentElement.classList.add(
         window.navigator.platform.includes('Mac')
         ? "platform-mac"
         : "platform-win"
   );
   })();
  `