import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // Scroll vers le haut quand cette page est affichée
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // [] = exécute uniquement au montage du composant
  return (
    <div id="contact" className="container mt-4">
<h2 style={{color:"#6A5188"}}>Login</h2> 
   <div className="mb-3">

  <label>Name</label>
  <input type="text" className="form-control"  style={{ width: "50%" }} />
</div>
<div className="mb-3">
  <label>Email</label>
<input type="email" className="form-control" style={{ width: "50%" }} />
</div>
<div className="mb-3">
</div>
<button className="btn" style={{backgroundColor:"#6A5188", color:"white",marginBottom:"50px"}}> Sign in</button>
</div>   
  )
}
