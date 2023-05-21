import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderData from "../../api/SliderData";
import { Link } from "react-scroll";
import "../mediaQuerry/MediaQuerry.css";

export const Slider = () => {
  const [slides] = useState(SliderData);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  // next slide
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  //   useEffect for automatic sliding
  useEffect(() => {
    let timer = setTimeout(() => {
      if (activeSlide === slides.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeSlide, slides.length]);

  return (
    <section className="slider 2xl:h-[100vh]  flex justify-center items-center px-20 relaitve">
      {/* left */}
      <div
        onClick={prevSlide}
        className="left z-20 cursor-pointer absolute top-0 bottom-0 
        m-auto left-6  flex justify-center
         items-center w-[50px] h-[50px] 
         rounded-full hover:scale-105 hover:transition-all duration-500
       linear text-white"
      >
        <FaArrowLeft />
      </div>

      {/* slide */}
      {slides &&
        slides.map((slide, index) => {
          if (index === activeSlide) {
            return (
              <div className="wrapper flex w-[100%] h-[600px] justify-center items-center xl:shadow-2xl roundex-xl relative overflow-hidden">
                <div className="slide flex items-center justify-center w-[100%]">
                  <div className="image max-w-[90%] lg:max-w-[80%] flex flex-1 justify-center order-2 p-6 items-center h-[100%]">
                    <img
                      className="object-cover rounded-xl"
                      src={slide.img}
                      alt="slide"
                      width="100%"
                      // height="80%"
                    />
                  </div>
                  {/* text */}
                  <div
                    className="desc flex flex-1 order-1 justify-center flex-col items-center 
        "
                  >
                    <h2 className=" text-2xl px-2 font-bold lg:text-4xl text-center">
                      {slide.content.title}
                    </h2>
                    <p className="text-xl lg:text-2xl lg:w-[70%] text-center pt-4">
                      {slide.content.text}
                    </p>
                    <button className="linear  p-4 mt-7 rounded-lg hover:scale-105 hover:transition-all duration-500">
                      <Link
                        className="text-white font-semibold"
                        activeClass="active"
                        to="menu"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                      >
                        Explore our menu
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}

      {/* right */}

      <div
        onClick={nextSlide}
        className="right cursor-pointer absolute top-0 bottom-0 m-auto right-7 flex
       justify-center items-center w-[50px] h-[50px] rounded-full linear text-white hover:scale-105 hover:transition-all duration-500"
      >
        <FaArrowRight />
      </div>
    </section>
  );
};

//    <div className="arrowLeft cursor-pointer absolute top-0 bottom-0 m-auto left-3  flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white">
// <FaArrowLeft />
// </div>
// <div className="arrowRight cursor-pointer absolute top-0 bottom-0 m-auto right-3 flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white">
//   <FaArrowRight />
// </div>
