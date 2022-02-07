import react from "react";
import TarjContacto from "../components/TarjContacto";

function Contacto() {
  return (
    <>
      <h1 className="titulo pt-16" name="contacto">
        Contacto
      </h1>
      <div className="grid grid-cols-1 md: grid-cols-2">
        <div>
          <p className="font-bold">
            Karina Gonzalez Corral
            <br />
            Psicologo, Lic. Psicologia
          </p>
          <p>
            <b>Direccion:</b>
            <br />
            Blvd. 18 sur 4525 Villa Carmel C.P 4604973
          </p>
          <p>
            <b>Teléfono:</b>
            <br />
            2223233275
          </p>
        </div>
        <div>img</div>
      </div>
      <TarjContacto />
    </>
  );
}

export default Contacto;
