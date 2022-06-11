import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { NewsOuerLine } from './SliderData'
export const OuerLine = () => {
  return (
    <Box>
       <Flex bg={"#d6cff9"} gap="30px" m={"auto"} >
{
  NewsOuerLine.map((item)=>
  {
    return (
      <Box mt={"70"} h="200px" width={"300px"} textAlign={"center"}>
        <Heading as={"h3"} size="xl">{item.id}</Heading>
        <Text fontSize={"17px"} >{item.Name}</Text>
      </Box>
    )
  })
}
    </Flex>


    <Flex display={"flex"} bg={"#444444"} h="300" color={"white"}>
      <Box ml="50"width={"500px"} bg={"yellow"}>
          <Image src='https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704' />
      </Box>
      <Box>
dgdfhfch
      </Box>
    </Flex>
    </Box>
  )
}
