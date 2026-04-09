
import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Story() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

const fetchComments = async () => {
  try {
    const res = await axios.get("http://localhost:5000/story");

    setComments(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchComments();
}, []);
  useEffect(() => {
     const stored = localStorage.getItem("comments");
    if (stored) {
      setComments(JSON.parse(stored));
    } else {
      // commentaires par défaut
      const defaultComments = [
        { id: 1, name: "Jannet", message: "I liked your story. Everything is so well written!" },
        { id: 2, name: "Madina", message: "I really like the calm and relaxing feeling of your story, it matches perfectly with lavender" },
        { id: 3, name: "Ibrahim", message: "Wow, this really makes me feel calm, like I can almost smell the lavender" },
        { id: 4, name: "Adam", message: "Such beauty! Just found out about you! I love lavender!" }
      ];
      setComments(defaultComments);
      localStorage.setItem("comments", JSON.stringify(defaultComments));
    }
      // Scroll vers le haut quand cette page est affichée
      window.scrollTo({ top: 0, behavior: "smooth" });
       
    }, []); // [] = exécute uniquement au montage du composant

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !text) {
    return alert("Name and Comment are required");
  }

  try {
    // POST le commentaire vers le backend
    const res = await fetch("http://localhost:5000/story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, text }),
    });

    // Vérifie si le backend renvoie une erreur
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || "Server error");
    }

    const data = await res.json();
    console.log("Comment added:", data);

    // Réinitialiser le formulaire
    setName("");
    setEmail("");
    setText("");

    // Ajouter le nouveau commentaire sous les existants
    // setComments([...comments, { ...data, message: data.text }]);
    setComments([...comments, { id: data._id, name: data.name, message: data.text }]);

    alert("Comment posted!");
  } catch (err) {
    console.error(err);
    alert("Error posting comment: " + err.message);
  }
};
    
  
  return (
    <div id="story" className="container mt-4  " >
      <h1 style={{ color: "#c615de",marginLeft:"54px" }}>Our Story</h1>
      <p style={{ marginLeft: "56px", marginTop:"0px" }}>Lavender Dream</p>

      {/* <div className="position-relative"> */}
     
         <div className="  position-relative story-image"
          style={{ maxWidth: "1000px", margin: "10 auto" }}>
  
  {/* IMAGE   */}

  
  <img 
    src="./test.png"
    className="w-100 "
    alt="lavender"
    style={{
      height: "754px",
      objectFit: "fill",
      borderRadius: "25px",

    }}
  />

  {/* TEXT OVER IMAGE   */}
  <div
  className="  animated-frame position-absolute top-0 start-0 w-200 h-200 d-flex 
    align-items-center justify-content-center"
  >
    <div
      style={{
        width: "98%",
        height: "25%",
        // backgroundColor: "rgba(255,255,255,0.7)",
        backgroundColor: "rgba(255,255,255,0.5)" , // moitié transparent
padding: "80mm 4mm 4mm 4mm",   
 margin:"20px ",

        borderRadius: "15px",
        overflowY: "auto",
        color: "#4A454E"
     
              

      }}
    >
      <h2 style={{ color: "#6A5188" }}>Lavender Dream</h2>
      <p>Lavender for Your Home</p>

      <p>
  In a world that rarely slows down, Lavender Dream was born from a simple desire — to bring peace back into everyday living.

 It started in quiet fields where lavender grows gently under the sun, nurtured with care and patience. Each stem is hand-harvested at its peak, preserving its natural fragrance and calming essence. What begins in nature is transformed into a collection designed to soothe the senses and elevate your space.

At Lavender Dream, we believe your home should be more than just a place — it should be a sanctuary. A space where the stress of the day softens, where small rituals become moments of calm, and where every breath feels lighter.

 Our artisan-crafted botanical collection is thoughtfully created to blend beauty with tranquility. Whether it’s the subtle scent drifting through your room or the delicate touch of nature in your décor, each piece is made to restore balance and bring warmth into your daily life.

 We are proud to offer a range of natural and organic lavender products, carefully made to respect both your well-being and the environment. From soothing essential oils and handmade candles to dried lavender bundles and home fragrances, every product is created using pure, bio-sourced ingredients.

 Bring the essence of nature into your home.
Discover our collection and experience the calming power of lavender — naturally.

 Because calm isn’t a luxury — it’s something you deserve every day.
      </p>
    </div>
  </div>


        <div className="mb-3" style={{
  alignItems:"center",
  justifyContent:"center"
}}>


<div className="mb-3" style={{ alignItems: "center", justifyContent: "center" }}>
  <h2 className="text-center" style={{ color: "#6A5188" ,marginBottom:"25px",marginTop:"25px"}}>Comments</h2>

  {comments.map((c) => (
  <div key={c.id} style={{ padding: "10px 0" }}>
    <p style={{ margin: 0 }}>{c.text}</p>   {/* affiche le texte du commentaire */}
    <p style={{ margin: "0 0 5px 0", color:"#6A5188" }}>— {c.name}</p>  {/* affiche le nom */}
    <hr />
  </div>
))}
</div>
</div>

       </div>
       <div className="mb-3" style={{
    alignItems:"center",justifyContent:"center", marginLeft:"50px"
   }}>

 <h2 style={{color:"#6A5188"}}>Leave a comment</h2> 
  
  <label>Name</label>
 <input
          type="text"
          className="form-control"
          style={{ width: "50%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
<div className="mb-3">
  <label>Email</label>
   <input
            type="email"
            className="form-control"
            style={{ width: "50%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></div>
<div className="mb-3">
  <label>Comment</label>
 <textarea
            className="form-control"
            rows="4"
            style={{ width: "50%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          /></div>
    <button
          className="btn"
          style={{ backgroundColor: "#c615de", color: "white", marginBottom: "50px" }}
          onClick={handleSubmit}
        > Post comment</button>

</div>
      </div>
  )
}

