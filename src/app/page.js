import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import About from '../components/About'
import AccordionItem from '../components/AccordionItem'

export default function Home() {
  return (
   <main className=''>
      <Navbar />
      <HeroSection />
      <div className='bg-black '>
      <About />
      <AccordionItem />
      </div>
   </main>
  )
}
