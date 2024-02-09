'use client'

import Image from 'next/image';
import styles from './ThemeSwitch.module.css'

import { useState, useEffect } from 'react';

export default function ThemeSwitch() {

   // console.log("Renderizou componente de Theme")


   const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
         const valueTheme = window.__theme
         return valueTheme;
      }
   })

   useEffect(() => {
      window.__setPreferredTheme(theme!)
   }, [theme])

   const changeTheme = () => {
      if (theme === "light") {
         setTheme("dark")
      } else if (theme === "dark") {
         setTheme("light")
      }
   }

   return (
      <fieldset className={styles.themeSwitch}>
         <legend id='legendTheme' className={styles.legend}></legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div
               id='sliderButton'
               className={`${styles.slider} slider`}
               onClick={changeTheme}
            >
            </div>
            <div className={styles.icons}>
               <Image
                  src="./icons/moon.svg"
                  width={18}
                  height={18}
                  alt='Icone de Lua'
               />
               <Image
                  src="./icons/sun.svg"
                  width={18}
                  height={18}
                  alt='Icone de Sol'
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
         if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
         } else if (newTheme === 'light') {
            document.documentElement.classList.remove('dark');
         }
      }

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

      const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const userSystemTheme = isDarkTheme ? "dark" : "light";
      
      if (!initialTheme) initialTheme = userSystemTheme;

      setTheme(initialTheme);

      function isMobile() {
         if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
         ) {
            return true;
         }
         else {
            return false;
         }
      }

      document.documentElement.classList.add(isMobile() ? "mobile" : "computer");

   })();
  `