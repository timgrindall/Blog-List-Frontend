const Blog = ({ blog, isExpanded, onToggle, onLike, onDelete }) => {
  const buttonText = isExpanded ? 'hide' : 'view'

  return (
    <div className="blog">
      <div>
        <a href={blog.url} target="_blank" rel="noopener noreferrer">
          <strong>{blog.title}</strong>
        </a>
        &nbsp;&nbsp;&ndash;&nbsp;&nbsp;{blog.author}
        &nbsp;
        <button onClick={onToggle}>{buttonText}</button>
      </div>
      {isExpanded && (
        <div>
          <p>{blog.likes} likes&nbsp;<button onClick={() => onLike(blog)}>like</button></p>
          <p>{blog.url}</p>
          <p>added by {blog.user ? blog.user.name : 'Unknown'}</p>
          <button onClick={() => onDelete(blog)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Blog