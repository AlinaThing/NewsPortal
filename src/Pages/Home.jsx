import React from 'react'

import FetchData from '../Components/FetchData'
// import Hero from '../Components/Layout/Hero'
import Time from '../Components/Layout/Time'
import Navbar from '../Components/Layout/Navbar'

const Home = () => {
  return (
    <>
    <Time/>
    <Navbar/>   
    {/* <Hero/> */}
    <FetchData/>

    </>
  )
}

export default Home