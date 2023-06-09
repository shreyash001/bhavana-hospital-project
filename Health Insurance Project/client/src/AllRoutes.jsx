import React from 'react'
import { Routes, Route } from "react-router-dom";


import Auth from "./Pages/Auth/Auth";
import Home from "./Components/Home/home";
import About from "./Pages/About/about"
import Insurance from './Pages/Insurance/insurance';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/About" element={<About/>} />
        <Route path='/Insurance' element={<Insurance/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
