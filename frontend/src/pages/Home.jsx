import React from 'react'
import Achievements from '../components/Achievements';
import UpcomingEvents from '../components/UpcomingEvents';
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer';
import OurStars from '../components/OurStars';

const Home = () => {
  return (
    <div>
      <Achievements/>
      <OurStars/>
      <UpcomingEvents/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home