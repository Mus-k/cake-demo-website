import React from "react";
import { Link } from "react-scroll";
export const About = () => {
  return (
    <section id="about" className="about bg-gray-100 ">
    <div className="ab-wrapper">
    <div className="ab-container bg-white">
        <h1 className="mb-6 text-[30px] font-bold text-1xl text-[#8652ff]">About Us</h1>
        <p className="text-[13px] text-[#545454] leading-6 text-justify mb-[30px]">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. uis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur.  {" "}
        </p>
        <button className="linear  p-2 rounded-lg hover:scale-105 hover:transition-all duration-500">
                      <Link
                        className="text-white font-semibold"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                      >
                        reach us
                      </Link>
                    </button>
      </div>
    </div>
    </section>
  );
};
