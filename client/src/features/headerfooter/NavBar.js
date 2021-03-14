import styles from "./NavBar.module.css"
import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
export default function NavBar(){
    return <nav className={styles.navBar} >
      
    <ul >
    <span className={styles.navLogoImg}></span>
      <li>
        <Link className={styles.navLink} to="/home">Home</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/about">About</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/genres">List of Genres</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/bookclub">Top 20 Book Club</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/profile">Profile</Link>
      </li>
      <FaShoppingCart />
    </ul>
  </nav>
}

//make css for navbar in this same folder.  navbar.module.css