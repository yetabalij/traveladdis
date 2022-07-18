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
const FooterContentContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    w-11/12
    m-auto  
  `}
  padding-top:14rem
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
      <FooterSection>
        <FooterContentContainer>
          <div>
            <span className="text-2xl font-bold text-primary-color">
              Travel
            </span>{" "}
            <span className="text-2xl font-bold text-secondary-color">
              Addis
            </span>
            <p className="basis-1/4 w-2/3 mt-3">
              In occaecat esse dolore irure exercitation magna dolor officia
              nostrud.Amet ad dolor cupidatat cillum anim ullamco dolor do
              reprehenderit fugiat.
            </p>
          </div>
          <div className="basis-1/4">
            <span className="text-md font-bold text-primary-color">Home</span>
          </div>
          <div className="basis-1/4">
            <span className="text-md font-bold text-primary-color">
              Destination
            </span>
          </div>
          <div className="basis-1/4">
            <span className="text-md font-bold text-primary-color">Travel</span>
          </div>
        </FooterContentContainer>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
