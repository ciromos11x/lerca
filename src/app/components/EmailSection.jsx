"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
     name: e.target.name.value,
     indirizzo: e.target.indirizzo.value,
      email: e.target.email.value,
      riferimento: e.target.riferimento.value,
      lettura1: e.target.lettura1.value,
      lettura2: e.target.lettura2.value,
      foto: e.target.foto.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }
    const resData = await response.json();
    console.log(resData)

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
    console.log(data)
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email inviata con successo!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Nome e Cognome
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Mario Rossi"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Indirizzo"
                className="text-white block text-sm mb-2 font-medium"
              >
                Indirizzo
              </label>
              <input
                name="indirizzo"
                type="text"
                id="indirizzo"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Via.."
              />

<label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="qwerty@google.com"
              />

<label
                htmlFor="riferimento"
                className="text-white block mb-2 text-sm font-medium"
              >
                Riferimento
              </label>
              <input
                name="riferimento"
                type="number"
                id="riferimento"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Inserire il numero in alto a sinistra della cartolina."
              />
              <label
                htmlFor="lettura1"
                className="text-white block mb-2 text-sm font-medium"
              >
                Lettura Contatore 1
              </label>
              <input
                name="lettura1"
                type="number"
                id="lettura1"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Numero Contatore"
              />

<label
                htmlFor="lettura2"
                className="text-white block mb-2 text-sm font-medium"
              >
                Lettura Contatore 2
              </label>
              <input
                name="lettura2"
                type="number"
                id="lettura2"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Numero Contatore"
              />

            </div>

            <label
                htmlFor="foto"
                className="text-white block mb-2 text-sm font-medium"
              >
                Eventuale Foto Contatore
              </label>
              <input
                name="foto"
                type="file"
                accept="image/*"
                id="foto"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />


            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Messaggio
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Scrivi qui."
              />
            </div>
            

            <button
              type="submit"
              className="bg-white hover:bg-cyan-400 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Invia
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
