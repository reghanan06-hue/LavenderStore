

import React, { useEffect } from "react";

export default function Apothecary() {
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="container mt-4" id="apothecary">

        {/* Header */}
        <div className="row mb-4">
          <div className="col">
            <h3>The Signature Edit</h3>
            <p>Carefully selected essentials for a tranquil life.</p>
          </div>
          <div className="col">
            <ul className="nav">
              <li className="nav-item">
                <a href="/shop" className="nav-link text-dark ">
                  All Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/apothecary" className="nav-link text-dark fw-bold text-decoration-underline">Apothecary</a>
              </li>
              <li className="nav-item">
                <a href="wellness" className="nav-link text-dark">Wellness</a>
              </li>
              <li className="nav-item">
                <a href="/decor" className="nav-link text-dark">Decor</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne 1 de produits */}
        <div className="row mb-4">
          <div className="col">
            <img src="./parfum2.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188",marginTop:"0px",marginBottom:"0px"}}>Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0">Parfum of lavender</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" 
              style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>

         <div className="col">
            <img src="./champ1.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0"> Scented Sachets</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>

          
          <div className="col">
            <img src="./Sahet.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0"> Scented Sachets</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>

       
        
 
 


  
        
        </div>
      </div>
    </div>
  );
}