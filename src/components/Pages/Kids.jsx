import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Grid, Box, Image, Text, Flex, Icon } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa6";

const Women = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(json => setJewelery(json))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <Box padding="2rem" bg="white" color="black">
        {/* Grid Layout for Uniform Item Display */}
        <Grid 
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} 
          gap="1rem"
        >
          {jewelery.map((item) => (
            <Box key={item.id} border="1px solid #ddd" borderRadius="8px" padding="1rem">
              <Image src={item.image} alt={item.title} height="10rem" width="100%" objectFit="cover" />
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
      </Box>
      <Footer />
    </div>
  );
};

export default Women;
