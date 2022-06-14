import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Center,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

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

function Card(props) {
  const { product_title, final_price, image, sku,id ,Product_url,ratings} = props;

  let rate=Math.floor(id/10000000000)
  return (
    <Flex p={4} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="80"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
       <Link onClick={()=>localStorage.setItem("name",`${Product_url}`)} to={`/${Product_url}/${id}`} >
        <Image
        ml="6"
          boxSize="250px"
          src={image}
          alt={`Picture of ${product_title}`}
          roundedTop="xs"
        />
        </Link>

        <Box p="2" textAlign={"center"}>
          <Box
            fontSize="xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product_title}
          </Box>
          <Text fontSize="13px">{sku}</Text>
          <Box textAlign={"center"} fontSize="10px" ml="10">
            <Rating ratings={ratings} numReviews={rate} />
          </Box>
          <Flex  fontSize="md" textAlign={"center"} m="auto" gap={"30"}>
            <Box ml="60px" color={"#3c07ff"}>
              ₹.
              {(final_price / 100).toLocaleString('hi-IN') }.00
            </Box>
            <Box textDecoration="line-through" color={"gray"}>
              ₹.
              {Math.floor((final_price)/100*1.4).toLocaleString('hi-IN')} .00
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
