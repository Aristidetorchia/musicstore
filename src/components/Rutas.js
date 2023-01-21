import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import NavBar from "./NavBar";
import Carrrito from "./Carrito";
import Error from "./Error";
import Footer from "./Footer";

const Rutas = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/carrito" element={<Carrrito />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default Rutas;
