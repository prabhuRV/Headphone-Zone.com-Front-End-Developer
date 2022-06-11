import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

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

      <Box bg={"#e6e6e6"} color="#444444" h="600" m="auto" p="10" textAlign={"center"}>
        <Heading  as='h6' size="xs" mt={"10"} >THE ONLY REASON SOME NAMES ARE MISSING IS BECAUSE THEY PROBABLY SOUND LIKE CRAP</Heading>
        <Heading  as='h6' size="lg" mt={"7"} >HOME TO THE WORLD'S FINEST BRANDS</Heading>
      </Box>
    </Box>
  );
};
