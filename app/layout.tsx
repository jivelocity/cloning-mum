import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import localFont from "next/font/local";


import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const figtree = Figtree({ subsets: ['latin'], variable: '--figtree-font' })
const noir = localFont({
    src: '../assets/font/noir.ttf',
    variable: '--noir-font',
    display: 'swap'
}   )


export const metadata: Metadata = {
  title: 'MUM Studio',
  description: 'Website & App design studio for visionary brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${noir.variable} ${figtree.variable} font-figtree bg-background text-primary`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
