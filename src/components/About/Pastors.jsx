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
  { id: 3, name: "Kehinde Odujoko", title: "Youth Pastor", image: daddyPic },
  { id: 4, name: " Muyiwa Saanumi", title: " Pastor", image: daddyPic },
  {
    id: 5,
    name: " Bode Omotoye",
    title: "Youth Pastor",
    image: daddyPic,
  },
  { id: 6, name: " Taiwo Bisiriyu", title: " Pastor", image: daddyPic },
  {
    id: 7,
    name: " Kehinde Bisiriyu",
    title: " Pastor",
    image: daddyPic,
  },
  { id: 8, name: " Sadiku Olanrewaju", title: " Pastor", image: daddyPic },
  { id: 9, name: " Feso Ebifemi", title: " Pastor", image: daddyPic },
  { id: 10, name: " Folakemi", title: " Pastor", image: daddyPic },
  {
    id: 11,
    name: " Folake Omotoye",
    title: " Pastor",
    image: daddyPic,
  },
  {
    id: 12,
    name: " Kehinde Ebifemi",
    title: " Pastor",
    image: daddyPic,
  },
  { id: 13, name: " Moradeke Busayo", title: " Pastor", image: daddyPic },
  { id: 14, name: " Morayo", title: " Pastor", image: daddyPic },
  { id: 15, name: " Funmilayo", title: " Pastor", image: daddyPic },
  { id: 16, name: " Tope Bisiriyu", title: " Pastor", image: daddyPic },
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
