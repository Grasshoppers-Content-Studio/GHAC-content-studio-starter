import React from "react";
import { theme } from "../pages/_app";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  dotsClass: "slick-dots",
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ images }: { images: any }) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const imageObjects = images.map((image: any) => {
    return {
      title: image.fields.title,
      description: image.fields.description,
      url: image.fields.file.url,
    };
  });

  console.log(imageObjects);

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {imageObjects.map((image: any, index: number) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image.url})`}
          />
        ))}
      </Slider>

      <style global jsx>{`
        .slick-slide > div > div {
          max-height: 600px !important;
        }

        /* padding: 10px !important;
        box-sizing: border-box !important;
        resize: horizontal !important;
        overflow: auto !important;
        max-width: 100% !important;
        height: calc(100vh - 16px) !important; */
        
        .css-1gballw {
          overflow: initial !important;
        }
        .css-lrisgg,
        .css-1hr0j21,
        .css-16inkc0,
        .css-4yme76 {
          background: white;
          opacity: 0.6;
        }
        .css-5n75sk {
          margin-bottom: -6px;
        }
        .slick-list {
          border-radius: ${theme.radii.xl};
        }
        .slick-slide {
          margin-bottom: -6px;
        }
        .slick-dots button:before,
        .slick-next:before,
        .slick-prev:before {
          opacity: 1 !important;
          color: ${theme.colors.primary["600"]} !important;
        }

        .slick-dots li button {
          border-radius: 90% !important;
        }

        .slick-active button {
          background-color: ${theme.colors.primary["200"]} !important;
        }
      `}</style>
    </Box>
  );
}
