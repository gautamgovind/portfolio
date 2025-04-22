'use client';

import { useEffect, useState, useCallback } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import { SliderImageType } from "./assets";
import ImageWithFallback from "./image-with-fallback";

type CarouselProps = {
  imageUrls: SliderImageType[];
};

const Carousel = ({ imageUrls }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSlides = useCallback(() => {
    setSlidesToShow(window.innerWidth < 768 ? 1 : 2);
  }, []);

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [updateSlides]);

  const next = () => {
    setCurrent((prev) => (prev + slidesToShow) % imageUrls.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - slidesToShow + imageUrls.length) % imageUrls.length);
  };

  const visibleImages = imageUrls.slice(current, current + slidesToShow);
  const wrappedImages =
    visibleImages.length < slidesToShow
      ? [...visibleImages, ...imageUrls.slice(0, slidesToShow - visibleImages.length)]
      : visibleImages;

  return (
    <div
      className="relative w-full bg-lightBrown dark:bg-transparent p-2 rounded-md overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Image gallery"
    >
        <div className="flex h-[330px] md:h-[360px] gap-4">
            <AnimatePresence initial={false}>
                {wrappedImages.map(({ src, alt }, i) => (
                <motion.div
                    key={i}
                    className="flex-shrink-0"
                    style={{
                    width: slidesToShow === 1 ? "100%" : "calc(50% - 0.5rem)" // 0.5rem = gap-4 / 2
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    role="group"
                    aria-hidden="false"
                >
                    <div className="relative w-full h-full rounded-md overflow-hidden">
                    <ImageWithFallback
                        src={src}
                        alt={alt}
                        fill
                        classname="object-cover w-full h-full"
                        loading="eager"
                    />
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
        </div>


      {/* Navigation Buttons */}
        <button
            className="absolute top-1/2 -translate-y-1/2 left-2 p-2 rounded-full 
                    bg-[var(--color-white)] dark:bg-[var(--color-darkGrey)] 
                    hover:bg-[var(--color-lightHover)] dark:hover:bg-[var(--color-darkHoveer)] 
                    text-black dark:text-white shadow-md z-10"
            onClick={prev}
            aria-label="Previous slide"
        >
            <FaCircleChevronLeft size={30} />
        </button>

        <button
            className="absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-full 
                    bg-[var(--color-white)] dark:bg-[var(--color-darkGrey)] 
                    hover:bg-[var(--color-lightHover)] dark:hover:bg-[var(--color-darkHoveer)] 
                    text-black dark:text-white shadow-md z-10"
            onClick={next}
            aria-label="Next slide"
        >
            <FaCircleChevronRight size={30} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {imageUrls.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300
                    ${
                        i === current
                        ? "bg-[var(--color-white)] ring-2 ring-[var(--color-darkHoveer)] scale-110"
                        : "bg-[var(--color-darkHoveer)]"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current ? "true" : "false"}
                />
            ))}
        </div>


    </div>
  );
};

export default Carousel;
