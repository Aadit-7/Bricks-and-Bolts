import React from "react";

const HowItWorks = () => {
  return (
    <div className="container bg-gray-200 pt-15 pb-20 text-black">
      <div>
        <center>
          <h1 className="text-4xl">
            <b>How it works</b>
          </h1>
        </center>
        <div className="flex flex-wrap gap-15 px-28 pt-10 ">
          <div className="overflow-hidden rounded-lg bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Get a Free Quote</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
          <div className="rounded-lg overflow-hidden bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Connect with Expert</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
          <div className="rounded-lg overflow-hidden bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Booking</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
          <div className="rounded-lg overflow-hidden bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Receive detailed plans</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
          <div className="rounded-lg overflow-hidden bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Track & Transact</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
          <div className="rounded-lg overflow-hidden bg-white h-40 w-40 p-1 ">
            <p className="text-center text-md">
              <b>Settle in</b>
            </p>
            <div className="logo-div h-30 w-30 bg-gray-100 ml-4 mt-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
