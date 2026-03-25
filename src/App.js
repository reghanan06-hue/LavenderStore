
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Story from './pages/Story';
import Shop from './pages/Shop'; 
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#E4E2DE", color:"#1B1C1A" }}>

        {/* Navbar */}
        <div className="container-fluid py-3" style={{ backgroundColor: "#fcfcfc" }}>
          <div className="d-flex justify-content-between align-items-center">

            {/* Logo (Left) */}
            <div style={{ color: "#c615de", fontStyle: "italic", display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.png" alt="logo" width="40" />
              Lavender Dream
            </div>

            {/* Menu (Center) */}
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/story">Our Story</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Right Side (Icons / Profile) */}
            <div className="d-flex gap-3">
              <span>🛍️</span>
              <span>👤</span>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{backgroundColor:"#c615de", height:10}}></div>

        {/* Hero Section */}
        <div className="position-relative">
          <img src="/farmerLavender.png" alt="Main" className="img-fluid w-100" />
          <div
            className="position-absolute"
            style={{
              top: "65%",
              left: "10%",
              transform: "translateY(-50%)",
              maxWidth: "400px",
              color:"#4A454E"
            }}
          >
            <h1 style={{color:"#6A5188"}}>Lavender Dream</h1>
            <p style={{marginLeft:"30"}}>Lavender for Your Home</p>
            <p>Elevate your daily rituals with our artisan-grown</p>
            <p>botanical collection, crafted to bring calm into every</p>
            <p>corner of your sanctuary.</p>

            <button style={{ borderRadius: '20px', padding: '10px 30px', backgroundColor: '#6A5188', color: '#fff' }}>
              Explore Collection
            </button>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optionnel : rediriger la racine vers Shop */}
          <Route path="/" element={<Shop />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;