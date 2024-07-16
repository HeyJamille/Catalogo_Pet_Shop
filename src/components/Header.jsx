import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

// Assets
import carrinho from '../assets/Header/carrinho.png';
import login from '../assets/Header/login.png';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const animals = [
    { name: 'CACHORROS', link: '/racao' },
    { name: 'GATOS', link: '/login' },
    { name: 'PEIXES', link: '/login' },
    { name: 'PÁSSAROS', link: '/login' },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <header className="flex flex-row justify-between p-5 bg-custom-radial lg:px-20">
      <div className="flex flex-row gap-5 justify-center items-center"> 
        <RxHamburgerMenu className="text-[40px] cursor-pointer md:hidden"/>
        <h1 className="hidden sm:block">AMIGO PET</h1>
      </div>
      
      <ul className="hidden md:flex flex-row justify-center items-center md:gap-5 lg:gap-7">
        {animals.map((animal, index) => (
          <li key={index} className="relative">
            <h2 id="title-header" className="cursor-pointer" onClick={() => handleItemClick(index)}>{animal.name}</h2>
            {activeIndex === index && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg ">
                <a href={animal.link}>
                  <p className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out">Ração</p>
                  <p className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out">Farmácia</p>
                  <p className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out">Acessórios</p>
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      
      <ul className="flex flex-row gap-3 sm:gap-5 justify-center items-center">
        <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="carrinho.html">
          <img src={carrinho} alt="carrinho" />
        </a> 
        <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="/login">
          <img src={login} alt="login" />
        </a>
      </ul>
    </header>
  );
};

export default Header;
