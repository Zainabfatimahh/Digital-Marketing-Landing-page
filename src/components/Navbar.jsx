import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Growthly Logo" className="logo-img" />
        <h2 className="logo-text">Growthly</h2>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Case Studies</a></li>
        <li><a href="#experience">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="order-btn">
          <a href="#contact">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}
