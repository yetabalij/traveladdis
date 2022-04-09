import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FindDestinationContainer = styled.div`
  ${tw`
  
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
const SectionOneLeft = styled.div`
  ${tw`
  `}
`;
const SectionOneRight = styled.div`
  ${tw`
  `}
`;
const FindDestination = () => {
  return (
    <FindDestinationContainer>
      <SectionOne>
        <SectionOneLeft>Section one Left</SectionOneLeft>
        <SectionOneRight>section one Right</SectionOneRight>
      </SectionOne>
      <SectionTwo>Section Two</SectionTwo>
    </FindDestinationContainer>
  );
};

export default FindDestination;
