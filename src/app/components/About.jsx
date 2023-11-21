"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {
  return (
    <div name='about' className=' items-center justify-center  bg-black '>
            <div className='text-center  p-16 rounded-lg shadow-md'>
                <h2 className=' py-3 text-3xl text-cyan-400 md:text-4xl font-bold'>Da più di 70 anni al servizio per Foggia, Provincia e zona BAT.</h2>
                <p className=' text-2xl mt-4 text-zinc-200 font-sans'>Nata nel 1948 la società da più di 70 anni opera nel settore della lettura,contabilizzazione dei consumi privati di acqua potabile.</p>
                <p className=' text-2xl m-4 text-zinc-200 font-sans'>Migliaia di utenti che abitano nei comuni di foggia, provincia e zona BAT, si sono avvalsi in questi anni del nostro servizio restando pienamente soddisfatti e rendendo la nostra società una delle aziende leader in puglia in questo settore.</p>
             </div>   
        <div class="text-black flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 gap-10  ">
            <div class="flex-1  h-[350px] whitespace-normal p-4  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  rounded-2xl bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600">
                <h1 className='mt-2 text-center font-bold text-lg'>
                I SOCI 
                </h1>     
                <p className='flex items-center justify-center h-[300px] text-center text-md font-sans'>
                La nostra azienda è gestita direttamente dai soci ed i rapporti, anche telefonici, dell &apos; utente sono sempre soddisfacenti e qualificati.
                </p>
           </div>
           <div class="flex-1 h-[350px] whitespace-normal p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 rounded-2xl bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600">
                <h1 className='mt-2 text-center  font-bold text-lg'>
                IL PERSONALE  
                </h1>
                <p className='flex items-center justify-center h-[300px] text-center text-md font-sans'>
                Il personale che effettua le letture presso le abitazioni, lavorano da anni alle nostre dipendenze e sono persone qualificate, corrette e conosciute dagli utenti stessi. 
                </p>
           </div>
           <div class="flex-1 h-[350px] whitespace-normal p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  rounded-2xl bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600">
                <h1 className='mt-2 text-center font-bold text-lg'>
                I VANTAGGI  
                </h1>
               <p className='flex items-center justify-center h-[300px] text-center text-md font-sans'>
             Il controllo frequente della lettura del contatore divisionale permette di rilevare tempestivamente eventuali perdite nell &apos; appartamento.
                </p>
           </div>
        </div>
        

        </div>
  )
}
