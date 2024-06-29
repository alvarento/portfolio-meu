// 'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { usePathname } from 'next/navigation'
// import { IsOpenMenuContextProvider } from '@/contexts/openMenuContext'

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

  // const pathname = usePathname();
  // console.log(pathname)

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
