"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useState, useRef } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenDesk, setIsMenuOpenDesk] = useState(false);
  const { scrollY } = useScroll();
  const lastScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const current = latest;
    const delta = current - lastScroll.current;

    setIsAtTop(current <= 5);

    if (Math.abs(delta) < 15) return;

    setIsScrollingUp(delta < 0);
    setIsVisible(delta < 0 || current < 50);
    lastScroll.current = current;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuDesk = () => {
    setIsMenuOpenDesk(!isMenuOpenDesk);
  };

  const navItems = ['Lorem', 'Lorem'];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: {
            y: -100,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 35,
              mass: 0.5
            }
          },
          visible: {
            y: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }
          }
        }}
        className="w-full z-40 fixed top-0 py-6 p"
      >
        <motion.div
          className={`flex items-center justify-between relative px-6 py-3 container rounded-[2rem] transition-all duration-300 ${isAtTop
            ? "bg-gradient-to-r from-amber-600/90 via-stone-95040 z-20 to-amber-600/90"
            : isScrollingUp
              ? "bg-gradient-to-r from-amber-600/50 via-stone-95020 z-20  to-amber-600/50 backdrop-blur-sm"
              : "bg-white/95 backdrop-blur-sm"
            }`}
          animate={{
            boxShadow: isVisible
              ? isAtTop
                ? "0 4px 24px -6px rgba(0, 0, 0, 0.05)"
                : "0 4px 24px -6px rgba(0, 0, 0, 0.08)"
              : "none",

          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >

          <div className="bg-stone-950/80 -z-10 absolute inset-0 rounded-[2rem] w-full h-full"></div>
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <motion.div
                className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-600/15 group-hover:border-amber-600/25 transition-all duration-300"
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/images/logo.webp"
                  className="w-20 object-cover"
                  alt="Logo"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="w-px h-8 bg-gradient-to-b from-stone-300/20 to-transparent" />
              <motion.span
                className={`font-medium tracking-tight text-lg relative transition-colors duration-300 ${isAtTop ? "text-stone-100" : isScrollingUp ? "text-stone-100" : "text-stone-100"
                  }`}
                whileHover={{ y: -1 }}
              >
                Arte e Café
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-px transition-colors duration-300 ${isAtTop ? "bg-amber-600/20" : isScrollingUp ? "bg-amber-400/30" : "bg-amber-600/20"
                    }`}
                  whileHover={{ scaleX: 1.1, transition: { duration: 0.2 } }}
                />
              </motion.span>
            </div>
          </motion.div>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex md:hidden ${isMenuOpen ? "hidden" : ""} z-50 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 p-3 border border-amber-700/30 transition-all duration-600 relative shadow-md`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-5 h-5 text-amber-50" />
            ) : (
              <FiMenu className="w-5 h-5 text-amber-50" />
            )}
          </motion.button>


          <div className="md:flex hidden">
            {/* Desktop Navigation */}
            <AnimatePresence>
              {isMenuOpenDesk && (
                <motion.nav
                  className="hidden md:flex items-center"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      custom={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                          damping: 10
                        }
                      }}
                      exit={{
                        x: 50,
                        opacity: 0,
                        transition: {
                          delay: (navItems.length - index - 1) * 0.05
                        }
                      }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-4 py-2.5 font-medium text- flex items-center gap-1 relative group transition-colors duration-300 ${isAtTop
                        ? "text-stone-100 hover:text-amber-500"
                        : isScrollingUp
                          ? "text-stone-200 hover:text-amber-300"
                          : "text-stone-700 hover:text-amber-700"
                        }`}
                    >
                      {item}
                      <div
                        className={`absolute bottom-1.5 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left ${isAtTop
                          ? "bg-amber-600/15"
                          : isScrollingUp
                            ? "bg-amber-400/20"
                            : "bg-amber-600/15"
                          }`}
                      />
                    </motion.button>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>

            <motion.button
              onClick={toggleMenuDesk}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" hidden cursor-pointer md:flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 p-3 border border-amber-700/30 transition-all relative shadow-md"
              aria-label="Menu"
            >
              {isMenuOpenDesk ? (
                <FiX className="w-5 h-5 text-amber-50" />
              ) : (
                <FiMenu className="w-5 h-5 text-amber-50" />
              )}
            </motion.button>
          </div>


        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
          >
            {/* Overlay Background */}
            <motion.div
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Close Button (fixed position) */}
            <motion.button
              onClick={toggleMenu}
              className="fixed top-10 right-12 z-50 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 p-3 border border-amber-700/30 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5 text-amber-50" />
            </motion.button>

            {/* Menu Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.ul className="w-full max-w-md px-6 space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    exit={{
                      x: -50,
                      opacity: 0,
                      transition: {
                        delay: (navItems.length - index - 1) * 0.05
                      }
                    }}
                  >
                    <motion.button
                      className="w-full text-left px-6 py-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-stone-900/5 justify-center hover:bg-stone-800/90 transition-all flex items-center backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleMenu}
                    >
                      <span className="font-medium text-stone-100 text-lg">{item}</span>
                      {/* <FiChevronDown className="text-amber-400/60 w-5 h-5" /> */}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;