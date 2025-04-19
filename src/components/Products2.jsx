'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCakeSlice, GiCroissant, GiCookie, GiBread } from 'react-icons/gi';
import { FiArrowRight } from 'react-icons/fi';
import clsx from 'clsx';

const HighlightBorder = ({ isActive }) => (
  <motion.div
    className={clsx(
      "absolute inset-0 rounded-2xl border-2",
      isActive ? "border-amber-600/20" : "border-transparent"
    )}
    layoutId="tabHighlight"
    transition={{
      type: "spring",
      bounce: 0.25,
      duration: 0.6
    }}
  />
);

const TabButton = ({ tab, index, isActive, onClick, variants }) => (
  <motion.button
    onClick={onClick}
    className={clsx(
      "relative p-5 rounded-2xl flex flex-col items-center gap-3 transition-all",
      isActive
        ? "bg-stone-100/30 backdrop-blur-sm"
        : "hover:bg-stone-50/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
    )}
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
      type: "spring",
      delay: index * 0.1,
      stiffness: 150,
      damping: 12
    }}
    role="tab"
    aria-selected={isActive}
  >
    <HighlightBorder isActive={isActive} />
    <div className="p-3 rounded-full bg-amber-600/10 shadow-inner">
      <tab.icon className={clsx(
        "w-7 h-7 transition-all duration-300",
        isActive ? "text-amber-600 scale-110" : "text-stone-600"
      )} />
    </div>
    <span className={clsx(
      "text-sm font-medium tracking-wide transition-all duration-300",
      isActive ? "text-amber-700" : "text-stone-600"
    )}>
      {tab.label}
    </span>
  </motion.button>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 15
      }
    },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 32px 64px -12px rgba(0,0,0,0.15)",
      zIndex: 10
    }
  };

  const tabs = [
    {
      id: "Bebidas",
      icon: GiCakeSlice,
      label: "Bebidas",
      title: "Obras-Primas Confeiteiras",
      items: [
        {
          id: "doce-1",
          image: "/images/hero.webp",
          title: "Bolo Imperial",
          description: "Confeito real com ingredientes selecionados",
          price: "R$ 10",
          category: "Celebração"
        },
        {
          id: "doce-2",
          image: "/images/hero.webp",
          title: "Croissant Dourado",
          description: "Folhado artesanal com manteiga francesa",
          price: "R$ 10",
          category: "Clássico"
        }
      ]
    },
    {
      id: "paes",
      icon: GiBread,
      label: "Pães",
      title: "Coleção de Pães Artesanais",
      items: [
        {
          id: "pao-1",
          image: "/images/hero.webp",
          title: "Pão Rústico",
          description: "Fermentação natural premium",
          price: "R$10",
          category: "Tradicional"
        }
      ]
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto text-center mb-20 space-y-10"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent w-1/4 mx-auto"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-playfair text-6xl md:text-6xl font-bold text-stone-900 leading-[0.9] tracking-tighter"
        >
          <span className="opacity-90 block mb-6">Arte e Café</span>
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Coleção Imperial
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-stone-600/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          Descubra nossa seleção de requinte em confeitaria artesanal
        </motion.p>
      </motion.div> */}

      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 relative bg-gradient-to-r from-amber-600/90 via-stone-95040 z-20  to-amber-600/90 gap-3 backdrop-blur-lg rounded-4xl p-3 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-stone-950/80 -z-10 absolute inset-0 rounded-[2rem] w-full h-full"></div>
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              tab={tab}
              index={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              variants={{
                hidden: { scale: 0.98, opacity: 0 },
                visible: { scale: 1, opacity: 1 }
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {tabs[activeTab].items.map((item) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer"
                onHoverStart={() => setHoveredIndex(item.id)}
                onHoverEnd={() => setHoveredIndex(null)}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="absolute inset-0 border-2 border-white/10 rounded-[2.5rem] pointer-events-none group-hover:border-white/20 transition-all duration-500" />

                <div className="aspect-square rounded-[2.5rem] overflow-hidden relative shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <motion.div
                    className="h-full w-full relative"
                    whileHover={{ scale: 1.08, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform origin-center"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8 space-y-4 text-white z-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: hoveredIndex === item.id ? 1 : 0,
                      y: hoveredIndex === item.id ? 0 : 50
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold tracking-widest text-amber-400/90 uppercase">
                        {item.category}
                      </span>
                      <div className="h-px w-8 bg-amber-400/50 transition-all group-hover:w-12 duration-500" />
                    </div>

                    <h3 className="text-3xl font-bold leading-tight tracking-tighter">{item.title}</h3>
                    <p className="text-lg font-light text-white/80 leading-snug tracking-wide">
                      {item.description}
                    </p>

                    <motion.div
                      className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3 text-amber-400/90 hover:text-amber-300 transition-colors">
                        <span className="font-medium tracking-wider">Ver detalhes</span>
                        <FiArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/80 font-medium z-30 shadow-lg">
                    {item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-amber-500/3 via-transparent to-transparent blur-[150px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-amber-500/3 via-transparent to-transparent blur-[120px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Products;