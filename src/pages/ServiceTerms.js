import React, { useEffect } from "react";

export default function TermsOfService() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>

      <h1 className="mb-4 text-center" style={{ color: "#6A5188" }}>
        Terms of Service
      </h1>

      <p className="text-muted text-center mb-5">
        Last updated: March 2026
      </p>

      <section className="mb-4">
        <h5>1. Introduction</h5>
        <p>
          These Terms of Service govern your use of our website and services.
          By accessing our site, you agree to these terms.
        </p>
      </section>

      <section className="mb-4">
        <h5>2. Use of Our Services</h5>
        <p>
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of others.
        </p>
      </section>

      <section className="mb-4">
        <h5>3. Intellectual Property</h5>
        <p>
          All content on this website, including text, images, and branding,
          is the property of the company and may not be reused without permission.
        </p>
      </section>

      <section className="mb-4">
        <h5>4. User Accounts</h5>
        <p>
          If you create an account, you are responsible for maintaining its
          confidentiality and security.
        </p>
      </section>

      <section className="mb-4">
        <h5>5. Limitation of Liability</h5>
        <p>
          We are not responsible for any damages resulting from the use of our
          services or inability to access them.
        </p>
      </section>

      <section className="mb-4">
        <h5>6. Changes to Terms</h5>
        <p>
          We may update these terms at any time. Continued use of the website
          means you accept the updated terms.
        </p>
      </section>

      <section className="mb-4">
        <h5>7. Contact</h5>
        <p>
          For any questions regarding these terms, contact us at:
          <br />
          <strong>contact@lavendervellum.com</strong>
        </p>
      </section>

    </div>
  );
}