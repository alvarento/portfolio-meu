import AboutList from '../AboutList';
import AboutTitle from '../AboutTitle';
import SectionTitle from '../SectionTitle';
import SkillList from '../SkillList';
import styles from './AboutSection.module.css';

import AboutTitleIcon from '../../assets/icons/about.svg';
import AboutMimIcon from '../../assets/icons/account.svg';
import ToolsIcon from '../../assets/icons/tools.svg';


export default function AboutSection() {
   return (
      <section id='about' className={`${styles.about} about`}>
         <SectionTitle
            icon={<AboutTitleIcon className="iconT2" />}
            textTitle="Sobre mim"
         />
         <div className={styles.aboutContainer}>
            <div className={styles.description}>
               <AboutTitle
                  icon={<AboutMimIcon className="icon" />}
                  textTitle="Quem sou eu"
               />
               <AboutList />
            </div>
            <div className={styles.mySkills}>
               <AboutTitle
                  icon={<ToolsIcon className="icon" />}
                  textTitle="Minhas skills"
               />
               <SkillList />
            </div>
         </div>
      </section>
   )
}