import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Btn';

const Cards = () => {
  // Get current location to access past state via navigation
  const location = useLocation();
  const { state } = location;
  //console.log(state);

  // Destructure data passed via state
  const { dataRacao, dataFarmacia, dataAcessorios } = state || {};

  //Determines which dataset to display based on received state
  const dataToDisplay = dataRacao || dataFarmacia || dataAcessorios;

  if (!dataToDisplay) {
    return (
      <article className="flex flex-col justify-between bg-slate-100">
        <Header />
        <p className="p-5">Nenhum dado disponível.</p>
        <Footer />
      </article>
    );
  }

  return (
    <article className="flex flex-col justify-between bg-slate-100">
      <Header />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 w-full">
        {dataToDisplay.map((product) => (
          <li
            key={product.id || product.name}
            className="flex flex-col justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <img
              className="h-[100px] w-[80px]"
              src={product.image}
              alt={`Imagem de ${product.name}`}
            />

            <div className="text-center">
              <h2 className="text-[25px] font-semibold">{product.name}</h2>
              <p className=" text-gray-600">R$ {product.price}</p>
            </div>

            <div className="flex flex-row gap-2">
              <p>Quantidade:</p>
              <input className="w-[50%]" type="number" min="1" defaultValue="1" />
            </div>

            <a href="/carrinho">
              <Button>Adicionar ao Carrinho</Button>
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </article>
  );
};

export default Cards;
