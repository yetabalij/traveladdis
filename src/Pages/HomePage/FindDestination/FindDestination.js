import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Hotel1 from "./../../../assets/images/hotel1.png";
import Google from "./../../../assets/images/google.png";
import Facebook from "./../../../assets/images/facebook.png";
import Paypal from "./../../../assets/images/paypal.png";
import Dropbox from "./../../../assets/images/dropbox.png";
import Amazon from "./../../../assets/images/amazon.png";

const FindDestinationContainer = styled.div`
  ${tw`
    
  `}
`;

const SectionOneContainer = styled.div`
  ${tw`
      w-11/12
      m-auto
      my-2
      sm:grid 
      sm:grid-cols-12
      sm:gap-2
      lg:gap-20
  `}
`;

const SectionOneLeft = styled.div`
  ${tw`
    mb-4
    col-span-5
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
    text-4xl
    sm:text-4xl
    md:text-4xl
    lg:text-5xl
    xl:text-7xl
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
    leading-6
    text-base
    font-normal
    mt-6
    mb-4
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
    col-span-7
    sm:ml-6
  `}
  img {
  }
`;
const SectionTwo = styled.div`
  ${tw`
    flex
    justify-between
    w-11/12
    m-auto
    mt-6
    mb-14
  `}
  img {
    width: 10%;
  }
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
      <SectionTwo>
        <img src={Google} />
        <img src={Facebook} />
        <img src={Paypal} />
        <img src={Dropbox} />
        <img src={Amazon} />
      </SectionTwo>
    </FindDestinationContainer>
  );
};

export default FindDestination;
