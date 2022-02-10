import React, { Fragment, useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import logo from "../imgs/psicow.png";
import { Link } from "react-scroll";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Navigation = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("resize");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="fixed top-0 w-screen">
      <nav
        className="flex justify-between items-center h-16 bg-psico text-white relative shadow-sm font-sans"
        role="navigation"
      >
        <Link to="/" className="">
          <img width="60" alt="logo" src={logo} className=" ml-4" />
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              className="bg-cyan-600"
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="pr-8 md:block hidden">
          <Link
            activeClass="active"
            className="home nav-btn"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            activeClass="active"
            className="servicios nav-btn"
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
          >
            Innovación
          </Link>
          <Link
            activeClass="active"
            className="nosotros nav-btn"
            to="nosotros"
            spy={true}
            smooth={true}
            duration={500}
          >
            Nosotros
          </Link>

          <Link
            activeClass="active"
            className="contacto nav-btn"
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </div>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
};
export default Navigation;
