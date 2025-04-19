'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCoffee,
  FiMapPin,
  FiCalendar,
  FiThermometer,
  FiInstagram
} from 'react-icons/fi'

const Section = () => {
  const staggerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 80 }
    })
  }

  const beneficios = {
    'Ambiente climatizado': <FiThermometer className="w-6 h-6 text-amber-600" />,
    'Desde 2021': <FiCalendar className="w-6 h-6 text-amber-600" />,
    'Localização privilegiada': <FiMapPin className="w-6 h-6 text-amber-600" />,
    'Grãos especiais': <FiCoffee className="w-6 h-6 text-amber-600" />
  }

  return (
    <div className="relative py-24 container z-20 overflow-hidden">
      <div className="mx-auto max-w-7xl ">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Coluna de Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className='space-y-4'>
              <motion.span
                className="inline-block text-xs font-medium text-amber-600 tracking-widest"
                variants={staggerVariants}
                custom={0}
              >
                ARTE & CAFÉ IMPERIAL
              </motion.span>

              <motion.h1
                className="text-6xl font-bold text-stone-800 leading-[1.1]"
                variants={staggerVariants}
                custom={1}
              >
                <span className="block">Experiência</span>
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Além do Paladar
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="text-lg text-stone-600 leading-relaxed max-w-2xl"
              variants={staggerVariants}
              custom={2}
            >
              Desde 2021, elevamos a ritualística do café a uma experiência multisensorial em nosso ambiente climatizado, combinando seleção rigorosa e preparo cerimonial.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-12"
              variants={staggerVariants}
              custom={3}
            >
              {Object.entries(beneficios).map(([beneficio, icon], i) => (
                <motion.div
                  key={beneficio}
                  className="p-3 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-stone-100/50"
                  variants={staggerVariants}
                  custom={i + 4}
                  whileHover={{ y: -8, rotate: -0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shadow-inner">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text- font-semibold text-stone-900">{beneficio}</h3>
                      <p className="text-sm text-stone-500 mt-2">
                        {beneficio === 'Desde 2021' ? 'Tradição contemporânea' :
                          beneficio === 'Ambiente climatizado' ? 'Conforto imperial' :
                            beneficio === 'Localização privilegiada' ? 'Epicentro urbano' : 'Seleção nobre'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerVariants}
              custom={8}
              className="flex gap-5 mt-10"
            >
              <button
                className="group flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                onClick={() => window.open('https://www.instagram.com/arteecafeimperial/', '_blank')}
              >
                <FiInstagram className="w-6 h-6 text-amber-100" />
                <span className="text-lg font-medium tracking-wide">Siga Nos</span>
              </button>

              <button className="group flex items-center gap-2 px-8 py-5 border-2 border-amber-600 text-amber-600 rounded-2xl hover:bg-amber-50 transition-all">
                <span className="text-lg font-medium tracking-wide">Lorem Ipsum</span>
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Galeria de Imagens */}
          <motion.div
            className="grid grid-cols-2 gap-6 h-[700px]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {/* Coluna Esquerda */}
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/cafe.webp"
                  className="w-full h-full object-cover"
                  alt="Ambiente climatizado"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-500/40" />
                {/* <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs opacity-90 font-light">Ambiente Premium</p>
                  <h4 className="text-lg font-bold mt-1">Conforto Imperial</h4>
                </div> */}
              </motion.div>

              <motion.div
                className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/hero.webp"
                  className="w-full h-full object-cover"
                  alt="Grãos selecionados"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-500/40" />
                {/* <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs opacity-90 font-light">Seleção Nobre</p>
                  <h4 className="text-lg font-bold mt-1">Grãos Especiais</h4>
                </div> */}
              </motion.div>
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/hero.webp"
                  className="w-full h-full object-cover"
                  alt="Preparo artesanal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-500/40" />
                {/* <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs opacity-90 font-light">Arte em Cada Detalhe</p>
                  <h4 className="text-lg font-bold mt-1">Preparo Cerimonial</h4>
                </div> */}
              </motion.div>

              <motion.div
                className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/cafe.webp"
                  className="w-full h-full object-cover"
                  alt="Experiência completa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-amber-500/40" />
                {/* <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs opacity-90 font-light">Momento Único</p>
                  <h4 className="text-lg font-bold mt-1">Harmonia Perfeita</h4>
                </div> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efeito de profundidade */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.webp')] opacity-[3%]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent" />
      </div> */}
    </div>
  )
}

export default Section