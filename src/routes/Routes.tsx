import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../components/Home";
import About from "../components/web/layout/About";
import Services from "../components/web/services/Services";
import Experiencia from "../components/web/layout/Experiencia";
import NavBar from "../components/web/layout/NavBar";
import Rodape from "../components/web/layout/Rodape";

const Rotas: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/exeperiencia" element={<Experiencia />}></Route>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
