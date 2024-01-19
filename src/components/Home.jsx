import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero-container">
        <img src={bannerImage} alt="BannerImage" className="bannerImage" />
        <div className="sermon">
          <p className="sermon-heading">Latest Teaching</p>
          <h2 className="sermon-topic"> 3 Keys A Christian must have</h2>

          <Link to="/">
            <button className="watch-button">
              <div className="watch-content">
                <i className="fa fa-television" style={{ color: "white" }}></i>
                <p className="watch-text">Watch Sermon</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <section className="welcome-message-section">
        <div className="welcome-section">
          <p className="welcome-heading">WELCOME TO</p>
          <h2 className="church-name">SANCTUARY OF SOLUTION MINISTRY</h2>
        </div>
        <div className="container">
          <p className="about-church">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            odit harum officiis minima quam cum molestias neque repudiandae
            tempora fuga porro aperiam molestiae autem eos quas velit doloribus
            nobis, dolorum beatae? Veniam corporis perspiciatis, atque
            doloremque harum
          </p>
        </div>
        <div className="quick-links">
          <Link to="/about">
            <button className="about-btn btn">About Us</button>
          </Link>
          <Link to="/">
            <button className="house-btn btn"> House Fellowship </button>
          </Link>
          <Link to="/">
            <button className="branch-btn btn">Locate A Branch</button>
          </Link>
        </div>
      </section>
      <section className="third-section">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};
