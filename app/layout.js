import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const abril = localFont({
  src: [
    {
      path: '../public/fonts/Abril_Display_Regular.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/Abril_Display_Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-abril',
})

export const metadata = {
  title: 'Factored Datathon 2023',
  description: 'Factored Datathon 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abril.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
