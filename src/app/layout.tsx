import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen'>
          <Navbar />
          <main className='container mx-auto p-4 sm:p-6 h-[60vh]'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
