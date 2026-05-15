
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

export default function Shop() {
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 605, behavior: "smooth" });
  }, []);

  return (
    <div className="container mt-4 px-4" id="apothecary">

      {/* Header */}
           <div className="row mb-4 align-items-center">
             <div className="col-md-6">
               <h3>The Signature Edit</h3>
               <p>Carefully selected essentials for a tranquil life.</p>
             </div>
     
             <div className="col-md-6">
     <ul className="nav justify-content-center">
                 <li className="nav-item">
                   <Link to="/shop" className="nav-link text-dark" > 
                     All Products
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to="/apothecary" className="nav-link fw-bold "
               style={{color: "#c615de"}}>                   
                 Apothecary
                   </Link>
                 </li>
                 <li className="nav-item">
                   <Link to="/wellness" className="nav-link text-dark">
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
          <div className="col">
            <img src="./parfum2.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Apothecary</p>
            <div className="d-flex align-items-center justify">
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Parfum of lavender</h5>
               <div className="icon-circle" style={{  marginLeft: "49px", marginBottom: "0px" }}>
                <FaShoppingCart />
              </div>
            </div>
             <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>100$</p>
          </div>

          

         <div className="col">
            <img src="./champ1.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

                       <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>

              Apothecary</p>
            <div className="d-flex align-items-center justify">
              <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Lavender Shampoo</h5>
               <div className="icon-circle" style={{  marginLeft: "39px", marginBottom: "0px" }}>
                <FaShoppingCart />
              </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              100$</p>
          </div>
            <div className="col">
            <img src="./Sahet.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Scented Sachets  </h5>
              <div className="icon-circle" style={{  marginLeft: "39px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              100$</p>
          </div>
        </div>
    
            </div>

        
        </div>
      
  );
}

