import react from "react";
import { Link } from "react-scroll";
import Navigation from "../components/Navigation";
import psico from "../imgs/psicobl.png";
import brain from "../imgs/brain.png";

import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";

function Home() {
  return (
    <>
      <div className="pt-8 w-screen" name="home">
        <div className="bg-portada bg-cover bg-center h-screen">
          <div className="w-screen grid place-items-center my-8">
            <h1 className="font-bold pt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
              Lic. Karina González Corral
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <h1 className="font-bold mt-8 col-start-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl backdrop-blur-sm bg-white/20 rounded-l-lg p-1">
              Recuerda... <br />{" "}
              <b className="text-psico rounded-lg pl-1">Mente </b>sana,{" "}
              <b className="text-psico rounded-lg pl-1">cuerpo </b>sano.
            </h1>
          </div>
          <div className="w-full grid place-items-center mt-64">
            <div className="flex bg-psico rounded-lg text-white items-center p-4">
              <Link
                activeClass="active"
                className="text-3xl mr-2"
                to="contacto"
                spy={true}
                smooth={true}
                duration={500}
              >
                Agenda una cita
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 place-items-center"> */}
        {/*   <div className="w-1/3"> */}
        {/*     <img alt="psico" src={brain} className="" /> */}
        {/*   </div> */}
        {/*   </h1> */}
        {/* </div> */}

        <div className="p-6">
          <Servicios />
          <Nosotros />
          <Contacto />
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default Home;
