import styles from './AboutItem.module.css';

export default function AboutItem({icon, aboutText}) {
   return (
      <li className={styles.aboutItem}>
         {icon}
         {aboutText}
      </li>
   )
}