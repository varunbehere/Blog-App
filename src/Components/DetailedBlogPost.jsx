import React from "react";

export default function DetailedBlogPost({ title, content, author}) {
    return (
        <div className="bg-white mx-8 p-4 rounded-xl shadow-xl">
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <hr className="border-t border-gray-200 mb-3" />
            <p className="text-lg mb-4">{content}
            </p>
            <div className="flex justify-between items-center my-3">
                <h3 className="text-xl font-bold">Author Name: {author}</h3>
                <button className="bg-red-600 text-white px-3 py-1 text-lg font-bold rounded-md shadow-md hover:bg-red-700">
                    Like Blog
                </button>
            </div>
        </div>
    );
}
