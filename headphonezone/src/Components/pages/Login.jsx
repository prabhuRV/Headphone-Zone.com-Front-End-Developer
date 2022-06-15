import React, { useContext, useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogin } from "../redux/Login/action";
import { AuthContext } from "../context/AuthContext";
export const Login = () => {
  
  const [formData,setFormData]=useState({

  })
  const dispatch=useDispatch()
  const { tokens } = useContext(AuthContext);
 // console.log(tokens);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/ChkeckOut";
  useEffect(() => {
    if (tokens) {
      navigate(from, { replace: true });
    }
  }, [tokens]);


  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName);
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
 
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;
    console.log(value)
    if (value) {
      postLogin({
        value,
        dispatch
      });
    }
    
  };
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

<form onSubmit={haddleSubmit}>
        <Box
         rounded={"lg"}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel>Email address or UserName</FormLabel>
              <Input  type="text"
          placeholder="Enter yours username"
          name="username"
          onChange={handleChange}  rounded={"50px"} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Password</FormLabel>
              <Input  type="password"
          placeholder="Enter yours password"
          name="password"
          onChange={handleChange}  rounded={"50px"} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Stack spacing={10} pt={2}>
                <Input
                  type={"submit"}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#3c07ff "}
                  color={"white"}
                  _hover={{
                    bg: "#3c07ff ",
                  }}
                  rounded={"50px"}
                />
              </Stack>
            </Stack>
          </Stack>
        
        </Box>
        </form>

        <Box textAlign={"center"}>
      <Text fontSize={"14px"} fontFamily={"Roboto, sans-serif"} color="gray" onClick={()=>navigate("/SignUp")}>New customer?Create an account</Text>
    </Box>
      </Stack>
     
    </Flex>
   
    </Box>
  );
};
