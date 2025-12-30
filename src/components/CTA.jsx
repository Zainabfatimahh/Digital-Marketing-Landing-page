export default function CTA() {
  return (
    <section id="contact" className="cta">
      <h2>Ready to grow your business?</h2>
      <p>Let’s discuss how we can help you scale faster.</p>

      <button
        className="primary-btn"
        onClick={() => alert("Contact form coming soon")}
      >
        Book a Free Consultation
      </button>
    </section>
  );
}
