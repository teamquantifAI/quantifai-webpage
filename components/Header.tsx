'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'How it works', href: '#how' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Specs', href: '#specs' },
    { name: 'Demo', href: '#try' },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80
      window.scrollTo({ top: targetElement.offsetTop - headerHeight, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-soft'
          : 'bg-cream/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo + tagline */}
          <Link href="/" onClick={handleScrollToTop} className="flex items-center space-x-3 group">
            <img
              src="/images/logo.svg"
              alt="quantifAI logo"
              width={40}
              height={40}
              className="w-10 h-10 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-none">
              <div className="text-xl font-display font-extrabold tracking-tight text-ink">
                quantif<span className="text-brand-deep">AI</span>
              </div>
              <div className="hidden sm:block label-caps text-[10px] text-ink-soft mt-0.5">
                Build ML You Can Trust
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-ink-soft hover:text-brand-deep hover:bg-surface-low transition-all duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="https://app.quantifai.co/login"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-brand text-ink font-bold text-sm rounded-full shadow-glow hover:shadow-glow-lg hover:scale-[1.03] transition-all duration-300"
            >
              Login
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ink hover:bg-surface-low transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-outline-soft/50"
          >
            <div className="glass-strong">
              <nav className="mx-auto max-w-layout px-6 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="block px-4 py-3 rounded-lg font-medium text-ink-soft hover:bg-surface-low hover:text-brand-deep transition-all duration-200 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-3 pb-2">
                  <Link
                    href="https://app.quantifai.co/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-brand text-ink font-bold rounded-full shadow-glow transition-all duration-300"
                  >
                    Login
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
