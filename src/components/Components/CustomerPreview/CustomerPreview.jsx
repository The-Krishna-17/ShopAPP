import React, { useState, useEffect } from 'react';
import { Flex, Heading, Text, Box, Icon, Image, Stack, HStack } from '@chakra-ui/react';
import image from '../../../assets/PreivewImg.png';
import image1 from '../../../assets/person1.avif'
import image2 from '../../../assets/person3.jpg'
import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const reviews = [
  {
    name: "Manika Gurung",
    position: "Position, Company name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: image
  },
  {
    name: "John Doe",
    position: "Position, Company name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: image1
  },
  {
    name: "Jane Smith",
    position: "Position, Company name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: image2
  }
];

const CustomerPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextReview();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Flex justifyContent="center" bgColor="white" color="black" position="relative">
      <Flex flexDirection="column" alignItems="center" py="2rem" gap="1rem" width="50%">
        <Flex justifyContent='center' alignItems='center'>
          <Heading textStyle={{base:'xl',md:'3xl'}} fontWeight="bold">
            Customer Preview
          </Heading>
          <Icon as={MdOutlineArrowOutward} boxSize={{base:'0.8rem',md:'1rem'}} ml="0.2rem" />
        </Flex>
        <Box spaceX="0.2rem">
          {[...Array(5)].map((_, index) => (
            <Icon key={index} as={FaStar} />
          ))}
        </Box>
        <Text textAlign="center" fontWeight="light" textStyle={{base:'xs', md:'none'}}>
          "{reviews[currentIndex].text}"
        </Text>
        <Flex alignItems="center" gap="1rem">
          <Image src={reviews[currentIndex].image} bgColor="#017089" rounded="full" height={{base:'4rem',md:'6rem'}} width={{base:'4rem',md:'6rem'}} />
          <Stack>
            <Text fontWeight="bold" textStyle="xs">{reviews[currentIndex].name}</Text>
            <Text textStyle="xs">{reviews[currentIndex].position}</Text>
          </Stack>
        </Flex>
        <HStack mt="2rem">
          {reviews.map((_, index) => (
            <Box
              key={index}
              height="8px"
              width="8px"
              rounded="full"
              bgColor={index === currentIndex ? "black" : "transparent"}
              border="1px solid black"
              onClick={() => setCurrentIndex(index)}
              cursor="pointer"
            ></Box>
          ))}
        </HStack>
      </Flex>
      <Icon as={IoIosArrowRoundBack} position="absolute" left="10%" top="50%" transform="translate(-50%, -50%)" border="1px solid black" rounded="full" cursor="pointer" onClick={prevReview} boxSize={{base:'15px', md:'2rem'}}/>
      <Icon as={IoIosArrowRoundForward} position="absolute" right="10%" top="50%" transform="translate(-50%, -50%)" border="1px solid black" rounded="full" cursor="pointer" onClick={nextReview} boxSize={{base:'15px', md:'2rem'}}/>
    </Flex>
  );
};

export default CustomerPreview;
