import HoverSection from "../components/HoverSection";
import Footer from "../components/Footer";

import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";

const services = [
  { title: "COCKTAILS", image: img1 },
  { title: "DINING", image: img2 },
  { title: "GETAWAYS", image: img3 },
  { title: "WORKSHOPS", image: img4 },
];

export default function Home() {
  return (
    <>
      <section className="h-screen bg-[#f6f4f1] flex items-center justify-center px-40 text-center">
        <p className="max-w-3xl text-lg">
          SEATED is a creative culinary factory that crafts one-of-a-kind
          experiences around the world.
        </p>
      </section>

      <HoverSection title="SERVICES" items={services} />

      <Footer />
    </>
  );
}
