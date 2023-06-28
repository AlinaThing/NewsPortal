import React from 'react'
import FetchHealthData from '../Components/FetchHealthData'
import Time from '../Components/Layout/Time'
import Navbar from '../Components/Layout/Navbar'
import { Link } from 'react-router-dom'


const Health = () => {
  return (
    <>
    <Time/>
    <Navbar/>
    <h6 style={{paddingLeft:'150px',paddingTop:'20px'}}>Would you like to calculate your BMI (Body Mass Index)? <Link to="/bmi">Click Here!</Link></h6>
    <FetchHealthData/>
    
    
    </>
  )
}

export default Health