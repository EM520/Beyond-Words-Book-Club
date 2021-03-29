import React, { useState, useEffect } from 'react'
import styles from './Profile.module.css'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import UserGenresArray from '../genre/UserGenresArray'
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
  addUserGenres
} from './profileSlice'


export default function Profile() {
  const user = useSelector(selectUser)
  // const [selectedGenres,setSelectedGenres]=useState([])
  const userGroups = useSelector(selectUserGroups)
  const genres= useSelector(selectGenres)
  const userGenres= useSelector(selectUserGenres)
  const dispatch = useDispatch()
  const [username, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  console.log(genres,userGenres,"&&&&&&&&&&&&&")
  
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
    window.location.reload()
    
  }
  function removeUserGenres(id) { 
    console.log(id,">>>deleteUserGenres!!!>>>>") 
    dispatch(deleteUserGenres(id))
  }
  
  function removeBookUser(id) {
    console.log(id,">>>deleteBookUser!!!>>>>")
    dispatch(deleteBookUser(id)) 
  }

//  function addUserGenres(selectedGenres){
//    dispatch(addUserGenres(selectedGenres))
//  }

//  function onGenreSelectedChange(genres){
//   console.log(genres,"profile selected genres")
//   setSelectedGenres(genres)
// }

// function UserGenresArray(){
//   function handleChange(genre){
//     if(genre.active === true){
//       dispatch(deleteUserGenres(genre.id))
//     }else{
//       console.log(genre)
//       dispatch(addUserGenres(genre))
//     }
//     }
//   let newgenres =genres.map((item)=>{
//     let found = userGenres.find((x)=>x.id ==item.id)
//     return found? {...item,active:true}:{...item,active:false}
//   })

//   return <div className={styles.combinedGenres}>
//              {newgenres.map((item) => {
//                return(  
//                item.active ? 
//                (<label> <input type="checkbox" value={item.name} 
//                onChange={() => handleChange(item)} checked />{item.name}</label>)
//                 : (<label><input type="checkbox" value={item.name} 
//                 onChange={() => handleChange(item)}  />{item.name}</label>)
//              )})}
//             </div>
// }

  return (
    <div className="container1">
     {/* <button className={"submitBtn "+styles.test2}>test</button> */}
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
              <button type="submit" className={"submitBtn "+styles.submitBtn}>Update</button>
              

              <div className={styles.profileSubmit}></div>
            </form>

           
          </div>

          <div>
            <div className={styles.profileImg}>
              <img src={user.photo} />
              <span>Username:{user.username} </span>
              <p className={styles.bio}>Bio:{user.bio}</p>
              
            </div>
          </div>

          </div>
        
        


           {/* { //combined genres test!!!!//} */}
            <h1>Click to change your favorite Genres  </h1> 
            {/* <div className={styles.combinedGenres}>
             {newgenres.map((item) => {
               return(  
               item.active ? 
               (<label> <input type="checkbox" value={item.name} 
               onChange={() => handleChange(item)} checked />{item.name}</label>)
                : (<label><input type="checkbox" value={item.name} 
                onChange={() => handleChange(item)}  />{item.name}</label>)
             )})}

            </div> */}
            <UserGenresArray />

            
        {/* <div className={styles.userGenreslist}>
             
            {userGenres.map((item) => (
               <div>
                 
                <p key={'user-Genres-' + item.id}>
                  {item.name}  
                </p>
                 <FaTrash  color={"#93908F"}size={18}
                 onClick={() => {removeUserGenres(item.id)}}/>
                </div>
                
              ))}
        </div> */}

            

        <div className={styles.test}>
        <h1>Your favorite Clubs List </h1>
        <div className={styles.profileGrouplist}>
          {userGroups.map((item) => (
            <div className={styles.profileGrouplistp}>
              <img src={item.cover_pic} width="50px" height="60px" />
             
                <p key={'user-groups-' + item.id}>{item.title}</p>

                <FaTrash 
              color={"#93908F"}size={18}
              onClick={() => {
                removeBookUser(item.id)
              }}
              />
              
            </div>
            
             
              
            
             
             
          ))}
        </div>
        </div>
        
      </div>

     
    </div>
  )
}
// src="https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png"
