
import { NextResponse } from "next/server";
import { Resend } from 'resend';




const resend = new Resend('re_SyLyK3Xp_BX8vQknc6JvHspMcbEkKV7dG');
const fromEmail = 'onboarding@resend.dev';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received data:", body);

    const { nomevecchio, nomenuovo, indirizzo, letturasub, datasub, testo, img } = body;
    console.log(nomevecchio, nomenuovo, indirizzo, letturasub, datasub, testo, img,);

    const subject = 'Subentro Inviato';

    let data = {};

    try {
      let attachments = [];

  // Verifica se l'oggetto img è presente e contiene i campi necessari
  if (img && img.content && img.encoding && img.filename && img.type && img.disposition) {
    // Converti l'immagine in base64
    const imageBase64 = Buffer.from(img.content, 'base64').toString('base64');

    // Aggiungi l'immagine agli allegati della richiesta
    attachments.push({
      content: imageBase64,
      encoding: 'base64',
      filename: img.filename,
      type: img.type,
      disposition: img.disposition,
    });
  }

      data = await resend.emails.send({
        from: fromEmail,
        to: ['ciro.moscarella@icloud.com', fromEmail],
        subject: subject,
        react: (
          <div style={{ backgroundColor:'	#FFFFFF', padding: '20px' }}> 
            <h1 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>
              Grazie per aver comunicato la tua voltura!
            </h1>

            <p className="text-xl">Abbiamo ricevuto la vostra voltura, questa verrà memorizzata nel nostro database al più presto. Grazie mille.</p>
            <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px', border: '2px solid #ddd' }}>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Nome Vecchio</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{nomevecchio}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Nome Nuovo</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{nomenuovo}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Indirizzo</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{indirizzo}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Data di Subentro</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{datasub}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Lettura di Subentro</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{letturasub}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Messaggio</th>
                <td style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>{testo}</td>
              </tr>
              <tr>
                <th style={{ border: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>Eventuale foto contatore</th>
                {data.img && data.img.contentId && (
                  <td style={{ padding: '8px', textAlign: 'left' }}>
                    <img
                      src={`cid:${data.img && data.img.contentId}`}
                      alt="Foto contatore"
                      style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
                    />
                  </td>
                )}
              </tr>
            </table>
          </div>
        ),
        attachments: attachments,
      });

      console.log("data:", data);

    } catch (sendError) {
      console.error('Errore durante l\'invio dell\'email', sendError);
      return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' });
    }

    if (data && data.img && data.status === 'success') {
      return NextResponse.json({ message: 'Email Mandata Correttamente' });
    }

    // Se data.img è undefined o non esiste
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email: data.img non definito' });
  } catch (error) {
    console.error('Errore durante l\'invio dell\'email', error);
    return NextResponse.json({ error: 'Errore durante l\'invio dell\'email' });
  }
}
