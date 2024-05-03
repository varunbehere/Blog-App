import React, { useEffect, useState } from "react";

export default function About() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://api.github.com/users/varunbehere")
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.clear();
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);

    const avatar = data.avatar_url;
    const name = data.name;
    const username = data.login;
    const linkToProfile = data.html_url;

    return (
        <div className="bg-white shadow-lg rounded-lg mx-8 px-8 py-4 min-w-screen">
            <h1 className="text-3xl font-bold text-black mb-5">About</h1>
            <hr className="border-t border-gray-200 mb-3" />
            <p className="text-lg">
                This project is a learning endeavor for me, where I am applying the concepts that I am learning to create a fully functional web application.
                This project serves me as a platform to experiment with new learnings, refine skills, and showcase my progress as a developer.
            </p>
            <h3 className="mt-8 font-bold text-lg mb-4">About Me</h3>
            <div className="flex items-center mb-4">
                <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mr-4" />
                <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="text-gray-600">@{username}</p>
                    <p>
                You can find more about me on my <a href={linkToProfile} className="text-blue-500 hover:underline">GitHub profile</a>.
            </p>
                </div>
            </div>
            
        </div>
    );
}
