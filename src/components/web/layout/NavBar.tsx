import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List } from "@phosphor-icons/react/dist/ssr";
import logo from "../../../../public/img/Cópia de Design sem nome (250 x 250 px).png";

const NavBar: React.FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`w-full h-full relative ${isHomePage ? "hidden" : "visible"}`}
    >
      <header
        className={`  w-full bg-cover flex justify-between items-center py-6 px-8 md:px-32 xl:shadow-md mb-2`}
      >
        <Link className="w-auto  hover:scale-105 transition-all " to={"/"}>
          <img
            className="  size-15 top-3 xl:size-20 absolute xl:top-1.5 "
            src={logo}
          />
        </Link>

        {/*Menu Desktop */}
        <ul className="hidden xl:flex items-center gap-12 ">
          <Link
            className="p-3 cursor-pointer hover:bg-sky-800 transition-all rounded-md hover:text-white"
            to={"/"}
          >
            Início{" "}
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-800 transition-all rounded-md hover:text-white"
            to={"Urolugista"}
          >
            Urologista{" "}
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-800 transition-all rounded-md hover:text-white"
            to={"CancerDeProstata"}
          >
            Câncer de Próstata
          </Link>
          <Link
            className="p-3 cursor-pointer hover:bg-sky-800 transition-all rounded-md hover:text-white"
            to={"Mais"}
          >
            {" "}
            Mais{" "}
          </Link>
        </ul>
        {/*Contato */}
        <div className=" relative md:flex items-center justify-center gap-3">
          <a
            className="p-3 cursor-pointer hover:bg-sky-800 transition-all rounded-md hover:text-white hidden xl:flex"
            href=" /"
          >
            Contanto
          </a>
        </div>

        {/** Icone de Menu Mobile */}
        <List
          className="xl:hidden block text-4xl cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/**Menu mobile */}
        <ul
          className={`absolute xl:hidden z-2    top-22  sm:top-20 left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-md ${
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

export default NavBar;
