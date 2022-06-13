import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Button,
  Stack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../../redux/HeadPhone/action";
import { fliters } from "../Value";



export const HeadPhoneFliters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catgoryValue, setCatgoryValue] = useState(
    searchParams.getAll("vendor") || []
  );
  const [productT, setproductT] = useState([]);
  const [rangePrize, setRangePrize] = useState([100,1000]);
  const dispacth = useDispatch();

  const flitervalues = (value) => {
    setCatgoryValue(value);
  };

  const productType = (value) => {
    setproductT(value);
  };

  const ranger = (value) => {
    setRangePrize(value);
  };

  useEffect(() => {
    if (catgoryValue) {
      setSearchParams(
        { vendor: catgoryValue },

        { replace: true }
      );
    }
   
    let params = {
      vender: searchParams.getAll("vendor"),
      product_type: productT,
      price_gte:rangePrize[0],
      price_lte:rangePrize[1]
    };
    dispacth(getData(params));
   
  }, [catgoryValue, searchParams, dispacth, setSearchParams, productT,rangePrize[0],rangePrize[1]]);

 
  console.log();
  return (
    <Box mt={"20px"}>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"} pos={"relative"}>
            <h2>
              <AccordionButton w="250px">
                <Box flex="1" textAlign="left">
                  Brands
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={catgoryValue}
                onChange={flitervalues}
              >
                <VStack direction={["column", "row"]} alignItems={"baseline"}>
                  {fliters.map((item) => {
                    return (
                      <Box key={item.id}>
                        <Checkbox value={item.name}>{item.name}</Checkbox>
                      </Box>
                    );
                  })}
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"} pos={"relative"}>
            <h2>
              <AccordionButton w="250px">
                <Box flex="1" textAlign="left">
                  product_type
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={catgoryValue}
                onChange={productType}
              >
                <VStack direction={["column", "row"]} alignItems={"baseline"}>
                  <Checkbox value="Wired Earphones">Wired Earphones</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"} pos={"relative"}>
            <h2>
              <AccordionButton w="250px">
                <Box flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RangeSlider
                defaultValue={[100, 30000]}
                colorScheme="blue"
                min={0}
                max={30000}
                onChange={ranger}
                width="70%"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0}    />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <HStack  color={"white"} ml="2px" mt={"10px"} display={"flex"} gap="10px">
              <Button fontSize={"20px"}  colorScheme='telegram' width={"100px"}>₹ {rangePrize[0]}</Button>
              <Text color={"gray.900"}  fontSize={"20px"}>to</Text>
              <Button  fontSize={"20px"} width={"100px"}  colorScheme='telegram' border={"0.5px solid"}>₹ {rangePrize[1]}</Button>
              </HStack>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
