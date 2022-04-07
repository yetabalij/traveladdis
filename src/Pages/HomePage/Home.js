import React from "react";
import FindDestination from "./FindDestination/FindDestination";
import Menu from "./Menu/Menu";
import PopularDestination from "./PopularDestination/PopularDestination";
import Works from "./Works/Works";

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
