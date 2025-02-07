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
import { useParams } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

const WomenDetails = () => {
  const [WomensItem, setWomensItem] = useState([]);
  const [otherItem, setotherItem] = useState([]);
  const [category, setCategory] = useState(true);
  const [related, setRelated] = useState([]);
  const { womenId } = useParams();

  const navigate = useNavigate();

  function handleAllBtn() {
    setCategory(!category);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${womenId}`)
      .then((res) => res.json())
      // .then((json) => console.log(json[0].id))
      .then((json) => setWomensItem(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, [womenId]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setotherItem(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women%27s%20clothing?limit=4")
      .then((res) => res.json())
      .then((json) => setRelated(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Flex
        w="100%"
        gap="1rem"
        bg="white"
        px="3rem"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex flexDirection="column" flex="1" p="1rem" color="black">
          <Flex alignItems="center" gap="6px" justifyContent="center">
            <Heading textStyle="2xl" fontWeight="bold" my="1.2rem">
              Women's Clothing
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
            cursor="pointer"
            onClick={handleAllBtn}
          >
            <Text>All</Text>
            <Icon as={MdOutlineArrowDropUp} display={category ? "" : "none"} />
            <Icon
              as={MdOutlineArrowDropDown}
              display={category ? "none" : ""}
            />
          </Flex>
          <Box
            textStyle="sm"
            color="gray.500"
            spaceY="0.5rem"
            display={category ? "row" : "none"}
          >
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
            onClick={() => navigate("/men")}
            cursor="pointer"
          >
            <Text>Men</Text>
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
        <Flex p="1rem" bg="white" color="black" flex="3" width="100%">
          <Flex gap="3rem">
            <Flex
              p="1.5rem"
              width="55%"
              h="fit-content"
              align="center"
              flexDirection="column"
              gap="6"
              borderRadius="12px"
              boxShadow="md"
            >
              <Image
                src={WomensItem.image}
                borderRadius="8px"
                objectFit="cover"
                width="65%"
              />

              <Flex w="100%" justify="center" gap="3" flexWrap="wrap">
                {otherItem.map((item, index) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    borderRadius="6px"
                    objectFit="contain"
                    boxShadow="sm"
                    width="15%"
                    h="4rem"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      navigate(`/women/${item.id}`);
                    }}
                    cursor="pointer"
                  />
                ))}
              </Flex>
            </Flex>
            <Box spaceY="1.2rem" width="45%">
              <Heading>{WomensItem.title}</Heading>
              <Text fontWeight="semibold">${WomensItem.price}</Text>
              <Text textStyle="xs">{WomensItem.description}</Text>
              <Flex justifyContent="center" flexDirection="column" gap="0.5rem">
                <Flex alignItems="center">
                  <Text fontWeight="bold" mr="1rem">
                    Color
                  </Text>
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                  ></Box>
                  <Text textStyle="xs" ml="0.5rem">
                    White
                  </Text>
                </Flex>
                <Flex gap="0.5rem">
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                  ></Box>
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                    bg="#DDCFC0"
                  ></Box>
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                    bg="black"
                  ></Box>
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                    bg="#F1B7DA"
                  ></Box>
                  <Box
                    h="1rem"
                    w="1rem"
                    rounded="full"
                    border="1px solid gray"
                    bg="#565D49"
                  ></Box>
                </Flex>
              </Flex>
              <Text fontWeight="bold">Sizes</Text>
              <Flex alignItems="center" gap="2rem">
                <Text
                  bg="black"
                  color="white"
                  px="1rem"
                  py="0.3rem"
                  textAlign="center"
                  rounded="md"
                >
                  S
                </Text>
                <Text
                  px="1rem"
                  py="0.3rem"
                  border="1px solid gray"
                  rounded="md"
                >
                  M
                </Text>
                <Text
                  px="1rem"
                  py="0.3rem"
                  border="1px solid gray"
                  rounded="md"
                >
                  XL
                </Text>
                <Text
                  px="1rem"
                  py="0.3rem"
                  border="1px solid gray"
                  rounded="md"
                >
                  XXL
                </Text>
                <Text
                  px="1rem"
                  py="0.3rem"
                  border="1px solid gray"
                  rounded="md"
                >
                  XXXL
                </Text>
              </Flex>
              <Flex gap="1rem">
                <Button bg="black" color="white" rounded="md">
                  ADD TO CART
                  <Icon as={CiShoppingBasket} />
                </Button>
                <Button bg="#FFF3F3" rounded="md">
                  ADD TO FAVOURITES
                  <Icon as={IoMdHeartEmpty} />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box bg="white" color="black" p="4rem">
        <Flex mb="2rem">
          <Heading>Other Product You May Also Like </Heading>
          <Icon as={MdOutlineArrowOutward} />
        </Flex>
        <Flex gap="2rem">
          {related.map((item, index) => (
            <Flex
              boxShadow="md"
              flexDirection="column"
              p="2rem"
              flex="1"
              cursor="pointer"
              _hover={{
                transform: "scale(1.04)",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
              transition="transform 0.5s, box-shadow 0.3s"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate(`/women/${item.id}`);
              }}        
            >
              <Image
                src={item.image}
                key={item.id}
                h="10rem"
                w="20rem"
                objectFit="contain"
              />
              <Text textStyle="sm" fontWeight="semibold" mt="1rem" lineClamp={2}>
                {item.title}
              </Text>
              <Text fontWeight="bold">${item.price}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default WomenDetails;
