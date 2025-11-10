"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import images
import img1 from "../../../public/img/bg-01.jpg";
import img2 from "../../../public/img/bg-03.jpg";
import img3 from "../../../public/img/bg-04.jpg";

import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Button } from "@/components/ui/button";

const slides = [
  {
    img: img1,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img2,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img3,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider-container w-full">
      <Swiper
        effect="fade"
        speed={4000}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-white",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="w-full h-[410px] lg:h-[900px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Main image container */}
              <div className="relative w-full h-full ">
                <Image
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                
                {/* Left side blur overlay - only covers left portion */}
                <div className="absolute left-0 top-0 w-3/4 h-full overflow-hidden">
                  <div 
                    className="w-full h-full backdrop-blur-4xl bg-black/90"
                    style={{
                      maskImage: 'linear-gradient(to right, black, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
                    }}
                  ></div>
                </div>

                {/* Subtle shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"/>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4 lg:space-y-10 lg:p-8 px-4">
                <motion.h5
                  className="text-lg lg:text-xl font-bold drop-shadow-lg mt-0"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 50,
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {slide.h5Text1}
                </motion.h5>

                <motion.h1
                  className="text-4xl lg:text-6xl font-light leading-tight drop-shadow-2xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{
                    scale: currentSlide === index ? 1 : 0.5,
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                >
                  {slide.h1Text}
                </motion.h1>

                <motion.h5
                  className="text-lg lg:text-xl font-bold drop-shadow-lg"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : -50,
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 1.1,
                    ease: "easeOut",
                  }}
                >
                  {slide.h5Text2}
                </motion.h5>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                    ease: "easeOut",
                  }}
                >
                  <Button                   
                    className="bg-white text-red-500 hover:bg-gray-200 px-8 py-6 text-lg font-semibold shadow-lg"
                  >
                    Read More
                  </Button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;