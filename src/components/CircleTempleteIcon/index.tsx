import Image from 'next/image';
import styles from './CircleTempleteIcon.module.scss';

interface specificStyleProps {
   containerStyle?: object
   nameCircleStyle?: object
   iconCircleStyle?: object
   imageStyle?: object
}

interface CircleTempleteIconProps {
   srcIcon: string
   name?: string
   proportion: number
   imageStyle?: object
   specificStyle?: specificStyleProps[]
}

export default function CircleTempleteIcon({ srcIcon, name, proportion, specificStyle }: CircleTempleteIconProps) {

   const proportionElement = { "--proportionElement": proportion } as React.CSSProperties;

   // const imageStyle = specificStyle?.imageStyle
   // const iconCircleStyle = specificStyle?.iconCircleStyle
   // const containerStyle = specificStyle?.containerStyle

   return (
      <li className={styles.templeteContainer} style={proportionElement}>
         <div className={styles.nameCircle}>
            <span>{name}</span>
         </div>
         <div className={styles.iconCircle} style={{}}>
            <Image
               src={srcIcon}
               alt='Skill icon'
               // width={2022}
               // height={2022}
               fill
               priority
            />
         </div>
      </li>
   )
}