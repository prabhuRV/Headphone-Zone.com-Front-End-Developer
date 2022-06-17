import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Button, Grid, Heading, Image, Stack } from '@chakra-ui/react';
import Card from '../Card';
import { Pagination } from '../Pagination';
export const ProductPrice30000 = () => {
  const [products,setProducts]=useState([])
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData({page});
  }, [page]);
  const fetchData = async ({page}) => {
    {
     
      axios({
        method: "get",
        url: "http://localhost:8081/AllPorducts",
        params: {
          _page: page,
          _limit: 6,
          price_gte:20000,
          price_lte:30000
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
UNDER RS. 20,000
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
          <Box>
              <Box display={"flex"} m={"auto"} justifyContent="center">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  prev
                </Button>
                <Pagination
                  border={"solid"}
                  currentPage={page}
                  lastPage={Math.floor(12 / 6)}
                  onPageChange={setPage}
                />
                <Button onClick={() => setPage(page + 1)}>next</Button>
              </Box>
            </Box>
        </Box>
      </Stack>
    </Box>
  </Box>
  )
}
