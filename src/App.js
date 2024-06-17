import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AllPosts from './pages/AllPosts'
import SinglePost from './pages/SinglePost'
import Form from './pages/Form'

const apiURL = 'https://blog-app-backend-4dc308270c08.herokuapp.com'

function App() {
  const [posts, setPosts] = useState([])
  const getBlogs = async () => {
    const response = await fetch(apiURL + '/blog_app/')
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }

  const handleFormSubmission = async (data, type) => {
    if(type === 'new') {
      const response = await fetch(`${apiURL}/blog_app/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    } else {
      const response = await fetch(`${apiURL}/blog_app/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlogs()
    }
  }

  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blog_app/${id}/`,
      {
        method: 'delete'
      })
      getBlogs()
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="App">
      <h1>My Blogs</h1>
      <Routes>
        <Route
          exact 
          path= "/"
          element={<AllPosts posts={posts} deleteBlog={deleteBlog} />}
        />
        <Route
          exact 
          path= "/post/:id"
          element={<SinglePost posts={posts}/>}
        />
        <Route
          exact 
          path= "/new"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog'
          formType='new' />}
        />
        <Route
          exact 
          path= "/edit/:id"
          element={<Form posts={posts} handleSubmit={handleFormSubmission}
          buttonLebel='Edit Blog' formType='edit'/>}
        />
      </Routes>
    </div>
  )
}

export default App;
