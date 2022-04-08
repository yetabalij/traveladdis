import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Mobsample from "./Mobsample";
import { useState } from "react";

const MobileNavContainer = styled.div`
  ${tw`
        h-full
        w-24
        bg-red-100
        z-50
    `}
`;

const MobileNave = () => {
  const [pressed, setPressed] = useState(true);
  const addMobSample = () => {
    setPressed(!pressed);
  };
  if (pressed) {
    return (
      <div>
        <MobileNavContainer>
          <button onClick={addMobSample}>burger</button>
        </MobileNavContainer>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={addMobSample}>burger</button>
        <Mobsample></Mobsample>
      </div>
    );
  }
};

export default MobileNave;
