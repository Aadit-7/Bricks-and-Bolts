import React from "react";

const ConstructionPackages = () => {
  return (
    <div className="container mx-auto pb-20 pt-20 bg-white text-black">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center">
        Our Construction Packages
      </h1>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-6 md:px-12 lg:px-40 pt-10">
        {[
          {
            name: "Regular",
            price: "Rs. 1550",
            description:
              "Regular construction packages start from Rs. 1550/Sq.Ft and are ideal for compact houses.",
          },
          {
            name: "Luxury",
            price: "Rs. 1750",
            description:
              "Luxury construction packages start from Rs. 1750/Sq.Ft and are ideal for luxurious houses.",
          },
          {
            name: "Premium",
            price: "Rs. 1950",
            description:
              "Premium construction packages start from Rs. 1950/Sq.Ft and are ideal for premium houses.",
          },
        ].map((pkg, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-200 p-4 text-left shadow-lg w-full max-w-sm mx-auto flex flex-col"
          >
            <h1 className="text-3xl font-bold pb-3">{pkg.name}</h1>

            <p className="pb-4 text-lg leading-6 text-gray-700">
              {pkg.description}
            </p>

            <div className="mt-auto">
              <h1 className="text-3xl font-bold">{pkg.price}</h1>
              <p className="text-lg text-gray-600">/Sq.Ft</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionPackages;
