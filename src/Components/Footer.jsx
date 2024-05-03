import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">© 2024 Varun Behere. All rights reserved.</p>
        <div>
            <p className="text-lg">Feedback on <Link to="mailto:varunbehere@gmail.com">varunbehere@gmail.com</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
