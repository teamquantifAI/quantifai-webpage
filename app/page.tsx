import React from 'react'
import './mllab.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MLLabSections, { MLLabClosingCTA } from '@/components/mllab/MLLabSections'
import MLLabDemo from '@/components/mllab/MLLabDemo'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mllab">
        <MLLabSections />
        <MLLabDemo />
        <MLLabClosingCTA />
      </main>
      <Footer />
    </>
  )
}
