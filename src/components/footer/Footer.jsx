import React from "react";

import { default as img1 } from "../../asstes/images/cakeArt.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";
export const Footer = () => {
  return (
    <section className="w-[100%] linear py-3 px-6 md:px-10">
      <div className="flex justify-between w-[100%] flex-wrap">
        <div className="logo flex-1 text-2xl w-48 font-semibold mx-2 md:mx-5">
          <AnchorLink
            className="text-md   md:text-3xl
              cursor-pointer"
            href="#intro"
            smooth={true}
            offset={-60}
            duration={500}
          >
            <img src={img1} alt="logo" width="170px" />
          </AnchorLink>
          <div className="mx-1  md:mx-5 flex flex-row gap-2 text-sm sm:text-md md:gap-4 sm:flex-wrap  cursor-pointer">
            <p>
              {" "}
              <i class="fa-brands fa-whatsapp text-2xl"></i>
            </p>
            <p>
              {" "}
              <i class="fa-brands fa-facebook text-2xl"></i>
            </p>
            <p>
              {" "}
              <i class="fa-brands fa-instagram text-2xl"></i>
            </p>
            <p>
              {" "}
              <i class="fa-brands fa-twitter text-2xl"></i>
            </p>
          </div>
        </div>

        <div
          className="flex justify-center md:justify-end items-center  w-[100%] flex-1 gap-4 px-4 text-md sm:text-xl
         md:text-2xl    text-white"
        >
          <p className="cursor-pointer  ">
            {" "}
            <Link
              to="intro"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Home
            </Link>
          </p>
          <p className="cursor-pointer">
            {" "}
            <Link
              to="menu"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Menu
            </Link>
          </p>
          <p className="cursor-pointer">
            {" "}
            <Link
              to="gallery"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Gallery
            </Link>
          </p>
          <p className="cursor-pointer">
            {" "}
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              About
            </Link>
          </p>
          <p className="cursor-pointer">
            {" "}
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
      <div className="w-[100%] ">
        <h3 className="text-center">2023 demo website | All Right Reserved</h3>
      </div>
    </section>
  );
};
