import react from "react";
import psico from "../imgs/psicobl.png";

function Nosotros() {
  return (
    <>
      <h1 className="titulo pt-16 font-bold" name="nosotros">
        Nosotros
      </h1>

      <div className="grid gid-cols-1 md:grid-cols-2 place-items-center">
        <img alt="brain" src={psico} height="200" width="200" />
        <p className="text-justify">
          Somos especialistas en ayudar a las personas a conocer, manejar y
          superar problemas mentales y emocionales para un mayor bienestar, en
          la mayoría de los casos la terapia es integral.
        </p>
      </div>
    </>
  );
}

export default Nosotros;
