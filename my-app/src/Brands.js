import React from "react";
import "./Brands.css";

function Brands() {
  const brands = [
    { name: "MOODHRA", image: "/brand1.png" },
    { name: "NIMAH", image: "/brand2.png" },
    { name: "ANOKHI", image: "/brand3.png" },
    { name: "RANG", image: "/brand4.png" },
    { name: "VEDHA", image: "/brand5.png" },
    { name: "TEJASVI", image: "/brand6.png" },
    { name: "Apoorva", image: "/brand7.png" },
    { name: "ZIAH", image: "/brand8.png" },
    { name: "Laya", image: "/brand9.png" },
    { name: "GLO", image: "/brand10.png" }
  ];

  return (
    <section className="brands-section">

      <h1>BRANDS FAMILY</h1>

      <p className="brands-description">
        India’s beauty lies in its diversity. Every part of India has its
        unique jewellery, the expertise to create those exist only in that
        region, passed on through generations. Kalyan’s biggest strength is
        in these craftsmen who create unique designs just for us from every
        nook and corner of India. And this range of jewellery, with those
        subtle nuances and the perfect finish which you won’t find anywhere
        else is what we bring you through our various brands.
      </p>

      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img
              src={brand.image}
              alt={brand.name}
            />
          </div>
        ))}
      </div>

     
      <div className="about-section">

        <h1>ABOUT US</h1>

        <p>
          When you gift jewellery you achieve immortality in their heart.
        </p>

        <img
          className="about-image"
          src="/about.png"
          alt="Kalyan Jewellery"
        />

      </div>


    

    </section>
  );
}

export default Brands;