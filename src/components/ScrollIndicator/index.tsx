"use client"

import { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
   const [scrollTop, setScrollTop] = useState(0)
   const [headerAltura, setHeaderAltura] = useState(0)

   const onScroll = () => {
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const percentagem = (window.scrollY / maxHeight) * 100

      let currentHeader;
      if (window.innerWidth > 768) {
         currentHeader = document.querySelector('#header')
      } else if (window.innerWidth < 769) {
         currentHeader = document.querySelector('#headerMobile')
      }

      // console.log(currentHeader)

      // const allHeaders = document.querySelectorAll('#header, #headerMobile')
      // const currentHeader = window.innerWidth > 768 ? allHeaders[0]! : allHeaders[1]!
      const headerAltura = currentHeader!.clientHeight
      setScrollTop(percentagem)
      setHeaderAltura(headerAltura)
   }

   useEffect(() => {
      window.addEventListener("scroll", onScroll)
   }, [])


   return (
      <div className={styles.progressBar} style={{ top: `${headerAltura}px` }}>
         <div className={styles.progressIndicator} style={{ width: `${scrollTop}%` }}></div>
      </div>
   )
}
