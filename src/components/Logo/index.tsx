import styles from './Logo.module.scss';

import { LogoIcon } from '../svgs'

export default function Logo() {
   return (
      <a className={`${styles.logo} icon logo`}>
         <LogoIcon />
         <span className={styles.logoName}>alvarento</span>
         <span className={styles.slogan}>apegado a tecnologia</span>
      </a>
   )
}