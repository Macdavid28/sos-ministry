import { Link } from "react-router-dom";
import bannerImage from "./assets/banner.jpg";
import "./Home.css";
import Quicklink from "./quicklink";
import CardCarousel from "./CardCarousel";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            inventore dolorem quod incidunt cupiditate voluptatem accusamus
            explicabo dignissimos repudiandae hic ipsam, corporis, suscipit cum.
            Est architecto quod, facere eos dolor cum facilis harum incidunt
            quos voluptatem. Quas ullam ea hic quod nostrum voluptas sed itaque
            saepe nam excepturi tempora molestiae dolorem commodi vero, quia
            obcaecati! Explicabo tempora nisi, voluptates sint vel dolore labore
            necessitatibus dolores veritatis. Aliquam, reiciendis deleniti?
            Ipsum, perspiciatis magni voluptatibus corporis maxime reprehenderit
            nulla aut architecto, nam, quibusdam excepturi sunt ipsa cupiditate
            iste cum. Aspernatur quas quae ipsa. Amet cum dolores expedita
            laboriosam magni tenetur ipsam earum.
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
