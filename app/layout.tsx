
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from "next/font/google";
import favicon from '@/app/favicon.png'
import SessionAuthProvider from '@/context/SessionAuthProvider'


const inter = Inter({ subsets: ['latin'] })
const robotoFont = Roboto({
  //Fuente de google fonts configuracion
  weight: ["300"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: 'VenSalud - Proyecto de pasantias',
  description: 'Generated by create next app',
  icons: {
    icon: `${favicon.src}`
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <SessionAuthProvider>
        <body className={`${inter.className} ${robotoFont.className} `}>
          {children}
        </body>
      </SessionAuthProvider>
    </html>
  )
}
