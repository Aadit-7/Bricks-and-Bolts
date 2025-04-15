import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="container mx-auto px-4 bg-white text-black">
      <div className="h-full w-full pt-5 pb-5 tracking-widest text-center">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl">
            Your <b>Vision</b>
          </p>
          {/* <div className="image-1 w-full max-w-md h-48 bg-gray-300 mx-auto mt-4"></div> */}
        </div>

        <div className="mt-10">
          <p className="text-4xl md:text-5xl lg:text-6xl">
            Our <b>Trusted Contractors</b>
          </p>
          {/* <div className="image-2 w-full max-w-md h-48 bg-gray-300 mx-auto mt-4"></div> */}
        </div>

        <div className="pt-10 px-4 md:px-16 lg:px-32">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            A hassle-free way to connect with top contractors for building and
            renovation projects. Whether you're remodeling your home or starting
            from scratch, find trusted professionals and get the job done with
            confidence!
          </p>
        </div>

        <div className="pt-10">
          <Link to="contact">
            <button className="rounded-xl px-5 py-3 text-lg md:text-xl bg-orange-500 text-white border border-orange-500 hover:bg-orange-400 transition duration-300 cursor-pointer">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
