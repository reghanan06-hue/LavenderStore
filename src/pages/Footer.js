import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 border-top" style={{ backgroundColor: "#fcfcfc" }}>
      <div className="container" >
        <div className="row text-center text-md-start">

          {/* LEFT */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold" style={{ fontFamily: "serif" }}>
              Lavender Dream
            </h5>

            <p className="text-muted mt-3">
              Dedicated to the art of slowing down and the science of botanical
              well-being. Crafted in small batches from our sustainable estate.
            </p>
          </div>

          {/* DISCOVER */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase small fw-bold">Discover</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="/story" className="text-muted text-decoration-none">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/shop" className="text-muted text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CLIENT CARE */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase small fw-bold">Client Care</h6>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="/privacy-policy" className="text-muted text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/service-terms" className="text-muted text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h6 className="text-uppercase small fw-bold">Connect</h6>

            <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
              <div className="icon-circle">
                <FaInstagram />
              </div>

              <div className="icon-circle">
                <FaFacebook />
              </div>

              <div className="icon-circle">
                <FaYoutube />
              </div>

              <div className="icon-circle">
                <FaTiktok />
              </div>
            </div>

            <p className="text-muted mt-4 small">
              © 2024 Lavender Dream. Cultivating serenity.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}