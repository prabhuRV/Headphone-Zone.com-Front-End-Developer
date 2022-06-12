import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HeadphoeIcons } from "./SliderData";
export const HeadphoneIcons = () => {
  return (
    <Box p="10">
      <Heading m="auto" textAlign="center">
        START YOUR AUDIOPHILE JOURNEY HERE
      </Heading>
      <Flex
        direction={["column", "row"]}
        w="80%"
        display="flex"
        m="auto"
        gap="30px"
      >
        {HeadphoeIcons.map((item) => {
          return (
            <Box key={item.heading}>
              <HStack>
                <Box>
                  <Image w="50px" h="50px" src={item.image} />
                  <Text fontSize={"13px"} w="100%">
                    {item.heading}
                  </Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </Flex>
      <Box m="auto" textAlign="center" p="10">
        <Heading>START YOUR AUDIOPHILE JOURNEY HERE</Heading>
        <Text w="60%" m="auto">
          And we believe a Headphone is more than just an instrument for sound.
          It’s the key to a mind-blowing moment of emotion, bringing you closer
          to your music, and yourself. We’ve curated the world’s finest
          headphones & earphones to help you discover the riffs, percussions,
          baselines and solos that were always there but never heard.
        </Text>
      </Box>

      <Box>
        <iframe
          width="100%"
          height="600px"
          title=""
          src="https://player.vimeo.com/video/681364200?autoplay=1&amp;autopause=1&amp;background=1&amp;loop=1&amp;muted=1&amp;transparent=0&amp;responsive=1&amp;portrait=0&amp;title=0&amp;byline=0&amp;color=444444"
          allow="autoplay; encrypted-media;"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </Box>
    </Box>
  );
};
