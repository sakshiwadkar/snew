import React, { useState } from 'react';

import './AboutUs.css';
import Footer from './Footer';
const slides = [
  {
    title: 'Mission',
    content: 'Our mission is to make the most of our human talent and potential; inform, educate.',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZoxezNdeOThI9L2GTyjyRc5e8Y522eVFZCZX6tEtZYH7OModkDMuSCmz5PsENfZ6EAA&usqp=CAU'
  },
  {
    title: 'Vision',
    content: 'Empowering our students to fulfill their academic and professional passions in a University that is diverse.',
    imageSrc: 'https://static.vecteezy.com/system/resources/thumbnails/014/475/656/small_2x/eye-icon-simple-flat-eye-design-vision-care-concept-wear-glasses-for-a-clear-vision-png.png'
  },
  {
    title: 'Our Values',
    content: 'We aim for sustainability in all our efforts.',
    imageSrc: 'https://anjumancollegedwd.edu.in/wp-content/uploads/2021/06/core_values.png'
  },
  {
    title: 'Sustainability',
    content: 'We aim for sustainability in all our efforts.',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPA-n60_AEiW3EERX0FgI7jnPzGl_vXMgvVRb2ChpXagJjbPtClNweDpIh1fsJ62_XlI&usqp=CAU'
  }
];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container">
         <div className="container-fluid">
        <img src="https://www.bkacontent.com/wp-content/uploads/2020/06/Depositphotos_114292702_l-2015.jpg" alt="Logo" />
      </div>
      
      <div className="slider">
        <div className="controls">
          <div className="up" onClick={prevSlide}>
            &uarr;
          </div>
          <div className="down" onClick={nextSlide}>
            &darr;
          </div>
        </div>
        <div className="wrapper">
          <div className="left">
            <div>
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].content}</p>
            </div>
          </div>
          <div className="right">
            <div>
              <img src={slides[currentSlide].imageSrc} alt={slides[currentSlide].title} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;