import { Box } from '@chakra-ui/react'
import React from 'react'
import { HeadfoneFinder } from './HeadfoneFinder'
import { HeadphoneIcons } from './HeadphoneIcons'
import { OuerLine } from './OuerLine'
import  ProductsSliders  from './ProductsSliders'
import { Sliders } from './Sliders'

export const Home = () => {
  return (
    <div>
        
      
     <Box>
     <Sliders />
     <HeadphoneIcons />

     <HeadfoneFinder />
     <OuerLine />
     </Box>
  
    </div>
  )
}
