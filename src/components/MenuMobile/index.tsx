import styles from './MenuMobile.module.scss';

import ThemeSwitch from '../ThemeSwitch';
import SocialLinks from '../SocialLinks';
import { IsOpenMenuContext } from '@/contexts/OpenMenuContext';

import { useContext } from 'react';

export default function MenuMobile() {

   const { isOpen } = useContext(IsOpenMenuContext)

   return (
      <div id="menuMobile" className={`${styles.menu} ${isOpen ? styles["open"] : ""}`}>
         <ThemeSwitch />
         <SocialLinks />
      </div>
   )
}