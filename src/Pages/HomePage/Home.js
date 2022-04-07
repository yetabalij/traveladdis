import React from "react";
import FindDestination from "../../Components/FindDestination/FindDestination";
import Menu from "../../Components/Menu/Menu";
import PopularDestination from "../../Components/PopularDestination/PopularDestination";
import Works from "../../Components/Works/Works";

const Home = () => {
  return (
    <div>
      <Menu />
      <FindDestination />
      <PopularDestination />
      <Works />
    </div>
  );
};

export default Home;
