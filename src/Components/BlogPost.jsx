import React from 'react';
import BlogPost from './BlogPost';

function Home() {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'Lorem ipsum...', author: 'John Doe' },
    { id: 2, title: 'Second Blog Post', content: 'Lorem ipsum...', author: 'Jane Smith' },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog!</h1>
      <div className="grid gap-4">
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
