import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const BrandContainer = styled.div`
  ${tw``}
`;

const BrandName = styled.h3`
  ${tw``}
`;

const Brand = () => {
  return (
    <BrandContainer>
      <BrandName>Travel Addis</BrandName>
    </BrandContainer>
  );
};

export default Brand;
