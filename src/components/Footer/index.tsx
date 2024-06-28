"use client"

import styles from './Footer.module.scss';

import { LogoIcon, EmailIcon } from '../svgs'

import { useState } from 'react';


export default function Footer() {

   const [currentYear] = useState(() => new Date().getFullYear())

   return (
      <footer id="footer" className={`${styles.footer} footer`}>
         <div className={styles.footerAuthor}>
            <span>
               <LogoIcon
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  className='icon'
               />
               &copy; {currentYear} | desenvolvido por
            </span>
            <a
               className={styles.authorName}
               href="https://alvarento.com"
               target="_blank"
               rel="noreferrer"
            >
            Álvaro Nascimento
            </a>
         </div>
         <div className={styles.contactEmail}>
            <EmailIcon className="icon" />
            <span>Entrar em contato</span>
            <a href="mailto:alvarento@hotmail.com" target="_blank" rel="noreferrer">alvarento@hotmail.com
            </a>
         </div>
      </footer>
   )
}