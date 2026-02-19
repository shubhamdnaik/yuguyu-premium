import Image from "next/image";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DigitalTwin from '@/components/DigitalTwin';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <DigitalTwin />
      <Contact />
    </main>
  );
}
