import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icon
import { RxHamburgerMenu } from "react-icons/rx";

// Data
import { DataRacaoCachorro, DataRacaoGato } from '../utils/DataRacao';
import { DataFarmaciaCachorro, DataFarmaciaGato } from '../utils/DataFarmacia';

// Assets
import carrinho from '../assets/Header/carrinho.png';
import login from '../assets/Header/login.png';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  // Animals data and its section
  const animals = [
    { name: 'cachorros', dataRacao: DataRacaoCachorro, dataFarmacia: DataFarmaciaCachorro },
    { name: 'gatos', dataRacao: DataRacaoGato, dataFarmacia: DataFarmaciaGato },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleNavigate = (animal, section) => {
    if (animal) {
      const sectionLowerCase = section.toLowerCase();

      navigate(`/${animal.name.toLowerCase()}/${sectionLowerCase}`, {
        state: {
          dataRacao: sectionLowerCase === 'ração' ? animal.dataRacao : undefined,
          dataFarmacia: sectionLowerCase === 'farmácia' ? animal.dataFarmacia : undefined,
          //dataAcessorios: sectionLowerCase === 'acessórios' ? animal.dataAcessorios : undefined,
        }
      });
    }
  };

  return (
    <header className="flex flex-row justify-between p-5 bg-custom-radial lg:px-20">
      <div className="flex flex-row gap-5 justify-center items-center"> 
        <RxHamburgerMenu className="text-[40px] cursor-pointer md:hidden" />
        <h1 className="hidden sm:block">AMIGO PET</h1>
      </div>
      
      <ul className="hidden md:flex flex-row justify-center items-center md:gap-5 lg:gap-7">
        {animals.map((animal, index) => (
          <li key={index} className="relative">
            <h2 id="title-header" className="cursor-pointer" onClick={() => handleItemClick(index)}>
              {animal.name.toUpperCase()}
            </h2>
            {activeIndex === index && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow-lg">
                <p
                  className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out"
                  onClick={() => handleNavigate(animal, 'ração')}
                >
                  Ração
                </p>
                <p
                  className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out"
                  onClick={() => handleNavigate(animal, 'farmácia')}
                >
                  Farmácia
                </p>
                <p
                  className="hover:bg-[#ffc0cb] p-2 transition-all duration-700 ease-in-out"
                  //onClick={() => handleNavigate(animal, 'acessórios')}
                >
                  Acessórios
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
      
      <ul className="flex flex-row gap-3 sm:gap-5 justify-center items-center">
        <a className="hover:-translate-y-1 hover:scale-100 duration-300" href="/carrinho">
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
