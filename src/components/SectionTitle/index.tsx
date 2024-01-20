import styles from './SectionTitle.module.css';

interface SectionTitleProps {
   icon: React.ReactNode,
   textTitle: string
}

export default function SectionTitle({ icon, textTitle }: SectionTitleProps) {
   return (
      <h1 className={styles.sectionTitle}>
         {icon}
         <span>{textTitle}</span>
      </h1>
   )
}