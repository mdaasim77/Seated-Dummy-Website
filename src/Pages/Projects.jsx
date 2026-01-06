import HoverSection from "../components/HoverSection";

import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";

const projects = [
  { title: "ZEMYA WINE BAR", image: img1 },
  { title: "AMORY'S BDAY DINNER", image: img2 },
  { title: "TULESTE GALLERY & NYFW", image: img3 },
  { title: "MEADOWSWEET RETREAT", image: img4 },
];

export default function Projects() {
  return (
    <HoverSection
      title="PROJECTS"
      items={projects}
      footer={{ title: "MARTINI", subtitle: "WORKSHOP 2022, 2023" }}
    />
  );
}
