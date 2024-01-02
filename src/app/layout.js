import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lerca',
  description: 'Create by Moci.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Aggiungi il tag viewport qui */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
