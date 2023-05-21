import React from "react";

import "../mediaQuerry/MediaQuerry.css";
import { Link } from "react-scroll";
//import { default as img2 } from "../../asstes/images/gallery-2.jpg";
export const TabletMode = () => {
  return (
    <section className="tablet w-[100%">
        {/* <div className="h-[100vh] bg-red-700">
        <img src={img2} alt="landing-page" width="100%" height="100vh" />
        </div> */}
      
      <div className="flex mt-9 sm:mt-0  p-10 flex-col justify-center items-center py-32">
        <h3 className=" text-5xl sm:text-6xl text-blue-500 sm:text-white text-center font-bold">A little bliss in  <br/> every bite</h3>
        <p className="text-center text-white pt-10 text-xl font-semibold">We provide our customer with wide <br/>range of cake</p>
        <button className="introBtn  p-2 sm:p-4 mt-7 rounded-lg hover:scale-105 hover:transition-all duration-500">
          <Link
            className="text-[#8652ff] sm:text-black font-semibold"
           
            to="menu"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Explore our menu
          </Link>
        </button>
      </div>
    </section>
  );
};
