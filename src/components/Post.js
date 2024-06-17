import {Link, useNavigate} from 'react-router-dom'
import "./Post.css"

const divStyle = {
  textAlign: 'center',
  border: '2px solid',
  margin: '10px auto',
  width: '50%',
}

const Post = ({post, deleteBlog}) => {
  const navigate = useNavigate()
  const handleDelete = (event) => {
    event.preventDefault()
    deleteBlog(post.id)
    navigate('/')
  }

  return (
    <div style={divStyle}>
      <Link to={`/post/${post.id}`}>
       <h1 className="title"> {post.title}</h1>
      </Link>
      <form onSubmit={handleDelete}>
        <input className="delete-button" type='submit' value='Delete' />
      </form>
    </div>
  )
}

export default Post