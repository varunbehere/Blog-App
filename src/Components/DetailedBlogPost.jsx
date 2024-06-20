import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../Contexts/BlogContext";

export default function DetailedBlogPost() {
  const { blogId } = useParams();
  const { blogs, likeBlog } = useBlogContext();

  const post = blogs.find((blog) => blog.id === Number(blogId));

  if (!post) {
    return <div className="text-center text-xl mt-4">Blog Not Found</div>;
  }

  const handleLike = () => {
    likeBlog(Number(blogId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <hr className="border-t border-gray-300 mb-4" />
        <p className="text-lg mb-6">{post.content}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Author: {post.author}</h3>
          <div className="flex items-center">
            <button
              onClick={handleLike}
              className="bg-red-600 text-white px-4 py-2 text-lg font-bold rounded-md shadow-md hover:bg-red-700 mr-4"
            >
              Like
            </button>
            <span className="text-lg font-bold">{post.likeCounter} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
