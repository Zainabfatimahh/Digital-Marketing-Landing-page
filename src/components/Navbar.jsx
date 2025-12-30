import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>

          <div className="logo-container">
            <img src={logo} alt="Growthly" className="logo-img" />
            <span className="logo-text">Growthly</span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Case Studies</a></li>
          <li><a href="#experience">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* MOBILE MENU (OUTSIDE NAVBAR) */}
      {open && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Case Studies</a>
          <a href="#experience" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}