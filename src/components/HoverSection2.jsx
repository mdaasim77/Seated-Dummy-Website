import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img11 from "../Images/img11.webp";
import img12 from "../Images/img12.webp";
import img13 from "../Images/img13.webp";
import img14 from "../Images/img14.webp";
import img15 from "../Images/img15.webp";

const services = [
  { title: "ZEMYA WINE BAR", image: img11 },
  { title: "AMORY'S BDAY DINNER", image: img12 },
  { title: "TULESTE GALLERY & NYDW", image: img13 },
  { title: "MEADOWSWEET RETREAT", image: img14 },
  { title: "PASTRY", image: img15 },
];

export default function HoverSection2() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative h-screen bg-[#d4cabb] flex items-center justify-center overflow-hidden">
      {/* CENTER IMAGE */}
      <AnimatePresence>
        {active && (
          <motion.img
            key={active}
            src={active}
            className="
              absolute 
              w-[300px] 
              h-[420px] 
              object-cover
            "
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* HOVER ITEMS (PERFECT CENTER) */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        onMouseLeave={() => setActive(null)}
      >
        <p className="tracking-widest mb-2 text-lg ">SERVICES</p>

        {services.map((item, i) => (
          <h2
            key={i}
            onMouseEnter={() => setActive(item.image)}
            className="text-4xl 
              text-gray-400
              cursor-pointer 
              transition-opacity 
              duration-200
              hover:text-black
            "
          >
            {item.title}
          </h2>
        ))}
      </div>
    </section>
  );
}
