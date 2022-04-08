import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MobNavContainer = styled.div`
  ${tw`
    bg-secondary-color
    absolute
    p-8
    top-0
    right-0
    `}
`;
const MobLi = styled.li`
  ${tw`
   text-white
   font-medium
    `}
`;

const MobNav = (props) => {
  if (props.pressesd) {
    return (
      <MobNavContainer>
        <button onClick={props.closeHandler}>
          <span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        <ul>
          <MobLi>
            <a href="/">Home</a>
          </MobLi>
          <MobLi>
            <a href="/services">Services</a>
          </MobLi>
          <MobLi>
            <a href="/contactus">Contact Us</a>
          </MobLi>
          <MobLi>
            <a href="/aboutus">About Us</a>
          </MobLi>
        </ul>
      </MobNavContainer>
    );
  }
};

export default MobNav;
