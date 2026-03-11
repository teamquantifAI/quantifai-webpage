'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, BarChart3, FileText, Newspaper, Sparkles, CloudRain } from 'lucide-react'

const HowItWorksSection = () => {
  const layers = [
    {
      step: '01',
      icon: Brain,
      title: 'Sport ML Ensemble',
      weight: '55% of core',
      description: 'Three models stacked — Elo-Logistic baseline, LightGBM, and CatBoost — each trained on real historical data. A meta-learner fuses them with isotonic calibration for well-calibrated probabilities.',
      color: 'from-yellow-400 to-amber-500',
      bgLight: 'bg-yellow-50',
    },
    {
      step: '02',
      icon: BarChart3,
      title: 'Live Market Odds',
      weight: '45% of core',
      description: 'Aggregated across multiple bookmakers via The Odds API. Vig-removed, averaged to a true consensus probability. The market is our strongest single input.',
      color: 'from-amber-400 to-orange-500',
      bgLight: 'bg-amber-50',
    },
    {
      step: '03',
      icon: FileText,
      title: 'Text Intelligence',
      weight: '15% regularizer',
      description: 'A Metaculus-trained classifier analyzes the prediction question framing. Acts as a regularizer — pulling extreme estimates back toward sensible ranges.',
      color: 'from-yellow-500 to-amber-600',
      bgLight: 'bg-yellow-50/80',
    },
    {
      step: '04',
      icon: Newspaper,
      title: 'News Sentiment',
      weight: 'Up to \u00b16% tilt',
      description: 'Real-time scanning of sports news for team-specific positive and negative signals. Injury reports, coaching changes, and momentum shifts the odds haven\'t priced yet.',
      color: 'from-orange-400 to-amber-500',
      bgLight: 'bg-orange-50',
    },
    {
      step: '05',
      icon: Sparkles,
      title: 'Gemini AI Intelligence',
      weight: 'Up to \u00b112% shift',
      description: 'Google Gemini with grounded web search analyzes breaking injuries, lineup announcements, and coaching decisions. The final layer of context that transforms a good prediction into a great one.',
      color: 'from-amber-500 to-yellow-500',
      bgLight: 'bg-amber-50/80',
    },
    {
      step: '06',
      icon: CloudRain,
      title: 'Weather Risk',
      weight: 'Confidence dampener',
      description: 'Open-Meteo forecast at the exact game venue. Precipitation probability, wind speed, and temperature shrink confidence for outdoor sports — because weather is chaos the model shouldn\'t fake certainty about.',
      color: 'from-yellow-600 to-amber-600',
      bgLight: 'bg-yellow-50/60',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
      {/* Subtle side accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-yellow-50/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block text-sm font-semibold text-amber-600 tracking-widest uppercase mb-4"
            >
              The Engine
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Six Layers of{' '}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every prediction flows through six independent signal layers. Each layer adds information the others don&apos;t have. The result: calibrated probabilities you can trust.
            </p>
          </motion.div>

          {/* Pipeline */}
          <div className="relative">

            <div className="relative space-y-6 md:space-y-0">
              {/* Vertical connector line — contained within the layers only */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-amber-400 to-yellow-600 opacity-20 hidden md:block" style={{ transform: 'translateX(-50%)' }} />
              {layers.map((layer, index) => {
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={layer.step}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center md:mb-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                      <div className={`feature-card ${layer.bgLight} rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-yellow-200 transition-all duration-300`}>
                        <div className="flex items-start space-x-4">
                          {/* Step number + icon */}
                          <div className="flex-shrink-0">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg`}>
                              <layer.icon className="w-7 h-7 text-white" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                                Layer {layer.step}
                              </span>
                              <span className="text-xs font-medium text-gray-400">{layer.weight}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{layer.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center node (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.08, type: 'spring', stiffness: 300 }}
                        viewport={{ once: true }}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                      >
                        <span className="text-xs font-black text-white">{layer.step}</span>
                      </motion.div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </motion.div>
                )
              })}
            </div>

            {/* Result node at bottom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-2xl px-8 py-5 shadow-2xl shadow-amber-500/20">
                <div className="text-center">
                  <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-1">Final Output</p>
                  <p className="text-2xl font-black text-white">Calibrated Probability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
