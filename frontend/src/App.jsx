import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurExperts from "./components/OurExperts";
import OurPackages from "./components/OurPackages";
import HowItWorksFullPage from "./components/HowItWorksFullPage";
import GetAFreeQuote from "./components/GetAFreeQuote";
import Blog from "./components/Blog";
import Inbox from "./components/Inbox";

function App() {
  return (
    <Router>
      <div className="container mx-auto bg-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experts" element={<OurExperts />} />
          <Route path="/packages" element={<OurPackages />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/how-it-works" element={<HowItWorksFullPage />} />
          <Route path="/contact" element={<GetAFreeQuote />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
