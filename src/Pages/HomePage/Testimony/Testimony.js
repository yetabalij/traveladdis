import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const TestimonyContainer = styled.div`
  ${tw`
    w-11/12
    m-auto
  `}
`;
const Testimony = () => {
  return <TestimonyContainer>Testimony</TestimonyContainer>;
};

export default Testimony;
