import React from "react";
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
    text-primary-color
    font-medium
    hover:text-thersiary-color
  `}
`;
const NavItems = () => {
  return (
    <NavItemsContainer>
      <NavItemUl>
        <NavItem>
          <a href="/#">Home</a>
        </NavItem>
        <NavItem>
          <a href="/#">Services</a>
        </NavItem>
        <NavItem>
          <a href="/#">About Us</a>
        </NavItem>
        <NavItem>
          <a href="/#">Contact Us</a>
        </NavItem>
      </NavItemUl>
    </NavItemsContainer>
  );
};

export default NavItems;
