'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

const without = [
  'Code you can copy but can’t adapt',
  'Models that run on clean demo data',
  'Accuracy numbers you can’t verify',
  'A black box you can’t explain',
]

const withQ = [
  'A guided path so you never freeze',
  'Real, messy data — not toy datasets',
  'Honest evaluation that flags when it’s noise',
  'A model you can actually explain',
]

const stats = [
  { value: '5,000', label: 'Rows analyzed' },
  { value: '1', label: 'Leakage column caught' },
  { value: '31%', label: 'Fake accuracy removed' },
]

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-20 lg:py-28 bg-gradient-to-b from-surface-low via-surface to-surface-low">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="label-caps text-xs text-brand-ink">The Problem</span>
          <h2 className="mt-4 font-display font-bold text-ink text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
            Anyone can build a model. Knowing if it works is the hard part.
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            LLMs and AI tools made writing model code nearly free. The scarce skill now:
            knowing when your result is real, and when it&apos;s quietly lying to you.
            That&apos;s what quantifAI catches.
          </p>
        </motion.div>

        {/* Compare cards */}
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 max-w-5xl mx-auto">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-surface-container/70 border border-outline-soft/50 p-7 lg:p-8"
          >
            <h3 className="font-display font-bold text-xl text-ink">Without quantifAI</h3>
            <p className="mt-1 text-sm text-ink-soft">The trap most builders fall into</p>
            <ul className="mt-6 space-y-4">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-highest">
                    <X className="w-3 h-3 text-outline" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-brand shadow-glow ring-[6px] ring-surface">
            <ArrowRight className="w-5 h-5 text-ink" />
          </div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-xl bg-white border-2 border-brand/60 shadow-glow p-7 lg:p-8"
          >
            <span className="absolute -top-3 right-6 inline-flex items-center px-3 py-1 rounded-full bg-brand text-ink label-caps text-[10px]">
              The Fix
            </span>
            <h3 className="font-display font-bold text-xl text-ink">With quantifAI</h3>
            <p className="mt-1 text-sm text-ink-soft">How you actually build something you trust</p>
            <ul className="mt-6 space-y-4">
              {withQ.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20">
                    <Check className="w-3 h-3 text-brand-ink" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 max-w-5xl mx-auto rounded-xl bg-surface-high/70 border border-outline-soft/50 px-6 py-8"
        >
          <p className="text-center label-caps text-[11px] text-ink-soft mb-6">
            From a real run on our demo churn dataset
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-outline-soft/50">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-3 text-center">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-deep">{s.value}</div>
                <div className="mt-1 label-caps text-[10px] text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
