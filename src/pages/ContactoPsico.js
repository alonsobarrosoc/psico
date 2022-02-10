import React from "react";
import Navigation from "../components/Navigation";
import Contacto from "./Contacto";
import psicow from "../imgs/psicow.png";
import { Link } from "react-router-dom";

function ContactoPsico() {
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-psico text-white relative shadow-sm font-sans"
        role="navigation"
      >
        {" "}
        <img src={psicow} alt="" width="60" className="ml-4" />
        <Link className="mr-4" to="/">Inicio</Link>
      </nav>
      <div className="m-4">
        <Contacto />
      </div>
      {/* <Navigation /> */}
    </>
  );
}

export default ContactoPsico;
