import { motion, useScroll, useTransform } from "framer-motion";

import HoverSection from "../components/HoverSection";
import Navbar from "../Components/Navbar";

export default function Home() {
  const { scrollY } = useScroll();

  const ySlow = useTransform(scrollY, [0, 2000], [0, -200]);
  const yFast = useTransform(scrollY, [0, 2000], [0, -500]);

  return (
    <>
      <Navbar />

      {/* SECTION 1 */}
      <section className="h-screen bg-[#f6f4f1] flex items-center justify-center">
        <p className="max-w-3xl text-lg text-center">
          SEATED is a creative culinary factory that crafts one-of-a-kind
          experiences around the world.
        </p>
      </section>

      {/* SECTION 2 – PARALLAX */}
      <section className="h-screen bg-[#e6e2dc] flex items-center justify-center overflow-hidden">
        <motion.h1 style={{ y: yFast }} className="text-[20vw] font-black">
          SEATED
        </motion.h1>
      </section>

      {/* SECTION 3 */}
      <HoverSection />
    </>
  );
}
