import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CENTER IMAGES
import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";

// HANDWRITTEN / SCRIBBLE IMAGES
// import note1 from "../Images/note1.jfif";
// import note2 from "../Images/note2.jfif";
// import note3 from "../Images/note3.jfif";
// import note4 from "../Images/note4.png";

// DATA (THIS DRIVES EVERYTHING)
const services = [
  {
    title: "COCKTAILS",
    image: img1,
    description:
      "CLASSIC & SIGNATURE COCKTAILS / PREMIUM ICE & INGREDIENTS / CURATED GLASSWARE / PROFESSIONAL BARTENDERS / ELEGANT PRESENTATION / WARM HOSPITALITY",
    note: {
      text: "THEIR COCKTAILS ARE BRILLIANTLY\nCRAFTED – CREATIVE, BALANCED\nAND DOWNRIGHT DELICIOUS\n— AMJURI, CEO OF VERSO",
      color: "#f3369c",
      rotate: "-8deg",
    },
  },
  {
    title: "EXPERIENCES",
    image: img2,
    description:
      "EVENT DESIGN / EXCLUSIVE SETTINGS / SENSORY IMMERSION / PERSONALIZED TOUCH / MEMORABLE INTERACTION / EMOTIONAL RESONANCE",
    note: {
      text: "Absolutely next level! It's an experience I never want to end. I'm moving in Matthias, DJ",
      color: "#f64341",
      rotate: "-8deg",
    },
  },
  {
    title: "DINING",
    image: img3,
    description:
      "CHEF-DRIVEN MENUS / SEASONAL INGREDIENTS / STORYTELLING THROUGH FOOD",
    note: {
      text: "This wagyu ribeye was everything I've ever wanted! You nailed it!- Amory, Celebration King",
      color: "#5797f4",
      rotate: "-4deg",
    },
  },
  {
    title: "GETAWAYS",
    image: img4,
    description:
      "DESTINATION EXPERIENCES / IMMERSIVE TRAVEL / CURATED CULINARY JOURNEYS",
    note: {
      text: "A retreat that doesn't just recharge you — it transforms you!- Adele, Herbalist",
      color: "#fe8d22",
      rotate: "8deg",
    },
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
          <motion.div
            key={active.note.text}
            style={{
              color: active.note.color,
              transform: `rotate(${active.note.rotate})`,
              fontFamily: "'Permanent Marker', cursive",
            }}
            className="absolute left-[12%] top-[28%] w-[280px] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {active.note.text}
            </p>
          </motion.div>
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
