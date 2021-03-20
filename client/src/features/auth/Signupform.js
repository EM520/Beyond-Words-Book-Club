import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import styles from './Signupform.module.css'
// import validator from 'validator'

import { selectGenre,selectUserGenre, deleteUserGenre, addUserGenres,addUser,getGenres,getUserGenres } from './signupformSlice'

export default function Signupform() { 
  const userGenres= useSelector(selectUserGenre)
  const genres= useSelector(selectGenre)
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [bio, setBio] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const dispatch = useDispatch()
//upload img for signupform
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    dispatch(getGenres())
  }, [])
  
 

  function handleSubmit(e) {
    e.preventDefault()
    dispatch (addUser())
    alert('Congrats! Your Account Created!')
    
    // if(confirmPassword !==password ){
    //   setConfirmPasswordError('Must match password')
    // }else{
    //   setConfirmPasswordError('')
    // }
    // if (validator.isEmail(email)) {
    //   setEmailError('')
    // }else {
    //   setEmailError('Please enter a valid Email')
    // }
  }

  // function handleClick(e) {
  //   e.preventDefault()

  //   setMessage('Congrats!Profile Updated!')

  //   dispatch(addUser())
  // }

  function handleClick(e) {
    // setUserName("")
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")
    // setBio("")
    // setFirstName("")
    // setLastName("")
  }

  return (
    <>
  
      <div className={styles.signupform}>
        <form onSubmit={handleSubmit} action="GET">
          <div className={styles.signupform1}>
            <input 
            required
            name="username"
            value={username}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Input your username" 
            />

            <input 
            required
            name="password"
            value={password}
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Input your password"
             />
            <input 
            required
            name="confirmPassword"
            value={confirmPassword}
            type="password" 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Comfirm your password"
             />
            <input
            required
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your Email"
              />
            <textarea
              name="bio"
              rows="9"
              cols="50"
              value={bio}
             type="text"
             onChange={(e) => setBio(e.target.value)}
              placeholder="Talk about yourself"
            ></textarea>
          </div>

          <div className={styles.signupform2}>
           
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <input
      name="photo"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        className={styles.signupAvatar}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
          }}
        />
      </div>
      Click to Upload Avatar
    </div>
    <input 
            required
            name="first_name"
            value={firstname}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Input your first name" 
            />

            <input 
            required
            name="last_name"
            value={lastname}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Input your last name" 
            />

          </div>
          <label className={styles.message} htmlFor="formsubmit">
                {message}
          </label>
          <button type="submit" className={styles.submitBtn} onClick={handleClick} >Submit</button>
          </form>
       
        <h1>Choose your Favorite Genre</h1>
          <div className={styles.signupformGenreListp}>
          
            {genres.map((item) => (
              <>
                <p key={'genre-' + item.id}>
                  {item.name}
                  <input type="checkbox" name="genre_id" value={item.id}/>
                  <span class="checkmark"></span>

              </p>
              </>
            ))}
          </div>
          
        </div>
        
    
    </>
  )
}

