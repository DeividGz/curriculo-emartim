import React, { useState, useEffect } from "react";

type CarouselProps = {
  images: {
    url: string;
    text: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center">
        <img
          src={`/carousel/${images[currentIndex].url}.png`}
          alt={`Imagem ${currentIndex + 1}`}
          className="rounded-lg w-full h-64 object-cover"
        />
        <p>{images[currentIndex].text}</p>
      </div>
      <div className="top-0 right-0 bottom-0 left-0 absolute flex justify-between items-center p-4">
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
          className="bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
