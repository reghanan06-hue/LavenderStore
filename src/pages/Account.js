import React, { useState, useEffect } from "react";
import "../style/App.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("User added:", data);

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Error creating account");
    }
  };

  return (
    <div id="contact" className="container mt-4">
      <h2 className="animated-text">Create account</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            style={{ width: "50%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            style={{ width: "50%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn"
          style={{marginBottom:"10px"}}
        >
         <span>Create an Account</span> 
        </button>
      </form>

<div className="col-md-3 mb-5 text-center text-md-start">
                      {/* <div className="col-md-3 mb-5"> */}

            {/* <h6 className=" small fw-bold  " */}
            <h5 style={{color: "#6A5188",marginTop:"0px",marginLeft:"40px",marginBottom:"0px"}} >
                 ______ or ______</h5>
               <h6 className="animated-text"
                style={{ color: "#6A5188", marginLeft:"60px",marginTop:"30px" }}>  Sign up with </h6>

            <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
<div className="icon-circle" 
              onClick={() => window.open("https://www.gmail.com", "_blank")}
  style={{ cursor: "pointer" ,marginTop:"0px",marginLeft:"60px"}}
>
   <FaGoogle/>          
       </div>
       <div className="icon-circle" 
              onClick={() => window.open("https://www.gmail.com", "_blank")}
  style={{ cursor: "pointer" }}
>
   <FaFacebook/>          
       </div>

              </div>

</div>

              

    </div>

   
              
  

  );
}