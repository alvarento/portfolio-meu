
interface SocialIconProps {
   icon: React.ReactNode,
   href: string,
   socialMidia: string,
   changeLegend: (socialMidia: string) => void
}

export default function SocialIcon({ icon, href, socialMidia, changeLegend }: SocialIconProps) {
   return (
      <a
         // style={{
         //    background: "red",
         //    border: "1px solid blue",
         //    padding: "2px"
         // }}
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