'use client'
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules'
import { FiChevronDown, FiMessageSquare, FiUser, FiMail, FiStar, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const Galeria = () => {
  const swiperRef2 = useRef(null)
  const navigationPrevRef2 = useRef(null)
  const navigationNextRef2 = useRef(null)

  const imagesRow2 = [
    '/images/cafe.webp',
    '/images/hero.webp',
    '/images/cafe.webp',
    '/images/hero.webp',
    '/images/cafe.webp',
    '/images/hero.webp',
    '/images/hero.webp'
  ]

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
    rating: 0
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [
    { id: 0, title: 'Avaliação', icon: <FiStar className="w-4 h-4" /> },
    { id: 1, title: 'Contato', icon: <FiUser className="w-4 h-4" /> },
    { id: 2, title: 'Mensagem', icon: <FiMessageSquare className="w-4 h-4" /> }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsFormOpen(false)
      setActiveStep(0)
      setFormData({ name: '', email: '', complaint: '', rating: 0 })
      setIsSubmitted(false)
    }, 3000)
  }

  const RatingButton = ({ value }) => (
    <motion.button
      type="button"
      onClick={() => setFormData({ ...formData, rating: value })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 rounded-xl transition-all flex flex-col items-center ${
        formData.rating === value
          ? 'bg-amber-600/20 text-amber-400'
          : 'bg-stone-800/50 hover:bg-stone-700/50'
      }`}
    >
      <FiStar className="w-5 h-5" />
      <span className="text-xs mt-1">{value}</span>
    </motion.button>
  )

  return (
    <div className="container mb-10 relative">
      {/* Gallery Slider Section */}
      <div className='w-full relative mb-10 overflow-hidden bg-amber-900 z-20 rounded-4xl'>
        <div className='absolute bg-gradient-to-br from-stone-900/80 via-stone-900 to-stone-950 w-full h-full'></div>
        
        <div className="relative h-1/2 w-full border-t border-stone-800 p-6">
          <Swiper
            ref={swiperRef2}
            modules={[Navigation, Autoplay, EffectCreative]}
            spaceBetween={24}
            loop={true}
            centeredSlides={true}
            speed={10000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }}
            effect={'slide'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
              },
            }}
            navigation={{
              prevEl: navigationPrevRef2.current,
              nextEl: navigationNextRef2.current
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24
              }
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef2.current
              swiper.params.navigation.nextEl = navigationNextRef2.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            className="h-full w-full"
            grabCursor={true}
          >
            {imagesRow2.map((img, index) => (
              <SwiperSlide key={`row2-${index}`} className="p-2">
                <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="h-50 w-full object-cover brightness-90 transition-all duration-500 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/10 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Minimalist Accordion SAC Form */}
      <div className="w-full relative rounded-3xl overflow-hidden">
        <div className="bg-stone-900/90 absolute inset-0 rounded-3xl" />
        
        <div className="relative z-20">
          <motion.div
            className={`overflow-hidden ${isFormOpen ? 'bg-stone-800/10' : ''}`}
            initial={false}
            animate={{ height: isFormOpen ? 'auto' : '72px' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full flex items-center justify-between p-5 rounded-xl transition-all hover:bg-stone-800/20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-600/20 text-amber-400">
                  <FiMessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-stone-100">Fale Conosco</h3>
              </div>
              <motion.div
                animate={{ rotate: isFormOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="w-5 h-5 text-stone-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isFormOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                    >
                      <FiCheckCircle className="w-6 h-6 mx-auto mb-2" />
                      <p>Recebemos sua mensagem. Obrigado pelo feedback!</p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Progress Steps */}
                      <div className="flex justify-between mb-6">
                        {steps.map((step) => (
                          <div key={step.id} className="flex flex-col items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                activeStep >= step.id
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-stone-700 text-stone-400'
                              }`}
                            >
                              {step.icon}
                            </div>
                            <span
                              className={`text-xs mt-2 ${
                                activeStep >= step.id ? 'text-amber-400' : 'text-stone-500'
                              }`}
                            >
                              {step.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Step 1: Rating */}
                        {activeStep === 0 && (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-6"
                          >
                            <h4 className="text-stone-300 text-center mb-4">Como foi sua experiência?</h4>
                            <div className="grid grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map((value) => (
                                <RatingButton key={value} value={value} />
                              ))}
                            </div>
                            <div className="flex justify-end pt-2">
                              <button
                                type="button"
                                onClick={() => setActiveStep(1)}
                                disabled={formData.rating === 0}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                                  formData.rating === 0
                                    ? 'bg-stone-700/50 text-stone-500 cursor-not-allowed'
                                    : 'bg-amber-600/90 hover:bg-amber-600 text-white'
                                }`}
                              >
                                Próximo <FiArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Contact Info */}
                        {activeStep === 1 && (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-stone-400 mb-2 text-sm">Nome</label>
                              <input
                                type="text"
                                required
                                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 
                                         focus:ring-1 focus:ring-amber-500 focus:border-transparent text-sm"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="block text-stone-400 mb-2 text-sm">Email</label>
                              <input
                                type="email"
                                required
                                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 
                                         focus:ring-1 focus:ring-amber-500 focus:border-transparent text-sm"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                            <div className="flex justify-between pt-2">
                              <button
                                type="button"
                                onClick={() => setActiveStep(0)}
                                className="px-4 py-2 text-stone-400 hover:text-stone-300 text-sm"
                              >
                                Voltar
                              </button>
                              <button
                                type="button"
                                onClick={() => setActiveStep(2)}
                                className="px-4 py-2 bg-amber-600/90 hover:bg-amber-600 text-white rounded-lg text-sm flex items-center gap-1"
                              >
                                Próximo <FiArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3: Message */}
                        {activeStep === 2 && (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-stone-400 mb-2 text-sm">Mensagem</label>
                              <textarea
                                required
                                rows="4"
                                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 
                                         focus:ring-1 focus:ring-amber-500 focus:border-transparent text-sm"
                                value={formData.complaint}
                                onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                              />
                            </div>
                            <div className="flex justify-between pt-2">
                              <button
                                type="button"
                                onClick={() => setActiveStep(1)}
                                className="px-4 py-2 text-stone-400 hover:text-stone-300 text-sm"
                              >
                                Voltar
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-2 bg-amber-600/90 hover:bg-amber-600 text-white rounded-lg text-sm flex items-center gap-2"
                              >
                                <FiCheckCircle className="w-4 h-4" />
                                Enviar
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </form>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Galeria