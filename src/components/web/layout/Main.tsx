import React from "react";
import drFoto from "../../../../public/img/foto-dr-Photoroom.png";

const Main: React.FC = () => {
  const sobreDr = [
    {
      nome: "Dr. Daniel Gabriele Sucupira",
      especializacao: "Médico Urologista",
      crmSP: "CRM-SP 171.495 RQE-SP 90.508",
      crmCE: "CRM-CE 15186 RQE-CE 13.959",
      areaDeAtuacao:
        "Área de Atuação: Cirurgia Robótica e Minimamente Invasiva",
    },
  ];

  return (
    <div className=" relative w-full h-full max-w-screen overflow-hidden    bg-center bg-cover " >
      <div className="w-full absolute contrast-105   opacity-95 h-full bg-center bg-cover bg-[url(../../public/img/foto-complemento.jpg)]">
          <div className="h-screen bg-black opacity-60
          ">
          </div>
      </div>
      <div className=" flex    justify-center   items-center lg:justify-evenly h-[calc(100vh-15vh)] md:h-[calc(100vh-13vh)] xl:h-[calc(100vh-10vh)]             ">
        <div className=" absolute lg:relative flex flex-col gap-3  z-1 lg:z-1 py-3 px-5 lg:p-10 text-white">
          {sobreDr.map((dr, id) => (
            <div className="" key={id}>
            
              <h1 className="text-center  text-3xl font-bold    md:text-3xl lg:text-4xl 2xl:text-5xl">
                {dr.nome} | {dr.especializacao}
              </h1>
              <p className="text-center text-lg font-bold md:text-xl lg:text-2xl">
                {dr.areaDeAtuacao}
              </p>
              <p className="text-center font-bold  text-md md:text-lg ">
                {dr.crmSP} | {dr.crmCE}
              </p>
            </div>
          ))}
          
          <div className="mt-5 flex items-center justify-center ">
            <a
              className=" transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 
                       border-3 hover:border-sky-500    font-bold  text-center text-2xl  rounded-md bg p-3 hover:bg-sky-500
                       sky-800  border-sky-500 "
              href="https://api.whatsapp.com/send?phone=558581311038"
            >
              Agendar consulta
            </a>
          </div>
        </div>

        {/** Desktop*/}
        <div className=" z-0 flex  justify-center items-center  w-full  h-full   2xl:hidden max-w-md max-h-lg ">
          
          <img
            className=" contrast-110  hidden lg:block  w-auto h-full md:hover:scale-105 transition-all"
            src={drFoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
