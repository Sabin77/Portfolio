import { useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Header from './Components/Header';



function App() {
  
  return (
    <>
    <div className='min-h-screen bg-gradient-to-tr from-[#60072C]
    via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36 pb-20 pt-7'>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Services/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </div>
    </>
    
  )
}

export default App
