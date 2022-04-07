import React from "react";
import FindDestination from "../../Components/FindDestination/FindDestination";
import Menu from "../../Components/Menu/Menu";
import PopularDestination from "../../Components/PopularDestination/PopularDestination";

const Home = () => {
  return (
    <div>
      <Menu />
      <FindDestination />
      <PopularDestination />
    </div>
  );
};

export default Home;
