import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  ${tw`
    //mt-32
    relative
  `}
`;
const ContactUsSection = styled.div`
  ${tw`
    h-60
    w-2/4
    mx-auto
    bg-primary-color
    absolute
    left-1/2
    flex
    flex-col
    //justify-center
    //items-center
  `}
  transform: translate(-50%,-50%)
`;
const ContactsSection = styled.div`
  ${tw`
    flex
    justify-around
    //justify-between
    //justify-center
    mt-7
  `}
`;
const MailContainer = styled.div`
  ${tw`
    
  `}
`;
const MailUsTitle = styled.h2`
  ${tw`
    text-white
    font-normal
    text-2xl
    mt-1
  `}
`;
const Mailtext = styled.h4`
  ${tw`
    text-white
  `}
`;
const PhoneContainer = styled.div`
  ${tw`

  `}
`;
const PhoneTitle = styled.h2`
  ${tw`
    text-white
    font-normal
    text-2xl
    mt-1
  `}
`;
const Phonetext = styled.h4`
  ${tw`
    text-white
  `}
`;
const FooterSection = styled.div`
  ${tw`
    bg-gray-200
  `}
  min-height: 600px;
`;
const TitleContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;
const Title = styled.h1`
  ${tw`
    text-white
    font-normal
    text-2xl
    mt-5
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactUsSection>
        <TitleContainer>
          <Title>Contact Us</Title>
        </TitleContainer>
        <ContactsSection>
          <MailContainer>
            <MailUsTitle>Mail Us:</MailUsTitle>
            <Mailtext>ermiastsegu@yahoo.com</Mailtext>
          </MailContainer>
          <PhoneContainer>
            <PhoneTitle>Phone:</PhoneTitle>
            <Phonetext>+251910640691</Phonetext>
          </PhoneContainer>
        </ContactsSection>
      </ContactUsSection>
      <FooterSection>some random contents</FooterSection>
    </FooterContainer>
  );
};

export default Footer;
