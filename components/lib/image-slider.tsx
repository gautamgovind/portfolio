
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageWithFallback from "./imageWithFallback";
import { SliderImageType } from "./assets";

type ImageSliderProps = {
  imageUrls: SliderImageType[]
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSlides = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };
  // Responsive check
  useEffect(() => {
    updateSlides(); // on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const showNext = () => {
    setImageIndex((prev) => (prev + slidesToShow) % imageUrls.length);
  };

  const showPrev = () => {
    setImageIndex((prev) =>
      (prev - slidesToShow + imageUrls.length) % imageUrls.length
    );
  };

  const visibleImages = imageUrls.slice(
    imageIndex,
    imageIndex + slidesToShow
  );

  // Handle wrap-around when at end of array
  const wrappedImages =
    visibleImages.length < slidesToShow
      ? [...visibleImages, ...imageUrls.slice(0, slidesToShow - visibleImages.length)]
      : visibleImages;

  return (
    <div className="relative w-full bg-lightBrown dark:bg-transparent  p-2 rounded-md max-w-full h-[310px] md:h-[360px] overflow-hidden">
      <div className="flex w-full h-full gap-4 transition-transform duration-500">
      {wrappedImages.map(({src, alt}, i) => (
          <div key={i} className={`flex-1 h-full ${i%2 == 0 && "md:border-r-[0.5] border-gray-700"}`}>
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <ImageWithFallback src={src} alt={alt}
                    fill
                    classname="object-cover w-full h-full" 
                />
            </div>
          </div>
        ))}
      </div>

      {/* Nav buttons */}
      <button
        className="absolute top-0 bottom-0 left-0 px-4 bg-black/20 hover:bg-black/30 text-white z-10"
        onClick={showPrev}
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={30} color="black"/>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 px-4 bg-black/20 hover:bg-black/30 text-white z-10"
        onClick={showNext}
        aria-label="Next Slide"
      >
        <FaChevronRight size={30} color="black"/>
      </button>
    </div>
  );
};

export default ImageSlider;
