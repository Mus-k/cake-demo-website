import React from "react";

import { default as img1 } from "../../asstes/images/cakeArt.png";

import { Link } from "react-scroll";
export const TopNav = ({ open, setOpen }) => {
  const active =
    "topbar active linear  h-[60px] text-white w-[100%] fixed z-50 flex items-center";
  const unactive =
    "topbar  linear text-white h-[60px] w-[100%] fixed z-50 flex  items-center";
  return (
    <div className={open ? active : unactive}>
      <div className="wrapperr flex justify-between items-center w-[100%]">
        <div className="left flex  justify-around items-center mx-1 md:mx-5">
          <div
            className={
              open
                ? "logo text-2xl bg-[#8652ff]  w-32 font-semibold mx-2 md:mx-5"
                : "logo text-2xl w-32 font-semibold mx-2 md:mx-5"
            }
          >
            <Link
              className="text-md   md:text-3xl
              cursor-pointer"
            
              to="intro"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <img src={img1} alt="logo" />
            </Link>
          </div>
          <div className="mx-1 md:mx-2 lg:mx-5 text-sm sm:text-md  cursor-pointer snap-mandatory sm">
            <i className="fa-solid fa-user pr-1 sm"></i>+23165697965
          </div>

          <div className="hidden md:flex md:mx-2 lg:mx-5 items-center  cursor-pointer">
            <i className="fa-solid fa-envelope pr-1 "></i>
            <a href="mailto:kmusa@gmail.com">kmariam@gmail.com</a>
          </div>
          <div className="mx-1 md:mx-5 flex gap-2 text-sm sm:text-md md:gap-4 sm:flex-wrap  cursor-pointer">
            <i className="fa-brands fa-whatsapp sm"></i>
            <i className="fa-brands fa-facebook sm"></i>
            <i className="fa-brands fa-instagram sm"></i>
            <i className="fa-brands fa-twitter sm"></i>
          </div>
        </div>
        <div className="right ">
          <div
            onClick={() => setOpen(!open)}
            className="hamburger cursor-pointer mr-2 sm:mr-8"
          >
            <span className="span st"></span>
            <span className="span nd"></span>
            <span className="span third"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
