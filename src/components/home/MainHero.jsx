import { useState, useEffect, useMemo } from "react";

import slide1 from "../../assets/heroSectionBg/slide1.jpg";
import slide2 from "../../assets/heroSectionBg/slide2.jpg";
import slide3 from "../../assets/heroSectionBg/slide3.jpg";
import slide4 from "../../assets/heroSectionBg/slide4.jpg";

import firstBanner from "../../assets/heroSectionBg/firstBanner.png";
import lastBanner from "../../assets/heroSectionBg/lastBanner.png";

const MainHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const slides = useMemo(
    () => [
      {
        image: slide2,
        text: "Ensuring Reliable and Secure Identity Management",
      },
      {
        image: slide1,
        text: "Empowering Businesses with Cutting-Edge Technology",
      },
      {
        image: slide3,
        text: "Optimizing Operations for a Smarter Future",
      },
      {
        image: slide4,
        text: "Ensuring Safety with Real-Time Management",
      },
    ],
    [],
  );

  // firstBanner first
  // lastBanner inserted 2 places from end
  const sliderItems = useMemo(() => {
    return [
      {
        image: firstBanner,
        imageOnly: true,
      },

      slides[0],
      slides[1],
      slides[2],

      {
        image: lastBanner,
        imageOnly: true,
      },

      slides[3],
    ];
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  useEffect(() => {
    const promises = sliderItems.map((slide) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
      });
    });

    Promise.all(promises).then(() => setLoading(false));
  }, [sliderItems]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden w-full bg-[#edebe8]">
      <div className="relative w-full">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "transform 1s ease",
          }}
        >
          {sliderItems.map((slide, index) => (
            <div
              key={index}
              className="relative w-screen flex-shrink-0"
            >
              {loading ? (
                <div className="w-full h-64 md:h-96 lg:h-[600px] bg-gray-300 animate-pulse" />
              ) : (
                <img
                  src={slide.image}
                  alt={`slide-${index}`}
                  className="w-full h-64 md:h-96 lg:h-[70vh] object-cover"
                />
              )}

              {!slide.imageOnly && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p
                    key={`${index}-${currentSlide}`}
                    className="text-white font-bold text-xl md:text-4xl text-center animate-slide-up"
                  >
                    {slide.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 z-40"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 z-40"
        >
          &#10095;
        </button>

        {/* indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-40">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <style>
          {`
            @keyframes slide-up {
              from {
                transform: translateY(100%);
                opacity: 0;
              }

              to {
                transform: translateY(0%);
                opacity: 1;
              }
            }

            .animate-slide-up {
              animation: slide-up 1.5s ease-out;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default MainHero;