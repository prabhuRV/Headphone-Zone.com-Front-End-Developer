import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Link,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { Fliters } from "./Fillter";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { Pagination } from "../Pagination";

import { sortBy } from "../Value";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ".././Styles.scss";
import { HiRelgetData } from "../../../redux/HiReplayer/action";


export const HiReplayer = () => {
  const Protableproducts = useSelector((state) => state.Protableproducts.Protableproducts);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  

  const dispatch = useDispatch();
  useEffect(() => {
    let params = {
      vendor: searchParams.getAll("vendor"),
      _page: page,
      _limit: 6,
    };
    console.log(params);
    dispatch(HiRelgetData(params));
  }, [dispatch, searchParams, page]);

  return (
    <Box>
      <Box pos={"relative"}>
        <Image src="https://cdn.shopify.com/s/files/1/0153/8863/collections/Players_1350x.jpg?v=1649844997"/>
      </Box>
      <Box
        pos={"absolute"}
        top="60"
        left={"25%"}
        width={"600px"}
        textAlign="center"
      >
        <Heading color={"white"} size={"3xl"}>
        BEGINNER HI-RES
PLAYERS
        </Heading>
      </Box>
      <Box p="3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          className="mySwiper"
        >
          {sortBy.map((item) => {
            return (
              <SwiperSlide >
                <Box width={"200px"}>
                <Image  src={item.image} />
                <Text mt="15">
                  Under {item.sortin}</Text>
                </Box>
                
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <Box w="400px">
            <Fliters />
          </Box>
          <Box>
            <Grid templateColumns="repeat(3, 1fr)" >
              {Protableproducts?.map((item) => {
                return <Card key={item.id} {...item} />;
              })}
            </Grid>
            
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
