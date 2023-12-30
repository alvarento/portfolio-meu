import styles from './Logo.module.scss';

import LogoIcon from '../../assets/icons/logo.svg'

export default function Logo() {
   return (
      <a className={`${styles.logo} icon logo`}>
         <LogoIcon/>
         <span>alvaroNascimento-dev</span>
      </a>
   )
}