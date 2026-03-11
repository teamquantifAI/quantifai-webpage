'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Shield, Zap, CloudRain, Newspaper, Brain, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const DashboardSection = () => {
  const drivers = [
    { text: 'Elo rating advantage +82', type: 'positive' as const },
    { text: 'Home field: 4-1 last 5', type: 'positive' as const },
    { text: 'News: Mahomes cleared to play', type: 'positive' as const },
    { text: 'Weather: 12% rain probability', type: 'negative' as const },
    { text: 'Away rest: 2 extra days off', type: 'negative' as const },
  ]

  const signals = [
    { label: 'ML Model', value: '64.8%', icon: Brain, color: 'text-amber-500' },
    { label: 'Market Odds', value: '62.4%', icon: BarChart3, color: 'text-yellow-600' },
    { label: 'News Tilt', value: '+3.1%', icon: Newspaper, color: 'text-orange-500' },
    { label: 'Gemini AI', value: '+1.8%', icon: Zap, color: 'text-amber-400' },
    { label: 'Weather', value: '-0.5%', icon: CloudRain, color: 'text-gray-400' },
  ]

  const marketHistory = [30, 35, 38, 42, 48, 52, 55, 58, 56, 60, 62, 62.4]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="dashboard">
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
              Product Preview
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              See a Forecast{' '}
              <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every prediction comes with full transparency — signal breakdowns, driver explanations, and market context.
              No black boxes.
            </p>
          </motion.div>

          {/* Mock forecast card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Card header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 md:px-10 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Live Forecast</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Kansas City Chiefs vs Philadelphia Eagles</h3>
                  <p className="text-sm text-gray-400 mt-1">NFL &middot; Sunday, March 2, 2026 &middot; 4:25 PM ET</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl px-5 py-3 border border-yellow-500/20">
                    <p className="text-xs text-amber-400 font-medium mb-0.5">Confidence</p>
                    <p className="text-lg font-black text-amber-400">High</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: Probability + signals */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Main probability */}
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Home Win Probability</p>
                    <p className="text-6xl font-black gradient-text leading-none">67.2%</p>
                    <div className="flex items-center justify-center mt-3 space-x-1">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">+4.8% vs market</span>
                    </div>
                  </div>

                  {/* Signal breakdown */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Signal Breakdown</p>
                    {signals.map((signal, i) => (
                      <motion.div
                        key={signal.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <signal.icon className={`w-4 h-4 ${signal.color}`} />
                          <span className="text-sm font-medium text-gray-700">{signal.label}</span>
                        </div>
                        <span className={`text-sm font-bold ${signal.value.startsWith('+') ? 'text-green-600' : signal.value.startsWith('-') ? 'text-red-500' : 'text-gray-800'}`}>
                          {signal.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Middle: Market history chart + drivers */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Market odds history chart */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-bold text-gray-800">Market Probability History</p>
                        <p className="text-xs text-gray-400 mt-0.5">Home win implied probability over last 7 days</p>
                      </div>
                      <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs font-bold text-green-600">+8.2%</span>
                      </div>
                    </div>

                    {/* SVG chart */}
                    <div className="relative h-40">
                      <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        {[0, 40, 80, 120, 160].map(y => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                        ))}
                        {/* Area fill */}
                        <motion.path
                          d={`M ${marketHistory.map((v, i) => `${(i / (marketHistory.length - 1)) * 400},${160 - (v / 100) * 160}`).join(' L ')} L 400,160 L 0,160 Z`}
                          fill="url(#chartFill)"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 1 }}
                          viewport={{ once: true }}
                        />
                        {/* Line */}
                        <motion.path
                          d={`M ${marketHistory.map((v, i) => `${(i / (marketHistory.length - 1)) * 400},${160 - (v / 100) * 160}`).join(' L ')}`}
                          fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                        {/* Current dot */}
                        <motion.circle
                          cx="400" cy={160 - (62.4 / 100) * 160} r="5"
                          fill="#f59e0b" stroke="white" strokeWidth="2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 2, type: 'spring' }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-400 -ml-1">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                      </div>
                    </div>
                  </div>

                  {/* Drivers */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <p className="text-sm font-bold text-gray-800 mb-4">Key Drivers</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {drivers.map((driver, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.08 }}
                          viewport={{ once: true }}
                          className={`flex items-center space-x-3 p-3 rounded-xl ${
                            driver.type === 'positive' ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                          }`}
                        >
                          {driver.type === 'positive'
                            ? <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                            : <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0" />
                          }
                          <span className={`text-sm ${driver.type === 'positive' ? 'text-green-700' : 'text-red-600'}`}>
                            {driver.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Q Intelligence snippet */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800 mb-1">Q Intelligence Summary</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Chiefs hold a significant home-field advantage with Mahomes confirmed healthy after Thursday practice.
                          Eagles&apos; secondary depleted with two starters on IR. Weather conditions favor passing game.
                          Historical H2H strongly favors Kansas City in recent matchups at Arrowhead.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DashboardSection
