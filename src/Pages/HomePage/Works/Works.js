import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const WorkContainer = styled.div`
  ${tw`
    w-11/12
    m-auto
    mb-10
    sm:mb-8
  `}
`;
const HowItWorksContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const HowItWorksUncolord = styled.h3`
  ${tw`
    text-primary-color
    font-bold
    text-4xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
    2xl:text-7xl
    2xl:mt-1
  `}
`;
const HowItWorksColord = styled.span`
  ${tw`
    text-secondary-color
    font-bold
    text-4xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
    2xl:text-7xl
    2xl:mt-1
  `}
`;

const WorksContainer = styled.div`
  ${tw`
    mt-10
  `}
`;
const SectionOne = styled.div`
  ${tw`
  
  `}
`;

const SectionTwo = styled.div`
  ${tw`
  
  `}
`;
const Works = () => {
  return (
    <WorkContainer>
      <HowItWorksContainer>
        <HowItWorksUncolord>
          How <HowItWorksColord>Travel Addis</HowItWorksColord> Works?
        </HowItWorksUncolord>
      </HowItWorksContainer>
      <WorksContainer>
        <SectionOne>Section One</SectionOne>
        <SectionTwo>Section Two</SectionTwo>
      </WorksContainer>
    </WorkContainer>
  );
};

export default Works;
