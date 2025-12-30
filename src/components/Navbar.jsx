import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Growthly Logo" className="logo-img" />
        <h2 className="logo-text">Growthly</h2>
      </div>

      {/* Desktop Nav */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Case Studies</a></li>
        <li><a href="#experience">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#testimonials" onClick={() => setOpen(false)}>Case Studies</a>
        <a href="#experience" onClick={() => setOpen(false)}>Why Us</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
