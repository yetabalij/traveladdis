import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Customer1 from "./../../../assets/images/customer1.png";
import Customer2 from "./../../../assets/images/customer2.png";
import Customer3 from "./../../../assets/images/customer3.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//import { Start } from "@styled-icons/fa-solid/Star";
//import { Star } from "@styled-icons/fa-regular";

//importing font awsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonyContainer = styled.div`
  ${tw`
    w-11/12
    mx-auto
    mt-20
    mb-60
  `}
`;
const TitleTextContainer = styled.div`
  ${tw`
    flex
    justify-center
    mb-5
  `}
`;
const TitleUncolored = styled.h6`
  ${tw`
    text-3xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
    text-primary-color
    font-extrabold
  `}
`;
const TitleColored = styled.span`
  ${tw`
    text-3xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
    text-secondary-color
    font-extrabold
  `}
`;
const SliderContainer = styled.div`
  ${tw`
    mt-20
  `}
`;
const CardContainer = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;
const CardImage = styled.div`
  ${tw`
    
  `}
  img {
  }
`;
const ImageContainer = styled.div`
  ${tw`
    w-1/2
    mx-auto
  `}
`;
const StarsContainer = styled.div`
  ${tw`
    w-1/4
    mx-auto
    mt-3
    flex
    justify-between
  `}
`;

const Namecontainer = styled.div`
  ${tw`
    w-1/4
    mx-auto
    mt-1
  `}
`;
const CustomerName = styled.h4`
  ${tw`
    text-lg
    text-primary-color
    font-bold
  `}
`;
const ParagraphContainer = styled.div`
  ${tw`
    mt-1
    pl-5
  `}
`;

const Paragraph = styled.p`
  ${tw`
    text-primary-color
  `}
`;

const Testimony = (props) => {
  console.log(responsive.mobile);
  return (
    <TestimonyContainer>
      <TitleTextContainer>
        <TitleUncolored>
          What Our Happy <TitleColored>Clients </TitleColored>Say?
        </TitleUncolored>
      </TitleTextContainer>
      <SliderContainer>
        <Carousel
          //swipeable={false}
          //draggable={false}
          //showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          //keyBoardControl={true}
          //customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          //dotListClass="custom-dot-list-style"
          //itemClass="carousel-item-padding-40-px"
          //slidesToSlide={4}
          //arrows={false}
        >
          <CardContainer>
            <CardImage>
              <ImageContainer>
                <img src={Customer1} alt="other customer" />
              </ImageContainer>
              <StarsContainer>
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
              </StarsContainer>
              <Namecontainer>
                <CustomerName>John Smith</CustomerName>
              </Namecontainer>
              <ParagraphContainer>
                <Paragraph>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum nisi massa,
                  iaculis sit amet neque convallis, lacinia dictum nisl.
                  Praesent quis vulputate massa. Duis purus dui, pharetra a
                  euismod eget, varius eget felis.
                </Paragraph>
              </ParagraphContainer>
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <ImageContainer>
                <img src={Customer2} alt="customer" />
              </ImageContainer>
              <StarsContainer>
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
              </StarsContainer>
              <Namecontainer>
                <CustomerName>John Smith</CustomerName>
              </Namecontainer>
              <ParagraphContainer>
                <Paragraph>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum nisi massa,
                  iaculis sit amet neque convallis, lacinia dictum nisl.
                  Praesent quis vulputate massa. Duis purus dui, pharetra a
                  euismod eget, varius eget felis.
                </Paragraph>
              </ParagraphContainer>
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <ImageContainer>
                <img src={Customer3} alt="customer 3" />
              </ImageContainer>
              <StarsContainer>
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
              </StarsContainer>
              <Namecontainer>
                <CustomerName>John Smith</CustomerName>
              </Namecontainer>
              <ParagraphContainer>
                <Paragraph>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum nisi massa,
                  iaculis sit amet neque convallis, lacinia dictum nisl.
                  Praesent quis vulputate massa. Duis purus dui, pharetra a
                  euismod eget, varius eget felis.
                </Paragraph>
              </ParagraphContainer>
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <ImageContainer>
                <img src={Customer1} alt="customer 1" />
              </ImageContainer>
              <StarsContainer>
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
              </StarsContainer>
              <Namecontainer>
                <CustomerName>John Smith</CustomerName>
              </Namecontainer>
              <ParagraphContainer>
                <Paragraph>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum nisi massa,
                  iaculis sit amet neque convallis, lacinia dictum nisl.
                  Praesent quis vulputate massa. Duis purus dui, pharetra a
                  euismod eget, varius eget felis.
                </Paragraph>
              </ParagraphContainer>
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <ImageContainer>
                <img src={Customer2} alt="customer 2" />
              </ImageContainer>
              <StarsContainer>
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
                <FontAwesomeIcon style={{ color: "#FFB300" }} icon={faStar} />
              </StarsContainer>
              <Namecontainer>
                <CustomerName>John Smith</CustomerName>
              </Namecontainer>
              <ParagraphContainer>
                <Paragraph>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum nisi massa,
                  iaculis sit amet neque convallis, lacinia dictum nisl.
                  Praesent quis vulputate massa. Duis purus dui, pharetra a
                  euismod eget, varius eget felis.
                </Paragraph>
              </ParagraphContainer>
            </CardImage>
          </CardContainer>
        </Carousel>
      </SliderContainer>
    </TestimonyContainer>
  );
};

export default Testimony;
