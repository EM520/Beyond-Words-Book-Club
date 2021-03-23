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
              <li><a href="/search?q=Literary%20Fiction">Literary Fiction</a>
              <a href="/search?q=Suspense">Suspense/Thrillers</a>
              <a href="/search?q=Science%20Fiction">Science Fiction</a>
              <a href="/search?q=Historical%20Fiction">Historical Fiction</a>
              </li>
              <li><a href="/search?q=Bios">Bios/Autobiographies</a>
              <a href="/search?q=memoir">Memoir</a>
              <a href="/search?q=detective">Detective/Mystery</a>
              <a href="/search?q=action">Action/Adventure</a>
              </li>
              <li><a href="/search?q=self%20help">Self-Help</a> 
              <a href="/search?q=fantasy">Fantasy</a>  
              <a href="/search?q=romance">Romance</a>     
              <a href="/search?q=horror">Horror</a> 
              </li>
              <li><a href="/search?q=classics">Classics</a>
              <a href="/search?q=history">History</a>
              <a href="/search?q=poetry">Poetry</a>
              <a href="/search?q=essays">Essays</a>
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
        {/* <FaShoppingCart /> */}
      </ul>
    </nav>
  )
}

//make css for navbar in this same folder.  navbar.module.css
