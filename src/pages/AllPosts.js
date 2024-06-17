import Post from "../components/Post"
import {Link} from 'react-router-dom'
import "./pages.css"

const AllPosts = (props) => (
<>
  <h1 className="page-title">All Blogs</h1>
  <Link to='/new'>
    <button className="create-button">Create Blog</button>
  </Link>
  {props.posts.map(
    (post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog}/>
  )}
</>
)

export default AllPosts