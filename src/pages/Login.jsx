import React from 'react';
import { Link } from 'react-router-dom'; // Usado para navegação interna

// Components
import Button from '../components/ui/Btn'

const Login = () => {
  // Função para lidar com o submit do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para autenticação
    console.log('Formulário enviado');
  };

  return (
    <article className="flex justify-center items-center h-screen bg-custom-radial p-5">
      <section className="flex flex-col gap-10 bg-white h-auto w-full p-5 rounded-lg sm:w-[350px]"> 
        <h2 className="text-center text-[35px] border-b-2 mx-10">LOGIN</h2>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex items-center w-full">
            <label className="flex-shrink-0" htmlFor="nome">Nome:</label>
            <input 
              className="flex-grow ml-5 outline-none border-b-2" 
              type="text" 
              placeholder="Digite seu nome" 
              required 
            />
          </div>

          <div className="flex items-center w-full mb-5">
            <label className="flex-shrink-0" htmlFor="senha">Senha: </label>
            <input  
              className="flex-grow ml-[10px] outline-none border-b-2" 
              type="password" 
              placeholder="Digite sua senha" 
              required 
            />
          </div>
          
          <Button type="submit">Entrar</Button>
          <p className="text-center mt-1">Não possui conta? <Link className="text-pink-500" to="/register">Cadastre-se.</Link> </p>
          </form>
      </section>
    </article>
  );
};

export default Login;
