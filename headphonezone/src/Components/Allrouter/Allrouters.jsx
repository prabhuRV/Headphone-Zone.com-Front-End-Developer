import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import Footer from '../Footer/Footer'
import { EarPhonePage } from '../pages/ProductsPages/EarPhones/EarPhonePage'
import { HeadPhonePage } from '../pages/ProductsPages/Hradphone/Headphone'
import { SinglePageView } from '../pages/SinglePageView'
import { CheckOutPage } from '../pages/CheckOutPage'
import Payment from '../pages/Payment'
import { Login } from '../pages/Login'
import SignUp from '../pages/SingnUp'
import { RequiredAuth } from '../pages/RequiredAuth'
import { PortableAmp } from '../pages/ProductsPages/PortableAmp/PortableAmp'
import { HiReplayer } from '../pages/ProductsPages/HiReplayer/HiReplayer'
import { ProductPrice1000 } from '../pages/ProductsPages/Price/ProductPrice1000'
import { ProductPrice2000 } from '../pages/ProductsPages/Price/ProductPrice2000'
import { ProductPrice3000 } from '../pages/ProductsPages/Price/ProductPrice3000'
import { ProductPrice5000 } from '../pages/ProductsPages/Price/ProductPrice5000'
import { ProductPrice10000 } from '../pages/ProductsPages/Price/ProductPrice10000'
import { ProductPrice20000 } from '../pages/ProductsPages/Price/ProductPrice20000'
import { ProductPrice30000 } from '../pages/ProductsPages/Price/ProductPrice30000'


export const Allrouters = () => {
  return (
    <div>
        <Navbar />
     
        <Routes>
          
  <Route path="/" element={<Home />} />
  <Route path="/Earphones" element={<EarPhonePage />} />
  <Route path="/Headphones" element={<HeadPhonePage />} />
  <Route path="/HiRelPlayer" element={<HiReplayer />} />
  <Route path='/poratbleAmp' element={<PortableAmp />} />
  <Route path="/earphones/:id" element={<SinglePageView />} />
  <Route path="/headphone/:id" element={<SinglePageView />} />
  <Route path="/earphones/:id" element={<SinglePageView />} />
  <Route path="/poratbleAmp/:id" element={<SinglePageView />} />
  <Route path="/HiRelPlayer/:id" element={<SinglePageView />} />
  <Route path='/ChkeckOut' element={
  <RequiredAuth>

    <CheckOutPage />
    </RequiredAuth>
  } />
 
  <Route path='/paymentMethod' element={<Payment />} />
  <Route path='/login' element={<Login />} />
  <Route path='/SignUp' element={<SignUp />} />
  <Route path='/Under1000' element={<ProductPrice1000 />} />
  <Route path='/Under2000' element={<ProductPrice2000 />} />
  <Route path='/Under3000' element={<ProductPrice3000 />} />
  <Route path='/Under5000' element={<ProductPrice5000 />} />
  <Route path='/Under10000' element={<ProductPrice10000 />} />
  <Route path='/Under20000' element={<ProductPrice20000 />} />
  <Route path='/Under30000' element={<ProductPrice30000 />} />
  </Routes>
  <Footer />
    </div>
  )
}
