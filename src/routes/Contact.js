import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 title="CONTACT." text="Hey, Let's have a Chat!" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact