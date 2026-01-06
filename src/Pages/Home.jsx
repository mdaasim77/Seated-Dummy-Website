import { motion, useScroll, useTransform } from "framer-motion";
import HoverSection2 from "../components/HoverSection2";
import Footer from "../components/Footer";
import HoverSection from "../Components/HoverSection";

export default function Home() {
  const { scrollY } = useScroll();

  // VISIBLE parallax values
  // stronger
  const page1Y = useTransform(scrollY, [0, 600], [0, -200]);
  const page2Y = useTransform(scrollY, [400, 1200], [0, -350]);

  return (
    <>
      {/* PAGE 1 — NORMAL TEXT (SLOW PARALLAX) */}
      <section className="h-screen bg-[#f6f4f1] flex items-center justify-center px-40 text-center overflow-hidden">
        <motion.p style={{ y: page1Y }} className="max-w-3xl text-lg">
          SEATED is a creative culinary factory that crafts one-of-a-kind
          experiences around the world.
        </motion.p>
      </section>

      {/* PAGE 2 — BOLD TEXT (FASTER PARALLAX) */}
      <section className="h-screen bg-[#f6f4f1] flex items-center justify-center px-40 text-center overflow-hidden">
        <motion.p
          style={{ y: page2Y }}
          className="max-w-3xl text-2xl font-bold"
        >
          WE DESIGN IMMERSIVE CULINARY EXPERIENCES THAT CONNECT PEOPLE, CULTURE,
          AND STORYTELLING THROUGH FOOD.
        </motion.p>
      </section>

      {/* PAGE 3 — SERVICES (NO PARALLAX) */}
      <HoverSection />

      {/* PAGE 4 — PROJECTS (NO PARALLAX) */}
      <HoverSection2 />

      {/* PAGE 5 — FOOTER */}
      <Footer />
    </>
  );
}
