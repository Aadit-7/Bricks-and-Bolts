import React, { useState } from "react";
import Img2 from "../assets/AddressImg.png";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const statesAndCities = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Solapur"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
};

const citiesList = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Bangalore",
  "Mysore",
  "Mangalore",
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Solapur",
];

const BussinessAddress = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCitySearch = (city) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
    setSearchTerm("");
  };

  const handleDeleteCity = (city) => {
    setSelectedCities(selectedCities.filter((c) => c !== city));
  };

  return (
    <div className="container mx-auto pt-10 pb-10 px-20 bg-white">
      <div className="flex flex-col lg:flex-row-reverse pt-10">
        <div className="w-full lg:w-1/2 flex items-stretch rounded-bl-2xl">
          <img
            src={Img2}
            alt="Business Address"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" bg-gray-50 p-6  w-full lg:w-1/2 flex flex-col">
          <h1 className="text-3xl pb-10 font-bold">
            What is your business address?
          </h1>

          <div className="mb-3">
            <label
              htmlFor="address"
              className="block font-semibold mb-1 text-xl pb-2"
            >
              Address Line *
            </label>
            <input
              type="text"
              id="address"
              placeholder="929 Hert Street"
              required
              className="w-full border p-3 rounded-xl "
            />
          </div>

          <div className="flex gap-3">
            <div className="w-1/3">
              <label
                htmlFor="State"
                className="block font-semibold mb-1 text-xl pb-2 pt-3"
              >
                State *
              </label>
              <select
                id="State"
                value={selectedState}
                onChange={handleStateChange}
                className="w-full border p-2 rounded-xl"
              >
                <option value="">Select State</option>
                {Object.keys(statesAndCities).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/3">
              <label
                htmlFor="City"
                className="block font-semibold mb-1 text-xl pb-2 pt-3"
              >
                City *
              </label>
              <select
                id="City"
                value={selectedCity}
                onChange={handleCityChange}
                className="w-full border p-2 rounded-xl"
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {selectedState &&
                  statesAndCities[selectedState].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>

            <div className="w-1/3">
              <label
                htmlFor="ZipCode"
                className="block font-semibold mb-1  text-xl pb-2 pt-3"
              >
                Zip Code *
              </label>
              <input
                type="text"
                id="ZipCode"
                placeholder="123456"
                required
                className="w-full border p-2 rounded-xl"
              />
            </div>
          </div>

          <div className="pt-5">
            <h1 className="font-bold text-3xl pb-3 pt-10">
              Where do you want to work?
            </h1>

            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

              {searchTerm && (
                <div className="absolute w-full bg-white border mt-1 shadow-lg max-h-40 overflow-y-auto">
                  {citiesList
                    .filter((city) =>
                      city.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((city, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCitySearch(city)}
                      >
                        {city}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="mt-3">
              <h1 className=" text-xl">I'll work with customers in:</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCities.map((city, index) => (
                  <span
                    key={index}
                    className="bg-white text-black px-5 py-2 rounded-full text-lg flex items-center border-orange-500 border-2 cursor-pointer"
                  >
                    {city}
                    <button
                      className="ml-2 "
                      onClick={() => handleDeleteCity(city)}
                    >
                      <FaTimes size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <button className="bg-orange-500 text-xl rounded-xl text-white px-4 py-2 flex items-center gap-2 mt-20 hover:bg-orange-600 transition duration-300">
              Go to service <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessAddress;
