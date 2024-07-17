import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Icon
import { MdArrowOutward } from "react-icons/md";

// Pages
import Blog from '../pages/Blog';

// ui
import Button from '../components/ui/Btn';

// Assets
import veterinaria from '../assets/Home/veterinaria.jpg'
import banho_tosa from '../assets/Home/banho_tosa.jpeg'
import produtos from '../assets/Home/produtos.jpeg'
import bannerImage from '../assets/Main/cat.png'; 

const Home = () => {
  const offer = [
    { title: 'VETERINÁRIA', paragraph: 'Oferecemos tratamentos preventivos com os melhores veterinários.', image: veterinaria, link: 'CM_cachorro.html' },
    { title: 'BANHO E TOSA', paragraph: 'Mais do que banho e tosa, cuidamos da saúde e bem-estar do seu pet.', image: banho_tosa, link: 'CM_gato.html' },
    { title: 'PRODUTOS', paragraph: 'Descubra a linha de produtos que a Amigo Pet preparou para o seu pet!' , image: produtos, link: 'CM_peixe.html' },
  ];

  return (
    <article>
      <Header />

      <section className="flex flex-row justify-center md:justify-evenly items-center gap-2 px-5 py-10 lg:px-20 h-screen ">
        <div className="flex flex-col gap-2 md:w-[40%]">
          <h1 className="text-[30px] text-pink-500">TUDO O QUE SEU PET PRECISA EM UM SÓ LUGAR!</h1>
          <p>Descubra uma vasta seleção de produtos e serviços para garantir que seu amigo de quatro patas tenha uma vida feliz e saudável.</p>

          <div className="flex flex-row gap-2 lg:gap-5 justify-center items-center mt-5 sm:justify-start">   
            <Button className="inline-block">
              Nossos Serviçoes
              <MdArrowOutward className="hidden sm:inline-block sm:ml-2"/>
            </Button>
            <button className="hover:bg-[#ffc0cb] rounded-lg p-2 transition-all duration-700 ease-in-out ">Nossos Contatos</button>
          </div>
        </div>
        <img className="hidden md:block md:h-[500px] md:w-auto bg-[#ffc0cb] rounded-full" src={bannerImage} alt="Banner" />
      </section>

      <section className="flex flex-col justify-center items-center px-5 py-10 lg:px-20 bg-custom-radial">
        <h1 className="text-[30px] text-center my-5">O QUE VOCÊ ENCONTRA NA AMIGO PET</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {offer.map((offer, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-4 bg-white p-5 rounded-lg shadow-md hover:-translate-y-1 hover:scale-100 duration-300">
              <img className="h-auto w-full" src={offer.image} alt={`imagem de ${offer.title.toLowerCase()}`} />
              <h2 className="text-pink-500">{offer.title}</h2>
              <p className="text-center">{offer.paragraph}</p>
              <a href={offer.link}>
                <Button>Conheça Mais</Button> 
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <Blog />
      <Footer />
    </article>
  );
};

export default Home;
