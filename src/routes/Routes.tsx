import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "../components/Home";
import NavBar from "../components/web/layout/NavBar";
import Rodape from "../components/web/layout/Rodape";

const Rotas: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
