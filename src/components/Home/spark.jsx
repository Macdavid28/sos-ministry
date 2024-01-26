import React, { useState,useEffect } from 'react';
import './Spark.css';

const cards = [
  { id: 1, title: 'Card 1', content: 'Content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Content for Card 3' },
];

function Spark() {
        const [activeCard, setActiveCard] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="carousel-container">
          <div className="card-carousel">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`card ${index === activeCard ? 'active' : ''}`}
              >
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }


export default Spark;
