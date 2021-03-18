// import styles from "./splash.css"
import styles from './Splash.module.css'
import { Link } from 'react-router-dom'

export default function Splash() {
  return (
    <div className={styles.splashBg}>
      <Link className={styles.splashlink} to="/login">
        Login/Signup
      </Link>
      <div className={styles.splashDiv}>
        {/* <span className={styles.splashLogo}></span>
            <span className={styles.splashTag}></span> */}
      </div>
    </div>
  )
}
