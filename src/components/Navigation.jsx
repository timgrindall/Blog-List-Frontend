import { Link } from 'react-router-dom'



const Navigation = ({ user, handleLogout }) => {

  const style = {
    gap: '2em',
    padding: 5
  }

  return (
    <div>
      <Link style={style} to="/">Blogs</Link>
      <Link style={style} to='/create'>New Blog</Link>
      { !user && <Link style={style} to="/login">Login</Link> }
      { user && <button style={style} onClick={handleLogout}>logout</button>}
      {user ? <span style={style}>{user.name} logged in</span> : null}
    </div>
  )
}

export default Navigation