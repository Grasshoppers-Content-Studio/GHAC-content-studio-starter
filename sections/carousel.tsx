import React from "react";
import { Container, Box, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Heading } from "@chakra-ui/react";

import RichText from "../components/richText";

import Carousel from "../components/carousel";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CarouselSection({
  title,
  description,
  images,
}: {
  title: string;
  description: any;
  images: any[];
}) {
  return (
    <Container maxW={"7xl"}>
      <Box mb="2">
        <Heading>{title}</Heading>
        <RichText content={description} />
      </Box>
      <Carousel images={images} />
    </Container>
  );
}
