import React from "react";
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const Services: React.FC = () => {
  const areaDeAtuacao = [
    {
      services: [
        "Cirurgia Robótica",
        "HoLEP",
        "Cirurgia Laparoscópica",
        "Tumor de Próstata",
        "Tumor de Rim",
        "Tumor de Bexiga",
        "Tumor de Adrenal",
        "Cálculo Renal e Ureteral",
        "Hiperplasia Benigna da Próstata",
        "Varicocele",
        "Infecção urinária",
        "Estudo Urodinâmico",
        "Urologia Pediátrica",
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col 2xl:flex-row   items-center justify-around  2xl:justify-evenly gap-5 2xl:gap-10 p-6">
      
      {/* Seção Sobre Mim */}
      <div className="w-full  2xl:w-1/2 md:h-screen 2xl:max-h-[750px]  contrast-130 bg-cover bg-center p-6  text-white rounded-lg shadow-lg flex flex-col justify-center items-start " 
        style={{ backgroundImage: "url('/img/foto-cirurgia.png')", backgroundColor: "#1C1C1C" }}>
            

        <h1 className="my-2 text-xl font-bold 2xl:text-2xl text-gray-200">Sobre Mim</h1>
        <p className="my-2 text-2xl font-bold 2xl:text-3xl text-gray-200">Olá, Seja bem-vindo.</p>
        <p className="my-2 text-md lg:text-xl text-gray-200 text-justify">
          Meu nome é Daniel Gabriele Sucupira - Urologista formado pelo hospital das clínicas da Faculdade de Medicina da USP, onde mantenho vínculo até os dias atuais como doutorando.
        </p>
        <p className="my-2 text-sm lg:text-xl  text-gray-200 text-justify">
          A Urologia está no meu sangue e faz parte da minha história. É meu ofício e minha arte. Lugar para alívio do sofrimento humano, de cuidado e atenção.
        </p>
            </div>

      {/* Seção Área de Atuação */}
      <div className="  md:w-full  2xl:w-1/4 h-full w-full  p-6 rounded-lg shadow-lg flex flex-col items-center ">
        <p className=" text-xl lg:text-3xl 2xl:text-3xl font-bold mb-4">Área de atuação</p>
        <ul className=" space-y-1 2xl:space-y-2  grid md:grid-cols-2 2xl:grid-cols-1 gap-x-25  p-5 rounded-2xl ">
          
          {areaDeAtuacao[0].services
            .slice()
            .sort((a, b) => a.length - b.length) // Ordena pelo tamanho do texto
            .map((service, index) => (
              <li key={index} className="text-md md:text-xl font-extralight  relative">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 top-0" style={{position: "absolute", left:-30,  color: "#FF7F6B"}}/>{service}
              </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default Services;
