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
              <li><Link to="">Genre 1</Link>
              <Link to="">Genre 2</Link>
              <Link to="">Genre 3</Link>
              <Link to="">Genre 4</Link>
              </li>
              <li><Link to="">Genre 5</Link>
              <Link to="">Genre 6</Link>
              <Link to="">Genre 7</Link>
              <Link to="">Genre 8</Link>
              </li>
              <li><Link to="">Genre 9</Link> 
              <Link to="">Genre 10</Link>  
              <Link to="">Genre 11</Link>     
              <Link to="">Genre 12</Link> 
              </li>
              <li><Link to="">Genre 13</Link>
              <Link to="">Genre 14</Link>
              <Link to="">Genre 15</Link>
              <Link to="">Genre 16</Link>
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
