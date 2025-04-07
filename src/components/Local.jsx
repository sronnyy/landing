'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiClock, FiMapPin, FiAward, FiPhone } from 'react-icons/fi';
import { GiCoffeeCup, GiCakeSlice, GiWineBottle } from 'react-icons/gi';
import clsx from 'clsx';

const HighlightCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.15, duration: 0.8 }}
    className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 p-6 shadow-2xl"
  >
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-amber-600/10 backdrop-blur-sm flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-amber-400" />
      </div>
      <h3 className="text-2xl font-bold text-stone-100 mb-2">{title}</h3>
      <p className="text-stone-400 font-light leading-relaxed">{description}</p>
      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center transition-all group-hover:bg-amber-600/40">
        <FiArrowRight className="text-amber-400 w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "localizacao",
      icon: FiMapPin,
      title: "Localização",
      description: "Venha nos visitar em nosso espaço exclusivo no coração da cidade.",
      image: "/images/local.png"
    },
    {
      id: "cafe",
      icon: GiCoffeeCup,
      title: "Lorem Ipsum",
      description: "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ipsam laboriosam tenetur eius distinctio debitis molestiae beatae repudiandae quas!",
      image: "/images/cafe.png"
    },
    {
      id: "confeitaria",
      icon: GiCakeSlice,
      title: "Lorem Ipsum",
      description: "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ipsam laboriosam tenetur eius distinctio debitis molestiae beatae repudiandae quas!",
      image: "/images/hero.png"
    },
    {
      id: "harmonizacao",
      icon: GiWineBottle,
      title: "Lorem Ipsum",
      description: "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ipsam laboriosam tenetur eius distinctio debitis molestiae beatae repudiandae quas!",
      image: "/images/cafe.png"
    },
  ];

  return (
    <section className="relative rounded-4xl z-20 py-20 mb-20 container px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-600 to-stone-950">
      <div className="bg-stone-950/90 -z-10 absolute inset-0 rounded-[2rem] w-full h-full"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grain.png')] bg-cover opacity-30" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-amber-600/5 via-transparent to-transparent blur-[120px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Header section */}
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mb-10 w-1/3 mx-auto "
          />

          <motion.h2
            className="text-7xl md:text-6xl font-bold text-stone-100 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block mb-2 text-5xl">Lorem & </span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Lorem Ipsum
            </span>
          </motion.h2>

          <motion.p
            className="text-stone-400/90 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla voluptatem mollitia nemo! Nostrum ab eum sunt maiores beatae asperiores dignissimos.
          </motion.p>
        </motion.div>

        {/* Highlight cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <HighlightCard 
            icon={FiClock} 
            title="Desde 2021" 
            description="Tradição contemporânea que honra a arte do café especial" 
            delay={0.2}
          />
          <HighlightCard 
            icon={FiMapPin} 
            title="Localização" 
            description="Epicentro urbano com ambiente climatizado e requinte imperial" 
            delay={0.4}
          />
          <HighlightCard 
            icon={FiAward} 
            title="Grãos Especiais" 
            description="Seleção nativa de cafés premiados e raros" 
            delay={0.6}
          />
        </div> */}

        {/* Tabbed experience */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "relative px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all",
                  activeTab === index
                    ? "bg-amber-600/10 text-amber-400 border border-amber-600/20"
                    : "text-stone-400 hover:text-stone-300 hover:bg-stone-800/50"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.title}
                {activeTab === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-amber-400/30 pointer-events-none"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-stone-900/80 to-stone-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-stone-700/30 shadow-2xl"
            >
              {tabs[activeTab].id === "localizacao" ? (
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    className="flex-1 relative rounded-2xl overflow-hidden h-[500px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src="/images/local.png"
                      alt="Localização Arte & Café Imperial"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    {/* <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-sm text-amber-400">Estacionamento Privativo</span>
                      </div>
                    </div> */}
                  </motion.div>

                  <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-stone-100">Nossa Casa</h3>
                    <div className="space-y-4 text-stone-300">
                      <div className="flex items-start gap-4">
                        <FiMapPin className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-stone-400">Rua Coronel Luís Americano, 123 - Jardins</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <FiClock className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Horário de Funcionamento</p>
                          <p className="text-stone-400">Terça a Domingo: 08h às 20h</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <FiPhone className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Contato</p>
                          <p className="text-stone-400">(11) 9999-9999</p>
                        </div>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-400 hover:bg-amber-600/20 transition-colors group">
                      <span>Obter direções</span>
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-stone-100 mb-4">{tabs[activeTab].title}</h3>
                    <p className="text-stone-400 leading-relaxed mb-6">{tabs[activeTab].description}</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-400 hover:bg-amber-600/20 transition-colors group">
                      <span>Conheça nossa seleção</span>
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>

                  <motion.div
                    className="flex-1 relative rounded-2xl overflow-hidden aspect-square"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-stone-900/80 z-10" />
                    <img
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                        <span className="text-sm text-amber-400">Experiência Premium</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;