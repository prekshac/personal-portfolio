import React from "react";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="contact">
      <h2>Get in Touch 📬</h2>
      <p>
        Have a project idea, a collaboration opportunity, or just want to say
        hi? Feel free to reach out—I’d love to hear from you! 😊
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <p>
          <strong>📍 Location:</strong> Lucknow, Uttar Pradesh, India
        </p>
        <p>
          <strong>📞 Phone:</strong>{" "}
          <a
            href="tel:+918303411328"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            +91-8303-411-328
          </a>
        </p>
        <p>
          <strong>📧 Email:</strong>{" "}
          <a
            href="mailto:perkschat@gmail.com"
            style={{ textDecoration: "none", color: "#0072b1" }}>
            perkschat@gmail.com
          </a>
        </p>
        <p>
          <strong>🔗 LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/preksha-chaturvedi-800855234"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#0072b1" }}
          >
            linkedin.com/in/preksha-chaturvedi
          </a>
        </p>
        <p>
          <strong>💻 GitHub:</strong>{" "}
          <a
            href="https://github.com/prekshac"
            target="_blank"
            rel="noopener noreferrer">
            github.com/prekshac
          </a>
        </p>
      </div>

      <p style={{ marginTop: "2rem" }}>
        I’m always open to exciting opportunities and collaborations. Let’s
        create something amazing together! 🚀
      </p>
    </div>
  );
});

export default Contact;
