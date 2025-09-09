import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <Gallery />
            <Footer />
        </main>
    );
}