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
  title: 'quantifAI — Build, Evaluate, and Ship ML Models You Can Trust',
  description:
    'The AI writes the code, you bring the understanding. quantifAI walks you from raw data to a model you can actually explain — with honest evaluation that flags leakage and fake accuracy.',
  keywords:
    'no-code machine learning, ML model builder, model evaluation, data leakage detection, AI model trust, explainable AI, honest ML evaluation, baseline comparison, feature importance, AutoML',
  authors: [{ name: 'quantifAI Team' }],
  openGraph: {
    title: 'quantifAI — Build, Evaluate, and Ship ML Models You Can Trust',
    description:
      'The AI writes the code, you bring the understanding. From raw data to a model you can actually explain — with honest evaluation built in.',
    url: 'https://quantifai.co',
    siteName: 'quantifAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'quantifAI — Build, Evaluate, and Ship ML Models You Can Trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'quantifAI — Build, Evaluate, and Ship ML Models You Can Trust',
    description:
      'From raw data to a model you can actually explain — with honest evaluation that flags leakage and fake accuracy.',
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
