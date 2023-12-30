"use client"

import { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
   const [scrollTop, setScrollTop] = useState(0)
   const [headerAltura, setHeaderAltura] = useState(0)

   const onScroll = () => {
      // const winScroll = document.documentElement.scrollTo;
      // console.log(winScroll)
      // const height = document.documentElement.clientHeight
      // const scrolled = (winScroll / height) * 100;

      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const percentagem = (window.scrollY / maxHeight) * 100

      const currentHeader = document.querySelector('#header')
      const headerAltura = currentHeader.clientHeight
      setScrollTop(percentagem)
      setHeaderAltura(headerAltura)
   }

   useEffect(() => {
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
   }, [])


   return (
      <div className={styles.progressBar} style={{ top: `${headerAltura}px` }}>
         <div className={styles.progressIndicator} style={{width: `${scrollTop}%`}}></div>
      </div>
   )
}
