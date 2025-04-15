import React, { useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { RiMailLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { TbBuildingCommunity } from "react-icons/tb";
import { Link } from "react-router-dom";

const allExperts = [
  {
    name: "Ram Mathur",
    role: "Contractor",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Ram Naman",
    role: "Painter",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Gautam M",
    role: "Plumber",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Shivam R",
    role: "Carpenter",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Shivam R",
    role: "Architect",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Shivam Z",
    role: "Interior Designer",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
  {
    name: "Shivam W",
    role: "Exterior Designer",
    bio: "Experienced contractor with 15 years in the industry, specialized in construction, electrical work, and plumbing. Skilled in project management, quality craftsmanship, and delivering reliable solutions on time and within budget. Dedicated to customer satisfaction and high standards of workmanship.",
    workers: 15,
    projects: 23,
    rating: 5,
    reviews: 33,
  },
];

const OurExperts = () => {
  const [selectedExpert, setSelectedExpert] = useState(allExperts[0]);
  const [otherExperts, setOtherExperts] = useState(allExperts.slice(1));

  const handleSeeDetail = (clickedExpert, index) => {
    const updatedOthers = [...otherExperts];
    updatedOthers.splice(index, 1);
    updatedOthers.push(selectedExpert);

    setSelectedExpert(clickedExpert);
    setOtherExperts(updatedOthers);
  };

  return (
    <div className="container pt-20 pb-20 px-6 md:px-20 bg-gray-200 text-black">
      <div className="top-div bg-white mt-10 border-2 border-gray-400 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start p-5 gap-6">
          <div className="img-div h-80 w-64 bg-black rounded-2xl"></div>

          <div className="info-div px-6 md:px-10 py-5 md:py-10 border-l-2 border-r-2 border-gray-300 flex-1 rounded-lg md:rounded-none">
            <h1 className="font-semibold text-3xl text-black">
              {selectedExpert.name}
            </h1>
            <h2 className="pt-1 text-xl">{selectedExpert.role}</h2>
            {selectedExpert.bio && (
              <p className="mt-2 text-lg">{selectedExpert.bio}</p>
            )}
            {selectedExpert.workers && selectedExpert.projects && (
              <div className="pt-10 flex gap-7">
                <div className="flex justify-center items-center gap-2 text-lg">
                  <GrUserWorker size={24} /> {selectedExpert.workers} Workers
                </div>
                <div className="flex justify-center items-center gap-2 text-lg">
                  <TbBuildingCommunity size={26} /> {selectedExpert.projects}{" "}
                  Projects
                </div>
              </div>
            )}
          </div>

          {selectedExpert.rating && (
            <div className="review-div px-6 py-3 rounded-lg md:rounded-none text-center md:text-right flex flex-col items-center md:items-end gap-4">
              <h1 className="text-lg font-semibold pb-20">
                ⭐ {selectedExpert.rating}.0 ({selectedExpert.reviews} reviews)
              </h1>

              <Link to="/inbox">
                <button className="cursor-pointer text-lg px-4 py-3 border-2 border-orange-400 rounded-xl text-orange-500 flex items-center gap-2">
                  Send Message <RiMailLine size={20} />
                </button>
              </Link>

              <Link to="/inbox">
                <button className="cursor-pointer text-lg px-4 py-3 border-2 border-orange-400 bg-orange-400 text-white rounded-xl flex items-center gap-2">
                  Call Contractor <MdOutlineCall size={20} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="bottom-div mt-10 px-6 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {otherExperts.map((expert, index) => (
          <div key={index} className="p-5 bg-white w-80 rounded-xl shadow-lg">
            <div className="img-div h-70 w-70 bg-black rounded-xl"></div>
            <div className="pt-5 flex justify-between items-center gap-3">
              <div>
                <h1 className="text-2xl font-semibold">{expert.name}</h1>
                <h2 className="text-lg text-gray-600">{expert.role}</h2>
              </div>
              <button
                className="px-3 py-2 border-orange-400 border-2 text-orange-500 rounded-xl text-sm whitespace-nowrap"
                onClick={() => handleSeeDetail(expert, index)}
              >
                See Detail...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
