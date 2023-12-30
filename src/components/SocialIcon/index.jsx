// import styles from './SocialIcon.module.css';


export default function SocialIcon({icon, href, socialMidia, changeLegend}) {

   return (
      <a
         href={href}
         target="_blank"
         rel="noreferrer"
         onMouseOver={() => changeLegend(socialMidia)}
         onMouseOut={() => changeLegend("Minhas Redes")}
      >
         {icon}
      </a>
   )
}