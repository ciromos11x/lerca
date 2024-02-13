import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'doggiedapper10@gmail.com',
    pass: 'delmatri9A',
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: "Method not allowed" },
      {
        status: 405
      }
    );
  }

  try {
    const {
      nome,
      indirizzo,
      email,
      rif,
      contatore1,
      contatore2,
      testo,
      img,
    } = req.body;

    const mailOptions = {
      from: 'mittente@example.com',
      to: 'destinatario@example.com',
      subject: 'Nuovo modulo di subentro ricevuto',
      text: `
        Nome: ${nome}
        Indirizzo: ${indirizzo}
        Email: ${email}
        Riferimento: ${rif}
        Lettura contatore 1: ${contatore1}
        Lettura contatore 2: ${contatore2}
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
