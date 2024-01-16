import Shop from "../src/pages/Shop"
import Home from "../src/pages/Home"
import Contacts from "../src/pages/Contacts"
import About from "../src/pages/About"
import Preloader from "./components/Preloader"
import HeroSection from "./components/HeroSection"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BackToTop from "./components/BackToTop"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1500,
        disable: 'mobile',
      }
    );
  })

  return (
    <>
      <HeroSection />
      <Preloader />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
      </Routes>

    </>
  )
}

export default App
