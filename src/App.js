import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Events } from "./components/Events/Events";
import { Blog } from "./components/Blog/Blog";
import { About } from "./components/About/About";
import { Testimonies } from "./components/Testimonies";
import TopScrollButton from "./components/TopScrollButton/TopScrollButton";
import { Contact } from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { Social } from "./components/Socialmedia";
import { Giving } from "./components/Giving/Giving";
import { Branches } from "./components/Branches/Branches";
import Appy from "./components/Contact/Appy";

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
      <Appy />
    </div>
  );
}

export default App;
