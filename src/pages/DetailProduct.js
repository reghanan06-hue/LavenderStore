
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

export default function Product() {
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 550, behavior: "smooth" });
  }, [])

  return (
    <div className="container mt-4 px-4" id="wellness">
 {/* Header */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <h3>The Signature Edit</h3>
          <p>Carefully selected essentials for a tranquil life.</p>
        </div>

        <div className="col-md-6">
<ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-dark">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apothecary" className="nav-link text-dark">
                Apothecary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wellness" className="nav-link fw-bold "
               style={{color: "#c615de"}}>
                Wellness
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/decor" className="nav-link text-dark">
                Decor
              </Link>
            </li>
          </ul>
        </div>
        {/* Ligne 1 de produits */}
        <div className="row mb-4">
         
    
                 <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>10$</p>
              </div>
          <div className="col">
            <img src="./soap2.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Natural Soap</h5>
              <div className="icon-circle" style={{  marginLeft: "69px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              10$</p>
          </div>

        
         
        
        </div>


    
            </div>

        
  );
}

