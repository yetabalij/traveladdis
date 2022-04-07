import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Brand from "../Brand/Brand";
import NavItems from "../NavItems/NavItems";
import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";

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
  return (
    <NavBarContainer>
      <Brand />
      <NavItems />
      <ContactUsBtn />
    </NavBarContainer>
  );
};

export default NabBar;
