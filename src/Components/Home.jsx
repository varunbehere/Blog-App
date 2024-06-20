import React, { useEffect } from "react";
import BlogPost from "./BlogPost";
import { useBlogContext } from "../Contexts/BlogContext";

function Home() {
  const { blogs } = useBlogContext(); // Access blogs from context

  useEffect(() => {
    console.log("Home:", blogs);
  }, [blogs]);

  return (
    <div className="container mx-auto mb-16">
      <h1 className="text-3xl text-center font-bold mb-4">Welcome to the Blog!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {blogs.map((post) => (
          <BlogPost
            key={post.id}
            id = {post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
