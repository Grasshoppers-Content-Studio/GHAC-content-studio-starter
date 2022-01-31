import React from "react";
import { theme } from "../pages/_app";
import {} from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as RRCarousel } from "react-responsive-carousel";

export default function Carousel({ images }: { images: any }) {
  const imageObjects = images.map((image: any) => {
    return {
      title: image.fields.title,
      description: image.fields.description,
      url: image.fields.file.url,
    };
  });

  return (
    <>
      <RRCarousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {imageObjects.map((image: any, index: number) => (
          <img key={index} src={image.url} />
        ))}
      </RRCarousel>
      <style global jsx>{`
        .carousel {
          border-radius: ${theme.radii.xl};
          box-shadow: ${theme.shadows["xl"]};
        }
      `}</style>
    </>
  );
}
