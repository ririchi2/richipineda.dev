import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Suspense } from 'react'
import Analytics from './components/Analytics'

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
  const GA_MEASUREMENT_ID = '';

  /*
  <!-- Google tag (gtag.js) -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '');
</script>
-
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </Head>
  */

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-800
        transition-colors duration-100 ease-linear`}
      >
        <GoogleAnalytics />
        {/* <Suspense>
          <Analytics />
        </Suspense> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
