import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { CartShow } from "./CartShow";
import { getCart } from "../redux/AddtoCart/action";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();
  const AddtoCart = useSelector((state) => state.AddtoCart.AddtoCart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (newSize) => {
    onOpen();
  };
  let dispatch=useDispatch()
  useEffect(() => {
    
    getCart(dispatch);
  }, [dispatch]);
  let countt=0


let totalPrice=0
  return (
    <Box>
      <Button bg={"white"} onClick={() => handleClick("md")} key={"md"} m={4}>
        Cart
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"}><Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /><Heading ml="3">{AddtoCart.length} Items</Heading> </DrawerHeader>
          <DrawerBody>
            <Box>
                {
                    AddtoCart.map((item)=>
                    {
                      totalPrice+=item.totalPrice
                        return  <CartShow key={item.id} {...item} />
                    })
                }
           
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
            
            onClick= {()=> navigate("/ChkeckOut")} >
            Check Out {(totalPrice).toLocaleString("hi-IN")}
          </Button>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
