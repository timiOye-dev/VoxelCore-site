import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/landing";
import About from "./pages/About";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;