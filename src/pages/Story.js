

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Story() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  // Charger commentaires
  const fetchComments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/story");
      setComments(res.data);
    } catch (err) {
      console.log(err);

      // commentaires par défaut si backend ne marche pas
      const defaultComments = [
        {
          id: 1,
          name: "Jannet",
          text: "I liked your story. Everything is so well written!",
        },
        {
          id: 2,
          name: "Madina",
          text: "I really like the calm and relaxing feeling.",
        },
        {
          id: 3,
          name: "Ibrahim",
          text: "Wow, this really makes me feel calm.",
        },
      ];

      setComments(defaultComments);
    }
  };

  useEffect(() => {
    fetchComments();
    window.scrollTo({ top: 630, behavior: "smooth" });
  }, []);

  // Ajouter commentaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !text) {
      alert("Name and Comment are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/story", {
        name,
        email,
        text,
      });

      setComments([...comments, res.data]);

      setName("");
      setEmail("");
      setText("");

      alert("Comment posted!");
    } catch (err) {
      console.log(err);
      alert("Error posting comment");
    }
  };

  return (
    <div className="container my-5">
      

      {/* TITLE */}
       <h1 className="text-center mb-2" style={{ color: "#c615de" }}>
        Our Story
      </h1>

      <p className="text-center mb-5" style={{fontSize:"10px",color: "#6A5188"}}>Lavender Dream</p> 

      {/* STORY SECTION */}
      <div className="row align-items-center mb-5">

        {/* TEXT LEFT */}
        <div className="col-md-6">
<h2 className="animated-text" style={{ color: "#6A5188" }}>Lavender Dream</h2>
          <p style={{ lineHeight: "1.9", color: "#555" }}>
            In a world that rarely slows down, Lavender Dream was born
            from a simple desire — to bring peace back into everyday life.
          </p>

          <p style={{ lineHeight: "1.9", color: "#555" }}>
            It started in quiet fields where lavender grows gently under
            the sun, nurtured with care and patience.
          </p>

          <p style={{ lineHeight: "1.9", color: "#555" }}>
            We believe your home should be more than a place — it should
            be a sanctuary of calm and beauty.
          </p>

          <p style={{ lineHeight: "1.9", color: "#555" }}>
            Bring the essence of nature into your home and discover the
            calming power of lavender.
          </p>
        </div>

        {/* IMAGE RIGHT */}
        {/* <div className=" animated-frame col-md-6 text-center  ">
          <img
            // src="./g1.png"
            src="./test.png"
            alt="Lavender"
            className="img-fluid shadow"
            style={{
              borderRadius: "20px",
              height: "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div> */}
        <div
  className="animated-frame col-md-6 text-center p-0"
  style={{
    width: "540px",
    height: "500px",
    overflow: "hidden",
    borderRadius: "20px",
  }}
>
  <img
    src="./test.png"
    alt="Lavender"
    style={{
      // width: "100%",
      // height: "100%",
      width: "600px",
    height: "500px",
      objectFit: "cover",
       display: "block", // 🔥 important pour enlever espace inline
      margin: 0,
      padding: 0,
          borderRadius: "15px",

    }}
  />
</div>
      </div>

      {/* COMMENTS */}
      <h2
        // className="text mb-4"
        className="animated-text" style={{ color: "#6A5188" }}>

        Comments
      </h2>

      {comments.map((c, index) => (
        <div key={index} className="mb-3">
          <p style={{ marginBottom: "5px" }}>{c.text}</p>
          <p style={{ color: "#6A5188" }}>— {c.name}</p>
          <hr />
        </div>
      ))}

      {/* FORM */}
      <div className="mt-5">
        {/* <h2 style={{ color: "#6A5188" }}> */}
               <h2 className="animated-text" style={{ color: "#6A5188" }}>

          Leave a Comment
        </h2>

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
            <label>Comment</label>
            <textarea
              rows="4"
              className="form-control"
              style={{ width: "50%" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              // backgroundColor: "#c615de",
              // color: "white",
              marginBottom: "20px",
                            marginTop: "10px",

            }}
          >
            <span>Post Comment</span>
          </button>
        </form>
      </div>
    </div>
  );
}