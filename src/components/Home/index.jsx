"use client"

import styles from './Home.module.scss';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import fotoPerfil from '../../assets/images/foto-perfil-3.png'
import Image from 'next/image';

export default function Home() {

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
               <p>Olá, boas vindas ao meu espaço pessoal!</p>
               <div>
                  Eu sou,
                  <h1>Álvaro Nascimento</h1>
                  <h2>Desenvolvedor {text}<Cursor /></h2> em formação. <br />
                  Aqui compartilho meus projetos pessoais.
               </div>
            </div>

            <div className={styles.homeImage}>
               <Image
                  src={fotoPerfil}
                  alt="imagem de Álvaro"
                  priority
               />
            </div>
         </div>
      </section>
   )
}