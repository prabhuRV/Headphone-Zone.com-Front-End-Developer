import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
export const Allrouters = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          
  <Route path="/" element={<Home />} />
  </Routes>
    </div>
  )
}
