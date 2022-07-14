import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
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
    relative
  `}
  margin-top:5rem
`;

const Home = () => {
  return (
    <HomeContainer>
      <BrowserRouter>
        <Menu />
        <FindDestination />
        <PopularDestination />
        <Works />
        <Notification />
        <Testimony />
        <Footer />
      </BrowserRouter>
    </HomeContainer>
  );
};

export default Home;
