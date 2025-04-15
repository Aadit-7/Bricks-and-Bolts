import React from "react";
import Kyefeature from "./Kyefeature";
import Body from "./Body";
import ConstructionPackages from "./ConstructionPackages";
import HowItWorks from "./HowItWorks";
import Projects from "./Projects";
import UserReviews from "./UserReviews";


const Home = () => {
  return (
    <div>
      <Body />
      <Kyefeature />
      <ConstructionPackages />
      <HowItWorks />
      <Projects />
      <UserReviews />
    </div>
  );
};

export default Home;
