import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function BlogPost({ title, content, author }) {
  const navigatorForDetailedBlog = useNavigate()
  const {blogId} = useParams ()
  const openDetailedBlog = ()=>{
    navigatorForDetailedBlog(`/blog/${blogId}`)
  }
  return (
    <div className="max-w-3xl bg-red-100 p-5 rounded-md shadow-md mb-4 mr-5"
      onClick={()=> openDetailedBlog()}>
      <h1 className="font-bold text-xl mb-3">{title}</h1>
      <p className="mb-3 max-h-36 overflow-hidden">{content}</p>
      <h3 className="font-bold text-md">Author: {author}</h3>
    </div>
  );
}

export default BlogPost;
