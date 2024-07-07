import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blogcomp.css';

const BlogComponent = ({user}) => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '' });
  const [expandedCardId, setExpandedCardId] = useState(null);
  

  useEffect(() => {
    axios.get('https://fashionstorebackend-vsw0.onrender.com/blogsComp')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddBlog = () => {
    axios.post('https://fashionstorebackend-vsw0.onrender.com/blogsComp', newBlog)
      .then(response => {
        setBlogs([...blogs, response.data]);
        setNewBlog({ title: '', content: '', author: '' });
      })
      .catch(error => console.error('Error adding blog:', error));
  };

  const handleCardClick = (cardId) => {
    setExpandedCardId(cardId);
  };

  const handleClosePopup = () => {
    setExpandedCardId(null);
  };

  return (
    <div className='blogComp'>
      <h1>Blogs</h1>
      <hr />
      <div className="blogs-container">
        <div className="cards">
          {blogs.map(blog => (
            <div
              key={blog.blog_id}
              className="blog-card"
              id={`card-${blog.blog_id}`}
              onClick={() => handleCardClick(blog.blog_id)}
            >
              <h3>{blog.title}</h3>
              <p className='auth'>by {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={expandedCardId ? 'popup-expanded' : 'popup-hidden'}>
        <div className="popup-content">
          {blogs.find(blog => blog.blog_id === expandedCardId) && (
            <>
              <h3>{blogs.find(blog => blog.blog_id === expandedCardId).title}</h3>
              <p className='auth'>by {blogs.find(blog => blog.blog_id === expandedCardId).author}</p>
              <p className='cont'>{blogs.find(blog => blog.blog_id === expandedCardId).content}</p>
              <button type="button" onClick={handleClosePopup}>Close</button>
            </>
          )}
        </div>
      </div>
      {user ? (<><hr/>
      <h2>Add New Blog</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={newBlog.title} onChange={handleInputChange} />
        <label>Content:</label>
        <textarea name="content" value={newBlog.content} onChange={handleInputChange}></textarea>
        <label>Author:</label>
        <input type="text" name="author" value={newBlog.author} onChange={handleInputChange} />
        <button type="button" onClick={handleAddBlog}>Add Blog</button>
      </form>
      <br /><br /></>) :(<></>)}
      <hr />
    </div>
  );
};

export default BlogComponent;
