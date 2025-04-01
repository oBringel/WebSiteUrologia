import React from "react";
import { FileText, GraduationCap } from "@phosphor-icons/react";
const Experiencia: React.FC = () => {
  const experiencia  = [
    {
      id: 1,
      h3: "Experiência internacional",
      p: [
        "Urologia - Fondazione IRCCS Ca' Granda Ospedale Maggiore Policlinico Milano/IT",
        "Urologia Robótica - Orsi Academy Melle/BE",
        "Urologia Robótica - Memorial Sloan Kettering Câncer Center  New York/NY",
        "Urologia Robótica - University of Southern California  Los Angeles/CA",
        "Urologia e Medicina Materno-fetal - University of Miami School of Medicine / FL​",
      ],
    },
  ];
  const formacao = [
    {
      id: 2,
      h3: "Formação",
      p: [
        "Pós-Graduação em Cirurgia Robótica I`DOR Uro-Oncologia - Instituto do Câncer do Estado de São Paulo - USP",
        "Urologia Infantil - Sociedade Brasileira de Urologia e Hospital das Clínicas da Faculdade de Medicina da USP",
        "Residência Médica em Transplante Renal - Hospital das Clínicas da Faculdade de Medicina da USP",
        "Residência Médica em Urologia - Hospital das Clínicas da Faculdade de Medicina da USP",
        "Residência Médica em Cirurgia Geral - Hospital das Clínicas da Faculdade de Medicina da USP",
        "",
        "Graduação em Medicina - Universidade Federal do Ceará - Fortaleza",
        "Doutorado em Ciências - Divisão de Urologia, Departamento de Cirurgia - Hospital das Clínicas da Faculdade de Medicina da USP - Em andamento. ",
      ],
    },
  ];
  return (
    <div className="w-full ">
      {/* container */}
      <div className="grid grid-cols-1 container p-4 mx-auto space-y-5 lg:grid-cols-1 items-start">
        {/* Formação */}
        {/* curriculo */}
        <div className="p-4">
          {formacao.map((item) => {
            if (Array.isArray(item.p)) {
              return (
                <div className="text-justify shadow-lg rounded-2xl p-5 space-y-4" key={item.id}>
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap  className="w-15 h-15"/>
                    <h3  className="font-bold text-xl md:text-2xl lg:text-3xl">{item.h3}</h3>
                  </div>
                  {item.p
                    .sort((a, b) => a.localeCompare(b))
                    .map((texto, index) => (
                      <ul key={index}>
                        <li className="text-md ">{texto}</li>
                      </ul>
                    ))}
                </div>
              );
            }
          })}
        </div>
        <div className="p-4">
          {experiencia.map((item) => {
              if (Array.isArray(item.p)) {
                  return (
                      <div className="text-justify shadow-lg rounded-2xl p-5 space-y-4" key={item.id}>
                  <div className="flex items-center space-x-2 mb-4 relative">
                  <FileText  className="w-15 h-15"/>
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">{item.h3}</h3>
                  </div>
                  {item.p
                    .sort((a, b) => a.localeCompare(b))
                    .map((texto, index) => (
                        <ul key={index}>
                        <li className="text-md ">{texto}</li>
                      </ul>
                    ))}
                </div>
              );
            }
        })}
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
