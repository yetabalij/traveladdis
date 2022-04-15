import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Add from "./../../../assets/images/Add.png";
import Search from "./../../../assets/images/Search.png";
import Send from "./../../../assets/images/Send.png";
import Path1 from "./../../../assets/images/Path1.png";
import Path2 from "./../../../assets/images/Path2.png";

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
    flex
    justify-center
    items-start
    w-full
    h-full
    overflow-x-hidden
  `}
`;
const ImageContainer = styled.div`
  ${tw`
    p-2
  `}
  img {
  }
`;
const SectionTwo = styled.div`
  ${tw`
    flex
    justify-between
  `}
`;
const SingUpContainer = styled.div`
  ${tw`
    
  `}
`;
const SignUpTitle = styled.h2`
  ${tw`
  
  `}
`;
const SignUpText = styled.h5`
  ${tw`
  
  `}
`;
const SearchContainer = styled.div`
  ${tw`
    mt-10
  `}
`;
const SearchTitle = styled.h2`
  ${tw`
  
  `}
`;
const SearchText = styled.h5`
  ${tw`
  
  `}
`;
const SendContainer = styled.div`
  ${tw`
    mt-20
  `}
`;
const SendTitle = styled.h2`
  ${tw`
  
  `}
`;
const SendText = styled.h5`
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
        <SectionOne>
          <ImageContainer>
            <img alt="" src={Add}></img>
          </ImageContainer>
          <ImageContainer>
            <img alt="" src={Path1}></img>
          </ImageContainer>
          <ImageContainer>
            <img alt="" src={Search}></img>
          </ImageContainer>
          <ImageContainer>
            <img alt="" src={Path2}></img>
          </ImageContainer>
          <ImageContainer>
            <img alt="" src={Send}></img>
          </ImageContainer>
        </SectionOne>
        <SectionTwo>
          <SingUpContainer>
            <SignUpTitle>Sign UP</SignUpTitle>
            <SignUpText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pulvinar, elit in posuere dictum, arcu ante sodales, et congue
              orci eros aliquam.
            </SignUpText>
          </SingUpContainer>
          <SearchContainer>
            <SearchTitle>Search</SearchTitle>
            <SearchText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pulvinar, elit in posuere dictum, arcu ante sodales, et congue
              orci eros aliquam.
            </SearchText>
          </SearchContainer>
          <SendContainer>
            <SendTitle>Search</SendTitle>
            <SendText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pulvinar, elit in posuere dictum, arcu ante sodales, et congue
              orci eros aliquam.
            </SendText>
          </SendContainer>
        </SectionTwo>
      </WorksContainer>
    </WorkContainer>
  );
};

export default Works;
