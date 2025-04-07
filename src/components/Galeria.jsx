'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const Galeria = () => {
  const swiperRef2 = useRef(null)
  const navigationPrevRef2 = useRef(null)
  const navigationNextRef2 = useRef(null)

  const imagesRow2 = [
    '/images/cafe.png',
    '/images/hero.png',
    '/images/cafe.png',
    '/images/hero.png',
    '/images/cafe.png',
    '/images/hero.png',
    '/images/hero.png'
  ]

  return (
    <div className=" container relative w-full mb-24 overflow-hidden bg-amber-900 z-20 rounded-4xl">

      <div className='absolute bg-gradient-to-br from-stone-900/80 via-stone-900 to-stone-950 w-full h-full'></div>

      {/* Segunda Linha - Slider Superior */}
      <div className="relative h-1/2 w-full border-t border-stone-800 p-6">
        <Swiper
          ref={swiperRef2}
          modules={[Navigation, Autoplay, EffectCreative]}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          speed={10000} // Aumente este valor para um efeito mais lento/suave (padrão é 300)
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true // Garante que o autoplay espere a transição terminar
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
          grabCursor={true} // Mostra um cursor de "agarra" durante a interação
          resistance={true} // Adiciona resistência ao arrastar além dos limites
          resistanceRatio={0.85} // Controla a quantidade de resistência
          followFinger={false} // Desativa o acompanhamento do dedo durante o arrasto
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
  )
}

export default Galeria