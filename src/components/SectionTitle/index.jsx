import styles from './SectionTitle.module.css';

export default function SectionTitle({icon, textTitle}) {
   return (
      <h1 className={styles.sectionTitle}>
         {icon}
         <span>{textTitle}</span>
      </h1>
   )
}