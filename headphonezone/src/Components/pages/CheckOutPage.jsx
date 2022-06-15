import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

export const CheckOutPage = () => {
  const AddtoCart = useSelector((state) => state.AddtoCart.AddtoCart);
  let totalPrice = 0;
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
              <FormLabel htmlFor="email">
                {" "}
                Already have an account?Log in
              </FormLabel>
            </Flex>

            <Input placeholder="Search here" size="lg" width={"100%"} />
            <Box mt={"20px"}>
              <FormLabel>Shipping Adress</FormLabel>

              <form>
                <Select id="country" placeholder="Select country">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>

                <Input placeholder="First Name" size="lg" width={"48%"} />

                <Input
                  placeholder="Last Name"
                  size="lg"
                  mt={"10px"}
                  ml="4"
                  width={"48%"}
                />

                <Input
                  placeholder="Adress"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                />
                <Flex justifyContent={"space-around"} width={"98%"}>
                  <Input
                    placeholder="City"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                  />
                  <Input
                    placeholder="State"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                    ml="3"
                  />
                  <Input
                    placeholder="PIN code"
                    size="lg"
                    mt={"10px"}
                    width={"31%"}
                    ml="4"
                  />
                </Flex>

                <Input
                  placeholder="Phone"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
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
                <Text>90000000</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text fontSize={"13px"}>Calculated at next step</Text>
              </Flex>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Flex mt="10px" fontSize={"20px"} fontWeight={800} justifyContent={"space-between"} width={"80%"}>
                <Text>Total</Text>
                <Text>90000</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
