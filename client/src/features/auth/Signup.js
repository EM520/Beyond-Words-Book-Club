import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from './auth'
import styles from './LoginSignup.module.css'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password).then((r) => {
      history.push('/home')
      window.location.reload()
    })
  }

  const handleClick = (e) => {
    window.location.assign('/signupform')
  }

  function validation(){
    var username = document.getElementById("username");
    console.log(username)
         if(username.value.length <= 20 && username.value.length >= 3){
         }
         else{
             alert("Username has to be between 3-20 characters.")
          }
         //duplication data list
        //  var user = document.getElementById("username");
        //  if(user.value == list.value){
        //  }
        //  else{
        //      alert("Username already exists.")
        //   }
}
  return (
    <>
   
    <form onSubmit={handleSubmit} noValidate className={styles.loginSignup}>
      <input
        className={styles.loginInput}
        id="username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Input username please"
      />
      <input
        className={styles.loginInput}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Input password please"
      />
      <div className={styles.loginSignupBtn}>
        <button
          className={styles.loginBtn}
          onSubmit={handleSubmit}
          type="submit"
        >
          Log In
        </button>
        Or{' '}
        <button
          className={styles.signupBtn}
          onClick={handleClick}
          type="button"
        >
          Create New Account
        </button>
      </div>
    </form>
    
    </>
  )
}
