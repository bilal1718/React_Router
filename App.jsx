import React from "react";
import Home from "./Home"
import About from "./About"
import Vans from "./Vans"
import VanDetail from "./VanDetail"
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


