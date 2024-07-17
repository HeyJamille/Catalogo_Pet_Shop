import React from 'react'

// Icons
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-5 lg:px-20 bg-custom-radial">
      <section className="flex flex-row gap-5 mb-5"> 
        <SiGmail className="text-[30px] rounded-lg bg-white h-[40px] w-[40px] p-2 hover:-translate-y-1 hover:scale-100 duration-300"/>        
        <FaPhoneAlt className="text-[30px] rounded-lg bg-white h-[40px] w-[40px] p-2 hover:-translate-y-1 hover:scale-100 duration-300"/>
        <BsWhatsapp className="text-[30px] rounded-lg bg-white h-[40px] w-[40px] p-2 hover:-translate-y-1 hover:scale-100 duration-300"/>
      </section>
      <section className="flex flex-row text-center gap-2">
        <p>Info</p>
        <p>.</p>
        <p>Suporte</p>
        <p>.</p>
        <p>Marketing</p>
      </section>
      <p>@ 2024 Jamille Araujo</p>
    </footer>
  )
}

export default Footer