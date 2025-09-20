import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AnnotationService from "./pages/AnnotationService";
import SupportServices from "./pages/SupportServices";
import About from "./components/About";

function AppWrapper() {
  const location = useLocation();

  // Check if current page is landing
  const isLanding = location.pathname === "/";

  return (
    <>
      <Header />
      <div className={isLanding ? "" : "page-background"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/support-service" element={<SupportServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/annotation-service" element={<AnnotationService />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    
      <AppWrapper />
    
  );
}

export default App;
