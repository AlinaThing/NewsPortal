import React from 'react'
import FetchSportsData from '../Components/FetchSportsData'
import Time from '../Components/Layout/Time'
import Navbar from '../Components/Layout/Navbar'


const Sports = () => {
  return (
    <>
    <Time/>
    <Navbar/>
        <FetchSportsData/>
    
    
    </>
  )
}

export default Sports