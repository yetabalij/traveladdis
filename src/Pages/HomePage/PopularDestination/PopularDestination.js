import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Hotel2 from "./../../../assets/images/hotel2.png";
import Hotel3 from "./../../../assets/images/hotel3.png";
import Hotel4 from "./../../../assets/images/hotel4.png";
import Hotel5 from "./../../../assets/images/hotel5.png";
import Hotel6 from "./../../../assets/images/hotel6.png";
import Hotel7 from "./../../../assets/images/hotel7.png";

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
      <CardContainer>
        <Card>
          <CardImage>
            <img src={Hotel2}></img>
          </CardImage>
          <h5>Bangkong</h5>
        </Card>

        <CardImage>
          <img src={Hotel3}></img>
        </CardImage>
        <CardImage>
          <img src={Hotel4}></img>
        </CardImage>
        <CardImage>
          <img src={Hotel5}></img>
        </CardImage>
        <CardImage>
          <img src={Hotel6}></img>
        </CardImage>
        <CardImage>
          <img src={Hotel7}></img>
        </CardImage>
      </CardContainer>
    </PopularDestinationContainer>
  );
};

export default PopularDestination;
