import Image from "next/image";
import g1 from "@/../public/AeroBottle1.png";
import g2 from "@/../public/AeroBottle2.png";
import g3 from "@/../public/AeroBottle3.png";
import g4 from "@/../public/AeroBottle4.png";

const gallery = [
  { src: g1, alt: "AeroBottle lifestyle 1" },
  { src: g2, alt: "AeroBottle lifestyle 2" },
  { src: g3, alt: "AeroBottle lifestyle 3" },
  { src: g4, alt: "AeroBottle lifestyle 4" },
];

export default function Gallery() {
  return (
    <div id="gallery" className="section bg-gray-50">
      <div className="container-max">
        <h2 className="h2 text-center">แกลเลอรี</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {gallery.map((g) => (
            <div
              key={g.alt}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft border border-gray-100"
            >
              <Image src={g.src} alt={g.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
