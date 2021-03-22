import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from './auth'
import styles from './LoginSignup.module.css'
import NavBar from '../headerfooter/NavBar'
import Footer from '../headerfooter/Footer'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password).then((r) => {
      history.push('/home')
    })
  }

  const handleClick = (e) => {
    window.location.assign('/signupform')
  }

  return (
    <>
   
    <form onSubmit={handleSubmit} className={styles.loginSignup}>
      <input
        className={styles.loginInput}
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
