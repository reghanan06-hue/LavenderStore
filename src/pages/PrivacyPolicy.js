import React, { useEffect } from "react";

export default function PrivacyPolicy() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      
      <h1 className="mb-4 text-center" style={{ color: "#6A5188" }}>
        Privacy Policy
      </h1>

      <p className="text-muted text-center mb-5">
        Last updated: March 2026
      </p>

      <section className="mb-4">
        <h5>1. Information We Collect</h5>
        <p>
          We may collect personal information such as your name, email address,
          and any other details you provide when contacting us or using our services.
        </p>
      </section>

      <section className="mb-4">
        <h5>2. How We Use Your Information</h5>
        <p>
          Your information is used to improve our services, respond to inquiries,
          and provide a better user experience.
        </p>
      </section>

      <section className="mb-4">
        <h5>3. Cookies</h5>
        <p>
          We may use cookies to enhance your browsing experience and analyze website traffic.
        </p>
      </section>

      <section className="mb-4">
        <h5>4. Data Protection</h5>
        <p>
          We implement appropriate security measures to protect your personal data.
        </p>
      </section>

      <section className="mb-4">
        <h5>5. Third-Party Services</h5>
        <p>
          We may use third-party tools or services that process data on our behalf.
        </p>
      </section>

      <section className="mb-4">
        <h5>6. Your Rights</h5>
        <p>
          You have the right to access, update, or delete your personal information.
        </p>
      </section>

      <section className="mb-4">
        <h5>7. Contact Us</h5>
        <p>
          If you have any questions, feel free to contact us at:
          <br />
          <strong>contact@lavendervellum.com</strong>
        </p>
      </section>

    </div>
  );
}