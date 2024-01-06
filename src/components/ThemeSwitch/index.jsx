'use client'

import styles from './ThemeSwitch.module.css'

import moon from '../../assets/icons/moon.svg?url';
import sun from '../../assets/icons/sun.svg?url';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

export default function ThemeSwitch() {

   const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
         console.log(true)
         const valueTheme = window.__theme
         return valueTheme;
      }
   })

   console.log(theme)
   // useEffect(() => {
   //    setTheme(localStorage.getItem("theme"))
   // }, [])

   // useEffect(() => {
   //    setTheme(window.__theme)
   // }, [])

   // useEffect(() => {
   //    localStorage.setItem("theme", theme)
   //    if (theme === 'dark') {
   //       document.documentElement.classList.add('dark');
   //    } else if (theme === 'light') {
   //       document.documentElement.classList.remove('dark');
   //    }
   // }, [theme])

   useEffect(() => {
      window.__setPreferredTheme(theme)
   }, [theme])

   return (
      <fieldset className={styles.themeSwitch}>
         <legend id='legendTheme' className={styles.legend}></legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div
               id='sliderButton'
               className={`${styles.slider} slider`}
               onClick={() => {
                  if (theme === "light") {
                     setTheme("dark")
                  } else if (theme === "dark") {
                     setTheme("light")
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
      if (newTheme === 'dark') {
         document.documentElement.classList.add('dark');
      } else if (newTheme === 'light') {
         document.documentElement.classList.remove('dark');
      }
   }

   // const sliderButtonEl = document.querySelector('#sliderButton')
   // legendThemeEl.textContent = window.__theme
   // console.log(sliderButton)
   // sliderButton.addEventListener("click", () => {
   //    if ()
   // })

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
      initialTheme = "light";
   }

   console.log("Tema inicial", initialTheme)
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