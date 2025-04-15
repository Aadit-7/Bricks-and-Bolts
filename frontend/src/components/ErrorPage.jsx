import React from "react";
import Img from "../assets/ErrorPage.png";

const ErrorPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Img})` }}
      ></div>

      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <button className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-3xl px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg md:text-xl text-white shadow-lg hover:bg-orange-600 transition duration-300">
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
