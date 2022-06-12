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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../redux/Products/action";

export const Fliters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catgoryValue, setCatgoryValue] = useState(
    searchParams.getAll("category") || []
  );
  const dispacth = useDispatch();

  const [sortByPrice, setSortByPrice] = useState([]);
  const flitervalues = (value) => {
    setCatgoryValue(value);
  };

  useEffect(() => {
    setSearchParams(
      { category: catgoryValue },
      { price: sortByPrice },
      { replace: true }
    );
    let params = {
      category: searchParams.getAll("category"),
    };

    dispacth(getData(params));
    console.log(setSearchParams);
  }, [catgoryValue, searchParams, dispacth, setSearchParams, sortByPrice]);

  ///  console.log(sortByPrice);
  return (
    <Box mt={"20px"}>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"}  pos={"relative"}>
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
                  <Checkbox value="men's clothing">Men's Clothing</Checkbox>
                  <Checkbox value="women's clothing">Women's Clothing</Checkbox>
                  <Checkbox value="bags">Bags</Checkbox>
                  <Checkbox value="jewelery">Jewelery</Checkbox>
                  <Checkbox value="electronics">Electronics</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"}  pos={"relative"}>
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
                onChange={flitervalues}
              >
                <VStack direction={["column", "row"]} alignItems={"baseline"}>
                  <Checkbox value="men's clothing">Men's Clothing</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={"none"}  pos={"relative"}>
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
                aria-label={["min", "max"]}
                colorScheme="pink"
                defaultValue={[10, 30]}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
