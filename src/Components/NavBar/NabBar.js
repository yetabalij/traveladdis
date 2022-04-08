import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Brand from "../Brand/Brand";
import NavItems from "../NavItems/NavItems";
import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";
import { useMediaQuery } from "react-responsive";

const NavBarContainer = styled.div`
  ${tw`
    w-11/12
    m-auto
    flex
    justify-between
    my-6
  `}
`;

const NabBar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  // return (
  //   <NavBarContainer>
  //     <Brand />
  //     {/* <Brand />
  //     <NavItems />
  //     <ContactUsBtn /> */}
  //     {isTabletOrMobile ? <>yes</> : <NavItems />}
  //   </NavBarContainer>
  if (isTabletOrMobile) {
    return (
      <NavBarContainer>
        <Brand />
        <>ok</>
      </NavBarContainer>
    );
  } else {
    return (
      <NavBarContainer>
        <Brand />
        <NavItems />
        <ContactUsBtn />
      </NavBarContainer>
    );
  }
};

export default NabBar;
