import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

export const CartLength = () => {
  const AddtoCart = useSelector((state) => state.AddtoCart.AddtoCart);
  //console.log(AddtoCart.length)
  return (
    <Box borderRadius="50"  textAlign={"center"} bg="black" color="white" fontSize={"sm"}
    fontWeight={400} w="20px">{AddtoCart.length}</Box>
  )
}
