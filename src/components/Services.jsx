const services = [
  {
    title: "Performance Marketing",
    desc: "Paid campaigns across Google, Meta, and LinkedIn focused on ROI."
  },
  {
    title: "Social Media Growth",
    desc: "Build brand authority and engagement across all major platforms."
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on search engines with long-term organic strategies."
  },
  {
    title: "Content Strategy",
    desc: "High-quality content that educates, converts, and builds trust."
  },
  {
    title: "Analytics & Reporting",
    desc: "Transparent reporting with actionable insights every month."
  }
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
