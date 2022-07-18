import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGoogle } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  ${tw`
    relative
  `}
`;
const ContactUsSection = styled.div`
  ${tw`
    h-60
    w-10/12
    md:w-3/4
    xl:w-3/5
    mx-auto
    bg-primary-color
    absolute
    left-1/2
    flex
    flex-col
    overflow-x-hidden
  `}
  transform: translate(-50%,-50%)
`;
const ContactsSection = styled.div`
  ${tw`
    flex
    justify-around
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
    sm:flex-row
    flex-col
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
  const date = new Date();
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
            <p className="basis-1/4 w-full sm:w-4/5 mt-3 text-primary-color">
              In occaecat esse dolore irure exercitation magna dolor officia
              nostrud.Amet ad dolor cupidatat cillum anim ullamco dolor do
              reprehenderit fugiat.
            </p>
          </div>
          <div className="basis-3/4 flex mt-5">
            <div className="basis-1/3 mr-2">
              <span className="text-md font-bold text-primary-color">Home</span>
              <ul className="text-primary-color mt-2">
                <li className="cursor-pointer">Appirance</li>
                <li className="cursor-pointer">Content</li>
                <li className="cursor-pointer">How it Works?</li>
                <li className="cursor-pointer">Sell</li>
                <li className="cursor-pointer">Guide</li>
              </ul>
            </div>
            <div className="basis-1/3 mr-2">
              <span className="text-md font-bold text-primary-color">
                Destination
              </span>
              <ul className="text-primary-color mt-2">
                <li className="cursor-pointer">Appirance</li>
                <li className="cursor-pointer">Content</li>
                <li className="cursor-pointer">How it Works?</li>
                <li className="cursor-pointer">Sell</li>
                <li className="cursor-pointer">Guide</li>
              </ul>
            </div>
            <div className="basis-1/3 mx-2">
              <span className="text-md font-bold text-primary-color">
                Travel
              </span>
              <ul className="text-primary-color mt-2">
                <li className="cursor-pointer">Appirance</li>
                <li className="cursor-pointer">Content</li>
                <li className="cursor-pointer">How it Works?</li>
                <li className="cursor-pointer">Sell</li>
                <li className="cursor-pointer">Guide</li>
              </ul>
            </div>
          </div>
        </FooterContentContainer>
        <div className="w-11/12 mx-auto flex justify-center aligh-center mt-16">
          <div className="mr-2 text-secondary-color">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="mr-2 text-secondary-color">
            <FontAwesomeIcon icon={["fal", "coffee"]} />
          </div>
          <div className="mr-2 text-secondary-color">
            <FontAwesomeIcon icon={["fal", "coffee"]} />
          </div>
          <div className="mr-2 text-secondary-color">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="mr-2 text-secondary-color">
            <FontAwesomeIcon icon={["fab", "apple"]} />
          </div>
        </div>
        <div className="flex justify-center align-center mt-3">
          <p className="text-primary-color">
            Copy Right &copy; Travel Ethiopia {date.getFullYear()}
          </p>
        </div>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
