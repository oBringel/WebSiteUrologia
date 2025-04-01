import React from "react";


interface Card {
  cardName: string,
  about: string,
  experiencia?: string,
  imgTec?: string,
  imgDed?: string,
  imgPac?: string,
}
const CardList: React.FC = () => {



  const cards: Card[] = [

    {
      cardName: "Tecnologia",
      about: "Cirurgia Robótica e Minimamente Invasiva, Laser e Endourologia, Apps em saúde",
      imgTec: "../../public/img/equipamento.jpeg"
    },
    {
      cardName: "Dedicação",
      about: "Formação Completa em Urologia e Doutorado pela USP, Experiência Internacional, Disponibilidade",
      imgDed: "../../public/img/foto-crianca.jpg"
    },
    {
      cardName: "Foco no paciente",
      about: "Humanização, cuidado integral, decisões compartilhadas, medicina baseada em evidência",
      imgPac: '../../public/img/foto-leito.jpg'
    },
  ];

  return (
    <div className="w-full h-auto ">
       {/** Cards */}
       
        <div className="flex justify-center my-10 rounded-2xl 2xl:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className=" flex flex-col max-w-auto hover:scale-102   mx-2 my-2 "
              >
                <img
                  src={card.imgTec || card.imgDed || card.imgPac}
                  alt=""
                  className=" transition-all duration-300  "
                />
                {/* Texto */}
                <div className=" h-full  flex flex-col px-3 py-1 rounded-b-md ">
                  <h2 className="text-xl  font-bold text-gray-800">
                    {card.cardName}
                  </h2>
                  <p className="text-md mt-2 lg:text-lg text-gray-600">{card.about}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      
    </div>
  );
};

export default CardList;
