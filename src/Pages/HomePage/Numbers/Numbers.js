import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NumberCounter from "number-counter";

const Container = styled.div`
  ${tw`
    w-11/12
    m-auto
    my-16
    sm:mb-8
    flex
    flex-col
  `}
`;

const NumberContainer = styled.div`
  ${tw`
    sm:pr-5
    lg:pr-10
  `}
`;
const Title = styled.h2`
  ${tw`
    text-primary-color
    font-bold
    sm:text-xl
    md:text-2xl
    lg:text-3xl
  `}
`;

const Numbers = () => {
  return (
    <Container>
      <div className="flex justify-between xl:my-16 my-2">
        <NumberContainer>
          <Title>Addis Ababa</Title>
          <NumberCounter
            end={250}
            delay={5}
            className="text-secondary-color font-bold sm:text-xl md:text-2xl lg:text-3xl"
            preFix="+"
          />
        </NumberContainer>
        <NumberContainer>
          <Title>Tokyo</Title>
          <NumberCounter
            end={350}
            delay={5}
            className="text-secondary-color font-bold sm:text-xl md:text-2xl lg:text-3xl"
            preFix="+"
          />
        </NumberContainer>
        <NumberContainer>
          <Title>Nairobi</Title>
          <NumberCounter
            end={450}
            delay={5}
            className="text-secondary-color font-bold sm:text-xl md:text-2xl lg:text-3xl"
            preFix="+"
          />
        </NumberContainer>
      </div>
    </Container>
  );
};

export default Numbers;
