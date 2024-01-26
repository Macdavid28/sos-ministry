import familyImage from "./assets/famila.jpg";
import aboutImg from "./assets/about.jpg";

import "./vision.css";
const info = [
  {
    id: 1,
    heading: "Vision & Mission",
    content:
      "To liberate men through the undiluted word of God and prayer in order to be enlisted in the end time army of God.",
    secondContent: "To promote the truth of the Gospel",
    img: familyImage,
  },
  {
    id: 2,
    heading: "Our Values",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis placeat ipsum consectetur. Quos ea voluptas ducimus quod delectus aperiam.",
    img: aboutImg,
  },
];
export default function VisionMission() {
  return (
    <div className="info">
      <div className="info-section">
        {info.map((info) => (
          <div className="info-subsection" key={info.id}>
            <div className="info-image">
              <img src={info.img} alt="Congregation" />
            </div>
            <div className="info-text">
              <h2>{info.heading}</h2>
              <p>{info.content}</p>
              <p>{info.secondContent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
