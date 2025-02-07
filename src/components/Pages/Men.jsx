import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {
  Grid,
  Box,
  Image,
  Text,
  Flex,
  Icon,
  Button,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const [MensItem, setMensItem] = useState([]);
  const [category, setCategory] = useState(true);

  const navigate = useNavigate();

  function handleAllBtn(){
    setCategory(!category)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      // .then((json) => console.log(json[0].id))
      .then((json) => setMensItem(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Flex w="100%" gap="1rem" bg="white" px="3rem" flexDirection={{base:'column', md:'row'}}>
        <Flex flexDirection="column" flex="1" p="1rem" color="black">
          <Flex alignItems="center" gap="6px" justifyContent="center">
            <Heading textStyle="2xl" fontWeight="bold" my="1.2rem">
              Men's Clothing
            </Heading>
            <Icon as={MdOutlineArrowOutward} />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            bg="black"
            color="white"
            py="4px"
            px="8px"
            rounded="full"
            mb="1.2rem"
            cursor='pointer'
            onClick={handleAllBtn}
          >
            <Text>All</Text>
            <Icon as={MdOutlineArrowDropUp} display={category ? '' : 'none'}/>
            <Icon as={MdOutlineArrowDropDown} display={category ? 'none' : ''}/>
          </Flex>
          <Box textStyle="sm" color="gray.500" spaceY="0.5rem" display={category ? 'row' : 'none'}>
            <Text fontWeight="semibold" color="black">
              Tops & T-shirts
            </Text>
            <Text>Shorts</Text>
            <Text>Hoodies & Pullovers</Text>
            <Text>Jackets & Vests</Text>
            <Text>Accessories & Equipment</Text>
            <Text>Shocks</Text>
          </Box>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            fontWeight="semibold"
            textStyle="sm"
            my="1rem"
            onClick={() => navigate("/women")}
            cursor="pointer"
          >
            <Text>Women</Text>
            <Icon as={MdOutlineArrowOutward} />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            fontWeight="semibold"
            textStyle="sm"
            onClick={() => navigate("/jewelery")}
            cursor="pointer"
          >
            <Text>Jewelery</Text>
            <Icon as={MdOutlineArrowOutward} />
          </Flex>
        </Flex>
        <Flex padding={{base:'none', md:'2rem'}} bg="white" color="black" flex="3">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap='1rem' cursor='pointer' py='2rem'>
            {MensItem.map((item) => (
              <Box
                key={item.id}
                border="1px solid #ddd"
                borderRadius="8px"
                padding="1rem"
                _hover={{
                  transform: "scale(1.04)",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
                transition="transform 0.5s, box-shadow 0.3s"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate(`/men/${item.id}`);
                }}    
              >
                <Box>
                  <Icon
                    as={CiHeart}
                    _hover={{
                      transform: "scale(1.5)",
                    }}
                    transition="transform 0.5s"
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    height="12rem"
                    width="100%"
                    objectFit="contain"
                  />
                </Box>
                <Box mt="0.5rem" my="0.4rem">
                  <Text fontSize="sm" fontWeight="semibold">
                    {item.title}
                  </Text>
                  <Flex gap="10px" alignItems="center">
                    <Flex
                      alignItems="center"
                      gap="4px"
                      bg="green.600"
                      px="4px"
                      py="2px"
                      rounded="4px"
                      color="white"
                    >
                      <Text fontSize="sm">{item.rating.rate}</Text>
                      <Icon as={FaStar} />
                    </Flex>
                    <Flex
                      alignItems="center"
                      gap="4px"
                      fontWeight="semibold"
                      color="gray.400"
                      fontSize="xs"
                      my="0.7rem"
                    >
                      <Text>{item.rating.count}</Text>
                      <Text>Ratings</Text>
                    </Flex>
                  </Flex>
                  <Text
                    textStyle="xs"
                    textAlign="left"
                    lineClamp="2"
                    color="gray.800"
                  >
                    {item.description}
                  </Text>
                  <Flex
                    justifyContent="space-between"
                    mt="0.5rem"
                    fontSize="xs"
                    my="0.7rem"
                  >
                    <Text fontWeight="bold">${item.price}</Text>
                    <Text color="green.500" fontWeight="semibold">
                      In Stock
                    </Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Men;
