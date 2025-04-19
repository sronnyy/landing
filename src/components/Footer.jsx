'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-amber-600 to-amber-600 border-slate-800/50">

      <div className="bg-stone-950/90 z-10 absolute inset-0  w-full h-full"></div>

      {/* Efeitos de fundo */}
      <div className="absolute bg-cover inset-0 opacity-20 bg-[url('/images/grain.webp')] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-purple-500/5" />

      <div className="container relative z-10 py-12">



        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-1">
          {/* Seção de Informações */}
          <motion.div
            className="space-y-4"
          >
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="w-16 mb-4 opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quae.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div

            className="space-y-4"
          >
            <h4 className="text-slate-200 font-medium mb-2">Navegação</h4>
            <ul className="space-y-3">
              {['Lorem', 'Lorem', 'Lorem', 'Lorem'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-tgreen text-sm font-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            className="space-y-4"
          >
            <h4 className="text-slate-200 font-medium mb-2">Contato</h4>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm font-light">lorem@gmail.com</p>
              <p className="text-slate-400 text-sm font-light">+55 (24) 00000-0000</p>
              <p className="text-slate-400 text-sm font-light">Angra dos Reis, Monsuaba </p>
            </div>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div

            className="space-y-4"
          >
            <h4 className="text-slate-200 font-medium mb-2">Redes</h4>
            <div className="flex gap-4">
              {[
                // { icon: <FaLinkedin />, color: '#0A66C2' },
                { icon: <FaInstagram />, color: '#E1306C' },
                // { icon: <FaGithub />, color: '#333' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />

        {/* Copyright */}
        <motion.div

          className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400"
        >
          <p className="text-xs font-light text-center">
            © {new Date().getFullYear()} Arte e Café. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs hover:text-tgreen transition-colors">Termos de Serviço</a>
            <a href="#" className="text-xs hover:text-tgreen transition-colors">Política de Privacidade</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all"
          >
            <a href="#home"><FaArrowUp className="text-slate-300" /></a>
          </motion.button>
        </motion.div>
      </div>

    </footer>
  );
};

export default Footer;