'use client'

import React from 'react'
import { motion } from 'framer-motion'

const rows = [
  { id: 'bc111', tenure: '12', outcome: 'canceled', result: '0.92' },
  { id: 'bc112', tenure: '04', outcome: 'canceled', result: '0.94' },
  { id: 'bc113', tenure: '27', outcome: 'active', result: '0.31' },
]

const verdicts = [
  {
    tag: 'The Lie',
    value: '98%',
    desc: 'Raw performance, inflated by leaked target signals.',
    accent: 'border-l-error-q',
    valueClass: 'text-error-q line-through decoration-error-q/50',
    bg: 'bg-error-soft/30',
  },
  {
    tag: 'The Catch',
    value: '1 Leakage Warning',
    desc: 'Outcome-dependent features detected and pruned.',
    accent: 'border-l-brand',
    valueClass: 'text-brand-ink',
    bg: 'bg-brand/12',
  },
  {
    tag: 'The Truth',
    value: '67%',
    desc: 'Honest signal after clearing the leaked columns.',
    accent: 'border-l-outline',
    valueClass: 'text-ink',
    bg: 'bg-white',
  },
]

const DashboardSection = () => {
  return (
    <section id="demo" className="relative py-20 lg:py-28 bg-gradient-to-b from-surface-low to-surface-high">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="label-caps text-xs text-brand-ink">The Interface</span>
          <h2 className="mt-4 font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight">
            See an Evaluated Model In Action
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Every prediction comes with full transparency — signal breakdowns, driver
            explanations, and an honest score after leakage is removed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl bg-white shadow-soft-lg border border-outline-soft/40 overflow-hidden"
        >
          {/* Card header */}
          <div className="flex items-center justify-between px-6 py-4 bg-surface-low/70 border-b border-outline-soft/40">
            <span className="font-display font-bold text-ink">Local ML Lab</span>
            <span className="inline-flex items-center gap-2 label-caps text-[10px] text-brand-ink">
              <span className="relative flex h-2 w-2">
                <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-brand" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Live Diagnostics
            </span>
          </div>

          {/* Card body */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Table */}
            <div className="lg:col-span-3 p-6 lg:border-r border-outline-soft/40">
              <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 label-caps text-[10px] text-ink-soft pb-3 border-b border-outline-soft/40">
                <span>record_id</span>
                <span>features_input</span>
                <span className="text-right">result</span>
              </div>
              {rows.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-[auto_1fr_auto] gap-x-4 items-center py-3 border-b border-outline-soft/25 font-mono text-xs text-ink-soft"
                >
                  <span>{r.id}</span>
                  <span className="flex flex-wrap gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-surface-high text-ink-soft">tenure: {r.tenure}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded ${
                        r.outcome === 'canceled'
                          ? 'bg-error-soft/60 text-on-error'
                          : 'bg-surface-high text-ink-soft'
                      }`}
                    >
                      outcome: {r.outcome}
                    </span>
                  </span>
                  <span className="text-right font-semibold text-ink">{r.result}</span>
                </div>
              ))}
              <p className="mt-4 font-mono text-[10px] text-outline">
                * outcome is target-derived — flagged as leakage below
              </p>
            </div>

            {/* Verdicts */}
            <div className="lg:col-span-2 p-6 space-y-4 bg-surface/40">
              {verdicts.map((v) => (
                <div
                  key={v.tag}
                  className={`rounded-lg border-l-4 ${v.accent} ${v.bg} border border-outline-soft/30 px-4 py-3`}
                >
                  <div className="label-caps text-[10px] text-ink-soft">{v.tag}</div>
                  <div className={`font-display text-2xl font-extrabold mt-1 ${v.valueClass}`}>{v.value}</div>
                  <p className="mt-1 text-xs text-ink-soft leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardSection
