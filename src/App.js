
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink ,Link} from "react-router-dom";import Story from './pages/Story';
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';
import Wellness from './pages/Wellness';
import "./style/App.css";
import { Carousel } from 'react-bootstrap';
import 'animate.css';
import Decor from './pages/Decor';
import Apothecary from './pages/Apothecary'
  function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#E4E2DE", color:"#1B1C1A" }}>

        {/* Navbar */}
        <div className="container-fluid py-3" style={{ backgroundColor: "#fcfcfc" }}>
          <div className="d-flex justify-content-between align-items-center">

            {/* Logo (Left) */}
            <div style={{ color: "#c615de", fontStyle: "italic", display: 'flex',
               alignItems: 'center', gap: '10px' }}>
<img src="/logo.png" alt="logo" width="40" className="logo-anim" />
 <h5 className="animate__animated animate__pulse animate__infinite">
    Lavender Dream
  </h5>           
{/* <img src="/logo.png" alt="logo" width="40" className="logo-anim" /> */}
            </div>

            {/* Menu (Center) */}
            <ul className="nav">
      
<li className="nav-item">
  <Link
    className="nav-link text-dark"
    to="/shop"
    style={{
      color:"#1B1C1A",
      color: window.location.pathname === "/shop" ? "#1B1C1A" : "#477f10",
      fontWeight: window.location.pathname === "/story" ? "bold" : "normal",
      transition: "color 0.2s"
    }}
    onClick={() => {
      setTimeout(() => {
        const el = document.getElementById("shop");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50); // petit délai pour attendre que le composant soit rendu
    }}
  >
    Shop
  </Link>
</li>
            
      
<li className="nav-item">
  <Link
    className="nav-link text-dark"
    to="/story"
    style={{
      color: window.location.pathname === "/story" ? "#1B1C1A" : "#6A5188",
      fontWeight: window.location.pathname === "/story" ? "bold" : "normal",
      transition: "color 0.2s"
    }}
    onClick={() => {
      setTimeout(() => {
        const el = document.getElementById("story");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50); // petit délai pour attendre que le composant soit rendu
    }}
  >
    Our Story
  </Link>
</li>
              

      
<li className="nav-item">
  <Link
    className="nav-link text-dark"
    to="/contact"
    style={{
      color: window.location.pathname === "/contact" ? "#1B1C1A" : "#9dcd6d",
      fontWeight: window.location.pathname === "/contact" ? "bold" : "normal",
      transition: "color 0.2s"
    }}
    onClick={() => {
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50); // petit délai pour attendre que le composant soit rendu
    }}
  >
    Contact
  </Link>
</li>
            </ul>

            {/* Right Side (Icons / Profile) */}
            <div className="d-flex gap-3">
              {/* <span>🛍️</span> */}
              {/* <span>👤</span> */}
 <img src="/user.png" alt="logo" width="30" /> 
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{backgroundColor:"#c615de", height:4}}></div>

        {/* Hero Section */}
        {/* <div className="position-relative">
          <img src="/farmerLavender.png" alt="Main" className="img-fluid w-100" />
          <div
            className="position-absolute"
            style={{
              top: "60%",
              left: "10%",
              transform: "translateY(-50%)",
              maxWidth: "400px",
              color:"#4A454E"
            }}
          >
            <h6>Est. 2024 </h6>
            <h1 style={{color:"#c615de"}}>Lavender Dream</h1>
            <p style={{marginLeft:"30px"}}>Lavender for Your Home</p>
            <p>Elevate your daily rituals with our artisan-grown</p>
            <p>botanical collection, crafted to bring calm into every</p>
            <p>corner of your sanctuary.</p>

            <button style={{ borderRadius: '20px', padding: '10px 30px', backgroundColor: '#c615de', color: '#fff' }}>
              Explore Collection
            </button>
          </div> */}
        {/* </div> */}

   

    <Carousel>
      <Carousel.Item>
        <img
      className="d-block w-100"
          src="/1.png"
          alt="First slide"
            style={{ height: "500px", width: "80%", objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
      className="d-block w-100"
          src="/imag2.png"
          alt="Second slide"
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
  <img
          src="/imag3.png"
      className="d-block w-10"
            style={{ height: "550px", width: "100%", objectFit: "cover" }}
/>
          </Carousel.Item>
 <Carousel.Item>
  <img
          src="/6.png"
      className="d-block w-10"
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
/>
          </Carousel.Item>
   
  
  <Carousel.Item>
  <img
          src="/imag4.png"
      className="d-block w-10"
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
/>
          </Carousel.Item>
            <Carousel.Item>
  <img
          src="/imag5.png"
      className="d-block w-10"
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
/>
          </Carousel.Item>
       </Carousel>
  

        {/* Routes */}
        <Routes>

          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/apothecary" element={<Apothecary />} />

          {/* Optionnel : rediriger la racine vers Shop */}
          <Route path="/" element={<Shop />} />
        </Routes>
<div >

</div>
      </div>

    </Router>
  );
}

export default App;