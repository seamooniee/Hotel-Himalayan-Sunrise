import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Restaurant />
      <Footer />
      <BookingModal />
    </div>
  );
};

export default Home;