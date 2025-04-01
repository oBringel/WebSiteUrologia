import React from "react";

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
    <div className="w-full h-full flex flex-col 2xl:flex-row  items-center justify-around  2xl:justify-evenly gap-5 2xl:gap-10 p-6">
      
      {/* Seção Sobre Mim */}
      <div className="w-full  2xl:w-1/2 h-screen 2xl:max-h-[750px]  contrast-130 bg-cover bg-center p-6 text-justify text-white rounded-lg shadow-lg flex flex-col justify-center items-start " 
        style={{ backgroundImage: "url('/img/foto-cirurgia.png')", backgroundColor: "#1C1C1C" }}>
            

        <h1 className="my-2 text-3xl 2xl:text-4xl">Sobre Mim</h1>
        <p className="my-2 text-2xl">Olá, Seja bem-vindo</p>
        <p className="my-2 text-lg lg:text-xl">
          Meu nome é Daniel Gabriele Sucupira - Urologista formado pelo hospital das clínicas da Faculdade de Medicina da USP, onde mantenho vínculo até os dias atuais como doutorando.
        </p>
        <p className="my-2 text-lg lg:text-xl">
          A Urologia está no meu sangue e faz parte da minha história. É meu ofício e minha arte. Lugar para alívio do sofrimento humano, de cuidado e atenção.
        </p>
            </div>

      {/* Seção Área de Atuação */}
      <div className=" md:w-full 2xl:w-1/4 h-full w-full  p-6 rounded-lg shadow-lg flex flex-col items-center">
        <p className=" text-2xl lg:text-2xl font-bold mb-4">Área de atuação</p>
        <ul className="space-y-1 2xl:space-y-2  grid md:grid-cols-2 2xl:grid-cols-1 gap-x-25  px-8 rounded-2xl">
          {areaDeAtuacao[0].services
            .slice()
            .sort((a, b) => a.localeCompare(b)) // Ordena pelo tamanho do texto
            .map((service, index) => (
              <li key={index} className="text-lg md:text-md xl:text-xl">
                {service}
              </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default Services;
