import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import styles from "./LoginSignup.module.css"

export  default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    request.login(username, password).then((r) => {
      history.push('/protected')
    })
  }
  return (
    <form onSubmit={handleSubmit} className={styles.loginSignup}>
      <input className={styles.loginInput} type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Input username please"/>
      <input className={styles.loginInput} type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Input password please"/>
      <div className={styles.loginSignupBtn}>
        <button className={styles.loginBtn} type="submit">Log In</button>  
        Or <button className={styles.signupBtn} type="submit">Create New Account</button>
      </div>
    </form>
  )
}
