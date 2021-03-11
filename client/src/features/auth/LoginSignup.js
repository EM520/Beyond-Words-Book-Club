import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'

export function LoginSignup() {
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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  )
}
