import React, { useRef } from "react";

const UserReviews = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto pt-20 pb-20 bg-gray-200 text-black">
      <div className="flex justify-between items-center px-10 pb-6">
        <h1 className="text-4xl font-bold px-16">Users about BuildLink</h1>
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-6 gap-20 md:px-16">
        <div
          ref={scrollRef}
          className="flex gap-40 px-10 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {[
            {
              name: "Meera Singh",
              review: (
                <>
                  I had a{" "}
                  <b>
                    fantastic experience using BuildLink for my office
                    renovation.
                  </b>
                  The platform is very user-friendly, with an intuitive
                  interface that makes searching and comparing contractors a
                  breeze.
                </>
              ),
            },
            {
              name: "Anil Kumar",
              review: (
                <>
                  BuildLink has become my go-to platform for all my contracting
                  needs. As a property manager, I often need reliable
                  contractors for various maintenance and renovation projects.
                  <b>
                    BuildLink Contractor provides a comprehensive list of
                    professionals.
                  </b>
                </>
              ),
            },
            {
              name: "Sweta Mishra",
              review: (
                <>
                  <b>The detailed profiles and client reviews</b> made it easy
                  to choose the right professional for the job. The advanced
                  search filters allowed me to narrow down my options based on
                  my specific needs and budget.
                </>
              ),
            },
            {
              name: "Sweta Mishra",
              review: (
                <>
                  <b>The detailed profiles and client reviews</b> made it easy
                  to choose the right professional for the job. The advanced
                  search filters allowed me to narrow down my options based on
                  my specific needs and budget.
                </>
              ),
            },
            {
              name: "Sweta Mishra",
              review: (
                <>
                  <b>The detailed profiles and client reviews</b> made it easy
                  to choose the right professional for the job. The advanced
                  search filters allowed me to narrow down my options based on
                  my specific needs and budget.
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="h-auto w-80 bg-white rounded-xl flex-shrink-0"
            >
              <div className="image-div h-20 w-20 bg-black rounded-full my-5 mx-5"></div>
              <p className="px-5 text-left">{item.review}</p>
              <p className="pt-5 px-5">
                <b>{item.name}</b>
              </p>
              <p className="px-5 pb-5">Client</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
