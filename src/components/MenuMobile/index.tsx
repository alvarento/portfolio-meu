import styles from './MenuMobile.module.scss';

import { IsOpenMenuContext, IsOpenMenuContextProvider } from '@/contexts/OpenMenuContext';
import ThemeSwitch from '../ThemeSwitch';
import SocialLinks from '../SocialLinks';
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