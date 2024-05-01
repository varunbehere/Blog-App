import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate()
    const newBlogButton = ()=>{ 
        navigate('/new-blog-page')
    }
    return (
        <header className="flex justify-between items-center w-screen shadow-xl px-2 py-1">
            <div>
                <img 
                    className="max-w-28"
                    src="/src/logo.jpeg" 
                    alt="Logo" 
                />
            </div>
            <nav>
                <ul className="flex justify-center space-x-6">
                    <NavLink to= '/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to = '/about-us'>
                        <li>About</li>
                    </NavLink>
                    <NavLink to = '/contact-us'> 
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
            </nav>
            <div className="flex items-center">
                <div className="flex items-center space-x-2 ml-6">
                    <button
                        className="bg-red-600 text-white rounded-lg px-5 py-2 mr-2 shadow-lg hover:bg-red-700 hover:box-border font-bold"
                        onClick={newBlogButton}
                        > New Blog
                    </button>
                </div>
            </div>
        </header>
    );
}
