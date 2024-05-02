import React from "react";

function BlogPost({ title, content, author }) {
  return (
    <div className="max-w-3xl bg-red-100 p-5 rounded-md shadow-md mb-4 mr-5">
      <h1 className="font-bold text-xl mb-3">{title}</h1>
      <p className="mb-3 max-h-36 overflow-hidden">{content}</p>
      <h3 className="font-bold text-md">Author: {author}</h3>
    </div>
  );
}

export default BlogPost;
