import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import tvIcon from "../assets/Tv-icon.svg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <img src={bannerImage} alt="BannerImage" className="bannerImage" />
      <div className="sermon">
        <p className="sermon-heading">Latest Teaching</p>
        <h2 className="sermon-topic"> 3 Keys A Christian must have</h2>

        <Link to="/">
          <button className="watch-button">
            <div className="watch-content">
              <img src={tvIcon} alt={"Tv icon"} className="tv-icon" />{" "}
              <p className="watch-text">Watch Sermon</p>
            </div>
          </button>
        </Link>
      </div>
      <section className="welcome-message-section">
        <div className="welcome-section">
          <p className="welcome-heading">WELCOME TO</p>
          <h2 className="church-name">SANCTUARY OF SOLUTION MINISTRY</h2>
        </div>
        <p className="about-church">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam odit
          harum officiis minima quam cum molestias neque repudiandae tempora
          fuga porro aperiam molestiae autem eos quas velit doloribus nobis,
          dolorum beatae? Veniam corporis perspiciatis, atque doloremque harum
          non accusamus saepe omnis, quis, ducimus eveniet voluptate illo
          sapiente a ad praesentium dolores facilis molestiae sed enim
          necessitatibus obcaecati repudiandae
        </p>
        <div className="quick-links">
          <button className="btn" >About Us</button>
          <button className="btn" > House Fellowship </button>
          <button className="btn" >Locate A Branch</button>
        </div>
      </section>
    </div>
  );
};
