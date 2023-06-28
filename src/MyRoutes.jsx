import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import General from './Pages/General'
import Business from './Pages/Business'
import Entertainment from './Pages/Entertainment'
import Sports from './Pages/Sports'
import Health from './Pages/Health'
import Science from './Pages/Science'
import Technology from './Pages/Technology'
import Footer from './Components/Layout/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserInfo from './Pages/UserInfo'
import Weather from './Pages/Weather'
import BMI from './Pages/BMI'
const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>        
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/general" element={<General />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />}/>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/bmi' element={<BMI/>}/>

          <Route path='/signin' element={<Login />} />
          <Route path='/register' element={<Register/>}/>

          <Route path='/userinfo' element={<UserInfo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}
export default MyRoutes