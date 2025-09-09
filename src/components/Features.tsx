const items = [
{ title: "เก็บความเย็น 24 ชม.", desc: "โครงสร้างผนัง 2 ชั้นสูญญากาศ ลดการถ่ายเทความร้อน" },
{ title: "วัสดุสแตนเลส 304", desc: "ปลอดภัย ไร้กลิ่น ไม่ขึ้นสนิม ทำความสะอาดง่าย" },
{ title: "ฝาปิดกันรั่ว", desc: "ซีลซิลิโคนคุณภาพสูง พกพาในกระเป๋าได้มั่นใจ" },
{ title: "น้ำหนักเบา", desc: "ถือมือเดียวสบายๆ เพียง 290 กรัม" },
];


export default function Features() {
return (
        <div id="features" className="section bg-white">
            <div className="container-max">
                <h2 className="h2 text-center">คุณสมบัติเด่น</h2>
                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    {items.map((it) => (
                            <div key={it.title} className="card p-6">
                                <div className="text-xl font-bold">{it.title}</div>
                                <p className="text-gray-500 mt-2 text-sm">{it.desc}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}