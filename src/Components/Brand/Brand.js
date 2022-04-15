import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const BrandContainer = styled.div`
  ${tw`
    
  `}
`;

const BrandName = styled.h6`
  ${tw`
    text-primary-color
    font-bold
    md:text-2xl
    2xl:text-3xl
  `}
`;
const ColoredBrandName = styled.span`
  ${tw`
    text-secondary-color
  `}
`;

const Brand = () => {
  return (
    <BrandContainer>
      <BrandName>
        Travel
        <ColoredBrandName> Addis</ColoredBrandName>
      </BrandName>
    </BrandContainer>
  );
};

export default Brand;
