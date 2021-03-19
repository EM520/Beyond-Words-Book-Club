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
          <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Genre List</button>
            <div className={styles.dropdowncontent}>
              <ul className={styles.dowdownlist}>
              <li><Link to="/search?q=literaryfiction">Literary Fiction</Link>
              <Link to="">Suspense/Thrillers</Link>
              <Link to="">Science Fiction</Link>
              <Link to="">Historical Fiction</Link>
              </li>
              <li><Link to="">Bios/Autobiographies</Link>
              <Link to="">Memoir</Link>
              <Link to="">Detective/Mysery</Link>
              <Link to="">Action/Adventure</Link>
              </li>
              <li><Link to="">Self-Help</Link> 
              <Link to="">Fantasy</Link>  
              <Link to="">Romance</Link>     
              <Link to="">Horror</Link> 
              </li>
              <li><Link to="">Classics</Link>
              <Link to="">History</Link>
              <Link to="">Poetry</Link>
              <Link to="">Essays</Link>
              </li>
              </ul>                           
            </div>
          </div>
        </li>
        {/* <li>
          <Link className={styles.navLink} to="/genres">
            Genre List
          </Link>
        </li> */}
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
