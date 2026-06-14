import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const CreateBlogForm = ({ user, createEntry }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const navigate = useNavigate()

  const handleCreateEntry = event => {
    event.preventDefault()
    createEntry({ title, author, url })

    setTitle('')
    setAuthor('')
    setUrl('')
    navigate('/')
  }

  return (
    <div>
      { user && (
        <div className="blog-form">
          <h2>Create new</h2>
          <form onSubmit={handleCreateEntry}>
            <div>
              <TextField
                label="Title"
                style={{ marginTop: '1rem', display: 'block' }}
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
            <div>
              <TextField
                label="Author"
                style={{ marginTop: '1rem', display: 'block' }}
                value={author}
                onChange={({ target }) => setAuthor(target.value)}
              />
            </div>
            <div>
              <TextField
                label="URL"
                style={{ marginTop: '1rem', display: 'block' }}
                value={url}
                onChange={({ target }) => setUrl(target.value)}
              />
            </div>
            <Button type="submit" variant="contained" style={{ marginTop: '1rem', display: 'block' }}>create</Button>
          </form>
        </div>
      )}
      {!user && (
        <p>You must be logged in to create an entry.</p>
      )}
    </div>
  )
}

export default CreateBlogForm