import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function App() {
  const slides = [
    {
      img: "../assets/dance0.jpg",
    },
    {
      img: "../assets/dance1.jpg",
    },
    {
      img: "../assets/dance2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[450px] h-[700px] w-full m-auto py-8 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
      ></div>
      <div>
        <FaAngleLeft
          onClick={prevSlide}
          size={30}
          className="absolute top-[50%] rounded-full p-2 bg-black/20 text-white cursor-pointer left-5"
        />
      </div>
      <div>
        <FaAngleRight
          onClick={nextSlide}
          size={30}
          className="absolute top-[50%] rounded-full p-2 bg-black/20 text-white cursor-pointer right-5"
        />
      </div>
      <div className="flex mt-4 gap-2 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer"
          >
            <FaCircle />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
