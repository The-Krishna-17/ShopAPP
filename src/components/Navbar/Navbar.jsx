import React from "react";
import { Text, Flex, Box, Icon, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router";
import { useState } from "react";

// importing icons
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <>
      {/* upper nav  */}
      {/* <Flex flexDirection="column"> */}
      <Flex
        textStyle="xs"
        display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
      >
        <Box
          borderRight="1px solid white"
          width="100%"
          textAlign="center"
          py="14px"
        >
          <Text textStyle="xs">GET 20% OFF ON FIRST MEMEBERSHIP</Text>
        </Box>
        <Box
          borderRight="1px solid white"
          width="100%"
          textAlign="center"
          py="14px"
        >
          <Text>BOTH COD & ONLINE PAYMENT</Text>
        </Box>
        <Box width="100%" textAlign="center" py="14px">
          <Text>ENJOY FREE SHIPPING OVER RS.5000</Text>
        </Box>
      </Flex>
      {/* lower nav  */}
      <Flex
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "space-evenly",
          lg: "space-evenly",
        }}
        alignItems="center"
        textStyle="xs"
        bgColor="white"
        color="black"
        padding="9px"
        position="sticky"
        top="0"
        zIndex="1"
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.2);"
      >
        <Text
          textStyle={{ base: "sm", sm: "sm", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          px={{ base: "4px" }}
        >
          <Link to="/">KWAAN.</Link>
        </Text>
        <Flex
          listStyle="none"
          alignItems="center"
          gap="62px"
          display={
            search
              ? "none"
              : { base: "none", sm: "none", md: "flex", lg: "flex" }
          }
        >
          <NavLink
            cursor="pointer"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "blue.600" : "gray.600",
              fontWeight: isActive ? "bold" : "normal",
              transition: "color 0.3s ease, text-decoration 0.3s ease",
            })}
          >
            HOME
          </NavLink>
          <NavLink
            cursor="pointer"
            to="/men"
            style={({ isActive }) => ({
              color: isActive ? "blue.600" : "gray.600",
              fontWeight: isActive ? "bold" : "normal",
              transition: "color 0.3s ease, text-decoration 0.3s ease",
            })}
          >
            MEN
          </NavLink>
          <NavLink
            cursor="pointer"
            to="/women"
            style={({ isActive }) => ({
              color: isActive ? "blue.600" : "gray.600",
              fontWeight: isActive ? "bold" : "normal",
              transition: "color 0.3s ease, text-decoration 0.3s ease",
            })}
          >
            WOMEN
          </NavLink>
          <NavLink
            cursor="pointer"
            to="/jewelery"
            style={({ isActive }) => ({
              color: isActive ? "blue.600" : "gray.600",
              fontWeight: isActive ? "bold" : "normal",
              transition: "color 0.3s ease, text-decoration 0.3s ease",
            })}
          >
            JEWELERY
          </NavLink>
        </Flex>
        <Flex alignItems="center" gap="1rem" px={{ base: "4px" }} position='relative'>
          <Input placeholder="Search here..." display={search ? "flex" : "none"} height='2rem' width='20rem'/>
          <Icon as={CiSearch} boxSize="20px" onClick={handleSearch} position={search ? 'absolute': 'none'} left='70%' transform='translate(-10%, 0%)' cursor='pointer'/>
          <Icon as={CiHeart} boxSize="20px" />
          <Icon as={HiOutlineShoppingBag} boxSize="20px" />
          <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}>
            <Icon as={FaBars} boxSize="20px" />
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          border="1px solid black"
          padding="3px"
          rounded="sm"
          px="4px"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        >
          <Button
            textStyle="xs"
            height="1.5rem"
            bgColor="black"
            color="white"
            fontWeight="thin"
            width="3.3rem"
            onClick={() => {
              navigate("/Login");
            }}
          >
            LOG IN
          </Button>
          <Button
            textStyle="xs"
            height="1.5rem"
            fontWeight="thin"
            width="3.3rem"
            onClick={() => {
              navigate("/Signup");
            }}
          >
            SIGN UP
          </Button>
        </Flex>
      </Flex>
      {/* </Flex> */}
    </>
  );
};

export default Navbar;
