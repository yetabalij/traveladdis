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
    mt-14
    sm:mt-20
  `}
`;
const SectionOne = styled.div`
  ${tw`
    flex
    justify-center
    items-start
    overflow-x-hidden
  `}
`;
const ImageContainer = styled.div`
  ${tw`
    
  `}
  img {
    width: 70%;
    height: 100%;
  }
`;
const ImageContainer2 = styled.div`
  ${tw`
    
  `}
  img {
  }
`;
const ImageContainer3 = styled.div`
  ${tw`
    mt-10
    lg:mt-20
    lg:pl-5
  `}
  img {
    width: 70%;
    height: 100%;
  }
`;
const ImageContainer4 = styled.div`
  ${tw`
    mt-12
    lg:mt-16
    overflow-hidden
  `}
  img {
    transform: rotate(-10deg);
  }
`;
const ImageContainer5 = styled.div`
  ${tw`
    mt-16
    lg:mt-20
  `}
  img {
    width: 70%;
    height: 100%;
  }
`;
const SectionTwo = styled.div`
  ${tw`
    sm:flex
    sm:justify-between
  `}
`;
const SingUpContainer = styled.div`
  ${tw`
    sm:pr-5
    lg:pr-10
  `}
`;
const SignUpTitle = styled.h2`
  ${tw`
    text-primary-color
    font-bold
    sm:text-xl
    md:text-2xl
    lg:text-3xl
  `}
`;
const SignUpText = styled.h5`
  ${tw`
    text-primary-color
  `}
`;
const SearchContainer = styled.div`
  ${tw`
    mt-5
    sm:mt-10
    sm:pr-5
    lg:pr-10
  `}
`;
const SearchTitle = styled.h2`
  ${tw`
    text-primary-color
    font-bold
    sm:text-xl
    md:text-2xl
    lg:text-3xl
  `}
`;
const SearchText = styled.h5`
  ${tw`
    text-primary-color
  `}
`;
const SendContainer = styled.div`
  ${tw`
    mt-5
    sm:mt-20
    sm:pr-5
    lg:pr-2
  `}
`;
const SendTitle = styled.h2`
  ${tw`
    text-primary-color
    font-bold
    sm:text-xl
    md:text-2xl
    lg:text-3xl
  `}
`;
const SendText = styled.h5`
  ${tw`
    text-primary-color
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
          <ImageContainer2>
            <img alt="" src={Path1}></img>
          </ImageContainer2>
          <ImageContainer3>
            <img alt="" src={Search}></img>
          </ImageContainer3>
          <ImageContainer4>
            <img alt="" src={Path2}></img>
          </ImageContainer4>
          <ImageContainer5>
            <img alt="" src={Send}></img>
          </ImageContainer5>
        </SectionOne>
        <SectionTwo>
          <SingUpContainer>
            <SignUpTitle>Sign Up</SignUpTitle>
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
            <SendTitle>Travel</SendTitle>
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
