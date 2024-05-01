import React from "react";

export default function NewBlogPage() {
  return (
    <div className="min-w-screen mx-auto px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Create New Blog</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-lg font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              placeholder="Enter Content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-lg font-bold mb-2">
              Author
            </label>
            <input
              id="author"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
              type="text"
              placeholder="Enter Author"
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
