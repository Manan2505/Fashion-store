import React, { useState , useEffect } from 'react';
import backgroundImage from '../assets/MainBanner.png';
import backgroundImage1 from '../assets/background.jpg';
import menbg from '../assets/menBackground.jpg';
import menbg2 from '../assets/menback2.jpg';
import backgroundImage2 from '../assets/background2.jpg';
import backgroundImage3 from '../assets/background3.jpg';


export default function Header(){
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text1: 'new!',
      text2: 'Collection 2023',
      category: 'for',
      text3: 'men & women',
      backgroundImage: `url(${backgroundImage})`
    },
    {
      text1: 'Latest',
      text2: 'Collection',
      category: 'for',
      text3: 'Men',
      backgroundImage: `url(${menbg})`
    },
    {
      text1: 'Latest',
      text2: 'Collection',
      category: 'for',
      text3: 'women',
      backgroundImage: `url(${backgroundImage2})`
    },
    {
      text1: 'Another',
      text2: 'Collection',
      category: 'for',
      text3: 'men',
      backgroundImage: `url(${menbg2})`
    },
    {
      text1: 'Another',
      text2: 'Collection',
      category: 'for',
      text3: 'women',
      backgroundImage: `url(${backgroundImage3})`
    },
    {
      text1: 'Welcome to ~',
      text2: 'The Fashion Store',
      category: 'Owner',
      text3: 'Manan Arora',
      backgroundImage: `url(${backgroundImage1})`
    },
    // Add more slide objects as needed
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 10 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentSlide]);


  const currentSlideStyle = {
    backgroundImage: slides[currentSlide].backgroundImage,
  };


    return (
        <div className="hero" style={currentSlideStyle}>
        <div className="left" onClick={prevSlide}>
          <i className="fi fi-br-angle-left arrow" />
        </div>
        <h3 className="t1">{slides[currentSlide].text1}</h3>
        <h2 className="t2">{slides[currentSlide].text2}</h2>
        <div className="line">
          <div className="line1" />
          <div className="t3">{slides[currentSlide].category}</div>
          <div className="line2" />
        </div>
        <h3 className="t4">{slides[currentSlide].text3}</h3>
        <div className="right" onClick={nextSlide}>
          <i className="fi fi-bs-angle-right arrow" />
        </div>
      </div>
    );
}