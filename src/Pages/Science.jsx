import React from 'react'
import FetchScienceData from '../Components/FetchScienceData'
import Time from '../Components/Layout/Time'
import Navbar from '../Components/Layout/Navbar'



const Science = () => {
  return (
    <>
    <Time/>
    <Navbar/>
        <FetchScienceData/>
    
    
    </>
  )
}

export default Science