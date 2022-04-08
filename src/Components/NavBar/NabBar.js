import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Brand from "../Brand/Brand";
import NavItems from "../NavItems/NavItems";
import ContactUsBtn from "../ContactUsBtn/ContactUsBtn";
import MobNav from "../MobNav/MobNav";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

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
  const [pressed, setPressed] = useState(false);
  const addPressed = () => {
    setPressed(true);
  };

  const closeHandler = () => {
    setPressed(false);
  };
  if (isTabletOrMobile) {
    return (
      <NavBarContainer>
        <Brand />
        <MobNav pressesd={pressed} closeHandler={closeHandler} />
        <button onClick={addPressed}>
          <spane>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </spane>
        </button>
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
