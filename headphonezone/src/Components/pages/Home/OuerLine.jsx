import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { everyDayAtZone, NewsOuerLine } from "./SliderData";
export const OuerLine = () => {
  return (
    <Box>
      <Flex bg={"#d6cff9"} gap="30px" m={"auto"}>
        {NewsOuerLine.map((item) => {
          return (
            <Box mt={"70"} h="200px" width={"300px"} textAlign={"center"}>
              <Heading as={"h3"} size="xl">
                {item.id}
              </Heading>
              <Text fontSize={"17px"}>{item.Name}</Text>
            </Box>
          );
        })}
      </Flex>

      <Flex
        display={"flex"}
        bg={"#444444"}
        h="280"
        color={"white"}
        pos="relative"
      >
        <Box ml="100px" width={"500px"} mt="15">
          <Image
            p={"10"}
            h="100%"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704"
          />
        </Box>
        <Box ml={6} p={"50px"}>
          <Heading as={"h3"} size="xl" w={"500px"}>
            IT PAYS TO BE AN AUDIOPHILE
          </Heading>
          <Text mt={10} w="94%">
            Enjoy Incredible Members-only rewards on the world's finest
            headphones and earn loyalty points on every purchase.
          </Text>
        </Box>
      </Flex>
      <Box mt={-5} pos={"relative"}>
        <Image
          h="500px"
          w={"100%"}
          src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_1400x.jpg?v=1643375292"
        />
        <Box
          pos={"absolute"}
          top="200"
          left={"100"}
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          w={"500px"}
          padding="10"
        >
          <Heading size={"md"}>SUBSCRIBE TO OUR NEWSLETTER</Heading>
          <Text mt={3} fontSize={"14px"}>
            Sign up to join 1,00,000+ audiophiles stay in the know with hacks,
            new launches, curated playlists once-in-a-lifetime deals.
          </Text>
          <Flex mt={9} gap="30">
            <Input placeholder="YOUR EMAIL" size="lg" borderRadius="30" />
            <Button colorScheme="messenger" size="lg" borderRadius="30">
              SUBSCRIBE
            </Button>
          </Flex>
        </Box>
      </Box>
      <HStack spacing="24px">
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap="wrap"
          gap="24px"
          bg="yellow.200"
        >
          {everyDayAtZone.map((item) => {
            return (
              <Box key={item.id}>
                <Image w="200px" h="200px" src={item.image} />
              </Box>
            );
          })}
        </Box>
        <Box w="40%" >
          <Image src="https://scontent-ams4-1.cdninstagram.com/v/t51.29350-15/283698315_534936578225552_3382599809799712189_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=gtgn3gyyKQUAX_IKzNU&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8sCn7ROxkui3M5_tm6L4Uu--yTl1jvDyHIWFdFtGZXcA&oe=62AAEB3B" />
        </Box>
        <Box w="30%" h="300px" bg="pink.100">
          3
        </Box>
      </HStack>
    </Box>
  );
};
