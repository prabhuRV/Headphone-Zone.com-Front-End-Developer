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


import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



import { sortBy } from "../Value";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ".././Styles.scss";
import { getData } from "../../../redux/HeadPhone/action";
import Card from "../Card";
import { Pagination } from "../Pagination";
import { HeadPhoneFliters } from "./HeadPhoneFillter";

export const HeadPhonePage = () => {
  const products = useSelector((state) => state.products.products);
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
    dispatch(getData(params));
  }, [dispatch, searchParams, page]);

  return (
    <Box>
      gdkjhbgdjkhbnjd
      <Box pos={"relative"}>
        <Image src="https://cdn.shopify.com/s/files/1/0153/8863/collections/KZ_Banner_1350x.jpg?v=1649762539" />
      </Box>
      <Box
        pos={"absolute"}
        top="60"
        left={"25%"}
        width={"600px"}
        textAlign="center"
      >
        <Heading color={"white"} size={"3xl"}>
          BEGINNER AUDIOPHILE IEMS
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
          <Box w="500px">
            <HeadPhoneFliters />
          </Box>
          <Box>
            <Grid templateColumns="repeat(3, 1fr)">
              {products?.map((item) => {
                return <Card key={item.id} {...item} />
              })}
            </Grid>
            <Box>
              <Box display={"flex"} m={"auto"} justifyContent="center">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  prev
                </Button>
                <Pagination
                  border={"solid"}
                  currentPage={page}
                  lastPage={Math.floor(32 / 6)}
                  onPageChange={setPage}
                />
                <Button onClick={() => setPage(page + 1)}>next</Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

