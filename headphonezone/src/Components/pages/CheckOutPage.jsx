import {
  Box,
  Button,
  Flex,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdress, getAdress } from "../redux/Adress/action";
import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

export const CheckOutPage = () => {
  const AddtoCart = useSelector((state) => state.AddtoCart.AddtoCart);
  let totalPrice = 0;
  const [adress,setAdress]=useState({})
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setAdress({
      ...adress,
      [inputName]: e.target.value,
    });
  };
  const isError = adress === {}
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = adress;
console.log(value);
    if (value) {
      addAdress({
        value,
        dispatch,
      }).then(() => {
        getAdress(dispatch);
      });;
    }
  };
  let navigate=useNavigate()
  const handdleClick=()=>
  {
    navigate("/paymentMethod")
  }
  const toast = useToast();
  return (
    <Box>
      <Box>
        <Flex>
          <Box width="50%" p="4">
            <Image
              h="60px"
              ml="-0.5"
              src="https://assets.rha-audio.com/nzssx/c/Headphone_zone_logo_3-small.png"
            />
            <Flex justifyContent={"space-between"}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <FormLabel onClick={()=>navigate("/login")}>
                {" "}
                Already have an account?Log in
              </FormLabel>
            </Flex>

            <Input placeholder="Search here" size="lg" width={"100%"} />
            <Box mt={"20px"}>
              <FormLabel>Shipping Adress</FormLabel>

              <form onSubmit={haddleSubmit} isInvalid={isError} >
              <Input
                  placeholder="contry"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
            name="contry"
            onChange={handleChange}
  
                />

                <Input placeholder="First Name"   type={"text"}
            name="Firstname"
            onChange={handleChange} size="lg" width={"48%"} />

                <Input
                  placeholder="Last Name"
                  size="lg"
                  mt={"10px"}
                  ml="4"
                  width={"48%"}
                  type={"text"}
            name="Lastname"
            onChange={handleChange}
                />

                <Input
                  placeholder="Adress"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
            name="Adress"
            onChange={handleChange}
                />
                <Flex justifyContent={"space-around"} width={"98%"}>
                  <Input
                    placeholder="City"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                    type={"text"}
                    name="City"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="State"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                    ml="3"
                    type={"text"}
                    name="State"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="PIN code"
                    size="lg"
                    mt={"10px"}
                    width={"31%"}
                    ml="4"
                    type={"text"}
                    name="PIN"
                    onChange={handleChange}
                  />
                </Flex>

                <Input
                  placeholder="Phone"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
                  name="Phone"
                  onChange={handleChange}
                />
                <Input
                  type="submit"
                  placeholder="Phone"
                  size="lg"
                  mt={"10px"}
                  value="Continue to payment method"
                  ml={"37%"}
                  bg="#9200ff"
                  color={"white"}
                  width={"60%"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={() =>
                    handdleClick(
                      toast({
                        position: "top",
                        isClosable: true,
      
                        bg: "blue",
                        duration: 4000,
                        render: () => (
                          <Box borderRadius={"50px"}>
                            <Box
                              color="white"
                              textAlign={"center"}
                              width={"500px"}
                              p={3}
                              bg="#3c07ff"
                            
                            >
                         Address Added
                            </Box>
                            
                          </Box>
                        ),
                      })
                    )
                  }
                />
              </form>
            </Box>
      
          </Box>
      
          <Box bg="#f5f5f5" width="50%" p="6">
            <Box>
              {AddtoCart.map((item) => {
                totalPrice += item.totalPrice;
                return <CheckOutSmallDiv key={item.id} {...item} />;
              })}
            </Box>
            <Box bg="gray" h={"1px"} width={"80%"}></Box>
            <Box display={"flex"} p="2" mt="10px" gap={"10px"}>
              <Input placeholder="Apply Coupen Code" size="lg" width={"70%"} />
              <Button>Apply</Button>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Box color="gray" mt="10px" width={"80%"}>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text fontSize={"13px"}>Calculated at next step</Text>
              </Flex>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Flex mt="10px" fontSize={"20px"} fontWeight={800} justifyContent={"space-between"} width={"80%"}>
                <Text>Total</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
