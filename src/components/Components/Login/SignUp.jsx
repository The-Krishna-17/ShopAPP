import React, { useState } from 'react'
import { Flex, Box, Image, Heading, Text, Input, Button, Icon, HStack, Stack} from '@chakra-ui/react'
import { InputGroup } from "@/components/ui/input-group"
import { PasswordInput } from '@/components/ui/password-input'
import { Checkbox } from '@/components/ui/checkbox'
import LoginImg from '../../../assets/LoginImg.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// importing react icons 
import { TiShoppingCart } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const SignUp = () => {

    const navigate = useNavigate();

  return (
    // container box
      <Flex bgColor="white" color="black" width="full" height="100vh">

        {/*  image side  */}
        <Flex display={["none", "none", "flex"]} width="50%" height="full" bgColor="#EDF2F4" flexDirection="column" justifyContent="flex-end" alignItems="center" gap="3rem" roundedRight="80px">
            <Box width="60%" textAlign="center" spaceY="2">
                <Heading fontWeight="bold" textStyle="2xl">
                    Wear Your Confidence
                </Heading>
                <Text textStyle="xs" opacity="0.7">
                    Discover outfits that empower you. Our collection is designed to boost your confidence and style, making you feel unstoppable every day.
                </Text>
            </Box>
            <Image src={LoginImg} width="45%" />
        </Flex>

        {/* Sign up side  */}
        <Flex  width={["100%", "100%", "50%"]} alignItems="center" justifyContent="center" py="2rem">
            <Flex flexDirection="column" width={["90%", "75%", "70%"]}>
                <Heading size="2xl" fontWeight="bold">
                    <Link to="/">KWAAN.</Link>
                </Heading>
                <Box borderRadius="20px" boxShadow="0px 0px 16px 0px #00000012" padding="32px" spaceY="20px" mt="18px">
                    {/* content of sign up  */}
                    <Stack  gap="8px" >
                        <HStack>
                            <Heading size="xl" fontWeight="bold">
                                Sign up
                            </Heading>
                        <Icon as={TiShoppingCart} boxSize="26px" />
                        </HStack>
                        <Text textStyle="xs" opacity="0.7">
                            Please fill up the given details
                        </Text>
                    </Stack>
                    {/* sign up cotent  */}
                    <Stack width="100%" >
                        <InputGroup flex="1" startElement={<CiUser />} width="100%" >
                            <Input placeholder="Full Name" bgColor="#F0F4F8" rounded="xl" textStyle="xs"/>
                        </InputGroup>
                        <InputGroup flex="1" startElement={<FiPhone />} width="100%" >
                            <Input placeholder="Phone Number" bgColor="#F0F4F8" rounded="xl" textStyle="xs"/>
                        </InputGroup>
                        <InputGroup flex="1" startElement={<IoKeyOutline />} width="100%" >
                            <PasswordInput placeholder="Password" bgColor="#F0F4F8" rounded="xl" textStyle="xs"/>
                        </InputGroup>
                        <InputGroup flex="1" startElement={<IoKeyOutline />} width="100%" >
                            <PasswordInput placeholder="Re-enter Password" bgColor="#F0F4F8" rounded="xl" textStyle="xs"/>
                        </InputGroup>
                    </Stack>
                    <Flex justify="space-between">
                        <Flex gap="6px" textStyle="sm">
                            <Checkbox size="xs">
                                Remember me
                            </Checkbox>
                        </Flex>
                        <Box>
                            <Text textStyle="xs" color="#07468A">
                                Forgot Password ?
                            </Text>
                        </Box>
                    </Flex>
                    <Button width="full" border="2px solid black" bgColor="black" color="white" rounded="8px">
                        Sign up
                    </Button>
                    <Flex justifyContent="end" alignItems="center" gap="5rem">
                        <Text textStyle="xs">
                            Or Sign Up with 
                        </Text>
                        <Box spaceX="18px">
                            <Icon as={FaFacebookF} bgColor="white" shadow="sm" boxSize="24px" rounded="50%" padding="3px"/>
                            <Icon as={FaGoogle} bgColor="white" shadow="sm" boxSize="24px" rounded="50%" padding="3px"/>
                        </Box>
                    </Flex>
                    <Flex justifyContent="end" gap="6px" textStyle="xs" alignItems="center">
                        <Text>
                            Don't you have an account?
                        </Text>
                        <Button onClick={()=>{navigate("/Login")}}>
                            Sign In
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SignUp