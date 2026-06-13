import { useParams, useNavigate } from 'react-router-dom'

const BlogView = ({ blogs, onLike, handleDelete, user }) => {
  const id = useParams().id
  const blog = blogs.find(b => b.id === id)
  // console.log('blog: ', blog)
  const navigate = useNavigate()

  const onDelete = async ( blog ) => {
    const wasDeleted = await handleDelete(blog)
    if (wasDeleted) navigate('/')
  }
  if (!blog) return <p>Loading...</p>
  else return (
    <div className='blog'>
      <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-title-link">
        <strong className="blog-title">{blog.title}</strong>
      </a>
      &nbsp;&nbsp;&ndash;&nbsp;&nbsp;
      <span className="blog-author">{blog.author}</span>
      <p><span className="likes-count">{blog.likes}</span> likes&nbsp;
        {user && <button onClick={() => onLike(blog)}>like</button> }
      </p>
      <p>{blog.url}</p>
      <p>added by {blog.user ? blog.user.name : 'Unknown'}</p>
      {user && user.username === blog.user?.username && (
        <button onClick={() => onDelete(blog)}>delete</button>
      )}
    </div>
  )
}

export default BlogView