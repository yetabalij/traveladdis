import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const TestimonyContainer = styled.div`
  ${tw`
    w-11/12
    m-auto
  `}
`;
const TitleTextContainer = styled.div`
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
const SliderContainer = styled.div`
  ${tw`
  
  `}
`;

const Testimony = () => {
  return (
    <TestimonyContainer>
      <TitleTextContainer>
        <TitleUncolored>
          What Our Happy <TitleColored>Clients </TitleColored>Say?
        </TitleUncolored>
      </TitleTextContainer>
      <SliderContainer>
        
      </SliderContainer>
    </TestimonyContainer>
  );
};

export default Testimony;
