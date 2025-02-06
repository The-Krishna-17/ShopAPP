import React from "react";
import { Flex, Box, Image, Stack, Heading, Text, Icon } from "@chakra-ui/react";
import image from "../../../assets/LoginImg.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";

// importing react icon
import { MdOutlineArrowOutward } from "react-icons/md";

const Discover = () => {
  return (
    <>
      <Flex bgColor="#F5F5F5" color="black" width="100%" pb='1rem'>
        <Box width="50%" pl="10rem" pt="5rem" display={{base:'none', md:'flex'}}>
          <Image src={image} width="80%"/>
        </Box>
        <Stack width={{base:'100%', md:'50%'}} pr={{md:'10rem'}} px={{base:'1rem', md:'none'}} pt="3rem">
          <Heading textStyle={{base:'2xl', md:'3xl'}} fontWeight="bold">
            Discover the Difference
            <Icon as={MdOutlineArrowOutward} boxSize="1rem" ml="3px"/>
          </Heading>
          <Text textStyle="xs" >
            At Kwaan, we believe that fashion is more than just clothing; it’s a
            statement, a lifestyle, and an expression of individuality. Our
            commitment to quality, style, and sustainability sets us apart,
            making every piece you purchase a unique addition to your wardrobe.
          </Text>
          <Flex gap="1rem" mt="2rem">
            <Image src={icon1} height={{base:'2rem',md:'2.5rem'}}/>
            <Stack>
                <Text fontWeight="semibold" textStyle="sm">Unmatched Quality</Text>
                <Text textStyle="xs">We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable.</Text>
            </Stack>
          </Flex>
          <Flex gap="1rem" mt="0.7rem">
            <Image src={icon2} height={{base:'2rem',md:'2.5rem'}}/>
            <Stack>
                <Text fontWeight="semibold" textStyle="sm">Exclusive Designs</Text>
                <Text textStyle="xs">We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable.</Text>
            </Stack>
          </Flex>
          <Flex gap="1rem" mt="0.7rem">
            <Image src={icon3} height={{base:'2rem',md:'2.5rem'}}/>
            <Stack>
                <Text fontWeight="semibold" textStyle="sm">Sustainable Fashion</Text>
                <Text textStyle="xs">We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable.</Text>
            </Stack>
          </Flex>
          <Flex gap="1rem" mt="0.7rem">
            <Image src={icon4} height={{base:'2rem',md:'2.5rem'}}/>
            <Stack>
                <Text fontWeight="semibold" textStyle="sm">Affordability Without Compromise</Text>
                <Text textStyle="xs">We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and feels comfortable.</Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Discover;
