import {useMemo} from 'react'
import {Link, useParams} from 'react-router-dom'

const SinglePost = ({posts}) => {
  const params = useParams()

  const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])
  return (
    <div>
      <h1 className="post-title">{currentPost.title}</h1>
      <p className="post-body">{currentPost.body}</p>
      <Link to={`/edit/${params.id}`}>
        <button className="edit-button">Edit Blog</button>
      </Link>
      <Link to={'/'}>
        <button className="back-button">Go Back</button>
      </Link>
    </div>
  )
}

export default SinglePost