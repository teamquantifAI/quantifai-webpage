'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Trophy, Target, TrendingUp, Flame, Clock, Shield, ArrowRight } from 'lucide-react'

const ProofSection = () => {
  const sports = [
    {
      sport: 'NFL',
      emoji: '\u{1F3C8}',
      verdict: 'Beats Vegas',
      verdictColor: 'text-green-600 bg-green-50 border-green-200',
      verdictIcon: Trophy,
      headline: '25% more accurate than the betting market',
      description: 'Our NFL model finds edges in weather data, rest schedules, and spread conversions that oddsmakers undervalue. Statistically proven across 2,132 test games.',
      accuracy: 78,
      marketAccuracy: 62,
      gamesAnalyzed: '14,371',
      testGames: '2,132',
      highlight: true,
      strengths: ['Weather impact modeling', 'Rest day analysis', 'Spread conversion edge'],
      maturity: 'Production-ready',
      maturityColor: 'text-green-600',
    },
    {
      sport: 'Soccer',
      emoji: '\u26BD',
      verdict: 'Market Matched',
      verdictColor: 'text-amber-600 bg-amber-50 border-amber-200',
      verdictIcon: Target,
      headline: 'Matches the world\'s most efficient market',
      description: 'Soccer betting markets are the sharpest in the world. Our model matches their accuracy — which is actually remarkable. When 5 bookmakers disagree, we find signal.',
      accuracy: 71,
      marketAccuracy: 71,
      gamesAnalyzed: '45,007',
      testGames: '6,515',
      highlight: false,
      strengths: ['Bookmaker disagreement signal', '8 leagues covered', 'Well-calibrated probabilities'],
      maturity: 'Production-ready',
      maturityColor: 'text-green-600',
    },
    {
      sport: 'MLB',
      emoji: '\u26BE',
      verdict: 'Beats Baseline',
      verdictColor: 'text-blue-600 bg-blue-50 border-blue-200',
      verdictIcon: TrendingUp,
      headline: 'Finds real patterns in baseball\'s long season',
      description: 'Pythagorean expectation, Elo ratings, and doubleheader fatigue — our model finds statistically significant edges even without real market odds data.',
      accuracy: 63,
      marketAccuracy: 58,
      gamesAnalyzed: '34,913',
      testGames: '5,189',
      highlight: false,
      strengths: ['Pythagorean win expectation', 'Doubleheader fatigue', 'Elo rating system'],
      maturity: 'Growing',
      maturityColor: 'text-amber-600',
    },
    {
      sport: 'NBA',
      emoji: '\u{1F3C0}',
      verdict: 'Early Stage',
      verdictColor: 'text-gray-500 bg-gray-50 border-gray-200',
      verdictIcon: Clock,
      headline: 'Back-to-back detection works — needs more data',
      description: 'Our back-to-back fatigue model shows promise, but with only 855 games so far, we need more data before calling it proven. Actively expanding.',
      accuracy: 58,
      marketAccuracy: 60,
      gamesAnalyzed: '855',
      testGames: '105',
      highlight: false,
      strengths: ['Back-to-back fatigue detection', 'Rest differential tracking'],
      maturity: 'Building',
      maturityColor: 'text-gray-500',
    },
  ]

  const honestNotes = [
    { icon: Shield, text: 'We show every sport — including the ones where we haven\'t proven an edge yet.' },
    { icon: Shield, text: 'NBA & MLB don\'t have real Vegas odds in training — those comparisons are against a coin flip baseline.' },
    { icon: Shield, text: 'Our fusion weights are hand-tuned, not auto-learned. Future versions will optimize these from data.' },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="proof">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block text-sm font-semibold text-amber-600 tracking-widest uppercase mb-4"
            >
              Track Record
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Tested on Real Games.{' '}
              <span className="gradient-text">Real Results.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We test every model against thousands of real historical games — and we show you the full picture, wins and gaps included.
            </p>
          </motion.div>

          {/* Headline stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {[
              { value: '95,146', label: 'Total Games Analyzed' },
              { value: '13,941', label: 'Test Games' },
              { value: '4', label: 'Sports' },
              { value: '2', label: 'Beat the Market' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <p className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs font-medium text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Sport cards */}
          <div className="space-y-6 mb-16">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.sport}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  sport.highlight
                    ? 'bg-gradient-to-r from-amber-50/80 via-white to-white border-amber-200 shadow-lg'
                    : 'bg-white border-gray-100 shadow-md'
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">

                    {/* Left: sport info */}
                    <div className="flex-1 min-w-0">
                      {/* Sport label + verdict */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-2xl">{sport.emoji}</span>
                          <h3 className="text-xl font-bold text-gray-900">{sport.sport}</h3>
                        </div>
                        <span className={`inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${sport.verdictColor}`}>
                          <sport.verdictIcon className="w-3.5 h-3.5" />
                          <span>{sport.verdict}</span>
                        </span>
                        <span className={`text-xs font-semibold ${sport.maturityColor}`}>
                          {sport.maturity}
                        </span>
                      </div>

                      {/* Headline */}
                      <p className="text-lg font-semibold text-gray-800 mb-2">{sport.headline}</p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{sport.description}</p>

                      {/* Strengths */}
                      <div className="flex flex-wrap gap-2">
                        {sport.strengths.map((s) => (
                          <span key={s} className="inline-flex items-center space-x-1 text-[11px] font-medium text-gray-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                            <CheckCircle className="w-3 h-3 text-amber-500" />
                            <span>{s}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: visual accuracy comparison */}
                    <div className="lg:w-72 flex-shrink-0">
                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Prediction Accuracy</p>

                        {/* Our model bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-gray-700">quantifAI</span>
                            <span className="text-sm font-black text-gray-900">{sport.accuracy}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${sport.accuracy}%` }}
                              transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>

                        {/* Market bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold text-gray-400">Market / Baseline</span>
                            <span className="text-sm font-bold text-gray-400">{sport.marketAccuracy}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gray-300 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${sport.marketAccuracy}%` }}
                              transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>

                        {/* Edge callout */}
                        <div className={`flex items-center justify-between pt-3 border-t border-gray-200 ${
                          sport.accuracy > sport.marketAccuracy ? 'text-green-600' :
                          sport.accuracy === sport.marketAccuracy ? 'text-amber-600' :
                          'text-gray-400'
                        }`}>
                          <span className="text-xs font-semibold">
                            {sport.accuracy > sport.marketAccuracy
                              ? 'Our edge'
                              : sport.accuracy === sport.marketAccuracy
                              ? 'Matched'
                              : 'Building...'}
                          </span>
                          <span className="text-sm font-black">
                            {sport.accuracy > sport.marketAccuracy
                              ? `+${sport.accuracy - sport.marketAccuracy}%`
                              : sport.accuracy === sport.marketAccuracy
                              ? '='
                              : `${sport.accuracy - sport.marketAccuracy}%`}
                          </span>
                        </div>

                        {/* Data size */}
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                          <span>{sport.gamesAnalyzed} games trained</span>
                          <span>{sport.testGames} tested</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transparency note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Why we show everything</h3>
                <p className="text-sm text-gray-500">Most prediction sites hide their losses. We don&apos;t.</p>
              </div>
            </div>

            <div className="space-y-3">
              {honestNotes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{note.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProofSection
