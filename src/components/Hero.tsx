import Image from "next/image";
import heroImg from "@/../public/AeroButtle_poster.png"; // ✅ static import จาก /public

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
  <div className="container-max grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
    {/* คอลัมน์ข้อความ */}
    <div className="min-w-0 max-w-2xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mt-4">
        AeroBottle ขวดน้ำสูญญากาศพรีเมียม
      </h1>
      <p className="p mt-4">เก็บความเย็นได้นานสุด 24 ชม. และความร้อน 12 ชม. น้ำหนักเบา พกพาสบาย ดีไซน์มินิมอล</p>
      <div className="mt-4 flex gap-3">
        <a href="#features" className="btn btn-ghost">ดูคุณสมบัติ</a>
      </div>
    </div>

    {/* คอลัมน์รูป */}
    <div className="relative aspect-[4/3] md:aspect-square">
      <Image src={heroImg} alt="AeroBottle" fill className="object-contain" priority />
    </div>
  </div>
</div>

  );
}
