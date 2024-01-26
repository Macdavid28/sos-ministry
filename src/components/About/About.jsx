import { Link } from "react-router-dom";
import bannerImage from "./assets/church.jpg";

import "./about.css";

import VisionMission from "./VisionAndMission";
export const About = () => {
  return (
    <div>
      <div className="hero-section">
        <img src={bannerImage} alt="Banner" className="banner" />
        <div className="abt-msg">
          <h1>About Church</h1>
          <p>We exist to lead the people of God back to him.</p>
        </div>
        <div className="abt-writeup">
          <h1>
            Welcome To <br /> Sanctuary Of Solution Ministry{" "}
          </h1>
          <p>
            On the 20th of November 2005, the world was blessed with an agent of
            change. The sanctuary dream; a divine vision ; a divine vision,
            given to the set man Pastor Olanrewaju Thomas, started off with just
            a handful of people.
            <br /> <br />
            <p>
              Over the years, proving that with faith, determination, focus and
              the right team, anything is possible, what started with just a
              roomful of people has grown to be the most desirable place of
              worship. With locations across Nigeria, the United Kingdom and the
              United States of America, Sanctuary attracts over 70,000
              worshippers both online and onsite.
            </p>
          </p>
        </div>
      </div>
      <VisionMission />
    </div>
  );
};
