import { Inter } from 'next/font/google';
import Head from 'next/head'; // Importa il componente Head da 'next/head'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lerca',
  description: 'Create by Moci.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Aggiungi il tag viewport qui */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
