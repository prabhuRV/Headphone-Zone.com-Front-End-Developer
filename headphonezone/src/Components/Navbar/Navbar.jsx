import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { NAV_ITEMS } from "./NavItems";
import { CartLength } from "./CartLength";
export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#f9f9f9", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href="#" >
            <Image
              h="60px"
              
              ml="-0.5"
              src="https://assets.rha-audio.com/nzssx/c/Headphone_zone_logo_3-small.png"
            />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} m="auto" mt="20px"      fontWeight={500}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={1}
        >
          <Button
           
            fontSize={"sm"}
            fontWeight={500}
           
            color={"black"}
            bg={"#f9f9f9"}
            href={"#"}
          >
           Search
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"black"}
            bg={"#f9f9f9"}
            href={"#"}
          
          >
          Log In
          </Button>
         
          
          
        </Stack>
        <Stack flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          >
        <Text
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"black"}
            bg={"#f9f9f9"}
            href={"#"}
          ml="1" mt="0.5"
          >
          Cart
          </Text>
          <CartLength />
          </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.lebel} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={ onToggle}>
      <Flex
        py={2}
        as={Link}
        href={"#" ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
      
      </Collapse>
    </Stack>
  );
};


console.log(NAV_ITEMS);
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={3}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={1}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack >
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.lebel} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ lebel }) => {
  //   const { lebel } = props;
  return (
    <Link
      href={""}
      role={"group"}
      display={"block"}
      p={1}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("white.500", "gray.900") }}
      fontWeight={400}
    >
      <Stack direction={"row"} align={"center"} >
     
          <Text 

            transition={"all .3s ease"}
            _groupHover={{ color: "gray.400" }}
          mb="-2" ml="3"
          >
            {lebel}
          </Text>
       
      </Stack>
    </Link>
  );
};
