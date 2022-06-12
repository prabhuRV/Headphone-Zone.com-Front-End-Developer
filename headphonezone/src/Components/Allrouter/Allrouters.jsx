import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import Footer from '../Footer/Footer'
import { EarPhonePage } from '../pages/ProductsPages/EarPhonePage'
export const Allrouters = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          
  <Route path="/" element={<Home />} />
  <Route path="/Earphones" element={<EarPhonePage />} />
  </Routes>
  <Footer />
    </div>
  )
}
