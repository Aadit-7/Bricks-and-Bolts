import React, { useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-xl font-bold text-orange-500">
          YourLogo
        </Link>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <Link to="/" className="text-orange-500 hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/experts" className="hover:text-orange-400">
              Our Experts
            </Link>
          </li>
          <li>
            <Link to="/packages" className="hover:text-orange-400">
              Packages
            </Link>
          </li>
          <li>
            <Link to="/inbox" className="hover:text-orange-400">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className="hover:text-orange-400">
              How it works
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-orange-400">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden md:flex bg-amber-600 rounded-xl py-2 px-4 items-center gap-2 cursor-pointer hover:bg-amber-700"
        >
          <span>Contact Us</span>
          <MdOutlineCall />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link to="/" className="text-orange-500 hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/experts" className="hover:text-orange-400">
                Our Experts
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-orange-400">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/inbox" className="hover:text-orange-400">
                Inbox
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-orange-400">
                How it works
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex justify-center">
            <Link
              to="/contact"
              className="bg-amber-600 rounded-xl py-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-amber-700"
            >
              Contact Us <MdOutlineCall />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
