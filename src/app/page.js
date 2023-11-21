import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import AccordionItem from './components/AccordionItem'
import Footer from './components/Footer'

export default function Home() {
  return (
   <main className=''>
      <Navbar />
      <HeroSection />
      <div className='bg-black '>
      <About />
      <AccordionItem />
      </div>
      <Footer />
   </main>
  )
}
