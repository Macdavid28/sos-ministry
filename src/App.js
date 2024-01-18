import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Events } from "./components/Events";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Testimonies } from "./components/Testimonies";
import TopScrollButton from "./components/TopScrollButton/TopScrollButton";
import { Contact } from "./components/Contact";
import Navbar from "./components/Navbar";
import { Social } from "./components/Socialmedia";
import { Giving } from "./components/Giving";
import { Branches } from "./components/Branches";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socialmedia" element={Social} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
      </Router>
      <TopScrollButton />
    </div>
  );
}

export default App;
