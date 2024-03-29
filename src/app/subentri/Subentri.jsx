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
        nomevecchio: e.target.nomevecchio.value,
        nomenuovo: e.target.nomenuovo.value,
        indirizzo: e.target.indirizzo.value,
        letturasub: e.target.letturasub.value,
        datasub: e.target.datasub.value,
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

      const endpoint = '/api/send/subentri';

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
    <section
      id="subentri"
      className="w-full min-h-screen flex items-center justify-center bg-black"
    >
      <div className="h-screen flex flex-col">
        <h1 className="text-cyan-400 font-sans font-bold text-4xl mt-32 m-auto text-center">
          SUBENTRI
        </h1>
        {emailSubmitted ? (
          <p className="text-cyan-400 text-l font-bold mt-2">
            Email inviata con successo!
          </p>
        ) : (
          <form
            className="flex flex-col text-center items-center w-full px-2 py-8 md:items-start"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-row w-full">
              <div className="flex-1 m-4">
                <label
                  htmlFor="nomevecchio"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Nome e Cogn. vecchio proprietario<span className="text-red-600">*</span>
                </label>
                <input
                  name="nomevecchio"
                  type="text"
                  id="nomevecchio"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Mario Rossi"
                />
              </div>
              <div className="flex-1 m-4">
                <label
                  htmlFor="nomenuovo"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Nome e Cogn. nuovo proprietario<span className="text-red-600">*</span>
                </label>
                <input
                  name="nomenuovo"
                  type="text"
                  id="nomenuovo"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Mario Bianchi"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-row w-full">
              <div className="flex-1 m-4">
                <label
                  htmlFor="indirizzo"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Indirizzo <span className="text-red-600">*</span>
                </label>
                <input
                  name="indirizzo"
                  type="text"
                  id="indirizzo"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Via/Piazza..."
                />
              </div>
              <div className="flex-1 m-4">
                <label
                  htmlFor="letturasub"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Lettura di subentro <span className="text-red-600">*</span>
                </label>
                <input
                  name="letturasub"
                  type="number"
                  id="letturasub"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Numero in alto a sinistra della cartolina."
                />
              </div>
            </div>
            <div className="mb-4 flex flex-row w-full">
              <div className="flex-1 m-4">
                <label
                  htmlFor="datasub"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Data di Subentro <span className="text-red-600">*</span>
                </label>
                <input
                  name="datasub"
                  type="date"
                  id="datasub"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="flex-1 m-4">
                <label
                  htmlFor="email"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Email <span className="text-red-600">*</span>
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
            </div>
            <div className="mb-4 flex flex-row w-full">
              <div className="flex-1 m-4">
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
              <div className="flex-1 m-4">
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
                  accept="image/*"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Lettura..."
                />
              </div>
            </div>
            <div className="p-6 w-full">
              <Link
                className="bg-[#25D366] text-center mb-4 w-full text-white rounded-xl font-bold py-3 px-6 sm:w-[60%] my-4 hover:bg-[#075E54] transition-all"
                href="https://wa.me/0881721174"
              >
                Oppure su whatsapp!
              </Link>
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


