
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 600, behavior: "smooth" });
  }, []);

  return (
    <div className="container mt-4 px-4" id="shop">

      {/* Header */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <h3>The Signature Edit</h3>
          <p>Carefully selected essentials for a tranquil life.</p>
        </div>

        <div className="col-md-6">
<ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/shop" className="nav-link  fw-bold "
               style={{color: "#c615de"}}>
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apothecary" className="nav-link text-dark">
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
            <img src="./huile.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Wellness</p>
            <div className="d-flex align-items-center justify">
             <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>
              Lavender Essential Oil</h5>
               <div className="icon-circle" style={{  marginLeft: "39px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
            20$</p>
          </div>

          <div className="col">
            <img src="./T1.jpg" width="300" height="300"      
                   style={{ borderRadius: "18px" }}/>

                      <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>

              Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Home fragrance</h5>
               <div className="icon-circle" style={{  marginLeft: "29px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
                      <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
 30$</p>
          </div>
        </div>

        {/* Ligne 2 de produits */}
        <div className="row mb-4">
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
            <img src="./Lotion.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

                      <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>

              Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}h5>Body Lotion</h5>
              <div className="icon-circle" style={{  marginLeft: "69px", marginBottom: "0px" }}>
                <FaShoppingCart />
              </div>

            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              20$</p>
          </div>

          <div className="col">
            <img src="./soap2.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Natural Soap</h5>
              <div className="icon-circle" 
              style={{  marginLeft: "69px", marginBottom: "0px" }}
              onClick={() =>
    setSelectedProduct({
      name: "Natural Soap",
      price: "100$"
    })
  }>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              10$</p>
          </div>
        </div>


 {/* Ligne 3 de produits */}
        <div className="row mb-4">
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
  <div className="col">
            <img src="./lavendewater.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Sleep Ritual</p>
            <div className="d-flex align-items-center justify">
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Infused Pillow Mist </h5>
              <div className="icon-circle" style={{  marginLeft: "59px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              20$</p>
          </div>
          <div className="col">
            <img src="./bouket.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Decor

            </p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Dried Bouquet</h5>
              <div className="icon-circle" style={{  marginLeft: "49px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              20$</p>
          </div>

        
        </div>

{/* Ligne 4S de produits */}
        <div className="row mb-4">
          <div className="col">
            <img src="./candl.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"25px",marginBottom:"0px"}}>Decor</p>
                        <div className="d-flex align-items-center justify">
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Lavender Candle </h5>
              <div className="icon-circle" style={{  marginLeft: "69px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              100$</p>
          </div>
  <div className="col">
            <img src="./plante.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px",alignItems:"center" }}>
              Decor</p>
     <div className="d-flex align-items-center justify">
               <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}>Potted  of lavender</h5>
              <div className="icon-circle" style={{  marginLeft: "59px", marginBottom: "0px" }}>
               <FaShoppingCart />
             </div>
            </div>
           <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>
              20$</p>
          </div>

          <div className="col">
            <img src="./Creme.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

             <p  style={{ color: "#6A5188", marginLeft: "25px", marginBottom: "0px" }}>
              Wellness</p>
     <div className="d-flex align-items-center justify">
    
                 <h5 className="mb-0" style={{  marginLeft: "25px", marginBottom: "0px" }}> 
Natural body cream</h5>
                 <div className="icon-circle"   style={{  marginLeft: "39px", marginBottom: "0px",alignItems:"center" }}>
                
      <FaShoppingCart />
    </div>
                </div>
    
                 <p style={{ color: "#4A454E" , marginLeft: "25px", marginBottom: "0px" }}>10$</p>
              </div>
    
            </div>

        
        </div>
      </div>
  );
}

