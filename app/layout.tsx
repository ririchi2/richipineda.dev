import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'

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
  const GA_MEASUREMENT_ID = 'G-N81B81BPMY'; // Paste your GTAG here

  /*
  <!-- Google tag (gtag.js) -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N81B81BPMY');
</script>
  */

  return (
    <html lang="en">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          // eslint-disable-next-line react/no-danger
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
      <body className={`${inter.className} bg-white dark:bg-gray-800
        transition-colors duration-100 ease-linear`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
