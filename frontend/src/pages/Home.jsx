import React from 'react'
import Achievements from '../components/Achievements';
import UpcomingEvents from '../components/UpcomingEvents';
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer';
import OurStars from '../components/OurStars';
import NavSpace from '../components/NavSpace';

const Home = () => {
  return (
    <div>
      <NavSpace/>
      <Achievements/>
      <OurStars/>
      <UpcomingEvents/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home