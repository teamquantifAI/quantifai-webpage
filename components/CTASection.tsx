'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating glow orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Sparkle accents */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity } }}
        className="absolute top-16 right-1/4 text-white/15"
      >
        <Sparkles size={48} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
          >
            The Market Is Smart.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-white to-yellow-100">
              Be Smarter.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Join the beta and get access to six-layer AI predictions for NFL, Soccer, NBA, and MLB — backed by 95,000 games of real data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="https://app.quantifai.co/signup"
              className="group relative inline-flex items-center px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 transition-all duration-500" />
              <div className="relative flex items-center">
                <span>Sign Up Free</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Beta Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Full Eval Dashboard Included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
