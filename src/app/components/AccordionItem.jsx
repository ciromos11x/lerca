import React from 'react'
import { Accordion , AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionItem() {
  return (
    <div className='items-center  justify-center   bg-black'>
      <h1 className='py-3 text-3xl text-cyan-400 md:text-4xl font-bold m-5 mx-auto  text-center mt-8'>I Nostri Servizi.</h1>
      <div className=' max-w-[1240px] place-items-center  mx-auto border-slate-300 rounded-xl  shadow-xl p-12 '>
        
    <Accordion className='bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 mb-2 p-2'>

      <AccordionSummary expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      >
        <Typography className='text-xl font-bold'>Abiti in un Condominio?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-md'>
        Allora saprai già che questo tipo di edificio presenta un solo contatore generale di proprietà dell&apos;Ente Erogatore che registra complessivamente i consumi di acqua potabile effettuati nelle unità immobiliari esistenti nel fabbricato. Ogni unità immobiliare è fornita da uno o più contatori divisionali che registrano i consumi del singolo utente e che ha l'unico scopo di consentire una corretta suddivisione dei consumi effettuati. Letture e conteggi dei contatori divisionali Sostituzione e/o pimbatura contatori eseguiti dal nostro personale qualificato. Letture sottolettori ELETTRICI-GAS-NEXUS e di calore. Analisi acque per uso domestico. Ricerca perdite. Servizio di consulenza in materia di addebiti ed articolazione tariffaria. Ripartizioni fatture ENEL e GAS.
        </Typography>
      </AccordionDetails>
      
    </Accordion>

    <Accordion className='bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 mb-2 font-sans p-2'>
      
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
       aria-controls="panel2a-content"
       id="panel2a-header">
        <Typography className='text-xl font-bold'>Come Avvalersi Dei Nostri Servizi</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-md'>
        La nostra società opera in tutte le zone di Foggia e Provincia,e zona BAT Per avvalersi dei servizi offerti, è sufficiente rivolgersi alla nostra azienda. Richiesto l&apos;invio di un preventivo, la questione viene posta all&apos;ordine del giorno di una Assemblea Condominiale, ed in seguito all&apos;esito favorevole della votazione dei Condomini, l&apos;incarico viene conferito tramite comunicazione scritta.
        </Typography>
      </AccordionDetails>
      
    </Accordion>

    <Accordion className='bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 mb-16 p-2'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3a-content"
      id="panel3a-header">
        <Typography className='text-xl font-bold'>Descrizione modalità d&apos;intervento</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-md'>
        LERCA attraverso particolari e sofisticati strumenti elettronici sinottici e acustici riesce ad individuare qualsiasi anomalia esistente lungo il percorso dei liquidi in condotte in pressione. Il metodo sinottico di analisi dello spettro di rumore realizzato mediante scala di misura, consente all&apos;operatore una visione immediata e completa del problema abbreviando notevolmente i tempi di ricerca . Un corredo di strumenti, elettronici professionali, oltre che a rendere più precisa la ricerca, conferisce a tutta l&apos;apparecchiatura un carattere di elevato livello tecnico e scientifico.& Lo svolgimento dell&apos;attività di ricerca ed individuazione delle perdite occulte prevede due fasi di intervento sinteticamente elencati: Prima fase preventiva di preascolto in tutta la rete per mezzo di apparecchiature di registrazione acustica programmata e/o eventuali altre tecnologie che consentono di individuare i tratti di rete idrica con sospetta presenza di perdita; Seconda fase di localizzazione puntuale delle perdite utilizzando la tecnica della Correlazione Computerizzata che consiste nel porre i sensori su degli organi di manovra esistenti in rete: (valvole, idranti, B.I., presa, contatori, rubinetti, ecc.) permettendo all&apos;operatore di localizzare ed ubicare esattamente il punto di perdita, avvalendosi anche del geofono per un ulteriore verifica precisa localizzazione.
        </Typography>
      </AccordionDetails>
      
    </Accordion>
    </div>
    </div>
  )
}
