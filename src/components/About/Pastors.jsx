import daddyPic from "./assets/dad.jpg";
import "./pastors.css";

const data = [
  {
    id: 1,
    name: " J.L Thomas",
    title: "General Overseer",
    image: daddyPic,
  },
  {
    id: 2,
    name: " Bunmi Thomas",
    title: "Senior Pastor",
    image: daddyPic,
  },
];

const Pastors = () => (
  <div className="pastor-card">
    <h1> Our Pastors </h1>
    <div className="pastor-card-grid">
      {data.map((card) => (
        <div className="pastor-card-content" key={card.id}>
          <div className="image">
            <img src={card.image} alt="" />
          </div>
          <div className="text">
            <h2> {card.name} </h2>
            <p> {card.title} </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Pastors;
