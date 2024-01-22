import React, { useState, useEffect } from 'react';
import './HomePage.css';

import image1 from '../Images/C2.jpg'
import image2 from '../Images/C4.jpg'
import image3 from '../Images/launch.jpg';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    image3,
    image1,
    image2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-page">

      {/* Slideshow Section */}
      <section className="slideshow">
        <button className="arrow" onClick={goToPrevSlide}>&lt;</button>
        {/* Use the imported images for the src attribute */}
        <img className="slide" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="arrow" onClick={goToNextSlide}>&gt;</button>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
      
      </section>

      
    </div>
  );
};

export default HomePage;