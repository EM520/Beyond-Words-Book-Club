import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'
import { FaTrash } from 'react-icons/fa'
import GenreSelection from '../genreselection/GenreSelection'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectUser,
  selectUserGroups,
  selectGenres,
  selectUserGenres,
  getUser,
  getUserGroups,
  getUserGenres,
  deleteUserGenres,
  deleteBookUser,
  updateUser,
} from './profileSlice'

export default function Profile() {
  const user = useSelector(selectUser)
  const userGroups = useSelector(selectUserGroups)
  // const genre= useSelector(selectGenres)
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
    dispatch(getUserGenres())
  }, [])

  useEffect(() => {
    setUserName(user.username)
    setBio(user.bio)
  }, [user])
  
  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Congrats!Profile Updated!')
    dispatch(updateUser({ username, password, bio }))
    
  }
  function removeUserGenres(id) { 
    console.log(id,">>>deleteUserGenres!!!>>>>") 
    dispatch(deleteUserGenres(id))
  }
  
  function removeBookUser(id) {
    console.log(id,">>>deleteBookUser!!!>>>>")
    dispatch(deleteBookUser(id)) 
  }

 function addUserGenres(id){
   dispatch(addUserGenres(id))
 }

  console.log(userGenre)
  return (
    <>
     
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
                  required
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Change your Password here"
                />

              <textarea
              value={bio}
              type="text"
              onChange={(e) => setBio(e.target.value)}
              className={styles.profileBio}
              
              placeholder="Change your Bio here"
              ></textarea>
   
              </div>
              <button className={styles.submitBtn}>Submit</button>
              <div className={styles.profileSubmit}></div>
            </form>

           
          </div>

          <div>
            <div className={styles.profileImg}>
              <img src={user.photo} />
              
            </div>
          </div>

        </div>
        <h1>You favorite Genres List </h1>
        <div className={styles.userGenreslist}>
             
            {userGenre.map((item) => (
               <div>
                 
                <p key={'user-Genres-' + item.id}>
                  {item.name}  
                </p>
                 <FaTrash  color={"#93908F"}size={18}
                 onClick={() => {removeUserGenres(item.id)}}/>
                </div>
                
              ))}
              
        </div>
        
            <div className={styles.test1} >
              <GenreSelection 
              userGenre={userGenre} 
              addUserGenres={addUserGenres}/>
            </div>

        <div className={styles.test}>
        <h1>You favorite Groups List </h1>
        <div className={styles.profileGrouplist}>
          {userGroups.map((item) => (
            <div className={styles.profileGrouplistp}>
              <img src={item.cover_pic} width="50px" height="60px" />
              <div className={styles.profileGrouplistp1}>
                <p key={'user-groups-' + item.id}>{item.title}</p>

                <FaTrash 
                  onClick={() => {
                    removeBookUser(item.id)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>

     
    </>
  )
}
// src="https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png"
