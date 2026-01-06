// import { motion, useScroll, useTransform } from "framer-motion";

// import HoverSection from "../components/HoverSection";
// import Navbar from "../Components/Navbar";

// export default function Home() {
//   const { scrollY } = useScroll();

//   const ySlow = useTransform(scrollY, [0, 2000], [0, -200]);
//   const yFast = useTransform(scrollY, [0, 2000], [0, -500]);

//   return (
//     <>
//       <Navbar />

//       {/* SECTION 1 */}
//       <section className="h-screen bg-[#f6f4f1] flex items-center justify-center">
//         <p className="max-w-3xl text-lg text-center">
//           SEATED is a creative culinary factory that crafts one-of-a-kind
//           experiences around the world.
//         </p>
//       </section>

//       {/* SECTION 2 – PARALLAX */}
//       <section className="h-screen bg-[#e6e2dc] flex items-center justify-center overflow-hidden">
//         <motion.h1 style={{ y: yFast }} className="text-[20vw] font-black">
//           SEATED
//         </motion.h1>
//       </section>

//       {/* SECTION 3 */}
//       <HoverSection />
//     </>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";

const projects = [
  { title: "ZEMYA WINE BAR", image: img1 },
  { title: "AMORY'S BDAY DINNER", image: img2 },
  { title: "TULESTE GALLERY & NYFW", image: img3 },
  { title: "MEADOWSWEET RETREAT", image: img4 },
  { title: "PASTRY BAR", image: img1 },
  { title: "VERSO GALLERY", image: img2 },
  { title: "DINNER IN THE VINEYARDS", image: img3 },
  { title: "BACARDI LEGACY", image: img4 },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#f6f4f1] flex items-center justify-center">
        {/* CENTER IMAGE */}
        <AnimatePresence>
          {active && (
            <motion.img
              key={active}
              src={active}
              className="absolute w-[320px] h-[440px] object-cover pointer-events-none"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        {/* PROJECT LIST */}
        <div
          className="relative z-10 flex flex-col items-center gap-3 text-center"
          onMouseLeave={() => setActive(null)}
        >
          <p className="text-xs tracking-widest mb-6">PROJECTS</p>

          {projects.map((item, i) => (
            <h2
              key={i}
              onMouseEnter={() => setActive(item.image)}
              className={`
                text-xl cursor-pointer transition-all duration-200
                ${active === item.image ? "text-black" : "text-gray-400"}
                hover:text-black
              `}
            >
              {item.title}
            </h2>
          ))}

          {/* FOOTER TEXT */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold">MARTINI</h3>
            <p className="text-xs tracking-wide">WORKSHOP 2022, 2023</p>
          </div>
        </div>
      </section>
    </>
  );
}
