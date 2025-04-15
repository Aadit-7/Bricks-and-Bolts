import React from "react";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";

const GetAFreeQuote = () => {
  return (
    <div className="container mx-auto px-10 sm:px-20 py-10 bg-gray-100 text-black">
      <div className="text-left mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold pb-3">
          "Get a Free Quote for Your Project"
        </h1>
        <p className="text-gray-600 mt-2 text-lg sm:text-xl pb-5">
          "Fill out the details below, and we'll get back to you with an
          estimate."
        </p>
      </div>

      <div className="flex flex-col lg:flex-row bg-white py-5 px-5 shadow-md rounded-lg overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/3 bg-gray-200 p-6 sm:p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold pb-2">
            Contact Information
          </h2>
          <p className="text-gray-600 mt-1 text-lg sm:text-xl pb-6">
            Say something to start live chat!
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-5">
              <BiSolidPhoneCall className="text-orange-500" size={25} />
              <p className="text-base sm:text-lg">+91 909-651-9449</p>
            </div>
            <div className="flex items-center space-x-5">
              <IoMail className="text-orange-500" size={25} />
              <p>
                <a
                  href="mailto:support@Builtlink.com"
                  className="text-blue-500 text-base sm:text-lg"
                >
                  support@Builtlink.com
                </a>
              </p>
            </div>
            <div className="flex items-start space-x-5">
              <IoLocationSharp className="text-orange-500" size={35} />
              <p className="text-base sm:text-lg lg:pb-50 sm:pb-0 md:pb-22">
                Address <br />
                Colony No-1, Sinhagad Road, Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white p-6 sm:p-8 flex flex-col">
          {/* First Name & Last Name in Same Row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="firstName"
                className="font-semibold text-base sm:text-lg"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full border-b-2 p-2 outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="lastName"
                className="font-semibold text-base sm:text-lg"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full border-b-2 p-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="email"
                className="font-semibold text-base sm:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full border-b-2 p-2 outline-none"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-base sm:text-lg"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="+91 012 3456 789"
                className="w-full border-b-2 p-2 outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="font-semibold text-base sm:text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              className="w-full border-b-2 p-2 outline-none resize-none"
              rows="3"
            ></textarea>
          </div>

          <div className="mt-auto flex justify-end">
            <button className="bg-orange-500 text-white px-6 py-2 flex items-center gap-2 rounded-md hover:bg-orange-600 transition duration-300">
              Send Message <CiMail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAFreeQuote;
