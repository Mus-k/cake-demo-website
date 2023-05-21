import React from "react";
import { Link } from "react-scroll";
export const MenuItem = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };
  const active =
    "sidebar w-[300px] h-[100vh] fixed bg-gray-100 text-[#8652ff] top-0 right-0 z-10 flex justify-center items-center flex-col transition-all  duration-500";
  const unactive =
    "sidebar w-[300px] h-[100vh] fixed bg-gray-100 text-[#8652ff] top-0 right-[-300px] z-10 flex justify-center items-center flex-col transition-all  duration-500";
  return (
    <section className={open ? active : unactive}>
      <ul className="text-3xl font-medium w-[60%]">
        <li className="mb-6 cursor-pointer hover:scale-105 hover:transition-all  hover:duration-500">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="mb-6 cursor-pointer hover:scale-105 hover:transition-all  hover:duration-500">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Menu
          </Link>
        </li>
        <li className="mb-6 cursor-pointer hover:scale-105 hover:transition-all  hover:duration-500">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li className="mb-6 cursor-pointer hover:scale-105 hover:transition-all  hover:duration-500">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="mb-6 cursor-pointer hover:scale-105 hover:transition-all  hover:duration-500">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};
