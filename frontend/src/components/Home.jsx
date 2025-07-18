import React from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './Herosection.jsx'
import CategouryCarousel from './CategouryCarousel.jsx'
import LatestJobs from './LatestJobs.jsx'
import Footer from './Footer.jsx'
import useGetAllJobs from '../hooks/useGetAllJobs.js'

function Home() {
  useGetAllJobs()
  return (
    <div>
        <Navbar/>
       <HeroSection/>
     <CategouryCarousel/>
     

      <LatestJobs/>
      <Footer/> 
    </div>
  )
}

export default Home