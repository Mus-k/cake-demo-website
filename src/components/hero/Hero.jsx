import React from "react";
import { Slider } from "../slider/Slider";
import { TabletMode } from "../tablet/TabletMode";

export const Hero = () => {
  return (
    <div
      id="intro"
      className="height intro relative bg-white pt-[60px] max-w-[1550px] "
    >
      <Slider />
      <TabletMode  />
      

    </div>
  );
};
