import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import WhatsappIcon from '../../../public/loghi/bxl-whatsapp.svg';
import FacebookIcon from '../../../public/loghi/bxl-facebook-circle.svg';
import MailIcon from '../../../public/loghi/bx-mail-send.svg';
import  PhoneIcon  from '../../../public/loghi/bxs-phone.svg';



const Hero = () => {
  return (
    <div id='home' className='w-full h-screen flex items-center  bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-400 m-auto border-slate-300   flex-col justify-between'>
        <div className='grid md:grid-cols-2 mx-auto  max-w-[1240px] bg-gradient-to-b from-zinc-300 via-zinc-200 to-zinc-300 m-auto border-slate-300 rounded-xl  shadow-xl p-12 '>
            <div className='flex flex-col font-sans justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl font-bold'>Lettura & Riparazioni Contatori Acqua</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'><span className='text-cyan-400'>Lerca</span> dal 1948</h1>
                <h2 className='py-3 text-3xl md:text-4xl font-bold mb-2'>Via Trento 11, Foggia</h2>
                <p className='text-2xl font-sans'>Dall&apos;esperienza del passato una garanzia per il futuro.</p>
                <Link className='bg-cyan-400 text-center text-white rounded-xl font-bold py-3 px-6 sm:w-[60%] my-4 hover:bg-cyan-500 transition-all hover:text-2xl ' href='#about'>Scoprici</Link>

                <div className='flex flex-col  py-2 md:min-w-[400px] rounded-xl text-center mt-6 ' >
                <div className='flex   justify-between flex-wrap   '>
            <Link  href="https://wa.me/0881721174">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
          <Link  href="https://www.facebook.com/lerca.foggia.1">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="mailto:info@lerca.it">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
          <Link href="tel:0881721174">
            <Image src={PhoneIcon} alt="Tel Icon" />
          </Link>
                </div>

            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero