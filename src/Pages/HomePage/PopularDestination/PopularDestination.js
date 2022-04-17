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
    text-3xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
    text-primary-color
    font-extrabold
  `}
`;
const TitleColored = styled.span`
  ${tw`
    text-3xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
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
    grid-cols-1
    sm:grid-cols-2
    sm:grid-rows-3
    md:grid-cols-3
    md:grid-rows-2
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

const ImageContainer = styled.div`
  ${tw`
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  ${tw`
    mt-3
    p-5
  `}
`;
const CountryCityTextContainer = styled.div`
  ${tw`
    w-3/4
    m-auto
  `}
`;
const CountryCityText = styled.h2`
  ${tw`
    text-primary-color
    font-bold
    text-lg
    lg:text-2xl
    2xl:text-3xl
    mb-2
  `}
`;

const HotelDescription = styled.h5`
  ${tw`
    text-primary-color
    font-normal
    text-sm
    md:text-base
    lg:text-lg
  `}
`;
const PopularDestination = () => {
  const hotelsData = HotelsData.map((hotel) => {
    return (
      <Card>
        <CardImage>
          <ImageContainer>
            <img alt="" src={hotel.image}></img>
          </ImageContainer>
          <TextContainer>
            <CountryCityTextContainer>
              <CountryCityText>
                {hotel.city}, {hotel.country}
              </CountryCityText>
            </CountryCityTextContainer>
            <HotelDescription>{hotel.description}</HotelDescription>
          </TextContainer>
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
