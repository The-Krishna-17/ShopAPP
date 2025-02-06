import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Grid, Box, Image, Text, Flex, Icon, Button, Heading } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";



const Women = () => {
  const [MensItem, setMensItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then(res => res.json())
      .then(json => setMensItem(json))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Navbar />
      <Flex w='100%' gap='1rem' bg='white'  >
        <Flex flexDirection='column' flex='1' p='1rem' color='black'>
          <Flex alignItems='center' gap='6px' justifyContent='center' >
            <Heading textStyle='2xl' fontWeight='bold'>Men's Clothing </Heading>
            <Icon as={MdOutlineArrowOutward} />
          </Flex>
          <Flex alignItems='center' justifyContent='space-between' bg='black' color='white' py='4px' px='8px' rounded='full'>
            <Text>All</Text>
            <Icon as={MdOutlineArrowDropUp} />
          </Flex>
          <Box textStyle='sm' color='gray.500'>
            <Text>Tops & T-shirts</Text>
            <Text>Shorts</Text>
            <Text>Hoodies & Pullovers</Text>
            <Text>Jackets & Vests</Text>
            <Text>Accessories & Equipment</Text>
            <Text>Shocks</Text>
          </Box>
          <Flex alignItems='center' justifyContent='space-between' fontWeight='semibold' textStyle='sm'>
            <Text>Women</Text>
            <Icon as={MdOutlineArrowDropDown} />
          </Flex>
          <Flex alignItems='center' justifyContent='space-between' fontWeight='semibold' textStyle='sm'>
            <Text>Jewelery</Text>
            <Icon as={MdOutlineArrowDropDown} />
          </Flex>
        </Flex>
        <Flex padding="2rem" bg="white" color="black" flex='3'>
          {/* Grid Layout for Uniform Item Display */}
          <Grid 
            templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} 
            gap="1rem"
          >
            {MensItem.map((item) => (
              <Box key={item.id} border="1px solid #ddd" borderRadius="8px" padding="1rem">
                <Image src={item.image} alt={item.title} height="20rem" width="100%" objectFit="cover" />
                <Box mt="0.5rem" my='0.4rem' >
                  <Text fontSize="sm" fontWeight="semibold">{item.title}</Text>
                  <Flex gap="10px" alignItems="center">
                    <Flex alignItems="center" gap="4px" bg="green.600" px="4px" py="2px" rounded="4px" color="white">
                      <Text fontSize="sm">{item.rating.rate}</Text>
                      <Icon as={FaStar} />
                    </Flex>
                    <Flex alignItems="center" gap="4px" fontWeight="semibold" color="gray.400" fontSize="xs" my='0.7rem'>
                      <Text>{item.rating.count}</Text>
                      <Text>Ratings</Text>
                    </Flex>
                  </Flex>
                  <Text textStyle='xs' textAlign='left' height='2rem' overflow='auto' color='gray.800'>
                    {item.description}
                  </Text>
                  <Flex justifyContent="space-between" mt="0.5rem" fontSize="xs" my='0.7rem'>
                    <Text fontWeight="bold">${item.price}</Text>
                    <Text color="green.500" fontWeight="semibold">In Stock</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Women;
