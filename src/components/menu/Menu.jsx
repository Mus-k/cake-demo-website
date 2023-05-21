import React from "react";
import MenuData from "../../api/MenuData";

export const Menu = () => {
  return (
    <div
      id="menu"
      className="bg-gray-100 flex h-full py-12 flex-col justify-center items-center px-12"
    >
      <h1 className="text-center text-3xl font-bold text-[#8652ff] pb-5">
        Welcome to <span className="text-[#f8c7c8]">our</span>  Menu
      </h1>
      <div className="flex justify-center items-center gap-5 flex-wrap w-[100%]">
        {MenuData &&
          MenuData.map((menu) => (
            <div className="max-w-[350px] bg-white p-3 hover:scale-105 hover:transition-all duration-500">
              <img
                className="border-4 border-y-blue-500"
                src={menu.img}
                alt="menuImages"
                width="100%"
              />
              <div className="pt-5">
                <h3 className="font-semibold text-xl">{menu.title}</h3>
                <p className="text-md font-bold text-blue-500">{menu.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
