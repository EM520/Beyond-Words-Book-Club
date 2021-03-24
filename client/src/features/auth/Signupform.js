import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import styles from './Signupform.module.css'
import GenreSelection from '../genreselection/GenreSelection'
import validator from 'validator'
import { useAuth } from './auth'



import { selectGenre,addUser,getGenres } from './signupformSlice'

export default function Signupform() { 
  // const userGenres= useSelector(selectUserGenre)
  // const genres= useSelector(selectGenre)
  const [selectedGenres,setSelectedGenres]=useState([])
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError,setEmailError] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError,setConfirmPasswordError] = useState('')
  const [bio, setBio] = useState('')
  // const [photo, setPhoto] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const dispatch = useDispatch()
//upload img for signupform
  const [uploadedImage,setUploadedImage] = useState(null);
  const imageUploader = useRef(null);
  const [genreIsVisible, setGenreIsVisible] = useState(false)
  const { login } = useAuth()
  const isSignUp = true
  const handleImageUpload = e => {
    
    const [file] = e.target.files;
   
    if (file) {
      const reader = new FileReader();
      // const { current } = uploadedImage;
      // current.file = file;
      reader.onload = e => {
        setUploadedImage(e.target.result)
       
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    dispatch(getGenres())
  }, [])
  
 

   async function handleSubmit(e) {
    e.preventDefault()
    let photo=uploadedImage
    if(confirmPassword !==password ){
      setConfirmPasswordError('Must match password')
    }else{
      setConfirmPasswordError('')
    }
    if (validator.isEmail(email)) {
      setEmailError('')
    }else {
      setEmailError('Please enter a valid Email')
    }
    console.log('1')

    await dispatch (addUser(
      username,
      password,
      email,
      bio,
      photo,
      firstname,
      lastname,
      
      ))
     console.log('2') 
     
     await login(username, password) 
    // After the new user signed up  ,it login in  so user can add genres into account and sort matters
    setMessage('Congrats! Account was created! Choose your genres please!') 
    setGenreIsVisible(!genreIsVisible)
   }

   function addUserGenres(selectedGenres){
     dispatch(addUserGenres(selectedGenres))
   }
    
  function handleClick(e) {
    // setUserName("")
    // setEmail("")
    // setPassword("")
    // setConfirmPassword("")
    // setBio("")
    // setFirstName("")
    // setLastName("")
  }

  function onGenreSelectedChange(selectedGenres){
    console.log(selectedGenres,"signupform selected genres")
    setSelectedGenres(selectedGenres)
  }

  return (
    <>
  
      <div className="dbtest">
          
        {genreIsVisible ? (<div >
          <p className={styles.message}>{message}</p>
          
          <GenreSelection  isSignUp = {isSignUp}
          name="genre_id" 
          selectedGenres={selectedGenres} 
          onGenreSelectedChange={onGenreSelectedChange}/>
          
         </div>) : (<form  
        className={styles.signupform}
        onSubmit={handleSubmit} 
        action="GET">
          
          <div className={styles.signupforminfo}>
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

             <label 
            htmlFor="confirmPassword" 
            className={styles.textlabelred}>
              { confirmPasswordError ?confirmPasswordError:null }
            </label> 
            <input 
            required
            name="confirmPassword"
            value={confirmPassword}
            type="password" 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Comfirm your password"
             />

            <label 
            htmlFor="email" 
            className={styles.textlabelred }>
            { emailError ?emailError:null }
            </label> 
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
            {/* <input type="image" /> */}
            {/* <input type="file"/> */}
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
          // ref={uploadedImage}
          src={uploadedImage}
          style={{
            width: "200px",
            height: "200px",
            position: "absolute"
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
          </div>
         
         
          <button type="submit" className={styles.submitBtn} onClick={handleClick} >Submit</button>
          </form>)}


{/* 
         {genreIsVisible ? (<div >
          
          <GenreSelection  
          name="genre_id" 
          genres={genres} 
          onGenreSelectedChange={onGenreSelectedChange}/>
           
         </div>) : ""}  */}
          
        </div>
        
    
    </>
  )
}

