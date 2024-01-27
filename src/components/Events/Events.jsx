import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";

const cards = [
  {
    id: 1,
    title: "Last Friday Vigil",
    time: "Friday 7:00 pm - 5:00 am",
    date: "Jan 27",
  },
  {
    id: 2,
    title: "Communion Service",
    time: "9:00 am - 12:00 pm",
    date: "Feb 4",
  },
  {
    id: 3,
    title: "Agege Crusade",
    time: "Saturday, 8:00 am - 12:00 pm ",
    date: "March 24",
  },
  { id: 4, title: "Ogba Crusade", time: "Content for Card 3", date: "June 17" },
  {
    id: 5,
    title: "Obawole Crusade",
    time: "Content for Card 4",
    date: "August 25",
  },
  {
    id: 6,
    title: "Robiyan Crusade",
    time: "Content for Card 5",
    date: "July 12",
  },
  {
    id: 7,
    title: "Mokoloki Crusade",
    time: "Content for Card 6",
    date: "May 3",
  },
];

export const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider-container">
      <h1>Upcoming Events</h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <div className="event-time">
              <i className="fa fa-clock"></i>
              <p>{card.time}</p>
            </div>
            <div className="event-date" >
              <i className="fa fa-calendar"></i>
              <p>{card.date}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
