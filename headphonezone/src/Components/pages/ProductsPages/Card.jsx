import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
 
  
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Flex>
      <Box  alignItems="center" display={"flex"}>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
      </Flex>
    );
  }
  
  function  Card(props) {
      const {product_title,final_price,image,}=props
      
    return (
      <Flex p={3} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          width="80"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
       
  
          <Image
           boxSize='350px'
            src={image}
            alt={`Picture of ${product_title}`}
            roundedTop="xs"
          />
  
          <Box p="2">
            <Box d="flex" alignItems="baseline">
          
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {product_title}
              </Box>
            
            </Flex>
  
            <Flex  justifyContent="space-between" alignContent="center">
              <Rating rating={2000} numReviews={1000} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹.
                </Box>
                {final_price/100}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Card;