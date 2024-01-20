import styles from './AboutTitle.module.css';

interface AboutTitleProps {
   icon: React.ReactNode,
   textTitle: string
}

export default function AboutTitle({ icon, textTitle }: AboutTitleProps) {
   return (
      <div className={styles.aboutTitle}>
         {icon}
         <span>{textTitle}</span>
      </div>
   )
}