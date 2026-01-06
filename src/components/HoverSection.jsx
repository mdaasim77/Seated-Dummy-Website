// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import img1 from "../Images/img1.webp";
// import img2 from "../Images/img2.webp";
// import img3 from "../Images/img3.webp";
// import img4 from "../Images/img4.webp";
// import img5 from "../Images/img5.webp";

// const services = [
//   { title: "COCKTAILS", image: img1 },
//   { title: "EXPERIENCE", image: img2 },
//   { title: "DINNING", image: img3 },
//   { title: "GETAWAYS", image: img4 },
//   { title: "WORKSHOPS", image: img5 },
// ];

// export default function HoverSection() {
//   const [active, setActive] = useState(null);

//   return (
//     <section className="relative h-screen bg-[#f6f4f1] flex items-center justify-center overflow-hidden">
//       {/* CENTER IMAGE */}
//       <AnimatePresence>
//         {active && (
//           <motion.img
//             key={active}
//             src={active}
//             className="
//               absolute
//               w-[300px]
//               h-[420px]
//               object-cover
//             "
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.96 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           />
//         )}
//       </AnimatePresence>

//       {/* HOVER ITEMS (PERFECT CENTER) */}
//       <div
//         className="relative z-10 flex flex-col items-center gap-6 text-center "
//         onMouseLeave={() => setActive(null)}
//       >
//         <p className="tracking-widest mb-2 text-lg font-bold underline ">
//           SERVICES
//         </p>

//         {services.map((item, i) => (
//           <h2
//             key={i}
//             onMouseEnter={() => setActive(item.image)}
//             className="
//               text-4xl
//               text-gray-400
//               cursor-pointer
//               transition-opacity
//               duration-200
//               hover:text-black
//             "
//           >
//             {item.title}
//           </h2>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CENTER IMAGES
import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";

// HANDWRITTEN / SCRIBBLE IMAGES
import note1 from "../Images/note1.jfif";
import note2 from "../Images/note2.jfif";
import note3 from "../Images/note3.jfif";
import note4 from "../Images/note4.png";

// DATA (THIS DRIVES EVERYTHING)
const services = [
  {
    title: "COCKTAILS",
    image: img1,
    description:
      "CLASSIC & SIGNATURE COCKTAILS / PREMIUM ICE & INGREDIENTS / CURATED GLASSWARE / PROFESSIONAL BARTENDERS / ELEGANT PRESENTATION / WARM HOSPITALITY",
    note: note1,
  },
  {
    title: "EXPERIENCES",
    image: img2,
    description:
      "EVENT DESIGN / EXCLUSIVE SETTINGS / SENSORY IMMERSION / PERSONALIZED TOUCH / MEMORABLE INTERACTION / EMOTIONAL RESONANCE",
    note: note2,
  },
  {
    title: "DINING",
    image: img3,
    description:
      "CHEF-DRIVEN MENUS / SEASONAL INGREDIENTS / STORYTELLING THROUGH FOOD",
    note: note3,
  },
  {
    title: "GETAWAYS",
    image: img4,
    description:
      "DESTINATION EXPERIENCES / IMMERSIVE TRAVEL / CURATED CULINARY JOURNEYS",
    note: note4,
  },
];

export default function HoverSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative h-screen bg-[#f6f4f1] flex items-center justify-center overflow-hidden">
      {/* CENTER IMAGE */}
      <AnimatePresence>
        {active && (
          <motion.img
            key={active.image}
            src={active.image}
            className="absolute w-[320px] h-[440px] object-cover"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* HANDWRITTEN NOTE */}
      <AnimatePresence>
        {active?.note && (
          <motion.img
            key={active.note}
            src={active.note}
            className="absolute left-[12%] top-[28%] w-[280px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* CENTER MENU */}
      <div
        className="relative z-10 flex flex-col items-center gap-4 text-center"
        onMouseLeave={() => setActive(null)}
      >
        <p className="tracking-widest mb-4">SERVICES</p>

        {services.map((item, i) => (
          <h2
            key={i}
            onMouseEnter={() => setActive(item)}
            className={`
              text-3xl cursor-pointer transition-opacity duration-200
              ${active?.title === item.title ? "opacity-100" : "opacity-30"}
              hover:opacity-100
            `}
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* BOTTOM DESCRIPTION */}
      <AnimatePresence>
        {active?.description && (
          <motion.p
            key={active.description}
            className="absolute bottom-10 px-20 text-center text-sm tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {active.description}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
