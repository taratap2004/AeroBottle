import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "AeroBottle — ขวดน้ำดื่มสแตนเลสสูญญากาศ",
    description: "ขวดน้ำสแตนเลสสูญญากาศ เก็บความเย็น 24 ชม. ความร้อน 12 ชม. น้ำหนักเบา ดีไซน์พรีเมียม",
    metadataBase: new URL("https://example.com"),
    openGraph: {
        title: "AeroBottle",
        description: "ขวดน้ำสแตนเลสสูญญากาศ พกพาง่าย เก็บความเย็น 24 ชม.",
        type: "website",
        url: "https://example.com",

        images: [
            {
                url: "/AeroBottle1.png",
                width: 1200,
                height: 630,
                alt: "AeroBottle",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AeroBottle",
        description: "ขวดน้ำสแตนเลสสูญญากาศ พกพาง่าย",
        images: ["/og.jpg"],
    },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="th">
            <body className={inter.className}>{children}</body>
        </html>
    );
}