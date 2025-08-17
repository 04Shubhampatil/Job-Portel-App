import React, { useEffect } from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './Herosection.jsx'
import CategouryCarousel from './CategouryCarousel.jsx'
import LatestJobs from './LatestJobs.jsx'
import Footer from './Footer.jsx'
import useGetAllJobs from '../hooks/useGetAllJobs.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
  useGetAllJobs()
  const {user} = useSelector((store) => store.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if(!user){
      navigate('/admin/companies')
    }
  
  },[])
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