import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://quantifai.co'),
  title: 'quantifAI — AI-Powered Sports Predictive Intelligence',
  description: 'Six AI layers. 95,000 games. Statistically proven edge. quantifAI fuses ML ensembles, live market odds, news sentiment, weather data, and Gemini AI into calibrated sports predictions.',
  keywords: 'sports prediction, AI forecasting, sports betting analytics, machine learning sports, Brier score, quantitative sports analysis, NFL predictions, NBA predictions, soccer predictions, MLB predictions',
  authors: [{ name: 'quantifAI Team' }],
  openGraph: {
    title: 'quantifAI — AI-Powered Sports Predictive Intelligence',
    description: 'Six AI layers. 95,000 games. Statistically proven edge against the betting market.',
    url: 'https://quantifai.co',
    siteName: 'quantifAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'quantifAI — Predictive Intelligence for Sports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'quantifAI — AI-Powered Sports Predictive Intelligence',
    description: 'Six AI layers. 95,000 games. Statistically proven edge against the betting market.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbbf24" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
