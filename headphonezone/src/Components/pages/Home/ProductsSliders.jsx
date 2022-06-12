import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
// import { Pagination } from "swiper";
import {
  Box,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeadphoeIcons, NewLanch } from "./SliderData";

export default function ProductsSliders() {
  return (
    <>
      <Box mt="-20" pos={"relative"} bg="white">
        <Box p="30" m={"auto"}  textAlign="center">
          <Heading color={"gray"}>CHART TOPPING HEADPHONES</Heading>
        </Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {HeadphoeIcons.map((item) => {
            return (
              <Box key={item.heading} bg="pink.500"   display="block">
                <HStack   p='4'>
                  <Box display="block">
                    <SwiperSlide  >
                      <Box boxShadow='md' p='6' rounded='md' bg='white' mb={5} >
                      <Image textAlign="center" h={"300px"}  src={item.image} alt="" />
                      <Box textAlign={"center"}>
                      <Heading>PRice</Heading>
                      <Text>jdghjdhg</Text>
                      </Box>
                      </Box>
                    </SwiperSlide>
                  </Box>
                </HStack>
              </Box>
            );
          })}
        </Swiper>
      </Box>
      <Box
        display={"flex"}
        w="90%"
        m="auto"
        gap={"8"}
        textAlign={"center"}
        p={4}
      >
        {NewLanch.map((item) => {
          return (
            <Box
              w={"full"}
              h={"500px"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Box mt={-6} mx={-6} mb={6} pos={"relative"}>
                <Image
            
                  width={"100%"}
                  h={"100%"}
                  src={item.image}
                  layout={"fill"}
                />
                <Box
                  pos={"absolute"}
                  top="40%"
                  left="15%"
                  color={"white"}
                  pl="20px"
                  pr={"20px"}
                >
                  <Heading >{item.model}</Heading>
                  <Text fontSize={"25px"}>{item.name}</Text >
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
