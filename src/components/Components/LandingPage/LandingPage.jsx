import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection.jsx/HeroSection'
import AboutKwaan from '../AboutKwaan/AboutKwaan'
import CustomerPreview from '../CustomerPreview/CustomerPreview'
import Discover from '../Discover/Discover'
import NewArrival from '../NewArrival/NewArrival'
import PopularProducts from '../PopularProducts/PopularProducts'
import { Flex } from '@chakra-ui/react'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutKwaan />
      <NewArrival />
      <PopularProducts />
      <Discover /> 
      <CustomerPreview /> 
      <Footer />
    </>
  )
}

export default LandingPage