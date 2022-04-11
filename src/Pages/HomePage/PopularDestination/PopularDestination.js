import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HotelsData from "./../../../data.json";
import { useState } from "react";

const PopularDestinationContainer = styled.div`
  ${tw`
    w-11/12
    m-auto  
    mb-16
  `}
`;
const TilteContainer = styled.div`
  ${tw`
    flex
    justify-center
    mb-5
  `}
`;
const TitleUncolored = styled.h6`
  ${tw`
    text-5xl
    text-primary-color
    font-extrabold
  `}
`;
const TitleColored = styled.span`
  ${tw`
    text-5xl
    text-secondary-color
    font-extrabold
  `}
`;
const PopularDestinationTextContainer = styled.div`
  ${tw`
    flex
    justify-center
    mb-6
  `}
`;
const PopularDestinationText = styled.h3`
  ${tw`
    text-lg
    text-primary-color
    font-normal
  `}
`;
const CardContainer = styled.div`
  ${tw`
    grid
    grid-cols-3
    grid-rows-2
    gap-3
  `}
`;
const Card = styled.div`
  ${tw`
    border-solid
    border-2
    border-gray-100
    //shadow-md
    //drop-shadow-lg
    drop-shadow-2xl
  `}
`;
const CardImage = styled.div`
  ${tw`
  
  `}
`;
const PopularDestination = () => {
  const hotelsData = HotelsData.map((hotel) => {
    return (
      <Card>
        <CardImage>
          <img src={hotel.image}></img>
          <h2>
            {hotel.city}, {hotel.country}
          </h2>
          <h5>{hotel.description}</h5>
        </CardImage>
      </Card>
    );
  });

  return (
    <PopularDestinationContainer>
      <TilteContainer>
        <TitleUncolored>
          Our Popular <TitleColored>Destinations</TitleColored>
        </TitleUncolored>
      </TilteContainer>
      <PopularDestinationTextContainer>
        <PopularDestinationText>
          Our aim is to provide you with a top quality tour exeperiance
        </PopularDestinationText>
      </PopularDestinationTextContainer>
      <CardContainer>{hotelsData}</CardContainer>
    </PopularDestinationContainer>
  );
};

export default PopularDestination;
