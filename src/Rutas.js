import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactoPsico from "./pages/ContactoPsico";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactoPsico />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rutas;
