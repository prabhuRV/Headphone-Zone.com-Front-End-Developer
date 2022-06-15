import React from 'react'
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
    Stack,
    Input,
  } from '@chakra-ui/react'
  import {Search2Icon } from '@chakra-ui/icons'
export const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (newSize) => {
        
        onOpen()
      }
  return (
    <Box>
        <Button
        bg={"white"}
          onClick={() => handleClick("md")}
          key={"md"}
          m={4}
        >Search</Button>
    <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search</DrawerHeader>
          <DrawerBody>
            <Box display={"flex"}>

          <Input  placeholder='Search here' size='lg' width={"80%"} />
          <Search2Icon m="auto" ml="5px" h="30px" w="30px" />
            </Box>
          
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
  )
}
