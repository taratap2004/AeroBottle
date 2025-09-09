"use client";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-gray-300 backdrop-blur border-b border-gray-100">
            <div className="container-max flex items-center justify-between h-16">
                <Link href="#" className="font-extrabold tracking-tight text-xl">AeroBottle</Link>
                <nav className="hidden md:flex gap-8 text-sm">
                    <a href="#features" className="hover:opacity-70">คุณสมบัติ</a>
                    <a href="#gallery" className="hover:opacity-70">แกลเลอรี่</a>
                </nav>
                <div className="hidden md:flex gap-2"></div>
                <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="toggle menu">
                    <span>☰</span>
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-gray-100">
                    <div className="container-max py-3 flex flex-col gap-2">
                        <a href="#features" onClick={() => setOpen(false)}>คุณสมบัติ</a>
                        <a href="#gallery" onClick={() => setOpen(false)}>แกลเลอรี</a>
                        <a href="#buy" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>สั่งซื้อ</a>
                    </div>
                </div>
            )}
        </header>
    );
}