import bannerImage from "./assets/banner.jpg";
import "./quicklink.css";
const card = [
  {
    id: 1,
    name: "We Intercede",
    desc: "Prayer Request",
    image: bannerImage,
  },
  {
    id: 1,
    name: "We Intercede",
    desc: "Prayer Request",
    image: bannerImage,
  },
  {
    id: 1,
    name: "We Intercede",
    desc: "Prayer Request",
    image: bannerImage,
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
                <img src={service.image} alt="ima" />
              </div>
              <div className="text">
                <p> {service.name} </p>
                <h2> {service.desc} </h2>
                <button className="pray-btn" >Let's Pray</button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quicklink;
