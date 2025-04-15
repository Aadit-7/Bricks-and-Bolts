import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = () => {
  return (
    <div className="container mx-auto pt-10 pb-10 bg-black text-white px-6 lg:px-20">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Logo Section */}
        <div className="w-full sm:w-auto">
          <div className="h-20 w-40 bg-white"></div>
        </div>

        {/* Navigation Links */}
        <div className="w-full sm:w-auto">
          <ul className="text-lg leading-8">
            <li className="text-orange-500">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experts">Our Experts</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-bold pb-3">Contact Us</h1>
          <div className="text-sm">
            <p>
              <span className="font-bold">Address:</span> Unit 19, City Road,
              Pune, Maharashtra
            </p>
            <p>
              <span className="font-bold">Phone:</span> +91 9999900000
            </p>
            <p>
              <span className="font-bold">Email:</span> BuildLink@gmail.com
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-bold pb-3">Follow Us</h1>
          <div className="flex gap-4">
            <div className="bg-orange-500 p-3 rounded-full cursor-pointer">
              <RiFacebookFill size={20} />
            </div>
            <div className="bg-orange-500 p-3 rounded-full cursor-pointer">
              <IoLogoTwitter size={20} />
            </div>
            <div className="bg-orange-500 p-3 rounded-full cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="bg-orange-500 p-3 rounded-full cursor-pointer">
              <AiOutlineYoutube size={20} />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="font-bold pb-3">Get a Free Quote</h1>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <textarea
                className="bg-white text-black w-full p-2 outline-none cursor-text"
                placeholder=" email"
                rows={1}
              ></textarea>
              <button className="bg-orange-500 text-white px-4 py-2 cursor-pointer">
                <Link to="/contact">→</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
