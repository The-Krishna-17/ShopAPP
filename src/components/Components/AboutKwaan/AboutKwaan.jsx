import React from "react";
import { Flex, Heading, Icon, Text, Image, Stack, Button } from "@chakra-ui/react";
import image from "../../../assets/LandingPageImg.png"

// importing react icons
import { MdArrowOutward } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { CiShoppingBasket } from "react-icons/ci";

const AboutKwaan = () => {
  return (
    <>
        <Flex width="full" flexDirection="column" alignItems="center" mt={{base:'1rem',md:'1.4rem'}} px={{base:'1rem', md:'none'}}>
            <Heading width={{base:'100%',md:'62%'}}>
                <span style={{fontSize:"1.2rem", fontWeight:"bold", lineHeight:"3.5rem", '@media(min-width: 48em)': { fontSize: "1.8rem" }}}>Casual Wear</span> <Icon as={MdArrowOutward} boxSize="1rem"/>
                <Icon as={GoDash} ml="20px" boxSize="2rem"/> <span style={{fontSize:"1.2rem", fontWeight:"bold", '@media(min-width: 48em)': { fontSize: "1.8rem" }}}>Formal Attire </span><Icon as={MdArrowOutward} boxSize="1rem"/>
                <Icon as={GoDash} ml="20px" boxSize="2rem"/><span style={{fontSize:"1.2rem", fontWeight:"bold", '@media(min-width: 48em)': { fontSize: "1.8rem" }}}>Sportswear</span> <Icon as={MdArrowOutward} boxSize="1rem"/>
                <span style={{fontSize:"1.2rem", fontWeight:"bold"}}>Accessories</span> <Icon as={MdArrowOutward} boxSize="1rem"/>
                <Icon as={GoDash} ml="20px" boxSize="2rem"/> <span style={{fontSize:"1.2rem", fontWeight:"bold", '@media(min-width: 48em)': { fontSize: "1.8rem" }}}>Latest Fashion Trends </span><Icon as={MdArrowOutward} boxSize="1rem"/>
            </Heading>
            <Text width={{base:'100%', md:'62%'}} textStyle="xs"  lineHeight="1.2rem" mt="1rem" pr={{md:'14rem'}}>
                  Discover the finest selection of clothing at unbeatable prices. We
                  offer a wide range of high-quality apparel to suit every style and
                  occasion. Experience the perfect blend of affordability and excellence
                  with our premium clothing collection.
            </Text>
        </Flex>
        <Flex justifyContent="center" mt={{base:'5rem',md:'10rem'}} pb={{base:'4.7rem',md:'13.3rem'}}>
            <Flex flexDirection="column" alignItems="center" position="relative">
                <Flex color="gray">
                    <Heading  textStyle={{base:'2xl',md:'7xl'}} letterSpacing={{base: '2rem',md:'5.5rem'}}>KWAAN</Heading>
                </Flex>
                <Flex alignItems="end" position="absolute" top="45%" left="68%" transform="translate(-50%, -50%)" gap="2rem" width="100%">
                    <Image src={image} width="50%"/>
                    <Flex flexDirection="column" pb="2rem">
                        <Text textStyle="xs" display={{base:'none', md:'flex'}}>
                            We offer a wide range of high-quality apparel to suit every style and occasion.
                        </Text>
                        <Button display={{base:'none', md:'flex'}} rounded="lg" width="fit-content" mt="1rem">
                            <Text>
                                Browse Collections
                            </Text>
                            <Icon as={CiShoppingBasket} />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='center' my='0.5rem' display={{base:'flex', md:'none'}}>
            <Button>
                <Text>
                    Browse Collections
                </Text>
                <Icon as={CiShoppingBasket} />
            </Button>
        </Flex>
    </>
  );
};

export default AboutKwaan;
