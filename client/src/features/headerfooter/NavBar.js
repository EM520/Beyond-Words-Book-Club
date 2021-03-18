import styles from './NavBar.module.css'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../auth/auth'
import { FaShoppingCart } from 'react-icons/fa'
import logowords from '../pic/logowords.png'
export default function NavBar() {
  const history = useHistory()
  const { logout } = useAuth()

  function handleLogout() {
    logout().then(() => {
      history.push('/login')
    })
  }

  return (
    <nav className={styles.navBar}>
      <ul>
        <span className={styles.navLogoImg}></span>
        <li>
          <img className={styles.logoWords} src={logowords} alt="Logo" />
        </li>
        <li>
          <Link className={styles.navLink} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/genres">
            Genre List
          </Link>
          {/* <ul>
            <li><Link className={styles.subLink} to="/genre1">Sub Item 1</Link></li>
            <li><Link className={styles.subLink} to="/genre2">Sub Item 2</Link></li>
         </ul> */}
          {/* This commented out code was an attempt at making a dropdown using CSS */}
        </li>
        <li>
          <Link className={styles.navLink} to="/top20">
            Top 20 Clubs
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/profile">
            Profile
          </Link>
          &nbsp; / &nbsp;{' '}
          <Link className={styles.navLink} onClick={handleLogout}>
            Logout
          </Link>
        </li>
        <FaShoppingCart />
      </ul>
    </nav>
  )
}

//make css for navbar in this same folder.  navbar.module.css
