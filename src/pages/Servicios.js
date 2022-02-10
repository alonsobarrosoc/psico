import react, { useState } from "react";
import brain from "../imgs/brain.png";

function Servicios() {
  const [medAH, setMedAH] = useState(false);
  const [est, setEst] = useState(false);
  return (
    <>
      <h1 className="titulo pt-16 font-bold" name="servicios">
        Innovación en consulta
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="grid place-items-center w-full mt-6 h-1/4">
              <button
                className="btn-servicio"
                type="button"
                onClick={() => setMedAH(true)}
              >
                Mediciana Alternativa{" "}
                <p className="text-sm font-normal">Leer más</p>
              </button>
            </div>
            {medAH ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Medicina Alternativa
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setMedAH(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <ul className="space-y-4">
                          <ul className="font-bold">Medicina natural</ul>
                          <h1 className="pl-2">
                            Utilizamos medicina natural para el diagnóstico,
                            tratamiento y prevención de trastornos de salud que
                            permite a tu cuerpo sanar de manera natural.
                          </h1>
                          <ul className="font-bold">Aromaterapia</ul>
                          <h1 className="pl-2">
                            Es un tipo de medicina el cual utiliza aceites
                            esenciales naturales para tratar distintos
                            padecimientos sin la utilización de métodos
                            agresivos.
                          </h1>
                        </ul>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-fisio background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setMedAH(false)}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>

          {/* 2222222 */}
          <div>
            <div className="grid place-items-center w-full mt-6 h-1/4">
              <button
                className="btn-servicio"
                type="button"
                onClick={() => setEst(true)}
              >
                Equipo Especializado{" "}
                <p className="text-sm font-normal">Leer más</p>
              </button>
            </div>
            {est ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Equpio Especializado{" "}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setEst(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <ul className="space-y-4">
                          <ul className="font-bold">
                            EMT
                            <div className="font-normal pl-4">
                              <li>
                                La Estimulación Magnética Transcraneal (EMT) es
                                un procedimiento no invasivo, que utiliza campos
                                magnéticos para estimular las células nerviosas
                                en el cerebro con el fin de mejorar algunos
                                padecimiento como:
                                <div className="pl-4">
                                  <ul>
                                    <li>Ansiedad</li>
                                    <li>Depresión</li>
                                    <li>Transtornos del sueño</li>
                                    <li>
                                      Trastorno por Déficit de Atención (TDA)
                                    </li>
                                    <li>Hiperactividad</li>
                                    <li>
                                      Trastorno Obsesivo Compulsivo (TOC)
                                    </li>
                                    <li>
                                      Trastorno del Espectro Autista (TEA)
                                    </li>
                                    <li>
                                      Estimulación de la memoria y lenguaje
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </div>
                          </ul>

                          <ul className="font-bold">
                            Analizador de Diagnóstico de salud cuántica de Bio
                            resonancia
                            <div className="pl-4 font-normal">
                              <li>
                                Este dispositivo mide las frecuencias que emiten
                                las distintas partes del cuerpo y las analiza
                                para diagnosticar todo tipo de padecimientos.
                              </li>
                            </div>
                          </ul>
                        </ul>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-fisio background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setEst(false)}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
        <img alt="brain" src={brain} height="200" width="200" />
      </div>
      {/* 333333 */}
    </>
  );
}

export default Servicios;
