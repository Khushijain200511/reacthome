import React from "react";
import "./Gifts.css";

function Gifts() {
  const gifts = [
    {
      image: "/valentine.png",
      title: "SUPRISE",
    },
    {
      image: "/anniversary.png",
      title: "ANNIVERSARY",
    },
    {
      image: "/birthday.png",
      title: "BIRTHDAY",
    },
  ];

  return (
    <section className="gifts-section">

      <div className="gift-line"></div>

      <h1>GIFTS</h1>

      <p className="gifts-description">
        Eternalize precious moments by gifting your loved ones everlasting
        jewels. We have splendid adornments for every occasion with no
        shortage of choice. Make every occasion memorable with Kalyan Jewellers.
      </p>

      <div className="gifts-container">
        {gifts.map((gift, index) => (
          <div className="gift-card" key={index}>

            <img
              src={gift.image}
              alt={gift.title}
              className="gift-image"
            />

            <h2>{gift.title}</h2>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Gifts;