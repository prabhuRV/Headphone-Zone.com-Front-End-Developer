import { Box } from '@chakra-ui/react'
import React from 'react'
import { HeadphoneIcons } from './HeadphoneIcons'
import  ProductsSliders  from './ProductsSliders'
import { Sliders } from './Sliders'

export const Home = () => {
  return (
    <div>
        
      
     <Box>
     <Sliders />
     <HeadphoneIcons />
     <ProductsSliders />
     </Box>
  
    </div>
  )
}
