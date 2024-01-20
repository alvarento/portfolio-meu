import Image from 'next/image';
import styles from './SkillCard.module.css';

interface SkillCardProps {
   srcIcon: string,
   name: string
}

export default function SkillCard({ srcIcon, name }: SkillCardProps) {
   return (
      <li className={styles.skill}>
         <Image
            src={srcIcon}
            alt='Skill icon'
            width={50}
            height={50}
            priority
         />
         <span>{name}</span>
      </li>
   )
}