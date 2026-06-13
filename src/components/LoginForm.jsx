import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = ({ handleLogin }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault()
    await handleLogin({ username, password })
    setUsername('')
    setPassword('')
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            username
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>login</button>
      </form>
    </div>
  )
}

export default LoginForm
