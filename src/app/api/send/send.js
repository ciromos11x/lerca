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
    return res.status(405).end(); // Not Allowed
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
    } = req.body;

    // Implementa la logica per inviare l'email qui...
    // Assicurati di validare e manipolare i dati come necessario

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
      `,
    };

    await transporter.sendMail(mailOptions);
    if(resData.status === 'success') {
        return NextResponse.json({message: 'Email Mandata Correttamente'});
      }
      return NextResponse.json(resData)
    } catch (error) {
      console.log('error' ,  error );
    }
}
