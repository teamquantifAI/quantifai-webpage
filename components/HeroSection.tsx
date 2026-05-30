'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Warm grid + amber glow */}
      <div className="absolute inset-0 grid-warm opacity-60" />
      <div className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-dim/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ── Copy ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/15 text-brand-ink label-caps text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-brand" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                New in Beta · No-Code ML Builder
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-q-container text-slate-q label-caps text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                1,247 false-accuracy results caught
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-extrabold text-ink tracking-tight text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]"
            >
              Build, Evaluate, and Ship ML Models{' '}
              <span className="text-brand-deep brand-underline">You Can Trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl"
            >
              The AI writes the code, you bring the understanding. quantifAI walks you from
              raw data to a model you can actually explain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://app.quantifai.co/signup"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand text-ink font-bold rounded-full shadow-glow hover:shadow-glow-lg hover:scale-[1.03] transition-all duration-300"
              >
                Build Your First Model
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#workflow"
                className="inline-flex items-center justify-center px-7 py-4 bg-white border border-outline-soft text-ink font-semibold rounded-lg hover:bg-surface-low transition-all duration-300"
              >
                Start Building Free
              </Link>
            </motion.div>
          </div>

          {/* ── Model diagnostics card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl bg-white shadow-soft-lg border border-outline-soft/40 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-outline-soft/40 bg-surface-low/60">
                <span className="label-caps text-[11px] text-ink-soft">model_diagnostics · check</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error-soft" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-fixed" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-q-container" />
                </div>
              </div>

              {/* Body */}
              <div className="relative p-5">
                <table className="w-full font-mono text-xs text-ink-soft">
                  <tbody>
                    {[
                      ['user_18_03', '84.2', 'exit_future_cost', '$140.00'],
                      ['user_24_91', '11.5', 'exit_future_cost', '$54.30'],
                      ['user_44_02', '63.8', 'exit_future_cost', '$210.90'],
                    ].map((r) => (
                      <tr key={r[0]} className="border-b border-outline-soft/25">
                        <td className="py-2 pr-3">{r[0]}</td>
                        <td className="py-2 pr-3 text-right">{r[1]}</td>
                        <td className="py-2 pr-3 text-brand-deep">{r[2]}</td>
                        <td className="py-2 text-right">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake-accuracy gauge overlay */}
                <div className="absolute right-6 top-12 flex flex-col items-center rounded-lg bg-white/90 backdrop-blur px-5 py-3 shadow-soft border border-outline-soft/40">
                  <span className="font-display text-3xl font-extrabold text-ink/40 line-through decoration-error-q/70">98%</span>
                  <span className="label-caps text-[9px] text-ink-soft mt-1">fake accuracy</span>
                </div>

                {/* Leakage warning */}
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-brand/15 border border-brand/30 px-3 py-2.5">
                  <AlertTriangle className="w-4 h-4 text-brand-ink shrink-0 mt-0.5" />
                  <p className="font-mono text-[11px] text-brand-ink leading-snug">
                    exit_survey_sent — possible target leakage detected &amp; pruned
                  </p>
                </div>

                <div className="mt-3 font-mono text-[10px] text-outline">
                  future_months · model_fix_clean · honest_signal=67%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
