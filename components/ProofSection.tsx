'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Home, Trophy, Info } from 'lucide-react'

const models = [
  {
    icon: AlertTriangle,
    badge: 'Best Accuracy',
    title: 'Caught fake 98% accuracy on churn data',
    desc: 'Tool flagged a leaked column (exit_survey_sent) driving 98% of prediction. Honest model lands at 67% — real signal from tenure, usage, and support tickets.',
    stat: 'AUC 0.75 vs baseline 0.62 · n=5,000 · 1 leakage caught',
  },
  {
    icon: TrendingUp,
    badge: 'Best Baseline',
    title: 'Predicting loan default risk',
    desc: 'Classic financial classification task. Tool catches class imbalance and recommends recall over accuracy as the right metric.',
    stat: 'AUC 0.78 vs baseline 0.62 · n=10,000',
  },
  {
    icon: Home,
    badge: 'Strong Fit',
    title: 'Predicting home sale prices',
    desc: 'Regression demo on a recognizable dataset. Tool surfaces top drivers (square footage, location, recency of sale) with feature importances.',
    stat: 'RMSE 13% below baseline · n=20,000',
  },
  {
    icon: Trophy,
    badge: 'Origin Domain',
    title: 'Predicting NFL game outcomes',
    desc: 'Our origin domain. Tool finds edges in weather, rest schedules, and matchup patterns that simple baselines miss.',
    stat: 'Brier 0.21 better than baseline · 2024 season',
  },
]

const ProofSection = () => {
  return (
    <section id="proof" className="relative py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="label-caps text-xs text-brand-ink">Demo Models</span>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight">
              Tested Honestly. Across Domains.
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/20 text-brand-ink label-caps text-[10px]">
              <AlertTriangle className="w-3 h-3" />
              Honest Scoring
            </span>
          </div>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Here are demo models we&apos;ve built and evaluated using quantifAI — the full
            picture, including where they fall short. Same honest evaluation we apply to your models.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Model cards (2x2) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {models.map((m, i) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="lift flex flex-col rounded-xl bg-white border border-outline-soft/40 shadow-soft p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/40">
                    <m.icon className="w-5 h-5 text-brand-deep" strokeWidth={1.7} />
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-q-container text-slate-q label-caps text-[9px]">
                    {m.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink leading-snug">{m.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{m.desc}</p>
                <p className="mt-5 pt-4 border-t border-outline-soft/30 font-mono text-[11px] text-outline">
                  {m.stat}
                </p>
              </motion.article>
            ))}
          </div>

          {/* ML Lab honesty panel */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl bg-surface-high/70 border border-outline-soft/50 p-7 flex flex-col"
          >
            <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/15 text-brand-ink label-caps text-[10px] mb-4">
              <Info className="w-3 h-3" />
              ML Lab
            </span>
            <p className="text-ink leading-relaxed">
              Most courses show cherry-picked wins. We show the gaps too — because spotting
              them is the actual skill.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                We show every domain — including the ones where we haven&apos;t proven an edge yet.
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                Comparisons are always against a naive baseline — and we label them that way.
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default ProofSection
