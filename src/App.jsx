import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "./style.css"; // ✅ THIS MUST BE HERE

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Experience />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
