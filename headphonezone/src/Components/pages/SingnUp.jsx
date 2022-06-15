import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../redux/Rigistration/action";
import { Link as ReachLink, useNavigate } from "react-router-dom"
export default function SignUp() {
  const registration = useSelector((state) => state.registration);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;
    if (value) {
      postRegister({
        value,
        dispatch,
      });
    }
  };
  console.log(registration);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Heading fontSize={"xl"} color="blue" textAlign={"center"}>
            {registration?.massage}
          </Heading>
        </Stack>
        <form onSubmit={haddleSubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            width="500px"
          >
            <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter yours name"
                    name="name"
                    onChange={handleChange}
                    rounded={"50px"}
                   
                  />
                </FormControl>
              </Box>
              <FormControl id="username" isRequired>
                <FormLabel>UserName</FormLabel>
                <Input
                 type="text"
                 placeholder="Enter yours username"
                 name="username"
                 onChange={handleChange}
                  rounded={"50px"}
               
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter yours email"
                  name="email"
                  onChange={handleChange}
                  rounded={"50px"}
               
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    
                    placeholder="Enter yours password"
                    name="password"
                    onChange={handleChange}
                    rounded={"50px"}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Mobile</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter yours mobile"
                  name="mobile"
                  onChange={handleChange}
                  rounded={"50px"}
               
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Description</FormLabel>
                <Input
                     type="text"
                     placeholder="Enter yours description"
                     name="description"
                     onChange={handleChange}
                  rounded={"50px"}
               
                />
              </FormControl>
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
              
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link as={ReachLink} to="/login" color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
