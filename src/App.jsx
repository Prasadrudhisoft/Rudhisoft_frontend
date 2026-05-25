import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/header";
import Footer from "./Components/footer";
import AboutUs from "./pages/about";
import Home from "./pages/home";
import Services from "./pages/services";
import Technology from "./pages/technology";
import Careers from "./pages/careers";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/"           element={<Home />}       />
          <Route path="/about"      element={<AboutUs />}    />
          <Route path="/services"   element={<Services />}   />
          <Route path="/technology" element={<Technology />} />
          <Route path="/careers"    element={<Careers />}    />
          <Route path="/contact"    element={<Contact />}    />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;