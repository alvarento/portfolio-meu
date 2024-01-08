import Image from "next/image";
import styles from "./AlternativeText.module.scss";

interface AlternativeTextProps {
   text: string;
   imageSrc: string;
}

export default function AlternativeText({ text, imageSrc }: AlternativeTextProps) {
   return (
      <div className={styles.textContainer}>
         <div>
            {/* <span>{text}</span> */}
            <Image
               src={imageSrc}
               width={400}
               alt="Skill Image"
               priority
               // height={100}
            />
         </div>
      </div>
   )
}