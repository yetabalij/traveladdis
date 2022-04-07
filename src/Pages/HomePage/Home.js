import React from "react";
import FindDestination from "./FindDestination/FindDestination";
import Menu from "./Menu/Menu";
import PopularDestination from "./PopularDestination/PopularDestination";
import Works from "./Works/Works";
import Notification from "./Notification/Notification";
import Testimony from "./Testimony/Testimony";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`
    
  `}
`;

const Home = () => {
  return (
    <HomeContainer>
      <Menu />
      <FindDestination />
      <PopularDestination />
      <Works />
      <Notification></Notification>
      <Testimony />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
