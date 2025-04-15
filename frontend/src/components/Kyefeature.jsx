import React from "react";

const Kyefeature = () => {
  return (
    <div className="container mx-auto pb-20 pt-20 bg-gray-200 text-black">
      <h1 className="text-4xl font-bold text-center">Key Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-24 pt-10">
        {[
          {
            title: "Verified Contractors",
            description:
              "Our platform features a rigorously vetted network of contractors, ensuring background checks and license verification for reliability.",
          },
          {
            title: "Advanced Search",
            description:
              "Builder offers advanced search tools to filter contractors by location, project type, budget, and skills.",
          },
          {
            title: "Project Management",
            description:
              "Effortlessly manage projects with integrated tools for chat, scheduling, tracking, and document sharing.",
          },
          {
            title: "Secure Payment",
            description:
              "A secure payment system ensures that both clients and contractors are protected from fraud, delays, or dispute.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="h-16 w-16 bg-black rounded-full mx-auto"></div>

            <h2 className="pt-5 text-2xl font-bold">{feature.title}</h2>

            <p className="pt-4 text-lg text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kyefeature;
