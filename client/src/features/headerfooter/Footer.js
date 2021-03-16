import styles from "./Footer.module.css"
import {Link} from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return <nav className={styles.footer} >
    <ul >
      <li>
        <h3>COMPANY</h3>
    <Link className={styles.footerLink} to="/about">About us</Link>
    <p><Link className={styles.footerLink} to="">Terms</Link></p>
    <p><Link className={styles.footerLink} to="">Privacy</Link></p>
    <p><Link className={styles.footerLink} to="">Help</Link></p>
      </li>
      <li>
        <h3>WORK WITH US</h3>
    <Link className={styles.footerLink} to="">Advertise</Link>
    <p><Link className={styles.footerLink} to="">Careers</Link></p>
      </li>
      <li>
        <h3>CONNECT</h3>
      <div className={styles.fa}>
        <FaFacebook />&nbsp;&nbsp;<FaTwitter />&nbsp;&nbsp;<FaInstagram />
      </div>
      </li>
      <li>
      <div className={styles.copyright}>&copy; 2021 Lorum Ipsum, Inc.</div>
      </li>
    </ul>
  </nav>
}
