import BlogForm from './BlogForm'

const CreateBlogForm = ({ user, createEntry }) => {

  return (
    <div>
      { user && (
        <BlogForm
          createEntry={createEntry}
        />
      )}
      {!user && (
        <p>You must be logged in to create an entry.</p>
      )}
    </div>
  )
}

export default CreateBlogForm