
import React, { useState, useEffect } from 'react'
import {getUser, selectUser} from '../profile/profileSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import styles from './NavBar.module.css'


export default function () {
    const user = useSelector(selectUser)
    console.log(user, 'uuu')
    const dispatch = useDispatch()
    const myVar =''

    useEffect(() => {
        dispatch(getUser())
      }, [])

    return (
        <>
            <div className={styles.greeting}>
                {user!='' ? (<span className={styles.greetSpan}>Hello, <img src={user.photo}/> {user.username}!</span>):
                (<button 
                    className={styles.navLogin}
                    onClick={() =>{window.location.href = '/login'}}>Login/SignUp</button>)}
            </div>
            <div>
            </div>
        </>


    )



}