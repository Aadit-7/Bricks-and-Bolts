import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto pt-20 pb-20 bg-white text-black">
      <h1 className="text-5xl font-bold text-center pb-14">Popular Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 w-full md:w-96 p-5 rounded-lg shadow-lg"
          >
            <div className="image-div h-56 bg-red-200 rounded-md"></div>

            <div className="pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">
                  Flats in Pune
                </h1>
                <p className="text-gray-600">⭐ 4.5 (168)</p>
              </div>
              <p className="text-lg text-gray-700 pt-2">By Vikram Desai</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
