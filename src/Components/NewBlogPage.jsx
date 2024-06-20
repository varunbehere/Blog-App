  import React, { useState } from "react";
  import { useBlogContext } from "../Contexts/BlogContext";

  export default function NewBlogPage() {
    const [post, setPost] = useState({   
      id : null ,
      title: '',
      content : "",
      author : "",
      likeCounter : 0,
  });
    
    const {addBlog} = useBlogContext()

    const handleInputChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      setPost({
        ...post,
        id : Date.now(),
        [fieldName]: fieldValue,
        likeCounter: 0,
      });
    };

    const formSubmit = (e) => {
      e.preventDefault()
      addBlog(post)
      setPost({id : null ,
        title: '',
        content : "",
        author : "",
        likeCounter : 0,})
    }

    return (
      <div className="min-w-screen mx-auto px-4 py-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Create New Blog</h1>
          <form onSubmit={formSubmit}>
            <div className="mb-4">
              <label htmlFor={`title`} className="block text-lg font-bold mb-2">
                Title
              </label>
              <input
                id={`title`}
                name="title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                type="text"
                placeholder="Enter Title"
                value={post.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor={`content`} className="block text-lg font-bold mb-2">
                Content
              </label>
              <textarea
                id={`content`}
                name="content"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                placeholder="Enter Content"
                value={post.content}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor={`author`} className="block text-lg font-bold mb-2">
                Author
              </label>
              <input
                id={`author`}
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
