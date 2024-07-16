import React from 'react';

// Assets
import cuidado_pet from '../assets/Home/cuidado_pet.jpg'
import alimentacao from '../assets/Home/alimentacao.jpeg'
import treinamento from '../assets/Home/treinamento.jpeg'

const Blog = () => {
  const cards = [
    { title: 'DICAS DE CUIDADOS', paragraph: 'O verão é divertido para os pets, mas também apresenta desafios. Prepare seu amigo peludo para o calor com estas dicas essenciais!', image: cuidado_pet, link: 'CM_cachorro.html' },
    { title: 'SAÚDE E NUTRIÇÃO', paragraph: 'Descubra os segredos para oferecer uma dieta que atenda todas as necessidades nutricionais do seu amigo de quatro patas!', image: alimentacao, link: 'CM_cachorro.html' },
    { title: 'COMPORTAMENTO E TREINAMENTO', paragraph: 'Conheça técnicas eficazes para ensinar comandos básicos e fortalecer o vínculo com seu cachorro!', image: treinamento, link: 'CM_cachorro.html' },
  ];

  return (
    <article className="flex flex-col justify-center items-center px-5 py-10 lg:px-20">
      <h1 className="text-[30px] text-center my-5">NOSSO BLOG</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  w-full">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-4 p-5 bg-white  rounded-lg shadow-md hover:-translate-y-1 hover:scale-100 duration-300">
            <img className="h-auto w-auto" src={card.image} alt={`imagem de ${card.title.toLowerCase()}`} />
            <h2 className="text-pink-500">{card.title}</h2>
            <p>{card.paragraph}</p>
            <a href={card.link}>
              <p className="text-pink-500 border-b-2 w-[60px] border-pink-500">Leia +</p>
            </a>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Blog;
