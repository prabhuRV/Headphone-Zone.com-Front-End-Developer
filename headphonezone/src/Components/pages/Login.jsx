import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export const Login = () => {
  
  return (<Box>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w="500px" py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'md'}>Please enter your e-mail and password:</Heading>
         
        </Stack>
        <Box
         rounded={"lg"}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" rounded={"50px"} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" rounded={"50px"}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              rounded={"50px"}
                bg={'#3c07ff'}
                color={'white'}
                _hover={{
                  bg: '#3c07ff',
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
        
        </Box>
        <Box textAlign={"center"}>
      <Text fontSize={"14px"} fontFamily={"Roboto, sans-serif"} color="gray" >New customer?Create an account</Text>
    </Box>
      </Stack>
     
    </Flex>
   
    </Box>
  );
};
