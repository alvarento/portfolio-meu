import Image from "next/image";
import styles from "./AlternativeText.module.scss";

interface AlternativeTextProps {
   imageSrc: string;
}

export default function AlternativeText({ imageSrc }: AlternativeTextProps) {
   return (
      <div className={styles.textContainer}>
         <div>
            <Image
               src={imageSrc}
               width={400}
               height={367}
               alt="Skill Image"
            />
         </div>
      </div>
   )
}