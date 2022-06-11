import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Allrouters = () => {
  return (
    <div>
        <Navbar />
        <Routes>
  <Route path="/" element={<Dashboard />} />
  </Routes>
    </div>
  )
}
