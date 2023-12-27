import React, { useState } from 'react';
import Link from 'next/link';

const Subentri = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    };

    try {
      const data = {
        nome: e.target.nome.value,
        indirizzo: e.target.indirizzo.value,
        email: e.target.email.value,
        rif: e.target.rif.value,
        contatore1: e.target.contatore1.value,
        contatore2: e.target.contatore2.value,
        testo: e.target.testo.value,
      };

      const img = e.target.img.files[0];

      // Verifica se un file è stato selezionato
      if (img) {
        const imgData = {
          content: await convertFileToBase64(img),
          encoding: 'base64',
          filename: 'foto_contatore.jpg',
          type: 'image/jpeg',
          disposition: 'inline',
        };
      
        // Aggiungi il percorso o il contenuto dell'immagine all'oggetto data
        data.img = imgData;
      }

      const endpoint = '/api/send';

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }

      const responseData = await response.json();

      if (response.status === 200) {
        console.log('Email inviata con successo!');
        setEmailSubmitted(true);
      } else {
        console.error('Errore durante l\'invio dell\'email', responseData);
      }
    } catch (error) {
      console.error('Errore durante l\'invio dell\'email', error);
    }
  };

  return (
    <section id="autoletture" className=" w-full flex items-center justify-center  md:grid-cols-2 h-screen  bg-gradient-to-b from-zinc-400 via-zinc-200 to-zinc-400 m-auto border-slate-300 py-24 gap-4">
      <div className="mx-auto max-w-2xl text-center bg-black  border-slate-300 rounded-xl  shadow-xxl p-12  md:grid-cols-2  md:w-full my-12 py-24 gap-4 px-8 pt-6 pb-8 mb-4">
        <h1 className='text-white font-sans font-bold text-4xl p-6'>Autolettura</h1>
        {emailSubmitted ? (
          <p className="text-cyan-400 text-l font-bold  mt-2">Email inviata con successo!</p>
        ) : (
          <form
            className="font-sans m-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-row">
              <div className='w-1/2 m-4'>
                <label
                  htmlFor="nome"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Nome e Cognome <span className='text-red-600'>*</span>
                </label>
                <input
                  name="nome"
                  type="text"
                  id="nome"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Mario Rossi"
                />
              </div>
              <div className='w-1/2 m-4'>
                <label
                  htmlFor='indirizzo'
                  className='text-white block mb-2 text-sm font-medium'>
                  Indirizzo <span className='text-red-600'>*</span>
                </label>
                <input
                  name='indirizzo'
                  type='text'
                  id='indirizzo'
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder='Via/Piazza...'
                />
              </div>
            </div>
            <div className="mb-4 flex flex-row">
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="email"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Email <span className='text-red-600'>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="qwerty@gmail.com"
                />
              </div>
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="rif"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Riferimento <span className='text-red-600'>*</span>
                </label>
                <input
                  name="rif"
                  type="number"
                  id="rif"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Numero in alto a sinistra della cartolina."
                />
              </div>
            </div>
            <div className="mb-4 flex flex-row">
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="contatore1"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Lettura contatore 1 <span className='text-red-600'>*</span>
                </label>
                <input
                  name="contatore1"
                  type="number"
                  id="contatore1"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Lettura..."
                />
              </div>
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="rif"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Lettura contatore 2
                </label>
                <input
                  name="contatore2"
                  type="number"
                  id="contatore2"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Lettura..."
                />
              </div>
            </div>
            <div className='mb-2 flex flex-row'>
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="testo"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Messaggio
                </label>
                <textarea
                  name="testo"
                  type="text"
                  id="testo"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Messaggio opzionale.."
                />
              </div>
              <div className='w-1/2 m-2'>
                <label
                  htmlFor="img"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Eventuale foto contatore
                </label>
                <input
                  name="img"
                  type="file"
                  id="img"
                  accept='image/*'
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Lettura..."
                />
              </div>
            </div>
            <div className='p-6'>
            <Link className='bg-[#25D366] text-center text-white rounded-xl font-bold py-3 px-6 sm:w-[60%] my-4 hover:bg-[#075E54] transition-all ' href='https://wa.me/0881721174'>Oppure su whatsapp!</Link>
            </div>
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Invia
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Subentri;


