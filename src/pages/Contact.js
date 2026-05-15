
import React, { useState, useEffect } from "react";
import "../style/App.css";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      console.log("User added:", data);
      alert("User added successfully!");
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <div id="contact" className="container mt-4">
                    <h2 className="animated-text" style={{ color: "#6A5188" }}>
Login</h2>
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
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#c615de", color: "white", marginBottom: "50px" }}
        >
         <span> Sign in </span>
        </button>
        <Link to="/account">
 <button
          type="submit"
          className="btn"
          // style={{ backgroundColor: "#c615de", color: "white", marginBottom: "50px",marginLeft:"20px" }}
        >
         <span> Sign up </span>
        </button></Link>
       
        {/* <button
          // type="submit"
          className="btnSignGoogle"
        >  <span>Sign with Google</span>

        </button> */}
      </form>
    </div>
  );
}