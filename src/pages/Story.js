

import React, { useEffect } from 'react'

export default function Story() {
  useEffect(() => {
      // Scroll vers le haut quand cette page est affichée
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []); // [] = exécute uniquement au montage du composant
  return (
    <div id="story" className="container mt-4">
      <h1 style={{ color: "#c615de" }}>Our Story</h1>
      <p style={{ marginLeft: "3px" }}>Lavender Dream</p>

      {/* <div className="position-relative"> */}
      <div className="position-relative story-image">

        <img src="./W1.png" 
        className="img-fluid w-100 rounded"
         alt="lavender" 
           style={{width: "100%",
          height: "1000px",
          objectFit: "cover"
}} />


        {/* TEXT ON IMAGE */}
        <div
        className="img-fluid w-100 "
          style={{
            top: "100%",
            left: "15%",
            transform: "translateY(-40%)",
            maxWidth: "1000px",
            color: "#4A454E",
            backgroundColor: "rgba(255,255,255,0.6)", // optional for readability
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h2 style={{color:"#6A5188"}}>Lavender Dream</h2>
          <p>Lavender for Your Home</p>
          <p>
           In a world that rarely slows down, Lavender Dream was born from a simple desire — to bring peace back into everyday living.

It began in quiet, sunlit fields where lavender is carefully cultivated using natural and sustainable methods. Grown without harmful chemicals, each plant is nurtured with patience and respect for nature. Every stem is hand-harvested at its peak to preserve its pure fragrance, therapeutic properties, and timeless beauty.

What starts in nature is transformed into a refined collection designed to soothe the senses and elevate your space. From the first touch to the final product, every step reflects our commitment to quality, authenticity, and well-being.

At Lavender Dream, we believe your home should be more than just a place — it should be a sanctuary. A space where the stress of the day softens, where small rituals become meaningful moments, and where every breath feels lighter and more peaceful.

Our artisan-crafted botanical collection blends elegance with tranquility. Each product is thoughtfully designed to bring harmony into your daily life, whether through calming scents, natural décor, or self-care rituals inspired by nature.

We proudly offer a range of natural and organic lavender products, including pure essential oils, handmade candles, dried lavender bundles, and home fragrances. Every product is created using bio-sourced ingredients, eco-friendly processes, and sustainable packaging to respect both your well-being and the environment.

Bring the essence of nature into your home. Discover our collection and experience the calming power of lavender — naturally.

Because calm isn’t a luxury — it’s something you deserve every day.


          </p>
        </div>
      </div>

      {/* STORY BELOW IMAGE
      <p className="mt-4">
     In a world that rarely slows down, Lavender Dream was born from a simple desire — to bring peace back into everyday living.

 It started in quiet fields where lavender grows gently under the sun, nurtured with care and patience. Each stem is hand-harvested at its peak, preserving its natural fragrance and calming essence. What begins in nature is transformed into a collection designed to soothe the senses and elevate your space.

At Lavender Dream, we believe your home should be more than just a place — it should be a sanctuary. A space where the stress of the day softens, where small rituals become moments of calm, and where every breath feels lighter.

 Our artisan-crafted botanical collection is thoughtfully created to blend beauty with tranquility. Whether it’s the subtle scent drifting through your room or the delicate touch of nature in your décor, each piece is made to restore balance and bring warmth into your daily life.

 We are proud to offer a range of natural and organic lavender products, carefully made to respect both your well-being and the environment. From soothing essential oils and handmade candles to dried lavender bundles and home fragrances, every product is created using pure, bio-sourced ingredients.

 Bring the essence of nature into your home.
Discover our collection and experience the calming power of lavender — naturally.

 Because calm isn’t a luxury — it’s something you deserve every day.
      </p> */}
      <div>
        <h2 class="text-center" style={{color:"#6A5188"}}>Comments</h2>
        <p>I liked your story. Everything is so well written!</p>
<p>— Jannet </p>
        <hr></hr>
        <p>I really like the calm and relaxing feeling of your story, it matches perfectly with lavender</p>
          <p>— Madina </p>
  <hr></hr>
 <p>Wow, this really makes me feel calm, like I can almost smell the lavender</p> 
        <p>— Ibrahim </p>
  <hr></hr>  
<p> Such beauty! Just found out about you! I love lavender! I will have to. Is it with friends hopefully this summer!       
</p><p>— Adam </p>
<hr></hr>

      </div>
 <h2 style={{color:"#6A5188"}}>Leave a comment</h2> 
   <div className="mb-3">

  <label>Name</label>
  <input type="text" className="form-control"  style={{ width: "50%" }} />
</div>
<div className="mb-3">
  <label>Email</label>
<input type="email" className="form-control" style={{ width: "50%" }} />
</div>
<div className="mb-3">
  <label>Comment</label>
  <textarea className="form-control" rows="4"   style={{ width: "50%" }}/>
</div>
<button className="btn" style={{backgroundColor:"#c615de", color:"white",marginBottom:"50px"}}>Post comment</button>
</div>
  )
}