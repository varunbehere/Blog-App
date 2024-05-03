import React, { useState } from "react";

export default function NewBlogPage() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: ""
  });
  
  const [blogs, updateBlogs] = useState([])
  
  const generateUniqueId = () => {
    return Math.random().toString(36).slice(2, 9); 
  };
  const [id, setId] = useState(generateUniqueId()); 

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setPost({
      ...post,
      [fieldName]: fieldValue
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: id, 
      ...post
    };
    updateBlogs([...blogs,newBlog]) 
    console.log(newBlog);
    console.log("Total Blogs Collected : \n", blogs) 
    setPost({
      title: "",
      content: "",
      author: ""
    });
    setId(generateUniqueId()); 
  };

  return (
    <div className="min-w-screen mx-auto px-4 py-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Create New Blog</h1>
        <form onSubmit={formSubmit}>
          <div className="mb-4">
            <label htmlFor={`title_${id}`} className="block text-lg font-bold mb-2">
              Title
            </label>
            <input
              id={`title_${id}`}
              name="title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              type="text"
              placeholder="Enter Title"
              value={post.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`content_${id}`} className="block text-lg font-bold mb-2">
              Content
            </label>
            <textarea
              id={`content_${id}`}
              name="content"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              placeholder="Enter Content"
              value={post.content}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`author_${id}`} className="block text-lg font-bold mb-2">
              Author
            </label>
            <input
              id={`author_${id}`}
              name="author"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              type="text"
              placeholder="Enter Author"
              value={post.author}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-full bg-red-600 text-white text-lg font-bold py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
