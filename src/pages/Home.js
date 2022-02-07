import react from "react";
import Navigation from "../components/Navigation";
import psico from "../imgs/psico.png";

import Servicios from "./Servicios";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";

function Home() {
  return (
    <>
      <div className="pt-16 w-screen" name="home">
        <div className="w-screen grid place-items-center my-8">
          <h1 className="font'bold titulo">Lic. Karina Gonzales Corral</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <img alt="psico" src={psico} height="200" width="500" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Recuerda... <br /> Mente <b>sana</b>, cuerpo <b>sano</b>
          </h1>
        </div>
      </div>

      <Servicios />
      <Nosotros />
      <Contacto />
      <Navigation />
    </>
  );
}

export default Home;
