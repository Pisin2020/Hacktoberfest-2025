import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from './Testimonials';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <Features />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Home;