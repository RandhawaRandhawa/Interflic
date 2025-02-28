import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./Component/Preloader";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import PortfolioPage from "./Pages/PortfolioPage";
import PricingPage from "./Pages/PricingPage";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Footer from "./Component/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="relative w-full min-h-screen">
          <div className="fixed inset-0 -z-10 bg-White">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-1/2 h-full rounded-full shadow-2xl right-1/2 top-1/2 animate-pulse shadow-Accent2/10 bg-Accent2/10"></div>
              <div className="absolute bottom-0 left-0 w-2/4 h-full transition duration-1000 rounded-full shadow-2xl right-1/2 top-2/3 animate-up-down shadow-Accent2 bg-Accent2"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-full rounded-full shadow-2xl left-1/2 top-1/2 animate-pulse shadow-Accent2/10 bg-Accent2/10"></div>
              <div className="absolute bottom-0 right-0 w-2/4 h-full transition duration-1000 rounded-full shadow-2xl left-1/2 top-2/3 animate-up-down shadow-Accent2 bg-Accent2"></div>
            </div>
          </div>

          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} exact />
              <Route path="/ServicesPage" element={<ServicesPage />} />
              <Route path="/AboutUsPage" element={<AboutUsPage />} />
              <Route path="/ContactUsPage" element={<ContactUsPage />} />
              <Route path="/PortfolioPage" element={<PortfolioPage />} />
              <Route path="/PricingPage" element={<PricingPage />} />
              <Route path="/BlogPage" element={<BlogPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;