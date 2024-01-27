import bannerImage from "./assets/pray.jpg";
import aboutImage from "./assets/baptism.jpg";

import "./quicklink.css";
import "./quicklink-responsive.css";
const data = [
  {
    id: 1,
    name: "We Intercede",
    desc: "Prayer Request",
    image: bannerImage,
    btn: "Lets Pray",
  },
  {
    id: 2,
    name: "We're grateful",
    desc: "Share Testimonies",
    image: aboutImage,
    btn: "Share With Us",
  },
  {
    id: 3,
    name: "We Listen",
    desc: "Guidance & Counselling",
    image: bannerImage,
    btn: "Talk To Us",
  },
];
const Quicklink = () => {
  return (
    <div>
      <section className="third-section">
        <div className="quick-link">
          {data.map((service) => (
            <div className="content" key={service.id}>
              <div className="image">
                <img src={service.image} alt="Congregation" />
              </div>
              <div className="text">
                <p> {service.name} </p>
                <h2> {service.desc} </h2>
                <button className="link-btn">{service.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quicklink;
