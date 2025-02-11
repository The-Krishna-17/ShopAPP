import React from 'react'
import { Flex, Text, Icon, HStack, Heading, Image, Stack, Button, SimpleGrid } from '@chakra-ui/react'
import PopularProductData from './PopularProductData'

// importing icon 
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsBasket2Fill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {

    const navigate = useNavigate();

  return (
    <>
        <Flex bgColor="white" color="black" px={{base:'4rem', md:'8rem'}}py="3rem" flexDirection="column">
            <Flex justifyContent="space-between" gap='1.5rem'>
                <Flex alignItems='center' gap='4px'>
                    <Heading textStyle={{base:'md', sm:'lg', md:'3xl', lg:'3xl'}} fontWeight="bold">Popular Products</Heading>
                    <Icon as={MdOutlineArrowOutward} mt="10px"/>
                </Flex>
                <Flex gap={{base:'1rem', md:'2rem'}} alignItems="center" textStyle={{base:'xs', md:'sm'}}>
                    <Text bgColor={{md:'black'}} color={{md:'white'}}  py="5px" px="10px" rounded="lg" onClick={()=>navigate('/men')} cursor='pointer'>Men</Text>
                    <Text onClick={()=>navigate('/women')} cursor='pointer'>Women</Text>
                    <Text onClick={()=>navigate('/jewelery')} cursor='pointer'>Kids</Text>
                </Flex>
            </Flex>
            <SimpleGrid gap="1rem" mt="2rem"  columns={{ base: 1, sm: 2, md: 3 }}>
                {
                    PopularProductData.map((item, index)=>(
                        <Stack key={item.id}>
                            <Image src={item.img}/>
                            <Stack>
                                <Text textStyle="xs" fontWeight="semibold">{item.productName}</Text>
                                <Flex gap="1rem" alignItems="center">
                                    <Text textStyle="xs" fontWeight="bold">{item.price}</Text>
                                    <Text color={(item.available == 'Out of Stock' ? 'red': 'green.500')} textDecoration={(item.available == 'Out of Stock' ? 'line-through': '')} textStyle="xs" fontWeight="semibold">{item.available}</Text>
                                </Flex>
                            </Stack>
                        </Stack>
                    ))
                }
            </SimpleGrid>
            
            <Flex mt="2rem" flexDirection="column" gap="0.5rem" alignItems="center">
                <Text textStyle="xs">We offer a wide range of high-quality apparel to suit every style and occasion.</Text>
                <Button bgColor="black" color="white" rounded="lg" textStyle="xs">
                    <Text >Browse All Collections</Text> 
                    <Icon as={BsBasket2Fill}/>
                </Button>
            </Flex>
        </Flex>

    </>
  )
}

export default PopularProducts