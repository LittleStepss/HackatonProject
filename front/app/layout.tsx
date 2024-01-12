import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import logo from './public/logo.png'
import Footer from './footer'
import Link from 'next/link'

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
      <body className="min-h-screen overflow-x-hidden flex flex-wrap flex-col justify-between items-center">
        <Link href="/" >
          <Image src={logo} alt="logo" />
        </Link>
        {children}
        <Footer />
      </body>
    </html>
  )
}
