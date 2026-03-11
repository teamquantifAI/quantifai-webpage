import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import DashboardSection from '@/components/DashboardSection'
import ProofSection from '@/components/ProofSection'
import PulseGridSection from '@/components/PulseGridSection'
import ContactFormSection from '@/components/ContactFormSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <DashboardSection />
        <ProofSection />
        <PulseGridSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
