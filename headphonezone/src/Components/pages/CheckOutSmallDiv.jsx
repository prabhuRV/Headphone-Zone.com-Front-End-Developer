import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const CheckOutSmallDiv = (props) => {
  const { image, name, quantity, id, totalPrice } = props;
  return (
    <Box>
      <Box display={"flex"} flexWrap={"wrap"} gap="20px" p="6">
        <Box w={"80px"} h="80px" display="flex">
          <Image borderRadius={"5px"} src={image} />
        </Box>
        <Box
          borderRadius="50"
          pos={"relative"}
          textAlign={"center"}
          bg="gray"
          color="white"
          fontSize={"sm"}
          fontWeight={700}
          h="20px"
          w={"20px"}
          ml="-30"
        >
          {quantity}
        </Box>
        <Box width={"180px"} p="5">
          <Box
            overflow={"hidden"}
            fontFamily={""}
            fontSize="18px"
            fontWeight={500}
            whiteSpace={"nowrap"}
          >
            <Text>{name}</Text>
          </Box>
        </Box>
        <Box p="5" fontFamily={""} fontSize="18px" fontWeight={500}>
          ₹.{(totalPrice).toLocaleString("hi-IN")} .00
        </Box>
      </Box>
    </Box>
  );
};
