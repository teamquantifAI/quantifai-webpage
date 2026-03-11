'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown, Zap, BarChart3, Globe, Layers, Brain, Newspaper, CloudRain, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const ForecastCard = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const probability = 67.2

  const signals = [
    { label: 'ML Model', value: '64.8%', icon: Brain, color: 'bg-amber-500/10 text-amber-600 border-amber-200/60' },
    { label: 'Market', value: '62.4%', icon: BarChart3, color: 'bg-yellow-500/10 text-yellow-700 border-yellow-200/60' },
    { label: 'News', value: '+3.1%', icon: Newspaper, color: 'bg-orange-500/10 text-orange-600 border-orange-200/60' },
    { label: 'Gemini AI', value: '+1.8%', icon: Zap, color: 'bg-purple-500/10 text-purple-600 border-purple-200/60' },
    { label: 'Weather', value: '-0.5%', icon: CloudRain, color: 'bg-sky-500/10 text-sky-600 border-sky-200/60' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -5 }}
      animate={mounted ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
      style={{ perspective: 1000 }}
    >
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-900/10 border border-white/60 overflow-hidden">
        {/* Top accent gradient */}
        <div className="h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />

        <div className="p-6">
          {/* Match header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mb-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-[11px] font-semibold text-green-600 uppercase tracking-wider">Live Forecast</span>
              </div>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                High Confidence
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">Kansas City Chiefs</h3>
            <p className="text-sm text-gray-400 font-medium">vs Philadelphia Eagles</p>
            <p className="text-xs text-gray-400 mt-1">NFL &middot; Sun, Mar 2 &middot; 4:25 PM ET</p>
          </motion.div>

          {/* Probability display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mb-5"
          >
            <div className="flex items-end justify-between mb-2">
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Home Win</p>
                <p className="text-4xl font-black text-gray-900 leading-none">
                  {probability}<span className="text-2xl">%</span>
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 justify-end">
                  <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-sm font-bold text-green-600">+4.8%</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">vs market odds</p>
              </div>
            </div>

            {/* Probability bar */}
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={mounted ? { width: `${probability}%` } : {}}
                transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
              />
              {/* Market line marker */}
              <motion.div
                className="absolute top-0 bottom-0 w-0.5 bg-gray-400/60"
                style={{ left: '62.4%' }}
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 2.2 }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-gray-400">0%</span>
              <motion.span
                className="text-[10px] text-gray-400"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 2.3 }}
              >
                Market: 62.4%
              </motion.span>
              <span className="text-[10px] text-gray-400">100%</span>
            </div>
          </motion.div>

          {/* Signal chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Active Signals</p>
            <div className="flex flex-wrap gap-2">
              {signals.map((signal, i) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.8 + i * 0.1, type: 'spring', stiffness: 400, damping: 20 }}
                  className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold ${signal.color}`}
                >
                  <signal.icon className="w-3 h-3" />
                  <span>{signal.label}</span>
                  <span className="opacity-70">{signal.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 2.4 }}
          className="bg-gray-50/80 border-t border-gray-100 px-6 py-3 flex items-center justify-between"
        >
          <span className="text-[10px] text-gray-400">Powered by 6-layer ensemble</span>
          <span className="text-[10px] font-semibold text-amber-600">quantifAI Pulse</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

const HeroSection = () => {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } })
  }, [controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 40,
        y: (e.clientY - window.innerHeight / 2) / 40,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScrollToNext = () => {
    const hero = document.querySelector('section')
    if (hero) {
      window.scrollTo({ top: hero.offsetHeight - 80, behavior: 'smooth' })
    }
  }

  const stats = [
    { value: '95k+', label: 'Games Trained', icon: BarChart3 },
    { value: '4', label: 'Sports Covered', icon: Globe },
    { value: '6', label: 'Signal Layers', icon: Layers },
    { value: '25%', label: 'NFL Brier Edge', icon: Zap },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/40">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            width: '120%', height: '120%', top: '-10%', left: '-10%',
          }}
        />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, #92400e 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two-column hero: copy left, card right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

            {/* Left: Copy */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={controls}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200/80 rounded-full px-4 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Now in Beta &middot; Predictive Intelligence</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
              >
                The Market Is Smart.{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">We&apos;re Smarter.</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
              >
                Six AI layers fuse{' '}
                <span className="font-semibold text-gray-800">ML ensembles</span>,{' '}
                <span className="font-semibold text-gray-800">live market odds</span>,{' '}
                <span className="font-semibold text-gray-800">news sentiment</span>, and{' '}
                <span className="font-semibold text-gray-800">real-time intelligence</span>{' '}
                into calibrated sports predictions. Trained on 95,000+ real games. Proven against the betting market.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="https://app.quantifai.co/signup"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold rounded-full shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">Sign Up Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Forecast card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <ForecastCard />
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="group bg-white/70 backdrop-blur-lg rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl border border-white/40 hover:border-yellow-200 transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-800">{stat.value}</div>
                <div className="text-xs font-medium text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center mt-14"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleScrollToNext}
              className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
