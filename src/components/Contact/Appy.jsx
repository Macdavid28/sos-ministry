import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Appy.css";

const cards = [
  { id: 1, title: "Card 1", content: "Content for Card 1" },
  { id: 2, title: "Card 2", content: "Content for Card 2" },
  { id: 3, title: "Card 3", content: "Content for Card 3" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000, // Transition speed in milliseconds
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Time between slides in milliseconds
};

function Appy() {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Appy;
