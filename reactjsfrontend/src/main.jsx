import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// React Router
import { BrowserRouter, Routes, Route} from "react-router-dom";
// Styles
import './styles/Header.css';
import './styles/Footer.css';
import './Home.css';


// Components
import Home from "./Home.jsx";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Dashboard from './components/Dashboard.jsx';
import Booking from "./components/Booking.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          {/* Header and Footer appear on every page */}
          <Header />

          {/* Main content changes based on the route */}
          <Routes>
              {/* Home route ("/") -> Home */}
              <Route path="/" element={<Home />} />
               {/* Dashboard route ("/dashboard") -> Dashboard */}
              <Route path="/Dashboard" element={<Dashboard />} />
              {/* Booking route ("/booking") -> Booking */}
               <Route path="/Booking" element={<Booking />} />
              {/* Login route ("/login") --> Login */}
              <Route path="/Login" element={<Login />} />
               {/* SignUp route ("/SignUp") --> Signup */}
              <Route path="/SignUp" element={<SignUp />} />
              {/* About route ("/About") --> About */}
              <Route path="/About" element={<About/>} />
              {/* ContactUs route ("/ContactUs") --> ContactUs */}
              <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>

          {/* Header and Footer appear on every page */}
          <Footer />
      </BrowserRouter>
  </StrictMode>,
)
