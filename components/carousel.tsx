import React from "react";
import { theme } from "../pages/_app";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as RRCarousel } from "react-responsive-carousel";

export default function Carousel({ images }: { images: any }) {
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
    <>
      <RRCarousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        {imageObjects.map((image: any, index: number) => (
          <div>
            <img src={image.url} />
          </div>
        ))}
      </RRCarousel>
      <style global jsx>{`
        .carousel {
          border-radius: ${theme.radii.xl};
        }
      `}</style>
    </>
  );
}
