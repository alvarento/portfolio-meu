"use client"

import styles from './Footer.module.css';
import LogoIcon from '../../assets/icons/logo.svg'


import EmailIcon from '../../assets/icons/email.svg'
import { useState } from 'react';
import Image from 'next/image';




export default function Footer() {

   const [currentYear] = useState(() => new Date().getFullYear())

   return (
      <footer id="footer" className={`${styles.footer} footer`}>
         <p>
            <LogoIcon
               style={{width: 20, height: 20, marginRight: 10}}
               className='icon'
            />
            &copy; {currentYear} | desenvolvido por <a href="https://alvaronascimento.dev"
            target="_blank" rel="noreferrer">Álvaro Nascimento</a>
         </p>
         <div className={styles.contactEmail}>
            <EmailIcon className="icon"/>
            <span>Entrar em contato</span>
            <a href="mailto:alvaronascimento.dev@gmail.com" target="_blank" rel="noreferrer">alvaronascimento.dev@gmail.com
            </a>
         </div>
      </footer>
   )
}