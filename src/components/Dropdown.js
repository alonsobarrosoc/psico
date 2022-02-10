import React from "react";
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen ? "grid grid-rows-4 text-center items-center bg-psico" : "hidden"
      }
    >
      {/* <Link className="p-4 text-white" to = '/'>Inicio</Link> */}
      {/* <Link className="p-4 text-white" to = '/nosotros'>Nosotros</Link> */}
      {/* <Link className="p-4 text-white" to = '/servicios'>Servicios</Link> */}
      {/* <Link className=" p-4 text-white" to = '/contacto'>Contacto</Link> */}

      <Link
        activeClass="active"
        className="home nav-btn p-4 text-white"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        onClick={toggle}
      >
        Inicio
      </Link>

      <Link
        activeClass="active"
        className="servicios nav-btn p-4 text-white"
        to="servicios"
        spy={true}
        smooth={true}
        duration={500}
        onClick={toggle}
      >
        Innovación
      </Link>

      <Link
        activeClass="active"
        className="nosotros nav-btn p-4 text-white"
        to="nosotros"
        spy={true}
        smooth={true}
        duration={500}
        onClick={toggle}
      >
        Nosotros
      </Link>
      <Link
        activeClass="active"
        className="contacto nav-btn p-4 text-white"
        to="contacto"
        spy={true}
        smooth={true}
        duration={500}
        onClick={toggle}
      >
        Contacto
      </Link>
    </div>
  );
}
export default Dropdown;
