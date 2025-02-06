import React from 'react'
import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

// importing the icon 
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <Flex w="100%" flexDirection="column" py="80px" px={{lg:'200px'}} alignItems='center' justifyContent='center'>
            <Flex w="100%" alignItems="center" justifyContent={{base:'space-evenly', lg:'space-between'}} mb="50px">
                <Heading size="2xl" fontWeight="bold">
                    <Link to="/">KWAAN.</Link>
                </Heading>
                <Flex listStyle="none" gap="2rem" textStyle="xs" display={{lg:'flex'}}>
                    <li cursor="pointer">Link One</li>
                    <li cursor="pointer">Link Two</li>
                    <li cursor="pointer">Link Three</li>
                    <li cursor="pointer">Link Four</li>
                    <li cursor="pointer">Link Five</li>
                </Flex>
                <Flex gap="0.8rem" direction={{base:'column', md:'row'}} >   
                    <Icon as={CiFacebook} boxSize="20px" bgColor="white" color="black" rounded="full" padding="2px"/>
                    <Icon as={CiLinkedin} boxSize="20px" bgColor="white" color="black" rounded="full" padding="2px"/>
                    <Icon as={FaXTwitter} boxSize="20px" bgColor="white" color="black" rounded="full" padding="2px"/>
                    <Icon as={FaInstagram} boxSize="20px" bgColor="white" color="black" rounded="full" padding="2px"/>
                    <Icon as={AiOutlineYoutube} boxSize="20px" bgColor="white" color="black" rounded="full" padding="2px"/>
                </Flex>
            </Flex>
            <hr style={{border:"1px solid white "}}/>
            <Flex  w="100%" justifyContent="center" textStyle="xs" gap="1.5rem" opacity="0.8" mt="30px" fontWeight="thin">
                <Text>
                    2024 Kwaan. All right reserverd.
                </Text>
                <Text textDecoration="underline" cursor="pointer">
                    Privacy Policy
                </Text>
                <Text textDecoration="underline" cursor="pointer">
                    Terms of Service
                </Text>
                <Text textDecoration="underline" cursor="pointer">
                    Cookies Settings
                </Text>
            </Flex>
        </Flex>
    </>
  )
}

export default Footer