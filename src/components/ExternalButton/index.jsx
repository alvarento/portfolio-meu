import styles from './ExternalButton.module.css';


import ExternalLinkIcon from '../../assets/icons/external-link.svg';

export default function ExternalButton({ externalLink, textButton }) {
   return (
      <a className={styles.externalButton} href={externalLink} target="_blank" rel="noreferrer">
         <span>{textButton}</span>
         <ExternalLinkIcon className={`${styles.icon} iconT3`} />
      </a>
   )
}