'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-surface border-t border-outline-soft/40">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-extrabold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Stop Watching. Start Shipping.
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
            Join the beta. Go from a raw dataset to a validated model you actually understand.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.quantifai.co/signup"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-ink font-bold rounded-full shadow-glow hover:shadow-glow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Build Your First Model
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <span className="inline-flex items-center gap-2 label-caps text-[11px] text-ink-soft">
              <span className="font-display text-base font-extrabold text-brand-deep not-italic">4,287</span>
              models shipped in beta
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
