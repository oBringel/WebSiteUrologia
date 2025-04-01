import React from "react";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
const RodapeFister: React.FC = () => {
 

  
  return (
    <div className={`w-full h-full bg-[#f1f1f1] overflow-hidden`} >
      {/* container */}
      <div className="m-4  p-4">
        {/* icons de contas (instagram, linkedin, facebook, Whatsapp) */}

        {/*  */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
          <p className="hidden md:block font-bold">
            {" "}
            © Dr. Daniel Gabriele Sucupira - Urologista | 2025 - Todos os
            direitos reservados
          </p>
          <p className="md:hidden text-sm ">
            © Dr. Daniel Gabriele Sucupira - Urologista |
          </p>
          <p className="md:hidden text-sm ">2025 - Todos os direitos reservados</p>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <p className="md:hidden text-sm">CRM-SP 171.495 RQE-SP 90.508</p>
            <p className="md:hidden text-sm">CRM-CE 15186 RQE-CE 13.969</p>
          </div>

          <p className="text-sm hidden md:block font-semibold">
            {" "}
            CRM-SP 171.495 RQE-SP 90.508 | CRM-CE 15186 RQE-CE 13.969
          </p>
        </div>
        <div className=" flex items-center justify-center gap-x-5 mt-4">
          <InstagramLogo className="w-8 cursor-pointer transition-all text-[#fa7e1e] hover:scale-105 h-8" />
          <Link to={"http://www.linkedin.com/in/drdanielsucupira"}><LinkedinLogo className="w-8 cursor-pointer transition-all text-blue-600 hover:scale-105 h-8" /></Link>
          
          <WhatsappLogo className="w-8 cursor-pointer transition-all text-green-500 hover:scale-105 h-8" />
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm ">
            Desenvolvido por <a className="text-blue-600  hover:text-blue-800 transition-all" href="https://www.linkedin.com/in/%C3%A1quila-bringel-772297251/">Áquila Leite Bringel</a>
          </p>
        </div>
      </div>

      <div className="fixed right-2 bottom-0 ">    
       <a href="https://api.whatsapp.com/send?phone=558581311038"> <WhatsappLogo className="cursor-pointer hover:scale-105 text-green-500 w-16 h-16" /></a>
      </div>
    </div>
  );
};

export default RodapeFister;
