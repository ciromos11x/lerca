"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {
  return (
     <div id='about' className='flex flex-col items-center justify-center bg-black'>
     <div className='text-center p-16 rounded-lg shadow-md'>
       <h2 className='py-3 text-3xl text-cyan-400 md:text-4xl font-bold'>Da più di 70 anni al servizio per Foggia, Provincia e zona BAT.</h2>
       <p className='text-2xl mt-4 text-zinc-200 font-sans'>Nata nel 1948 la società da più di 70 anni opera nel settore della lettura, contabilizzazione dei consumi privati di acqua potabile.</p>
       <p className='text-2xl m-4 text-zinc-200 font-sans'>Migliaia di utenti che abitano nei comuni di Foggia, provincia e zona BAT, si sono avvalsi in questi anni del nostro servizio restando pienamente soddisfatti e rendendo la nostra società una delle aziende leader in Puglia in questo settore.</p>
     </div>
     <div className='text-white flex flex-col container py-4 mx-auto px-4 gap-10'>
       <div className='bg-gray-900 rounded-2xl p-4 mb-4'>
         <h1 className='mt-2 text-center font-bold text-lg'>
           SOCI
         </h1>
         <p className='flex items-center justify-center h-[300px] text-center text-md'>
           La nostra azienda è gestita direttamente dai soci ed i rapporti, anche telefonici, dell&apos; utente sono sempre soddisfacenti e qualificati.
         </p>
       </div>
       <div className='bg-gray-900 rounded-2xl p-4 mb-4'>
         <h1 className='mt-2 text-center font-bold text-lg'>
           PERSONALE
         </h1>
         <p className='flex items-center justify-center h-[300px] text-center text-md'>
           Il personale che effettua le letture, lavora da anni alle nostre dipendenze e sono persone qualificate, corrette e conosciute dagli utenti stessi.
         </p>
       </div>
       <div className='bg-gray-900 rounded-2xl p-4 mb-4'>
         <h1 className='mt-2 text-center font-bold text-lg'>
           VANTAGGI
         </h1>
         <p className='flex items-center justify-center h-[300px] text-center text-md'>
           Il controllo frequente della lettura del contatore divisionale permette di rilevare tempestivamente eventuali perdite nell&apos; appartamento.
         </p>
       </div>
     </div>
   </div>
  )
}
