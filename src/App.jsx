import SmoothScroll from "./Components/SmoothScroll";
import HoverSection from "./Components/HoverSection";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-[#f6f4f1] flex items-center justify-center">
        <p className="max-w-3xl text-lg text-center">
          SEATED is a creative culinary factory that crafts one-of-a-kind
          experiences around the world.
        </p>
      </section>
      <HoverSection />
      <SmoothScroll />
      <Home />
    </>
  );
}
