import React, { useState } from "react";
import TestimonialData from "../../api/TestimonialsData";
import "./Testimonials.css";
const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-slider bg-gray-100">
        <h2 className="testTitle text-center text-md sm:text-xl my-5 md:text-3xl  p-0 text-[#8652ff]">Testimonials</h2>
      <div className="slide-container py-4">
        {TestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? "T-slide active" : "T-slide inactive"
            }
          >
            <div className=" t-cards flex justify-center  gap-5 p-5">
              <div className="t-imgDiv flex  self-center">
                <img src={testimonial.src} width="100%" />
              </div>

              <div className="content">
                <p><i class="fa-solid fa-quote-left px-1 text-indigo-400"></i> 
                {testimonial.text}
                <i class="fa-solid fa-quote-right px-1 text-indigo-400"></i></p>
                <h4 className="text-2xl text-indigo-400">{testimonial.author}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prevSlide} className="linear ">Prev</button>
        <button onClick={nextSlide} className="linear">Next</button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
