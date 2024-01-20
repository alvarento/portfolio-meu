import styles from './AboutItem.module.scss';

interface AboutItemProps {
   icon: React.ReactNode,
   aboutText: React.ReactNode
}

export default function AboutItem({ icon, aboutText }: AboutItemProps) {
   return (
      <li className={styles.aboutItem}>
         {icon}
         {aboutText}
      </li>
   )
}