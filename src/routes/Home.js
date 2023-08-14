import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Services />
      <Footer />
    </div>
  )
}

export default Home