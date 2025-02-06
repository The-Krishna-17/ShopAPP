import React from 'react'
import { Flex, Heading, Text, Button, Box, Icon } from '@chakra-ui/react'
import video from "../../../assets/heroVideo.mp4"

// importing icon 
import { GoArrowDownRight } from "react-icons/go";


const HeroSection = () => {
  return (
    <>
            <Box position="relative" width="100%" height={{base:'50vh',md:'80vh'}} overflow="hidden">
                <video style={{opacity: "0.5"}} loop autoPlay>
                  <source src={video} type="video/mp4" />
                </video>
                <Box width="100%" position="absolute" top={{base:'40%', md:'50%'}} left="50%" transform={{base:'translate(-50%, -100%)', md:'translate(-50%, -50%)'}} textAlign="center" spaceY="20px">
                    <Heading textStyle={{md:'5xl', base:'md'}} fontWeight="bold">
                        BEYOND ORDINARY <span style={{color: "transparent", WebkitTextStroke:"1px white"}}>FASHION</span>.
                    </Heading>
                    <Text display={{base:'none', md:'flex'}} justifyContent='center' textStyle='sm'  fontWeight="thin">
                        Discover extraordinary fashion with unique, trend-defying designs for those who love to stand out.
                    </Text>
                    <Button bgColor="gray" border="1px solid white" rounded="lg">
                      <Text textStyle={{base:'xs', md:'lg'}}>
                        Explore More
                      </Text>
                        <Icon as={GoArrowDownRight} boxSize={{base:'12px', md:'20px'}}/>
                    </Button>
                </Box>
            </Box>
    </>
  )
}

export default HeroSection