import React, { useState, useEffect } from 'react'
import NavBar from '../headerfooter/NavBar'
import Footer from '../headerfooter/Footer'
import styles from './Profile.module.css'
import { FaTrash } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectUser,
  selectUserGroups,
  selectGenres,
  selectUserGenres,
  getUser,
  getUserGroups,
  getGenres,
  addUserGenres,
  deleteBookUser,
  updateUser,
} from './profileSlice'

export default function Profile() {
  const user = useSelector(selectUser)
  const userGroups = useSelector(selectUserGroups)
  const genre= useSelector(selectGenres)
  const userGenre= useSelector(selectUserGenres)
  const dispatch = useDispatch()

  // const [text, setText] = useState('')
  const [username, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')

  // console.log(bookuser,"bookuser")
  useEffect(() => {
    dispatch(getUser())
    dispatch(getUserGroups())
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    setUserName(user.username)
    setBio(user.bio)
  }, [user])
  function handleSubmit(e) {
    e.preventDefault()

    setMessage('Congrats!Profile Updated!')

    dispatch(updateUser({ username, password, bio }))
    dispatch(addUserGenres())
  }
  function handleClick(id) {
    dispatch(deleteBookUser(id))
    dispatch(addUserGenres())
    
  }
  return (
    <>
      <NavBar />
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.formleft}>
            <form onSubmit={handleSubmit} className={styles.profileForm}>
              <label className={styles.message} htmlFor="profileupdate">
                {message}
              </label>
              <div className={styles.profileUpdate}>
                <input
                  value={username}
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Change your Username here"
                />

                <input
                  value={password}
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Change your Password here"
                />

              <textarea
              value={bio}
              type="text"
              onChange={(e) => setBio(e.target.value)}
              className={styles.profileBio}
              rows="6"
              cols="100"
              placeholder="Change your Bio here"
              ></textarea>
   
              </div>
              <button className={styles.submitBtn}>Submit</button>
              <div className={styles.profileSubmit}></div>
            </form>

            <p className={styles.updatetest}>Update your Geßnres</p>
            <div className={styles.profileGenrelist}>
              {genre.map((item) => (
                <p key={'genreuser-' + item.id}>
                  {item.name}
                  <input type="checkbox"
                  value = {item.id}
                  />
                  <span class="checkmark"></span>
                </p>
              ))}
              
            </div>
          </div>

          <div>
            <div className={styles.profileImg}>
              <img src={user.photo} />
              <button>Update Profile Photo</button>
            </div>
          </div>
        </div>
        <div className={styles.profileGrouplist}>
          {userGroups.map((item) => (
            <div className={styles.profileGrouplistp}>
              <img src={item.cover_pic} width="50px" height="60px" />
              <div className={styles.profileGrouplistp1}>
                <p key={'user-groups-' + item.id}>{item.title}</p>

                <FaTrash
                  onClick={() => {
                    handleClick(item.id)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.footer}>
        
      </div> */}
      <Footer />
    </>
  )
}
// src="https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png"
