import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import Footer from '../Footer/Footer'
import { EarPhonePage } from '../pages/ProductsPages/EarPhones/EarPhonePage'
import { HeadPhonePage } from '../pages/ProductsPages/Hradphone/Headphone'
import { SinglePageView } from '../pages/SinglePageView'

export const Allrouters = () => {
  return (
    <div>
        <Navbar />
        {/* <SinglePageView /> */}
        <Routes>
          
  <Route path="/" element={<Home />} />
  <Route path="/Earphones" element={<EarPhonePage />} />
  <Route path="/Headphones" element={<HeadPhonePage />} />
  <Route path="/earphones/:id" element={<SinglePageView />} />
  <Route path="/headphone/:id" element={<SinglePageView />} />
  <Route path="/earphones/:id" element={<SinglePageView />} />
  <Route path="/earphones/:id" element={<SinglePageView />} />
  </Routes>
  <Footer />
    </div>
  )
}
