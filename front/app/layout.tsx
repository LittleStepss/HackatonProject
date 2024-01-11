import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import logo from './public/logo.png'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'Hackaton',
  description: 'projet Hackaton 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen overflow-hidden flex flex-wrap flex-col justify-center items-center">
        <Image src={logo} alt="logo" className="absolute top-0 left-0" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
