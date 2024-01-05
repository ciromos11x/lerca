import React from 'react'
import Image from 'next/image'


export default function Come() {
  return (
    <section id="come" className="text-white w-full flex flex-col items-center justify-center md:flex-row bg-black py-10 md:py-10 gap-4">
        <div className='text-center md:text-left md:w-1/2 p-6'>
            <h1 className='text-cyan-400 font-sans font-bold text-4xl mb-4'>Come leggere il contatore dell’acqua</h1>
            <div className=''>
                <h1 className='text-xl font-bold font-sans  p-4'>Modello a lancette:</h1>
                    <p className='text-l pt-2'>I quadranti con numeratori neri indicano i metri cubi, mentre i decimali sono di colore rosso.
                     Per leggere il contatore basta annotare i numeri con gli indici neri.</p>
                      La lettura si esegue in senso orario, partendo dal basso a sinistra e procedendo verso destra.
                      <p className='pb-4'> Devono essere lette solo le lancette degli orologi neri.
                        Come moltiplicare i valori:</p>
                        <ul className='p-4'>
                            <li>Il primo x 1000 m3</li>
                            <li>Il secondo x 100 m3</li>
                            <li>Il terzo x 10 m3</li>
                            <li>Il quarto x 1 m3</li>
                        </ul>
                    <p className='text-l pb-4'>Se la lancetta è posta tra due numeri, va considerato il numero più basso che precede la lancetta.</p>
                    <Image className='p-4' alt='contatore a lancette' src='/image/lancette.png' width={500} height={500} />
            </div>

            <div className='text-center md:text-left md:w-1/2'>
                <h1 className='text-xl font-bold font-sans p-4'>Modello a lettura diretta:</h1>
                <p className='text-l pt-2'>È sufficiente considerare (leggendole come di consueto da sinistra verso destra), le cifre intere di colore nero,
                 ignorando gli zeri a sinistra del primo numero.</p>
                 <p className='pb-4'>Se la cifra non è ben allineata, bisogna considerare quella inferiore.</p>
                 <Image className='p-4' alt='contatore lettura diretta' src='/image/diretta.png' width={500} height={500} />
            </div>
        </div>
    </section>
  )
}
