import styles from './ExternalButton.module.scss';

interface ExternalButtonProps {
   externalLink?: string,
   textButton: string,
   typeIcon: React.ReactNode
}

export default function ExternalButton({ externalLink, textButton, typeIcon }: ExternalButtonProps) {
   return (
      <a className={styles.externalButton} href={externalLink} target="_blank" rel="noreferrer">
         <span>{textButton}</span>
         {/* <ExternalLinkIcon className={`${styles.icon} iconT3`} /> */}
         <span className={`${styles.icon} icon`}>
            {typeIcon}
         </span>
      </a>
   )
}