
interface SocialIconProps {
   icon: React.ReactNode,
   href: string,
   socialMidia: string,
   changeLegend: (socialMidia: string) => void
}

export default function SocialIcon({ icon, href, socialMidia, changeLegend }: SocialIconProps) {
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