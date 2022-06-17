import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Grid, Heading, Image, Stack } from '@chakra-ui/react';
import Card from '../Card';
export const ProductPrice3000 = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    {
     
      axios({
        method: "get",
        url: "http://localhost:8081/AllPorducts",
        params: {
          price_gte:1500,
          price_lte:3000
        },
      })
        .then((res) => {
          //  console.log(res.data);
          setProducts(res.data);
        
        })
        .catch((err) => {
         
        });
    }
  };


  return (
    <Box>
    <Box pos={"relative"}>
      <Image src="https://cdn.shopify.com/s/files/1/0153/8863/collections/Headphone-Zone-Bg-price-collections_4deb0b0d-0ba5-484d-8817-3392612e3a1d_1350x.jpg?v=1649237418" />
    </Box>
    <Box
      pos={"absolute"}
      top="60"
      left={"25%"}
      width={"600px"}
      textAlign="center"
    >
      <Heading color={"white"} size={"3xl"}>
      BEST HEADPHONES
UNDER RS. 3,000
      </Heading>
    </Box>
    
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
       
        <Box>
          <Grid templateColumns="repeat(3, 1fr)" >
            {products?.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </Grid>
        
        </Box>
      </Stack>
    </Box>
  </Box>
  )
}
