// CardCarousel.js

import React, { useState, useEffect } from "react";
import "./CardCarousel.css";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Card 1",
      description: "This is the first card description.",
      image: "https://placekitten.com/300/200",
    },
    {
      title: "Card 2",
      description: "This is the second card description.",
      image: "https://placekitten.com/301/200",
    },
    {
      title: "Card 3",
      description: "This is the third card description.",
      image: "https://placekitten.com/302/200",
    },
    {
      title: "Card 4",
      description: "This is the fourth card description.",
      image: "https://placekitten.com/303/200",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change card every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="card-carousel-container">
      <div className="card-carousel">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? "active" : ""}`}
          >
            <img src={card.image} alt={`Card ${index + 1}`} />
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
