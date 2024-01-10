import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import logo from './public/logo.png'

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
    <html lang="en">
      <body className="">
        <Image src={logo} alt="logo" />
        {children}
      </body>
    </html>
  )
}
