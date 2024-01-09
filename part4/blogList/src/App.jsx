import { useEffect, useState } from "react"
import blogsService from "./service/blogs"

function App() {

  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    blogsService
      .getAll()
      .then(intialBlogs => setBlogs(intialBlogs))
  },[])

  function deleteBlog(id){
    blogsService
    .remove(id)
    .then(setBlogs(blogs.filter(p => p.id !== id)))
  }

  function updateLikes(id){
    const blog = blogs.find(p => p.id === id)
    const changedBlog = { ...blog, upvotes: blog.upvotes + 1 }

    blogsService
      .update(id, changedBlog)
      .then(returnedPerson => {
        setBlogs(blogs.map(p => p.id === id ? returnedPerson : p ))
    })
  }
  return (
    <>
      {blogs.map(blog => 
        <>
        <h1>{blog.title}</h1>
        <h2>{blog.author}</h2>
        <h3>{blog.url}</h3>
        <h3>Likes: {blog.upvotes}</h3>
        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        <button onClick={() => updateLikes(blog.id)}>Like</button>
        </>
      )}
    </>
  )
}

export default App
