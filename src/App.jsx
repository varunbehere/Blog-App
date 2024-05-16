import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BlogContextProvider } from './Contexts/BlogContext';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs(prev => [...prev, newBlog]);
  };

  const likeBlog = (id) => {
    setBlogs(prev => prev.map(blog => blog.id === id ? { ...blog, likeCounter: (blog.likeCounter || 0) + 1 } : blog));
  };

  return (
    <BlogContextProvider value={{ blogs, addBlog, likeBlog }}>
      <div className="w-full h-full">
        <Header />
        <div className="pt-24"><Outlet /></div>
        <Footer />
      </div>
    </BlogContextProvider>
  );
}

export default App;
