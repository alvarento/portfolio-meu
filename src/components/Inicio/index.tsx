"use client"

import styles from './Inicio.module.scss';

import { Cursor, useTypewriter } from 'react-simple-typewriter'

import Image from 'next/image';

export default function Inicio() {

   const [text] = useTypewriter({
      words: ['back-end', 'NodeJS'],
      loop: 0,
      delaySpeed: 3000,
      deleteSpeed: 100
   })

   return (
      <section id='home' className={`${styles.home} home`}>
         <div className={`${styles.banner} banner`}>
            <div className={styles.homeContent}>
               <p className={styles.greetingText}>Olá, boas vindas ao meu espaço pessoal!</p>
               <div>
                  Eu sou,
                  <h1 className={styles.title}>Álvaro Nascimento</h1>
                  <h2 className={styles.subTitle}>Desenvolvedor {text}<Cursor /></h2>
                  <p className={styles.rodape}>Aqui compartilho meus projetos pessoais.</p>
               </div>
            </div>

            <div className={styles.homeImage}>
               <Image
                  className={styles.perfilImage}
                  src="/images/foto-perfil-3.png"
                  alt="imagem de Álvaro"
                  width={461.6}
                  height={417.6}
                  priority
               />
            </div>
         </div>
      </section>
   )
}