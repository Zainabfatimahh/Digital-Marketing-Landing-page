import heroImage from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>
          We help brands <br /> grow faster online
        </h1>
        <p>
          Growthly is a performance-driven marketing agency helping startups
          and businesses scale through data-backed strategies.
        </p>
        <button
          className="primary-btn"
          onClick={() => window.location.href = "#services"}
        >
          Explore Our Services
        </button>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Marketing growth illustration"
          className="hero-img"
        />
      </div>
    </section>
  );
}
