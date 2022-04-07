import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Brand from "../Brand/Brand";

const NavBarContainer = styled.div`
  ${tw`
    bg-red-100
  `}
`;

const NabBar = () => {
  return (
    <NavBarContainer>
      <Brand />
    </NavBarContainer>
  );
};

export default NabBar;
