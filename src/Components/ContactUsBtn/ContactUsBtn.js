import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const ContactContainer = styled.button`
  ${tw`
    bg-secondary-color
    text-white
    text-sm
    font-medium
    px-4
    py-1
    rounded-3xl
    drop-shadow
    hover:font-bold
    `}
`;

const ContactUsTxt = styled.h6`
  ${tw``}
`;

const ContactUsBtn = () => {
  const hello = () => {
    console.log("Hello");
  };
  return (
    <ContactContainer onClick={hello}>
      <ContactUsTxt>Contact Us</ContactUsTxt>
    </ContactContainer>
  );
};

export default ContactUsBtn;
