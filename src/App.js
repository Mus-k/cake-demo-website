import { useState } from "react";
import { TopNav } from "./components/topNav/TopNav";
import { MenuItem } from "./components/sidebar/MenuItem";
import { Gallery } from "./components/gallery/Gallery";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Menu } from "./components/menu/Menu";
import { Footer } from "./components/footer/Footer";
import TestimonialsSlider from "./components/testimonials/Testimonial";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app h-[100vh] ">
      <TopNav open={open} setOpen={setOpen} />
      <MenuItem open={open} setOpen={setOpen} />
      <div className="w-[100%] max-w-[1550px] mx-auto bg-gray-100  ">
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <TestimonialsSlider />
        <Contact /> 
       
        <Footer />
      </div>
    </div>
  );
}

export default App;
