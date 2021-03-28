import styles from './NavBar.module.css'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/auth'
import logowords from '../pic/logowords.png'
import { Menu, Dropdown } from 'antd'
import {getGenres, selectGenres} from '../profile/profileSlice.js'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserinfoNav from './UserinfoNav.js'
// import { Menu } from 'react-bootstrap/lib/Dropdown'



export default function NavBar() {
  const history = useHistory()
  const { logout } = useAuth()
  const dispatch = useDispatch()
  const genres = useSelector(selectGenres)
  useEffect(() => {
    dispatch(getGenres())

  },[])
  function handleLogout() {
    logout().then(() => {
      window.location.reload()
      history.push('/home')
    })
  }

  const handleDropDown = (genre) => {
      history.push({
      pathname: '/search',
      search: `?q=${genre}`
      })  
      window.location.reload()
  }
  const menu = (
    <Menu className={styles.dropgenre}>
      {genres.map((g)=> (
        <Menu.Item key = {g.id}>
           <span className={styles.genreSelect} onClick={()=>handleDropDown(g.name)}>{g.name}</span>
        </Menu.Item>
      ))}
    </Menu>

  )

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
            <Dropdown overlay={menu} trigger={['click']} placement="topLeft"
                      className={styles.navLink, styles.dropdg}
            >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Genre List
              </a>    
            </Dropdown>
        </li>
        <li>
          <Link className={styles.navLink} to="/top20">
            Top 20 Clubs
          </Link>
        </li>
        
        <li>
          <Link className={styles.navLink} to="/profile">
          <UserinfoNav/>
          </Link>
          {/* &nbsp; / &nbsp;{' '}
          <Link className={styles.navLink} onClick={handleLogout}>
            Logout
          </Link> */}
        </li>
      </ul>
      
    </nav>
  )
}

//make css for navbar in this same folder.  navbar.module.css
