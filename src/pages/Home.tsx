import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Attractions from '../components/Attractions';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import BookingBar from '../components/BookingBar';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Attractions />
      <Rooms />
      <Services />
      <Restaurant />
      <Footer />
      <BookingBar />
      <BookingModal />
    </div>
  );
};

export default Home;