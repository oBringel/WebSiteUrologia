import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface Comentario {
  id: number;
  autor: string;
  texto: string;
}

const comentarios: Comentario[] = [
  {
    id: 1,
    autor: "Stephanie Figueiredo ",
    texto:
      "O Dr. Daniel foi muito atencioso no atendimento e explicou / esclareceu todas as minhas dúvidas. O atendimento foi para o meu filho criança. Dr. muito calmo. Continuaremos os atendimentos com ele. ",
  },
  {
    id: 2,
    autor: " Antônio Gabriel ",
    texto:
      "Fui muito bem atendido, Dr. Daniel me passou muita tranquilidade, muito atencioso, um excelente profissional.",
  },
  {
    id: 3,
    autor: "Ubirajara Moreira ",
    texto:
      "Médico respeitoso, ético, profissional e bem explicativo, dando alternativa de adequada para a sua realidade.",
  },

  {
    id: 5,
    autor: "Sarah Vidal",
    texto:
      "Muito atencioso, detalhista. Explica tudo nos mínimos detalhes! muito bom mesmo! ",
  },
  {
    id: 6,
    autor: "RAIMUNDO VIEIRA",
    texto:
      "MEDICO COMPETENTE ,ATENCIOSO ,EFICAZ NA PRESCRIÇÃO DO REMEDIO",
  },
  {
    id: 7,
    autor: " Alexsandra Nunes",
    texto:
      "Fui apenas para buscar uma guia médica, porém me surpreendeu durante a consulta. Tirou todas as dúvidas, meu esposo foi analisado no consultório mesmo. Passou vários exames pra fazer uma investigação profunda.",
  },
  {
    id: 8,
    autor: "Getulio",
    texto:
      "Um médico muito diferenciado na questão da atenção e profissionalismo. Um ser humano digno de ser chamado de doutor .! ",
  },
  {
    id: 9,
    autor: "Cinthia",
    texto:
      "Marquei para meu esposo e ele e eu gostamos muito do dr. Daniel. Atencioso, escuta o paciente com calma, profissional excelente.",
  },
  {
    id: 10,
    autor: "Gabriel Barroso",
    texto:
      "Excelente primeiro atendimento. Simpático e bastante simples conduzindo explicações de cunho técnico. Ótimo profissional. ",
  },
];

const Message: React.FC = () => {
  const [expandido, setExpandido] = useState<Set<number>>(new Set());

  const toggleExpandir = (id: number) => {
    setExpandido((prev) => {
      const newSet = new Set(prev);
      if(newSet.has(id)){
    newSet.delete(id)
      }else{
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className=" w-full h-full my-5 bg-gray-50  p-5">
    <div className="flex flex-1 justify-center items-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold p-4 uppercase">Depoimentos</h1>
    </div>

    <div className="w-full  flex items-center justify-center p-6 ">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="w-full  max-w-5xl 2xl:max-w-7xl  h-auto "
      >
        {comentarios.map(({ id, autor, texto }) => {
          const isExpandido = expandido.has(id); 
          const limite = 150;
          const textoExibido =
            isExpandido || texto.length <= limite
              ? texto
              : texto.slice(0, texto.lastIndexOf(" ", limite)) + "...";

          return (
            <SwiperSlide className="" key={id}>
              <div className="bg-white   shadow-lg rounded-lg p-5 w-full  border border-gray-200 transition-transform transform">
                <div className="flex items-center  space-x-4 ">
                  <img
                    src={`https://ui-avatars.com/api/?name=${autor.replace(" ", "+")}&background=random`}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full border border-gray-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{autor}</h3>
                </div>
                <p className="text-gray-700 mt-3">{textoExibido}</p>
                {texto.length > limite && !isExpandido && (
                    <button
                      className="mt-2 text-blue-600  hover:text-blue-800 transition-all font-medium"
                      onClick={() => toggleExpandir(id)}
                    >
                      {" "}
                      Ler mais ▼
                    </button>
                  )}
                  {isExpandido && texto.length > limite && (
                    <button
                      className="mt-2 text-blue-600  hover:text-blue-800 transition-all font-medium"
                      onClick={() => toggleExpandir(id)}
                    >
                      Ler menos ▲
                    </button>
                  )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);
};

export default Message;
