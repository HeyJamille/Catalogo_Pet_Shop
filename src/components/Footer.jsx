import React from 'react'

const Footer = () => {
  const footer = [
    { title: 'INÍCIO', option_1: 'Home', option_2: 'Categorias' },
    { title: 'SOBRE NÓS', option_1: 'Sobre o Site', option_2: 'Sobre a Empresa' },
    { title: 'SUPORTE', option_1: 'Contatos', option_2: 'Dúvidas' }
  ];

  return (
    <footer className="flex flex-row justify-center align-center gap-5 sm:gap-14 p-5 lg:px-20 bg-custom-radial">
      {footer.map((footer, index) => (
        <section key={index} className="flex flex-col"> 
          <p className="mb-2">{footer.title}</p>
          <a href="#menu">{footer.option_1}</a>
          <a href="#frase_main">{footer.option_2}</a>
        </section>
      ))}
    </footer>
  )
}

export default Footer