import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { Link } from "react-router-dom";

const OurPackages = () => {
  const packageFeatures = {
    Regular: [
      {
        name: "Design & Drawings",
        description: "Includes architectural, structural, and MEP drawings.",
      },
      {
        name: "Structure",
        description:
          "Uses high-quality RCC frame structure with premium materials.",
      },
      {
        name: "Kitchen",
        description: "Basic modular kitchen setup with standard fittings.",
      },
      {
        name: "Bathroom",
        description: "Standard sanitary fittings with anti-skid tiles.",
      },
      {
        name: "Doors & Windows",
        description: "High-quality wooden and UPVC doors and windows.",
      },
      { name: "Painting", description: "Good quality Painting" },
      { name: "Flooring", description: "Good quality Flooring" },
      { name: "Electrical", description: "Good quality wiring and switches" },
      { name: "Miscellaneous", description: "Only for Luxury and Premium" },
    ],
    Luxury: [
      {
        name: "Design & Drawings",
        description: "Premium architectural and structural drawings included.",
      },
      {
        name: "Structure",
        description: "Uses high-grade RCC with superior strength materials.",
      },
      {
        name: "Kitchen",
        description: "Luxury modular kitchen setup with high-end fittings.",
      },
      {
        name: "Bathroom",
        description: "Designer fittings with branded accessories.",
      },
      {
        name: "Doors & Windows",
        description: "High-quality wooden and UPVC doors and windows.",
      },
      {
        name: "Painting",
        description: "Weatherproof exterior and premium interior paints.",
      },
      { name: "Flooring", description: "Luxurious quality Flooring" },
      { name: "Electrical", description: "Fireproof wiring and switches" },
      { name: "Miscellaneous", description: "Any time service availability" },
    ],
    Premium: [
      {
        name: "Design & Drawings",
        description: "Exclusive designs with custom modifications available.",
      },
      {
        name: "Structure",
        description: "Premium RCC with top-tier durability standards.",
      },
      {
        name: "Kitchen",
        description: "Ultra-modern kitchen with imported fittings.",
      },
      {
        name: "Bathroom",
        description:
          "Premium fittings with branded accessories and best quality tiles.",
      },
      {
        name: "Doors & Windows",
        description: "High-quality Premium wooden and UPVC doors and windows.",
      },
      {
        name: "Painting",
        description:
          "Premium Weatherproof exterior and premium interior paints.",
      },
      {
        name: "Flooring",
        description: "Italian marble or hardwood flooring available.",
      },
      {
        name: "Electricals",
        description:
          "Smart home automation and high-quality electrical fittings.",
      },
      { name: "Miscellaneous", description: "Any time service availability" },
    ],
  };

  return (
    <div className="container pt-20 pb-20 px-6 md:px-20 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold text-center">
        Our Construction Packages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {["Regular", "Luxury", "Premium"].map((planName, index) => (
          <div key={index} className="p-5 bg-white rounded-xl shadow-lg">
            <div className="bg-orange-200 rounded-xl p-5 gap-4">
              <div className="flex items-center gap-5">
                <input
                  type="radio"
                  name="package"
                  className="h-7 w-7 border-4 border-orange-500 rounded-full accent-orange-500"
                />
                <h1 className="text-4xl font-bold">{planName}</h1>
              </div>
              <div>
                <p className="mt-2 text-lg">
                  {planName === "Regular"
                    ? "Regular construction package starts from Rs. 1550/Sq.Ft and is ideal for a compact house."
                    : planName === "Luxury"
                    ? "Luxury construction package starts from Rs. 1750/Sq.Ft and is suitable for luxurious houses."
                    : "Premium construction package starts from Rs. 1950/Sq.Ft and is ideal for premium homes."}
                </p>
                <h1 className="text-2xl font-semibold mt-2">
                  {planName === "Regular"
                    ? "Rs. 1550"
                    : planName === "Luxury"
                    ? "Rs. 1750"
                    : "Rs. 1950"}
                </h1>
                <p className="ml-10">/Sq.ft</p>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="text-xl font-semibold">What You'll Get</h1>
              <ul className="pt-2 text-lg text-gray-700">
                {packageFeatures[planName].map((feature, i) => {
                  const [open, setOpen] = useState(false);
                  return (
                    <li key={i}>
                      <button
                        className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                        onClick={() => setOpen(!open)}
                      >
                        {feature.name}
                        {open ? (
                          <FaAngleUp className="text-gray-600" />
                        ) : (
                          <FaAngleDown className="text-gray-600" />
                        )}
                      </button>
                      {open && (
                        <p className="p-2 px-5 text-sm text-gray-800">
                          {feature.description}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl pb-3">Hire the Best Construction Service</h1>
          <p className="text-lg">
            With a commitment to excellence and safety, we ensure your project
            is completed to the highest standards. Contact us today to bring
            your vision to life!
          </p>

          <Link to="/contact">
            <button className="mt-5 flex items-center gap-2 px-5 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              <MdOutlineCall className="text-2xl" /> Contact Us
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/3">
          <img
            src=""
            alt="Construction Visual"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
