import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BrandIcons } from "./SliderData";

export const HeadfoneFinder = () => {
  return (
    <Box>
      <Box
        pt="10"
        pb={"10"}
        ml={"1"}
        display="flex"
        pos={"relative"}
        w="90%"
        gap={"70px"}
      >
        <Box bg={"gray"} h="530px" w={"40%"}>
          <Box
            pos={"absolute"}
            m="auto"
            left={"130px"}
            top={"65px"}
            borderRadius="30px"
          >
            <Image
              w={"430px"}
              h="470px"
              borderRadius="10px"
              src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-finder-headphone-stacked_600x.jpg?v=1645189533"
            />
          </Box>
        </Box>
        <Box ml={"10"} mt={"10%"} textAlign="left" color={"gray"} w="40%">
          <Heading>WELCOME TO OUR HEADPHONE FINDER</Heading>
          <Text textAlign="center" mt={"10"}>
            Our Headphone Gurus obsess over every headphone so you get the
            perfect one. They have spent years reviewing & listening to
            countless headphones every day. Our Headphone Gurus are the go-to
            guys for everything audio. Our Headphone Finder puts together their
            top recommendations. In 4 easy steps, find the perfect headphones
            for you.
          </Text>
          <Button bg="#3c07ff" color={"white"} fontWeight={"900"}>
            Messenger
          </Button>
        </Box>
      </Box>

      <Box bg={"#e6e6e6"} color="#444444" m="auto" p="10" textAlign={"center"}>
        <Heading as="h6" size="xs" mt={"10"}>
          THE ONLY REASON SOME NAMES ARE MISSING IS BECAUSE THEY PROBABLY SOUND
          LIKE CRAP
        </Heading>
        <Heading as="h6" size="lg" mt={"7"}>
          HOME TO THE WORLD'S FINEST BRANDS
        </Heading>
        <Flex flexWrap={"wrap"} gap={"20px"} width="100%" m={"auto"} ml="10">
          {BrandIcons.map((icons) => {
            return (
              <Box key={icons.id}>
                <Image w={"150px"} src={icons.image} />
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box
        pt="10"
        pb={"10"}
        ml={"1"}
        display="flex"
        pos={"relative"}
        w="90%"
        gap={"70px"}
      >
        <Box bg={"#fce4e3"} h="530px" w={"40%"}>
          <Box
            pos={"absolute"}
            m="auto"
            left={"130px"}
            top={"65px"}
            borderRadius="30px"
          >
            <Image
              w={"430px"}
              h="470px"
              borderRadius="10px"
              src="https://cdn.shopify.com/s/files/1/0153/8863/files/ALL-CITIES-2_1160x.jpg?v=1648538565"
            />
          </Box>
        </Box>
        <Box ml={"10"} mt={"10%"} textAlign="left" color={"gray"} w="40%">
          <Heading>COMING TO A CITY NEAR YOU!</Heading>
          <Text textAlign="center" mt={"10"}>
            Get ready to put on some headphones, grab your mugs and rediscover
            your favourite music like never before. With a lineup of the world's
            finest headphones, food, beverages, music and conversations to share
            with friends and strangers alike, Headphone Connect is back!
          </Text>
          <Button bg="#9200ff" color={"white"} fontWeight={"900"}>
            EXPLORE NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
