import React, { useState } from "react";
import data from "../../api/GalleryData";

export const Gallery = () => {
  const [model, setModel] = useState(false);
  const [template, setTemplate] = useState("");

  const getImg = (src) => {
    setTemplate(src);
    setModel(true);
  };
  return (
    <section
      id="gallery"
      className="gallery flex justify-center flex-col items-center bg-gray-100 md:py-10 md:px-10 h-full"
    >
      <h1 className="text-center text-3xl font-bold text-[#8652ff] pb-5">
        Welcome to <span className="text-[#f8c7c8]">our</span> Gallery
      </h1>
      <span
        onClick={() => setModel(false)}
        className={model ? "overlay open" : "overlay"}
      ></span>
      <div className={model ? "model open" : "model"}>
        <div className="popupImg flex self-center relative">
          <img src={template}/>
          <p className="close" onClick={() => setModel(false)}>
            <i class="fa-solid fa-xmark text-xl md:text-3xl"></i>
          </p>
        </div>
      </div>
      <div className="galleryItem">
        {data &&
          data.map((gallery, index) => (
            <div
              onClick={() => getImg(gallery.src)}
              key={index}
              className="img-div"
            >
              <img src={gallery.src} alt="gallery" width="100%" />
            </div>
          ))}
      </div>
    </section>
  );
};
