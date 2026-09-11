import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const images = [
    "/banner.png",
    "/banner2.png",
    "/banner3.png"
  ];

  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <header className="header">

      
      <div className="nav-bar">

        <nav className="nav-left">
          <a href="/">OUR BRANDS</a>
          <a href="/">MUHURAT</a>
          <a href="/">SHOP ONLINE</a>
          
        </nav>

        <div className="logo">
          <div className="logo-name">KALYAN</div>
          <div className="logo-subtitle">JEWELLERS</div>
        </div>

        <nav className="nav-right">
          <a href="/">ABOUT US</a>
         
          <a href="/">AMBASSADORS</a>
          <a href="/">INVESTORS</a>
        </nav>

      </div>

      
      <div className="header-banner">

        <img
          src={images[current]}
          alt={`Kalyan Jewellery Banner ${current + 1}`}
        />

       
        <button className="slider-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

       
        <button className="slider-btn next" onClick={nextSlide}>
          &#10095;
        </button>

       
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </div>

    </header>
  );
}

export default Header;