import { motion, useScroll, useTransform } from "framer-motion";
import HoverSection from "../Components/HoverSection";
import HoverSection2 from "../components/HoverSection2";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollY } = useScroll();

  /*
    Each section moves from 120% → 0%
    Extra distance ensures full coverage.
  */

  const page1Y = useTransform(scrollY, [0, 0], ["0%", "0%"]);
  const page2Y = useTransform(scrollY, [0, 1000], ["120%", "0%"]);
  const page3Y = useTransform(scrollY, [800, 2200], ["120%", "0%"]);
  const page4Y = useTransform(scrollY, [2200, 3000], ["120%", "0%"]);
  const page5Y = useTransform(scrollY, [4600, 5500], ["120%", "0%"]);

  return (
    <div className="relative h-[600vh]">
      {/* PAGE 1 */}
      <motion.section
        style={{ y: page1Y }}
        className="fixed inset-0 bg-[#f6f4f1] flex items-center justify-center px-40 text-center z-[1]"
      >
        <p className="max-w-3xl text-2xl">
          SEATED is a creative culinary factory that crafts one-of-a-kind
          experiences around the world.
        </p>
      </motion.section>

      {/* PAGE 2 */}
      <motion.section
        style={{ y: page2Y }}
        className="fixed inset-0 bg-[#d4cabb] flex items-center justify-center px-40 text-center z-[2]"
      >
        <p className="max-w-3xl text-5xl font-bold">
          WE DESIGN IMMERSIVE CULINARY EXPERIENCES THAT CONNECT PEOPLE, CULTURE,
          AND STORYTELLING THROUGH FOOD.
        </p>
      </motion.section>

      {/* PAGE 3 */}
      <motion.section
        style={{ y: page3Y }}
        className="fixed inset-0 bg-[#f6f4f1] z-[3]"
      >
        <HoverSection />
      </motion.section>

      {/* PAGE 4 */}
      <motion.section
        style={{ y: page4Y }}
        className="fixed inset-0 bg-[#2c0f70] z-[4]"
      >
        <HoverSection2 />
      </motion.section>

      {/* PAGE 5 — FOOTER */}
      <motion.section
        style={{ y: page5Y }}
        className="fixed inset-0 bg-black z-[5]"
      >
        <Footer />
      </motion.section>
    </div>
  );
}
