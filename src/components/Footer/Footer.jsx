import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Contact Us */}
        <h3 className="text-lg font-semibold text-white">Contact Us +91 97475 47097</h3>
    
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/nest__interior_?igsh=a21tNG52dmZpNTls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition text-2xl"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
