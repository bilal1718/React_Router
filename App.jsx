import React from "react";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetail from "./Pages/VanDetail"
import "./index.css"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "./server"

export default function App(){
  return(
    <BrowserRouter>
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
  </BrowserRouter>
  )
}

