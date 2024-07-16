import React from 'react';
import DataRacaoCachorro from '../utils/DataRacaoCachorro';

// Componentes
import Header from '../components/Header';
import Footer from '../components/Footer';

// Componentes UI
import Button from '../components/ui/Btn';

// URL para a página do carrinho
const carrinho = '/carrinho';

const Racao = () => {
  return (
    <article className="flex flex-col justify-between bg-slate-100">
      <Header />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 w-full">
        {DataRacaoCachorro.map((product) => (
          <li
            key={product.id || product.name} // Utilize um identificador único se disponível
            className="flex flex-col justify-between items-center gap-2 bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <img
              className="h-[100px] w-[80px]"
              src={product.image}
              alt={`Imagem de ${product.name}`}
            />

            <div className="text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">R$ {product.price}</p>
            </div>

            <div className="flex flex-row gap-2">
              <p>Quantidade:</p>
              <input className="w-[50%]" type="number" min="1" defaultValue="1" />
            </div>

            <a href={carrinho}>
              <Button>Adicionar ao Carrinho</Button>
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </article>
  );
};

export default Racao;
