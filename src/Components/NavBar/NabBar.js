import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Brand from "../Brand/Brand";
import NavItems from "../NavItems/NavItems";
import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";
import { useMediaQuery } from "react-responsive";
import MobileNave from "../MobileNave/MobileNave";

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
  if (isTabletOrMobile) {
    return (
      <NavBarContainer>
        <Brand />
        <MobileNave />
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
