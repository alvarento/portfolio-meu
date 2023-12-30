import styles from './AboutTitle.module.css';

export default function AboutTitle({icon, textTitle}) {
   return (
      <div className={styles.aboutTitle}>
         {icon}
         <span>{textTitle}</span>
      </div>
   )
}