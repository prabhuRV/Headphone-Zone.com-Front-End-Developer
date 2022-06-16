import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
  Image,
} from '@chakra-ui/react';
import { footerItems_Community, footerItems_Let_Us_Help, footerItems_OUR_POLICIES, weAccpet } from '../pages/Home/SliderData';




export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#e6e6e6', '#e6e6e6')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'5xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={3}>
          <Stack align={'flex-start'}>
            <Heading size={"xs"}>Let_Us_Help</Heading>
            {
              footerItems_Let_Us_Help.map((item)=>
              {
                return <Link href={'#'}>{item.lablename}</Link>
              })
            }
          </Stack>

          <Stack align={'flex-start'}>
            <Heading size={"xs"}>OUR POLICIES</Heading>
           {
            footerItems_OUR_POLICIES.map((item)=>
            {
              return <Link href={'#'}>{item.lablename}</Link>
            })
           }
          </Stack>

          <Stack align={'flex-start'}>
            <Heading size={"xs"}>Community</Heading>
            {
            footerItems_Community.map((item)=>
            {
              return <Link href={'#'}>{item.lablename}</Link>
            })
           }
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size={"xs"}>BEWARE OF FAKES</Heading>
           
           <Text>Don't get fooled. Look out for smuggled & refurbished headphones while shopping online. Headphone Zone is a professionally run business & deals only in 100% genuine headphones.
Learn more</Text>
          </Stack>

          
        </SimpleGrid>
        <Box>
  <Box display={"flex"}  width={150}>
    <Text width={"300px"} border="solid">We accept</Text>
    <Box  display={"flex"} spacing="4">

    {
      weAccpet.map((item)=>
      {
        return <Image src={item.image} />
      })
    }
    </Box>
  </Box>
</Box>
      </Container>

     
    </Box>
  );
}