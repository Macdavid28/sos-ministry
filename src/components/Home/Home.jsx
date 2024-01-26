import { Link } from "react-router-dom";
import aboutImage from "./assets/about.jpg";

import "./Home.css";
import Quicklink from "./quicklink";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero-container">
        <img
          src={aboutImage}
          alt="BannerImage"
          className="bannerImage"
          loading="lazy"
        />
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
          <p className="welcome-heading" style={{ color: "orange" }}>
            WELCOME TO
          </p>
          <h2 className="church-name">SANCTUARY OF SOLUTION MINISTRY</h2>
        </div>
        <div className="container">
          <p className="about-church">
            SOS is not just a space, it is a family. It is a place of
            impartation and transformational encounters that bring change to the
            lives of those who are opportuned to encounter it. It encapsulates
            on the outside and penetrates our human fibres into the depths of
            the heart. Under the intense focus of the Spirit and the Word,
            change happens.
          </p>
        </div>
        <div className="quick-links">
          <Link to="/about">
            <button className="about-btn btn">More About Us</button>
          </Link>
          <Link to="/">
            <button className="house-btn btn"> House Fellowship </button>
          </Link>
          <Link to="/">
            <button className="branch-btn btn">Locate A Branch</button>
          </Link>
        </div>
      </section>
      <Quicklink />
    </div>
  );
};
