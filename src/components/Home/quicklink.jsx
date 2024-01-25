import bannerImage from "./assets/banner.jpg";
import aboutImage from "./assets/about.jpg";
import "./quicklink.css";
const card = [
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
];
const Quicklink = () => {
  return (
    <div>
      <section className="third-section">
        <div className="quick-link">
          {card.map((service) => (
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
