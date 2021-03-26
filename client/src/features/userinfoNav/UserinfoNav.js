import React, { useState, useEffect } from 'react'
import styles from './UserinfoNav.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/auth'
import { AuthService } from '../../utils/request'
import {
  selectUser,
  getUser,
} from '../profile/profileSlice'

export default function UserinfoNav() {
    const user = useSelector(selectUser) 
    const dispatch = useDispatch()
    const { logout } = useAuth()
    const history = useHistory()
    const isAuthenticated = useSelector(
      (appState) => appState.auth.isAuthenticated
    )
  
    useEffect(() => {
      dispatch(getUser())
    }, [])

    function handleLogout() {
      logout().then(() => {
        window.location.reload()
        history.push('/home')
      })
    }
    return(
      <>
            <div className={styles.userinfoNav}>
      
              <img className={styles.userimg} src={user.photo} />
              <a className={styles.username}>{user.username}</a>  
               | &nbsp;&nbsp;&nbsp;
         {isAuthenticated?
          <Link className={styles.logout} onClick={handleLogout}>
           Logout
         </Link>  :"LOGIN" }
        </div>
        <div>
      
         
         
      </div>
      </>
    )
}