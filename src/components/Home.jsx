"use client";
import { motion } from 'framer-motion';
import { FiArrowRight, FiCoffee, FiChevronDown } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="relative overflow-hidden ">



      {/* Hero Section */}
      <motion.main
        className="flex items-center justify-center relative pt-10 "
      >
        <motion.div whileHover="hover" className="relative container w-full mt-24 rounded-[4rem] overflow-hidden group">

          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 bg-[url('/images/hero.webp')] bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            variants={{
              hover: { scale: 1.05, rotate: 1 },
            }}
            transition={{
              duration: 1.5,
              ease: [0.33, 1, 0.68, 1],
              when: "beforeChildren"
            }}
          />

          {/* <img src="/images/hero.png absolute" alt="" /> */}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 z-20  to-stone-950/100" />
          {/* <div className="absolute inset-0 bg-gradient-to-tl from-amber-800/10 z-20 via-stone-950/0 to-stone-950/0" /> */}
          <div className="absolute inset-0 bg-gradient-to-l z-10 from-stone-900/35 to-stone-950/95" />

          {/* Camada de Textura */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />


          {/* Content Container */}
          <div className="relative z-30 flex flex-col items-center text-center px-8 py-32">

            {/* Title Section */}
            <motion.div
              className="max-w-4xl relative z-40 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px bg-gradient-to-r from-transparent via-amber-500/80 to-transparent mb-10 w-20 mx-auto"
                />
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-stone-100 leading-[1.1]">
                  <span className="opacity-95">Arte &</span><br />
                  <span className="bg-gradient-to-r from-amber-400 font-extrabold to-amber-500 bg-clip-text text-transparent">Café Imperial</span>
                </h1>
              </div>

              <motion.p
                className="text-stone-200 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Experiência premium em café especial e confeitaria artesanal
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-16 flex gap-6 flex-wrap justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-tl from-amber-500 to-amber-600 text-stone-50 px-12 py-4 rounded-2xl flex items-center gap-3 hover:bg-amber-700 transition-all"
              >
                <FiArrowRight className="w-5 h-5" />
                <span className="text-lg font-semibold">Descubra Mais</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-stone-800 px-12 py-4 rounded-2xl border border-stone-200 hover:border-amber-500 transition-all"
              >
                <span className="text-lg font-semibold">Localização</span>
              </motion.button>
            </motion.div>

            {/* Year Badge */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-12 h-px bg-stone-400/50" />
              <span className="text-stone-300 font-medium">Desde 2020</span>
              <div className="w-12 h-px bg-stone-400/50" />
            </motion.div>
          </div>
        </motion.div>
      </motion.main>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default Home;


