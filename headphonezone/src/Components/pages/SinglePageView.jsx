import React, { useEffect } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { singleEmployee } from "../redux/Products/action";
export const SinglePageView = () => {
  const SingleProduct = useSelector((state) => state.products.SingleProduct);
  let { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    singleEmployee(dispatch, id);
  }, [id]);
  const { image, product_title, final_price, sku ,product_description,ratings} = SingleProduct;
let rate=Math.floor(id/10000000000)

  return (
    <Container maxW={"7xl"}   fontFamily={"Roboto, sans-serif"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product_title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              In-Ears With 1 Dynamic Driver
            </Text>
          </Box>

          <Box mt="-2px" fontSize="10px" ml="10">
            <Rating ratings={ratings} numReviews={rate} />
            <Flex
              fontSize="20px"
              fontWeight={800}
              textAlign={"center"}
              gap={"30"}
            >
              <Box color={"#3c07ff"}>
                ₹.
                {(final_price / 100).toLocaleString('hi-IN')}.00
              </Box>
              <Box textDecoration="line-through" color={"gray"}>
                ₹.
                {Math.floor((final_price / 100) * 1.4).toLocaleString('hi-IN')}.00
              </Box>
            </Flex>
            <Text display={"flex"} fontSize={"13px"} color="gray">
              Or pay ₹ 600/month through EMI (UPI/Debit/Credit Cards)
              <Image
                mb="6px"
                src="https://cdn.shopify.com/s/files/1/0153/8863/files/info.svg?v=1642576958"
              />
            </Text>
            <Text display={"flex"} fontSize={"13px"} color="gray">
              Includes GST of ₹ 274{" "}
              <Image
                mb="6px"
                src="https://cdn.shopify.com/s/files/1/0153/8863/files/info.svg?v=1642576958"
              />{" "}
            </Text>
            <Box>
              <Text fontSize={"16px"} color={"green.700"}>
                color :{sku}
              </Text>
            </Box>
          </Box>

          <Button
            rounded={"60px"}
            
            w={"80%"}
            mt={8}
            size={"md"}
            py={"6"}
        bg="#3c07ff"
        fontFamily={"Roboto, sans-serif"}
        color={"white"}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"flex-start"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Box>
        <Heading as="u" size={"md"}>Description</Heading>
        <br />
        <Text as="em"fontSize={"14px"}>{product_description}</Text>
      </Box>
    </Container>
  );
};

function Rating({ ratings, numReviews }) {
  
  return (
    <Flex>
      <Box color={"#f6a429"} mt="1" display={"flex"}>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(ratings * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < ratings ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
        <Box as="span" mt="-1" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && "s"}
        </Box>
      </Box>
    </Flex>
  );
}
