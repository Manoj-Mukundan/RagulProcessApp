import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Ragul Process 1" subtitle="Since 1999" />
      <Hero title="Ragul Process 2" subtitle="Quality Over Years" />
      <Hero title="Ragul Process 3" subtitle="Tradition Meets Technology" />
      <Clients/>
      <Footer/>
    </>
  );
};

export default Homepage;
