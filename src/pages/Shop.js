
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Shop() {
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <ul className="nav justify-content-md-end">
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-dark fw-bold text-decoration-underline">
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
            <img src="./huile.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginTop:"0px",marginBottom:"0px"}}>Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Lavender Essential Oil</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
            </button>
            </div>
            <p style={{ color: "#4A454E" }}>20$</p>
          </div>

          <div className="col">
            <img src="./parfum.png" width="300" height="300"      
                   style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginTop: "0" ,marginBottom:"0px"}}>Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Home fragrance</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>30$</p>
          </div>
        </div>

        {/* Ligne 2 de produits */}
        <div className="row mb-4">
          <div className="col">
            <img src="./champ1.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0">Lavender Shampoo</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>

          <div className="col">
            <img src="./Lotion.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Lavender Body Lotion</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>20$</p>
          </div>

          <div className="col">
            <img src="./soap2.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
            <p style={{ color: "#6A5188",marginTop: "0" ,marginBottom:"0px"}}>Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Lavender Natural Soap</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>10$</p>
          </div>
        </div>


 {/* Ligne 3 de produits */}
        <div className="row mb-4">
          <div className="col">
            <img src="./Sahet.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Apothecary</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0">Home  </h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>
  <div className="col">
            <img src="./lavendewater.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
            <p style={{ color: "#6A5188",marginTop: "0" ,marginBottom:"0px"}}>Sleep Ritual</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Infused Pillow Mist</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>20$</p>
          </div>
          <div className="col">
            <img src="./bouket.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Decor

            </p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Dried Lavender Bouquet</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>20$</p>
          </div>

        
        </div>

{/* Ligne 4S de produits */}
        <div className="row mb-4">
          <div className="col">
            <img src="./candl.png" width="300" height="300" 
                        style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Decor</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5 className="mb-0">lavender Candle </h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>100$</p>
          </div>
  <div className="col">
            <img src="./plante.png" width="300" height="300" 
            style={{ borderRadius: "18px" }}/>
            <p style={{ color: "#6A5188",marginTop: "0" ,marginBottom:"0px"}}>Decor</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>Potted  of lavender</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
               style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>20$</p>
          </div>

          <div className="col">
            <img src="./Creme.png" width="300" height="300"          
              style={{ borderRadius: "18px" }}/>

            <p style={{ color: "#6A5188", marginLeft:"8px",marginBottom:"0px"}}>Wellness</p>
            <div className="d-flex align-items-center" style={{ gap: "40px" }}>
              <h5>   Lavender Body cream</h5>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-0" style={{ width: "40px", height: "40px", backgroundColor: "#f5edf7" }}>
                <img src="./icon-buy.png" alt="icon" style={{ width: "20px" }} />
              </button>
            </div>
            <p style={{ color: "#4A454E" }}>70$</p>
          </div>

        
        </div>
      </div>
    </div>
  );
}

