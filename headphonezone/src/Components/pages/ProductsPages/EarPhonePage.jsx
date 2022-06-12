import React, { useEffect } from "react";
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
import { getData } from "../../redux/Products/action";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
export const EarPhonePage = () => {
  const products = useSelector((state) => state.products.products);
  const [searchParams]=useSearchParams()
  const dispatch = useDispatch();
  useEffect(() => {
    let params={
      category:searchParams.getAll("category")
    }
    dispatch(getData(params));
  }, [dispatch,searchParams]);
    console.log(products)
  return (
    <Box>
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
<Box>ugfsjgycjsfhgsc</Box>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <Box w="500px">
            <Fliters />
          </Box>
          <Box>
            <Grid templateColumns="repeat(3, 1fr)" >
              {products?.map((item) => {
                return <Card key={item.id} {...item} />
              })}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
