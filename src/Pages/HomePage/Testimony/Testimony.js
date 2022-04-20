import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Customer1 from "./../../../assets/images/customer1.png";
import Customer2 from "./../../../assets/images/customer2.png";
import Customer3 from "./../../../assets/images/customer3.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    m-auto
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
              <img src={Customer1} />
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <img src={Customer2} />
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <img src={Customer3} />
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <img src={Customer1} />
            </CardImage>
          </CardContainer>
          <CardContainer>
            <CardImage>
              <img src={Customer2} />
            </CardImage>
          </CardContainer>
        </Carousel>
      </SliderContainer>
    </TestimonyContainer>
  );
};

export default Testimony;
