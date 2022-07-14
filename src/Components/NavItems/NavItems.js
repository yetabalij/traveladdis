import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";

const NavItemsContainer = styled.div`
  ${tw`
       
    `}
`;
const NavItemUl = styled.ul`
  ${tw`
    flex
  `}
`;
const NavItem = styled.li`
  ${tw`
    px-2
    sm:text-sm
    lg:text-base
    2xl:text-lg
    text-white
    font-medium
    hover:text-thersiary-color
  `}
`;
const NavItems = () => {
  return (
    <NavItemsContainer>
      <NavItemUl>
        <NavItem>
          <Link to="home" spane={true} smooth={true}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="popular" spane={true} smooth={true}>
            Destinations
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/#">Travel</Link>
        </NavItem>
        <NavItem>
          <Link to="/#">Testimony</Link>
        </NavItem>
      </NavItemUl>
    </NavItemsContainer>
  );
};

export default NavItems;
