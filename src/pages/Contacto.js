import react from "react";
import TarjContacto from "../components/TarjContacto";

function Contacto() {
  return (
    <>
      <h1 className="titulo pt-16 font-bold" name="contacto">
        Contacto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 mt-4">
        <div>
          <div className="text-normal">

          <p className="font-bold">
            Karina Gonzalez Corral
            <br />
            Psicóloga, Lic. Psicología
          </p>
          <p>
            <b>Dirección:</b>
            <br />
            Blvd. 18 sur 4525 Villa Carmel C.P 4604973
          </p>
          <p>
            <b>Teléfono:</b>
            <br />
            2223233275
          </p>
          </div>
        </div>
        <div className="w-5/6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.196613926031!2d-98.1981482!3d19.0175556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b758476c35e6154!2sKARINA%20GONZ%C3%81LEZ%20CORRAL!5e0!3m2!1ses-419!2smx!4v1644290430570!5m2!1ses-419!2smx"
            // width={600}
            // height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
      <TarjContacto />
    </>
  );
}

export default Contacto;
