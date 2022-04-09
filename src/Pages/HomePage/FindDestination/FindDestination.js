import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Hotel1 from "./../../../assets/images/hotel1.png";

const FindDestinationContainer = styled.div`
  ${tw`
    my-2
  `}
`;

const SectionOneContainer = styled.div`
  ${tw`
    sm:flex
    sm:justify-between
    w-11/12
    m-auto
    my-2
  `}
`;

const SectionOneLeft = styled.div`
  ${tw`
    
  `}
`;

const FindYourDestination = styled.h6`
  ${tw`
    text-secondary-color
    uppercase
    font-medium
    text-xs
    my-1
  `}
`;
const YourDream = styled.h3`
  ${tw`
    text-primary-color
    font-bold
    sm:text-4xl
    text-3xl
    
  `}
`;

const Dream = styled.span`
  ${tw`
    text-secondary-color
    
  `}
`;
const FindDestinationText = styled.h6`
  ${tw`
    text-primary-color
    leading-5
    text-xs
    font-medium
    my-3
  `}
`;

const SelectCountry = styled.select`
  ${tw`
    px-24
    py-2
    border-solid
    rounded-full
    border-2
    border-gray-100
    shadow-md
  `}
`;

const SectionOneRight = styled.div`
  ${tw`
    sm:pl-10
    mt-2
    pl-0
    md:w-full
    lg:w-3/5
  `}
`;
const SectionTwo = styled.div`
  ${tw`
    w-11/12
    m-auto
  `}
`;
const FindDestination = () => {
  return (
    <FindDestinationContainer>
      <SectionOneContainer>
        <SectionOneLeft>
          <FindYourDestination>find your destination</FindYourDestination>
          <YourDream>
            Your <Dream>Dream</Dream>
          </YourDream>
          <YourDream>Destination is </YourDream>
          <YourDream>Waiting for You!</YourDream>
          <FindDestinationText>
            Find Travel Destinations, Hotels, and Tourism attraction places for
            your stay all around the glob and make your trip more exiting.
          </FindDestinationText>
          <SelectCountry>
            <option>AzarBjan</option>
            <option>Albania</option>
            <option>Ethiopia</option>
          </SelectCountry>
        </SectionOneLeft>
        <SectionOneRight>
          <img src={Hotel1} />
        </SectionOneRight>
      </SectionOneContainer>
      <SectionTwo>Section Two</SectionTwo>
    </FindDestinationContainer>
  );
};

export default FindDestination;
