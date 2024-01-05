import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Script from 'next/script'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Álvaro Nascimento | Portfólio',
  description: 'Porfifólio de Álvaro Nascimento desenvolvedor back-end',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
