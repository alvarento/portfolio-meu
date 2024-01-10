import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

export default function Navbar() {

   const scrollOptions = {
      activeClass: `${styles.over} over`,
      spy: true,
      offset: -110,
      smooth: true,
      duration: 100
   }

   return (
      <nav className={`${styles.navbar} navbar`}>
         <Link to="home" {...scrollOptions}>Inicio</Link>
         <Link to="about" {...scrollOptions}>Sobre</Link>
         <Link to="projects" {...scrollOptions}>Projetos</Link>
      </nav>
   )
}