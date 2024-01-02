// src\app\page.js
// pages/index.js (o page.js, a seconda del tuo caso)

"use client"
import Image from 'next/image';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import AccordionItem from './components/AccordionItem';
import Footer from './components/Footer';
import Contact from './components/Contact';


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className='bg-black'>
        <About />
        <AccordionItem />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
