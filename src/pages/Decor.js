import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Decor() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="container mt-4" id="decor" >

        {/* Header */}
        <div className="row mb-4">
          <div className="col">
            <h3>The Signature Edit</h3>
            <p>Carefully selected essentials for a tranquil life.</p>
          </div>

          <div className="col">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-dark ">
                  All Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/apothecary" className="nav-link text-dark">
                  Apothecary
      
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wellness" className="nav-link text-dark ">
                  Wellness
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/decor"
                  className="nav-link fw-bold text-decoration-underline"
                  style={{color: "#6A5188",}}
               >
                  Decor
                               
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Produits */}
        <div className="row mb-4">

          {/* Produit 1 */}
          <div className="col">
            <img
              src="./bouket.png"
              width="300"
              height="300"
              style={{ borderRadius: "18px" }}
              alt="bouquet"
            />
            <p  style={{ color: "#6A5188", marginLeft: "18px", marginBottom: "0px",alignItems:"center" }}>
              Decor
            </p>

            <div className="d-flex align-items-center justify">
              <h5 style={{  marginLeft: "18px", marginBottom: "0px" }}>Dried Lavender Bouquet</h5>
              <div className="icon-circle">
  <FaShoppingCart />
</div>
            </div>

            <p style={{ color: "#4A454E" , marginLeft: "18px", marginBottom: "0px" }}>20$</p>
          </div>

          {/* Produit 2 */}
          <div className="col">
            <img
              src="./candl.png"
              width="300"
              height="300"
              style={{ borderRadius: "18px" }}
              alt="candle"
            />

            <p style={{ color: "#6A5188", marginLeft: "8px", marginBottom: "0px" }}>
              Decor
            </p>

            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Lavender Candle</h5>
             <div className="icon-circle">
  <FaShoppingCart />
</div>
            </div>

            <p style={{ color: "#4A454E" }}>17$</p>
          </div>

          {/* Produit 3 */}
          <div className="col">
            <img
              src="./plante.png"
              width="300"
              height="300"
              style={{ borderRadius: "18px" }}
              alt="plant"
            />

            <p style={{ color: "#6A5188", marginBottom: "0px" }}>
              Decor
            </p>

<div className="d-flex align-items-center gap-4">
              <h5 className="mb-0">Potted Lavender</h5>
             <div className="icon-circle">
  <FaShoppingCart />
</div>
            </div>

            <p style={{ color: "#4A454E" }}>10$</p>
          </div>

        </div>
      </div>
    </div>
  );
}