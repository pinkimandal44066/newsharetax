import img4 from "../../public/img4.png";
import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: img4, alt: "Nature 2" },
  { id: 2, src: img4, alt: "Nature 3" },
  { id: 3, src: img4, alt: "Nature 4" },
  { id: 4, src: img4, alt: "Nature 2" },
  { id: 5, src: img4, alt: "Nature 3" },
  { id: 6, src: img4, alt: "Nature 4" },
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image slider container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 text-white bg-blue-600
         rounded-full p-2 transition duration-300"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl z-10 text-white
        bg-blue-600  rounded-full p-2 transition duration-300"
      >
        &#10095;
      </button>

      {/* Dots for slide navigation */}
      <div className="absolute bottom-4 flex justify-center space-x-2 w-full">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;













