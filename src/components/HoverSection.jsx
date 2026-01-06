import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";
import img5 from "../Images/img5.webp";

const services = [
  { title: "COCKTAILS", image: img1 },
  { title: "EXPERIENCE", image: img2 },
  { title: "DINNING", image: img3 },
  { title: "GETAWAYS", image: img4 },
  { title: "WORKSHOPS", image: img5 },
];

export default function HoverSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative h-screen bg-[#f6f4f1] flex items-center justify-center overflow-hidden">
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
            className="
              text-4xl 
              cursor-pointer 
              transition-opacity 
              duration-200
              hover:opacity-40
            "
          >
            {item.title}
          </h2>
        ))}
      </div>
    </section>
  );
}
