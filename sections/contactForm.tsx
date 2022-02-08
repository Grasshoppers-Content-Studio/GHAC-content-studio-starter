import React, { useState } from 'react'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineTopic,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson, BsFacebook } from 'react-icons/bs'
import { Icon } from '@chakra-ui/react'
import NextLink from 'next/link'

const socials = [
  {
    ariaLabel: 'facebook',
    url: 'https://www.facebook.com/grasshoppersacademy',
    icon: BsFacebook,
  },
  {
    ariaLabel: 'github',
    url: 'https://www.github.com',
    icon: BsGithub,
  },
  {
    ariaLabel: 'discord',
    url: 'https://www.discord.com',
    icon: BsDiscord,
  },
]

const contacts = [
  {
    value: '+32 (0)3 451 93 28',
    icon: MdPhone,
  },
  {
    value: 'info@grasshoppers-academy.eu',
    icon: MdEmail,
  },
  {
    value: 'Veldkant 33b 2550 Kontich',
    icon: MdLocationOn,
  },
]

export default function contact() {
  const [email, setEmail] = useState('')

  return (
    <Container mt="10" centerContent overflow="hidden">
      <Flex w="100%">
        <Box
          boxShadow={'xl'}
          display="flex"
          justifyContent="center"
          flex="1"
          bg="secondary.800"
          color="primary.500"
          borderRadius="xl"
          w="100%"
          my={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 16, lg: 16 }}
        >
          <Box p={4}>
            <Wrap
              spacing={{ base: 20, sm: 3, md: 20, lg: 20 }}
              justify={'center'}
            >
              <WrapItem>
                <Box>
                  <Heading
                    color="primary.500"
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    Contact
                  </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                    Don't hesitate to get in touch!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      {contacts.map((contactInfo, i) => (
                        <Button
                          key={i}
                          size="md"
                          height="48px"
                          variant="label"
                          pl="0"
                          leftIcon={
                            <Icon
                              as={contactInfo.icon}
                              color="secondary.400"
                              boxSize="22px"
                            />
                          }
                        >
                          {contactInfo.value}
                        </Button>
                      ))}
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    {socials.map((social, i) => (
                      <NextLink key={i} href={social.url}>
                        <IconButton
                          aria-label={social.ariaLabel}
                          size="lg"
                          isRound={true}
                          _hover={{ bg: 'secondary.600' }}
                          icon={<Icon as={social.icon} boxSize="28px" />}
                        />
                      </NextLink>
                    ))}
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg="white"
                  borderRadius="lg"
                  width={{ sm: '100%', md: '100%', lg: '420px' }}
                >
                  <Box m={8} color="secondary.800">
                    <form
                      action="/success"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="gray.200">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input name="name" type="text" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="mail">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="gray.200">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              size="md"
                              required
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="topic">
                          <FormLabel>Topic</FormLabel>
                          <InputGroup borderColor="gray.200">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineTopic color="gray.800" />
                            </InputLeftElement>
                            <Input name="topic" type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name="message"
                            borderColor="gray.200"
                            placeholder="message"
                            required
                          />
                        </FormControl>
                        <FormControl id="name">
                          <Button type="submit" float="right" variant="primary">
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
