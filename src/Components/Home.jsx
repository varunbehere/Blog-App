import React from "react";
import BlogPost from "./BlogPost";

function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      author: "Jane Smith",
    },
    {
      id: 10,
      title: "10th Blog Post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio voluptatum, exercitationem ad odit, distinctio eum nostrum obcaecati excepturi cum magnam soluta minus eaque pariatur fugit dolor aspernatur, est omnis?",
      author: "Varun Behere",
    },
    {
      id: 5,
      title: "5the Blog Post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, reprehenderit. Nesciunt laudantium recusandae repudiandae voluptate cumque impedit corrupti deserunt excepturi minima quae aspernatur laborum ullam laboriosam molestiae, voluptatem cupiditate unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo iure eos quaerat autem, a nemo velit esse adipisci consectetur dolorum corrupti porro ad quidem doloribus alias reprehenderit unde minima!",
      author: "Varun Behere",
    },
    {
      id: 8,
      title: "5the Blog Post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, reprehenderit. Nesciunt laudantium recusandae repudiandae voluptate cumque impedit corrupti deserunt excepturi minima quae aspernatur laborum ullam laboriosam molestiae, voluptatem cupiditate unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo iure eos quaerat autem, a nemo velit esse adipisci consectetur dolorum corrupti porro ad quidem doloribus alias reprehenderit unde minima!",
      author: "Varun Behere",
    }
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto py-4  ">
      <h1 className="text-3xl text-center font-bold mb-4">Welcome to the Blog!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <BlogPost 
            key={post.id}
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
