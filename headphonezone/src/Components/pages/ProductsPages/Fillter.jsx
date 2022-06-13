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
import { fliters } from "./Value";

export const Fliters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catgoryValue, setCatgoryValue] = useState(
    searchParams.getAll("vendor") || []
  );
  const dispacth = useDispatch();

  const [sortByPrice, setSortByPrice] = useState([]);
  const flitervalues = (value) => {
    setCatgoryValue(value);
  };

  useEffect(() => {
    setSearchParams(
      { vendor: catgoryValue },
      { price: sortByPrice },
      { replace: true }
    );
    let params = {
      vender: searchParams.getAll("vendor"),
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
                  {
                    fliters.map((item)=>
                    {
                      return ( 
                      <Box key={item.id}>
                        
                        
                        <Checkbox value={item.name}>{item.name}</Checkbox>
                        </Box>
                      )
                    })
                  }
                  
                  
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
