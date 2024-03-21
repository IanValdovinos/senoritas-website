import './App.css';
import React from "react";

// Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// Pages
import Home from "./pages";
import About from "./pages/about";
import Menu from './pages/menu';
import Catering from './pages/catering';
import Contact from './pages/contact';
import Shop from './pages/shop';

// Components
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import EasyAccessBar from './components/EasyAccessBar';

function App() {
  return (
    <div>
      {/* ----------------------- Fonts -------------------------- */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&display=swap" rel="stylesheet"/>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet"></link>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Neucha&family=Walter+Turncoat&display=swap" rel="stylesheet"></link>

      <Router>
          {/* Navigation Bar */}
          <Navbar />
          <EasyAccessBar />
          
          {/* React Router Dom  */}
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
          </Routes>

          {/* Footer */}
          <Footer />
      </Router>
    </div>
  );
}

export default App;
