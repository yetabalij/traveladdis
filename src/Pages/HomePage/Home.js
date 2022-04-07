import React from "react";
import FindDestination from "./FindDestination/FindDestination";
import Menu from "./Menu/Menu";
import PopularDestination from "./PopularDestination/PopularDestination";
import Works from "./Works/Works";
import Notification from "./Notification/Notification";
import Testimony from "./Testimony/Testimony";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Menu />
      <FindDestination />
      <PopularDestination />
      <Works />
      <Notification></Notification>
      <Testimony />
      <Footer />
    </div>
  );
};

export default Home;
