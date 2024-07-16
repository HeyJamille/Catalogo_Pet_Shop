import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import Blog from '../pages/Blog';

// ui
import Button from '../components/ui/Btn';

// Assets
import veterinaria from '../assets/Home/veterinaria.jpg'
import banho_tosa from '../assets/Home/banho_tosa.jpeg'
import produtos from '../assets/Home/produtos.jpeg'
import bannerImage from '../assets/Main/banner.jpeg'; 

const Home = () => {
  const offer = [
    { title: 'VETERINÁRIA', paragraph: 'Oferecemos tratamentos preventivos com os melhores veterinários.', image: veterinaria, link: 'CM_cachorro.html' },
    { title: 'BANHO E TOSA', paragraph: 'Mais do que banho e tosa, cuidamos da saúde e bem-estar do seu pet.', image: banho_tosa, link: 'CM_gato.html' },
    { title: 'PRODUTOS', paragraph: 'Descubra a linha de produtos que a Amigo Pet preparou para o seu pet!' , image: produtos, link: 'CM_peixe.html' },
  ];

  return (
    <article>
      <Header />

      <section className="md:flex flex-row justify-center items-center px-5 py-10 lg:px-20 ">
        <h1 className="mb-[50px] p-5 pt-10 text-center md:w-[40%] lg:text-[25px] lg:p-14">Junte-se ao melhor Pet Shop de Fortaleza e dê ao seu pet o que há de melhor!</h1>
        <img className=" h-[300px] w-full sm:h-[400px] md:w-[60%] md:h-[500px]" src={bannerImage} alt="Banner" />
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
