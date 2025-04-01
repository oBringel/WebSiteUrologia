import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { List } from "@phosphor-icons/react/dist/ssr";
import logo from "../../../../public/img/Cópia de Design sem nome (250 x 250 px).png";
const Header: React.FC = () => {
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkScreenSize = () => {
    setIsMdScreen(window.matchMedia("(min-width: 768px)").matches);
  };
  useEffect(() => {
    // Verifica o tamanho da tela ao carregar a página
    checkScreenSize();

    // Adiciona um event listener para o resize
    window.addEventListener("resize", checkScreenSize);

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const ga = useRef(null);

  useLayoutEffect(() => {
    const element = ga.current;
    if (isMdScreen && element) {
      gsap.from(element, { y: -50, opacity: 0, duration: 1 });
      return () => {
        gsap.killTweensOf(element);
      };
    }
  }, [isMdScreen]); 

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full relative  ">
      <header
        className={`   w-full bg-cover flex justify-between items-center py-6 px-8 md:px-32 xl:shadow-md `}
      >
        <Link
          className="w-auto  hover:scale-105 transition-all flex items-center "
          to={"/"}
        >
          <img className="   size-17 2xl:size-20 " src={logo} />
        </Link>

        {/*Menu Desktop */}
        <ul ref={ga} className="hidden  xl:flex items-center gap-12 ">
          <Link
            className="p-3 cursor-pointer hover:bg-sky-500 transition-all rounded-md hover:text-white md:text-xl lg:text-xl"
            to={"/"}
          >
            Inicio{" "}
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-500 transition-all rounded-md hover:text-white md:text-xl lg:text-xl"
            to={"Urologista"}
          >
            Urologista{" "}
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-500 transition-all rounded-md hover:text-white md:text-xl lg:text-xl"
            to={"CancerDeProstata"}
          >
            Câncer de Próstata
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-500 transition-all rounded-md hover:text-white md:text-xl lg:text-xl"
            to={"Mais"}
          >
            {" "}
            Mais{" "}
          </Link>
        </ul>
        {/*Contato */}
        <div className=" relative md:flex items-center justify-center gap-3">
          <a
            className="p-3 cursor-pointer hover:bg-sky-500 transition-all rounded-md hover:text-white hidden xl:flex lg:text-xl"
            href="https://api.whatsapp.com/send?phone=558581311038"
          >
            Contato
          </a>
        </div>

        {/** Icone de Menu Mobile */}
        <List
          className="xl:hidden block text-4xl cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => {
            toggleMenu();
            console.log("menu aberto?", !isMenuOpen);
          }}
        />

        {/**Menu mobile */}
        <ul
          className={`absolute xl:hidden z-2    top-26   left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-md ${
            isMenuOpen
              ? "opacity-100 scale-100 shadow-md"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Link
            className="w-full text-center p-4 cursor-pointer hover:bg-sky-400 transition-all  hover:text-white"
            to={"/"}
          >
            Ínicio{" "}
          </Link>
          <Link
            className="w-full text-center p-4 cursor-pointer hover:bg-sky-400 transition-all  hover:text-white"
            to={"Urolugista"}
          >
            Urologista{" "}
          </Link>
          <Link
            className="w-full text-center p-4 cursor-pointer hover:bg-sky-400 transition-all  hover:text-white"
            to={"CancerDeProstata"}
          >
            Câncer de Próstata
          </Link>
          <a
            className="w-full text-center p-4 cursor-pointer hover:bg-sky-400 transition-all  hover:text-white"
            href=" /"
          >
            Contanto
          </a>
          <Link
            className="w-full text-center p-4 cursor-pointer hover:bg-sky-400 transition-all  hover:text-white"
            to={"Mais"}
          >
            {" "}
            Mais{" "}
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
