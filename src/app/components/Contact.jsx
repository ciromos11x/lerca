import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import WhatsappIcon from '../../../public/loghi/bxl-whatsapp.svg';
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '../../../public/loghi/bx-mail-send.svg';
import  PhoneIcon  from '../../../public/loghi/bxs-phone.svg';

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.8519874174226!2d15.549005276063552!3d41.46412547129028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339d85ec9e9e543%3A0x68143d801178792e!2sLerca%20Letture%20E%20Riparazioni%20Contatori%20Acqua!5e0!3m2!1sit!2sit!4v1700998266104!5m2!1sit!2sit" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

export default function Contact() {
  return (
    <div name='contact' className="flex flex-col md:flex-row">
      <div className="w-1/2 p-4 ">
        {/* Contenuto della prima colonna */}
        <div className=" p-4 ">
        <h2 className=' py-3 mb-4 text-3xl text-cyan-400 md:text-4xl font-bold'>
            Contatti
        </h2>
        <p className='text-2xl text-zinc-200 font-sans'>Puoi conttattarci sulle nostre piattaforme social, siamo attivi dal Lunedi al Venerdi.</p>
        <p className='text-2xl text-zinc-200 font-sans'>Basta cliccare le icone qui sotto!</p>
        <div >
        <Link   href="https://wa.me/0881721174">
            <Image   src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
          <Link  href="https://www.facebook.com/lerca.foggia.1">
            <Image  src={FacebookIcon} alt="Facebook Icon" />
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
      <div className=" m-auto">
        {/* Contenuto della seconda colonna */}
        <div className='text-center justify-center items-center ' >
        <h2 className=' py-3 mb-4 text-3xl text-cyan-400 md:text-4xl font-bold'>
            Dove siamo?
        </h2>
        <div className='m-4 flex items-center justify-center border rounded-md' dangerouslySetInnerHTML={{ __html: iframe }} />
        </div>
      </div>
    </div>
  )
}
  