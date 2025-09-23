import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './Pages/ContactUS'
import Gallery from './Pages/Gallery'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='gallery' element={<Gallery/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App