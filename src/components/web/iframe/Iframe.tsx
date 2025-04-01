import React from "react";
import { MessengerLogo } from "@phosphor-icons/react/dist/ssr";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
interface Localiza {
  local: string | number;
  contato: string | number;
}
const localizacao: Localiza[] = [
  {
    local: "Rua Monsenhor Bruno 1519 - Aldeota, Fortaleza",
    contato: "Telefone: +55 (85) 8131-1018",
  },
];
const Iframertst: React.FC = () => {
  return (
    <div className="w-full justify-center flex items-center">
      {/** Iframe Agendar consulta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  container w-full items-center  ">

        <div className="flex  items-start md:items-center justify-start lg:justify-center p-6    relative">
          {localizacao.map(({ local, contato }, id) => (
            <div
              key={id}
              className="relative space-y-5 p-3  w-full rounded-lg  "
              >
              <svg className="w-full -top-15 right-3 absolute md:-top-20 md:-left-20  2xl:-top-30   2xl:-left-25 " viewBox="0 0 400 100" preserveAspectRatio="none">
  <line x1="50" y1="50" x2="50" y2="50" stroke="black" stroke-width="2" stroke-linecap="round">
    <animate 
      attributeName="x2" 
      from="50" 
      to="350" 
      dur="3.5s" 
      repeatCount="indefinite"
      calcMode="spline"
      keySplines="0.42 0 0.58 1"
      keyTimes="0;1"
    />
  </line>
</svg>
           
              <div className="flex flex-col items-start  space-y-0.5 my-5">
                <h1 className="text-2xl lg:text-4xl font-semibold">
                  Localize facilmente{" "}
                </h1>
                <span className="text-xl lg:text-2xl text-sky-300  font-semibold">
                  nosso atendimento.
                </span>
              </div>
             
              <div className="flex items-center">
                <MapPin className="size-10 text-sky-300"></MapPin>
                <div className="mx-4">
                  <h1 className="text-lg font-semibold">
                    Local de atendimento
                  </h1>
                  <p className="text-md">{local}</p>
                </div>
              </div>

              <div className="flex items-center ">
                <MessengerLogo className="size-7 md:size-10 text-sky-300 " />
                <div className="mx-4 ">
                  <h1 className="text-lg font-semibold text-bold">Contato</h1>
                  <p className="text-md">{contato}</p>
                </div>
              </div>
              <div className=" flex items-center relative justify-start ">
            <a
              className="  transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 
                       border-2 hover:border-sky-500  mx-10  font-bold  text-center text-lg  rounded-sm  p-3 hover:bg-sky-500
                       sky-800  border-sky-500 hover:text-white"
              href="https://api.whatsapp.com/send?phone=558581311038"
            >
              Agendar consulta
            </a>
          </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3409757052577!2d-38.51289072598761!3d-3.7356649432071305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748f5f1fa6305%3A0x3a7be8a251212d83!2sR.%20Monsenhor%20Bruno%2C%201519%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060115-191!5e0!3m2!1spt-BR!2sbr!4v1743208878760!5m2!1spt-BR!2sbr"
            className=" w-full  lg:w-2/2  2xl:max-w-[800px] h-[100vh] max-h-[500px] p-4    "
            loading="lazy"
          ></iframe>
        </div>
              <div>
              <iframe
          src="https://widgets.doctoralia.com.br/doctor/widget/big/daniel-gabriele-sucupira?customUtm=null&id=lar5gsogbb&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fwww-drdanielsucupira-com-br.filesusr.com%2Fhtml%2Fbffbae_ae02b3b7d6a511179e0018505bb99249.html&hide_branding=true&widget_position=top&opinion=true&saasonly=true&expand_calendar=false"
          className="w-full h-100 max-h-[350px] p-4"
          loading="lazy"
        ></iframe>
              </div>
              
      </div>
      {/**Mapa  */}
    </div>
  );
};

export default Iframertst;
