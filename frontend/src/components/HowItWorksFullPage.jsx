import React from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

const HowItWorksFullPage = () => {
  return (
    <div className="container pb-20 pt-20 bg-gray-200 text-black">
      <h1 className="text-center text-5xl font-bold">How to works</h1>

      <div className="setps-div px-6 md:px-30 mt-10 bg-gray-200 flex flex-col gap-10 py-2">
        {[
          {
            icon: <RiNumber1 size={80} />,
            title: "Get a Free Quote",
            desc: (
              <>
                Submit your project details, timeline, and budget to{" "}
                <b>get quotes from verified contractors.</b> Compare offers and
                choose the best fit for your needs.
              </>
            ),
          },
          {
            icon: <RiNumber2 size={80} />,
            title: "Connect with Expert",
            desc: (
              <>
                Experts will help you choose the best house construction package
                and address any questions you have.
              </>
            ),
          },
          {
            icon: <RiNumber3 size={80} />,
            title: "Booking",
            desc: (
              <>You pay a 5% booking fee based on the estimated project cost.</>
            ),
          },
          {
            icon: <RiNumber4 size={80} />,
            title: "Receive detailed plans",
            desc: (
              <>
                Our expert provideb <b> detailed designs </b> until you are
                fully satisfied, including floor plans, 3D elevations, and
                structural, electrical, and plumbing layouts. A project manager
                and team oversee the contract, with all project details,
                specifications, and schedules recorded in the system.
              </>
            ),
          },
          {
            icon: <RiNumber5 size={80} />,
            title: "Track & Transact",
            desc: "Upon successful stage completion, payment is transferred to the contractor. Our project management team monitors progress through system processes and site visits.",
          },
          {
            icon: <RiNumber6 size={80} />,
            title: "Settle in",
            desc: (
              <>
                Upon successful stage completion, payment is transferred to the
                contractor. Our project management team monitors progress
                through system processes and site visits.{" "}
                <b> You receive project updates via our customer app.</b>
              </>
            ),
          },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white p-5 flex flex-col md:flex-row  rounded-2xl shadow-md gap-4 md:gap-10"
          >
            {/* Number Div */}
            <div className="number-div flex justify-center items-center md:justify-start mt-2">
              {step.icon}
            </div>

            {/* Image Div */}
            <div className="img-div flex flex-col items-center md:items-start">
              <p className="text-2xl w-auto bg-blue-400 text-white py-2 px-4 rounded-md text-center md:text-left">
                {step.title}
              </p>
              <div className="h-40 w-40 items-center bg-gray-500 mt-3"></div>
            </div>

            {/* Info Div */}
            <div className="info-div text-2xl md:text-left mt-3 md:mt-0">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksFullPage;
