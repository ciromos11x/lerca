// pages/api/send.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Inserisci il tuo host SMTP
  port: 587, // Porta del server SMTP
  secure: false, // true per utilizzare SSL/TLS, false per altre connessioni
  auth: {
    user: 'doggiedapper10@gmail.com', // La tua email
    pass: 'delmatri9A', // La tua password
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Not Allowed
  }

  try {
    const {
      nomevecchio,
      nomenuovo,
      indirizzo,
      letturasub,
      data,
      testo,
      img,
    } = req.body;

    // Implementa la logica per inviare l'email qui...
    // Assicurati di validare e manipolare i dati come necessario

    const mailOptions = {
      from: 'mittente@example.com', // L'indirizzo email del mittente
      to: 'destinatario@example.com', // L'indirizzo email del destinatario
      subject: 'Nuovo modulo di subentro ricevuto', // Oggetto dell'email
      text: `
        Nome Vecchio: ${nomevecchio}
        Nome Nuovo: ${nomenuovo}
        Indirizzo: ${indirizzo}
        Lettura Subentro: ${letturasub}
        Data: ${data}
        Testo: ${testo || 'Nessun messaggio inserito'}
        // Altri dati del form
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email inviata con successo!' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return res.status(500).json({ message: 'Errore nell\'invio dell\'email.' });
  }
}