import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Suspense } from 'react'
import GoogleAnalyticsEvent from './components/GoogleAnalyticsEvent'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ricardo Pineda | richipineda.dev',
  description: 'The personal website of Ricardo Pineda, a web developer living in Santa Cruz de Tenerife, Spain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-800
        transition-colors duration-100 ease-linear`}
      >
        {/* <GoogleAnalytics />
        <GoogleAnalyticsEvent /> */}
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
