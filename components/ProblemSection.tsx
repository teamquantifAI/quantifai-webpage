'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, TrendingUp, CloudRain, Newspaper, AlertTriangle, Users, DollarSign } from 'lucide-react'

const ProblemSection = () => {
  const marketSees = [
    { icon: DollarSign, text: 'Team win/loss records and rankings' },
    { icon: TrendingUp, text: 'Public betting volume and line movement' },
    { icon: Users, text: 'General roster strength and matchup history' },
  ]

  const marketMisses = [
    { icon: AlertTriangle, text: 'Last-minute injuries & lineup changes detected by AI in real-time', color: 'text-amber-400' },
    { icon: CloudRain, text: 'Weather at the exact venue — rain, wind, and temperature impact on outdoor games', color: 'text-amber-400' },
    { icon: Newspaper, text: 'Breaking news sentiment shifts that odds haven\'t priced in yet', color: 'text-amber-400' },
    { icon: Users, text: 'Back-to-back fatigue patterns and rest day differentials the market underprices', color: 'text-amber-400' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />

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
              The Opportunity
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Even the Sharpest Markets{' '}
              <span className="gradient-text">Leave Gaps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Betting markets aggregate millions of dollars in wisdom. They&apos;re good — but they can&apos;t process
              every signal simultaneously. That&apos;s where we come in.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left: What the market prices */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">What the Market Sees</h3>
                  <p className="text-sm text-gray-500">Priced into the odds already</p>
                </div>
              </div>

              <div className="space-y-5">
                {marketSees.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center mt-0.5">
                      <item.icon className="w-5 h-5 text-gray-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-400 italic">Good baseline — but incomplete.</p>
              </div>
            </motion.div>

            {/* Right: What the market misses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700/50 overflow-hidden"
            >
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 grid-pattern opacity-50 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                    <EyeOff className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">What the Market Misses</h3>
                    <p className="text-sm text-amber-400/80">quantifAI captures these in real-time</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {marketMisses.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.12 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-500/20 flex items-center justify-center mt-0.5">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <p className="text-sm text-amber-400 font-medium">
                    This is your edge. The market plus what the market can&apos;t process fast enough.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
