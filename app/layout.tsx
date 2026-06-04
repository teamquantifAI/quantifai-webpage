import type { Metadata } from 'next'
import { Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://quantifai.co'),
  title: 'quantifAI ML Lab — Train models on your own data, in your browser',
  description:
    'Drop a dataset, pick what to predict, and click Train Models. ML Lab trains and evaluates models on your own machine — your data never leaves the browser. No upload, no account needed to try a run.',
  keywords:
    'in-browser machine learning, no-code ML, train models locally, privacy-first ML, client-side model training, no upload ML, AutoML, baseline comparison, feature importance, explainable AI',
  authors: [{ name: 'quantifAI Team' }],
  openGraph: {
    title: 'quantifAI ML Lab — Train models on your own data, in your browser',
    description:
      'Drop a dataset, pick what to predict, and read the results in a few seconds. ML Lab does the work on your own machine — nothing leaves the browser.',
    url: 'https://quantifai.co',
    siteName: 'quantifAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'quantifAI ML Lab — Train models on your own data, in your browser',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'quantifAI ML Lab — Train models on your own data, in your browser',
    description:
      'Train and evaluate models on your own machine. Your data never leaves the browser.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffbf00" />
      </head>
      <body className={`${inter.className} bg-cream text-ink antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
