import { Box, Button, Image, SlideFade, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getCart } from "../redux/AddtoCart/action";
import { useDispatch } from "react-redux";
export const CartShow = (props) => {
    const {image,price,ratings,name,quantity,id,totalPrice}=props
   
    const [count,setCount]=useState(1)
    const dispatch = useDispatch();
    
   
 const handdleUpdata=async ()=>
 {
   
    await axios.patch(`http://localhost:8080/addtocart/${id}`,
    {
        quantity: count,
        totalPrice:count*price
    }).then(()=>
    getCart(dispatch)
    )
    
 }
 


  return (
    <Box>
        
     
  
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap="20px"
        justifyContent={"space-around"}
      >
        <Box w={"120px"} h="150px">
          <Image src={image} />
        </Box>
        <Box width={"180px"} >
            <Box overflow={"hidden"} whiteSpace={"nowrap"}>
          <Text >{name}</Text>
          </Box>
          <Box display={"flex"} h="30px" mt="10px" w={"100px"} justifyContent="space-around" textAlign="center">
            <Button border={"none"}h="30px" onClick={()=>handdleUpdata(setCount(count-1))}>-</Button>
            <Text m={"auto"}>
                {quantity}
            </Text>
            <Button border={"none"} h="30px" onClick={()=>handdleUpdata(setCount(count+1))}>+</Button>
          </Box>
        </Box>
        <Box>
          <Text color={"#3c07ff"}>
            ₹.
            {(quantity*price).toLocaleString("hi-IN")}.00
          </Text>
          <Text
            color={"gray"}
            fontFamily={"Roboto, sans-serif"}
            fontSize={"12px"}
            textAlign="right"
            textDecoration="line-through"
          >
            ₹.
            {(price / 100).toLocaleString("hi-IN")}.00
          </Text>
        </Box>
       
      </Box>
     
    </Box>
  );
};
