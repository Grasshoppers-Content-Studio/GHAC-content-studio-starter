import { Container, Box, Heading, Text, Stack, Link } from "@chakra-ui/react";
import NavBar from "../sections/navBar";

const Success = () => {
  return (
    <div>
      <NavBar />

      <Container maxW={"3xl"}>
        <Stack as={Box} textAlign={"center"} py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            color="primary.500"
          >
            Thank you!
          </Heading>
          <Text mt="0">
            We have successfully received your message, we will get back to you
            as soon as possible! <br />
            <Link href={"/"}>Click here</Link> to return to the homepage.
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default Success;
