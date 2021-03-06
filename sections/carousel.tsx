import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "../types/atoms";

import RichText from "../components/richText";
import Carousel from "../components/carousel";

export default function CarouselSection({
  title,
  description,
  images,
}: {
  title: string;
  description: any;
  images: Image[];
}) {
  return (
    <Container maxW={"7xl"}>
      <Box mb="4">
        <Heading>{title}</Heading>
        <RichText content={description} />
      </Box>
      <Carousel images={images} />
    </Container>
  );
}
