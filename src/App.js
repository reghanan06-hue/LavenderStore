import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Story from './pages/Story';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Wellness from './pages/Wellness';
import Decor from './pages/Decor';
import Apothecary from './pages/Apothecary';
import Account from './pages/Account'
import Footer from './pages/Footer';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServiceTerms from "./pages/ServiceTerms";
import DetailProduct from "./pages/DetailProduct";

import "./style/App.css";
import { Carousel } from 'react-bootstrap';
import 'animate.css';
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#E4E2DE", color: "#1B1C1A" }}>

        {/* Navbar */}
        <div className="container-fluid py-3" style={{ backgroundColor: "#fcfcfc" }}>
          <div className="d-flex justify-content-between align-items-center">

            {/* Logo */}
            <div style={{
              color: "#c615de",
              fontStyle: "italic",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <img src="/logo.png" alt="logo" width="40" className="logo-anim" />
              <h5 className="animate__animated animate__pulse animate__infinite">
                Lavender Dream
              </h5>
            </div>

            {/* Menu */}
            <ul className="nav">
              <li className="nav-item">
                <Link className=" nav-link text-dark" to="/shop">Shop</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/story">Our Story</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Icon */}
            <div className="icon-circle">
              <FaUser />
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{ backgroundColor: "#c615de", height: 4 }}></div>

        {/* Carousel */}
        <Carousel>

          <Carousel.Item>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src="/FRi.png"
                alt="Lavender Dream Collection"
                style={{ height: "500px", objectFit: "cover" }}
              />

              {/* Left Text */}
              <div
                className="position-absolute text-start"
                style={{
                  top: "80%",
                  left: "5%",
                  transform: "translateY(-50%)",
                  color: "#5f076b",
                }}
              >
                <h6 style={{ fontWeight: "200" }}>
                  WELCOME TO THE WORLD OF
                </h6>
                <h3 style={{ fontSize: "55px", lineHeight: "0.9" }}>
                  LAVENDER <br /> DREAM
                </h3>
              </div>

              {/* Center Text */}
              <div
                className="position-absolute text-center"
                style={{
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#5f076b",
                 
           }}
              >
                <h6>AN EXCLUSIVE COLLECTION</h6>
                <h6>FOR BODY & MIND</h6>
              </div>

              {/* Right Text */}
              <div
                className="position-absolute text-end"
                style={{
                  top: "78%",
                  right: "5%",
                  transform: "translateY(-50%)",
                  color: "#b08d57",
                }}
              >
                <h1 style={{ fontSize: "25px" }}>
                  SPRING 2026 <br /> COLLECTION
                </h1>
              </div>
            </div>
          </Carousel.Item>

          {/* Slides */}
          {/* <Carousel.Item>
            <img className="d-block w-100" src="/1.png" alt="slide"
             style={{ height: "500px", objectFit: "cover" }} />
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <img className="d-block w-100" src="/imag2.png" 
            alt="slide" style={{ height: "500px", objectFit: "cover" }} />
            <h1>Est. 2024</h1>
          </Carousel.Item> */}
<Carousel.Item>
  <img
    className="d-block w-100"
    src="/imag3.png"
    alt="slide"
    style={{ height: "500px", objectFit: "cover" }}
  />

  <Carousel.Caption>
    
    <h1 style={{color:"#56035c"}}> EST. 2024</h1>

<p className="animated-textCol"  style={{color:"#f3d0f3",fontWeight: "500" }}>Fresh lavender from our farm, grown with care and harvested at its peak</p>  </Carousel.Caption>
</Carousel.Item>

 <Carousel.Item>
            <img className="d-block w-100" src="/imag5.png" alt="slide" 
            style={{ height: "500px", objectFit: "cover" }} />
            


          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/imag2.png" 
            alt="slide" style={{ height: "500px", objectFit: "cover" }} />
              <Carousel.Caption>

            <h4 style={{color:"#56035c",alignSelf:"center",
              fontWeight: "500",marginTop:"20px" ,marginLeft:"50px"}}>

                          NATURE PRODUCTS </h4>
                    <p className='animated-textCol' style={{color:"#f3d0f3",fontWeight: "500" }}>
                      Lavender Dream natural products for mind and body</p>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/6.png" alt="slide" 
            style={{ height: "500px", objectFit: "cover" }} />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/imag4.png" alt="slide"
             style={{ height: "500px", objectFit: "cover" }} />
          </Carousel.Item>

         


        </Carousel>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/apothecary" element={<Apothecary />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/service-terms" element={<ServiceTerms />} />
          <Route path="/product-detail" element={<DetailProduct />} />
          <Route path="/account" element={<Account />} />

        </Routes>

        {/* Footer */}
        <div>
          <div style={{ backgroundColor: "#c615de", height: 4 }}></div>
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;