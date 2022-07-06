import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const NotificationContainer = styled.div`
  ${tw`
    bg-gray-200
    h-40
    xl:h-96
    xl:mb-10
    overflow-x-hidden
    relative
  `}
`;

const SmallRectangle = styled.div`
  ${tw`
      bg-secondary-color
      h-4
      xl:h-7
      w-4
      xl:w-7
      absolute
      top-6
      xl:top-16
      left-10
      xl:left-32
  `}
  transform: rotate(20deg)
`;
const SmallCircle = styled.div`
  ${tw`
      bg-secondary-color
      h-4
      xl:h-7
      w-4
      xl:w-7
      rounded-full
      absolute
      bottom-6
      xl:bottom-16
      left-10
      xl:left-36
  `}
`;

const LargeRectangle = styled.div`
  ${tw`
      bg-primary-color
      h-6
      xl:h-10
      w-6
      xl:w-10
      absolute
      bottom-6
      xl:bottom-16
      right-24
      xl:right-44
  `}
  transform: rotate(40deg)
`;
const MediumCircle = styled.div`
  ${tw`
      bg-primary-color
      h-6
      xl:h-12
      w-6
      xl:w-12
      absolute
      top-6
      xl:top-16
      right-20
      xl:right-40
      rounded-full
  `}
`;
const LargeCircle = styled.div`
  ${tw`
      bg-secondary-color
      h-24
      xl:h-40
      w-24
      xl:w-40
      absolute
      top-3
      xl:top-6
      right--16
      xl:right--14
      rounded-full
  `}
`;

const EmailInput = styled.input`
  ${tw`
      absolute
      top-1/2
      right-1/2
      py-3
      px-24
      rounded-3xl
  `}
  transform: translate(50%, -50%);
`;
const ButtonStartFree = styled.button`
  ${tw`
    bg-secondary-color
    text-white
    z-10
    absolute
    top-1/2
    right-1/2
    py-2
    px-8
    rounded-3xl
  `}
  transform: translate(138%, -50%);
`;

const Notification = () => {
  return (
    <NotificationContainer>
      <SmallRectangle />
      <SmallCircle />
      <LargeRectangle />
      <MediumCircle />
      <LargeCircle />
      <EmailInput></EmailInput>
      <ButtonStartFree>Start Free</ButtonStartFree>
    </NotificationContainer>
  );
};

export default Notification;
