'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Table2, Sparkles, Gauge, ListTree, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Table2,
    title: 'Profile',
    desc: 'quantifAI reads your data: rows, columns, missingness.',
  },
  {
    icon: Sparkles,
    title: 'Build with AI',
    desc: 'Describe what you want to predict. The AI writes the code.',
  },
  {
    icon: Gauge,
    title: 'Evaluate',
    desc: 'Holdout metrics against a naive baseline and leakage checks.',
  },
  {
    icon: ListTree,
    title: 'Explain',
    desc: 'Top feature importances and plain-language drivers to optimize.',
  },
  {
    icon: Rocket,
    title: 'Ship',
    desc: 'Export your validated model and predictions, ready to use.',
  },
]

const HowItWorksSection = () => {
  return (
    <section id="workflow" className="relative py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="label-caps text-xs text-brand-ink">The Workflow</span>
          <h2 className="mt-4 font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight">
            From Raw Data to a Model You Trust
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Five guided steps. The AI does the typing; you make the calls.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50">
                <step.icon className="w-7 h-7 text-brand-deep" strokeWidth={1.6} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-ink font-mono text-[11px] font-semibold shadow-glow">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
