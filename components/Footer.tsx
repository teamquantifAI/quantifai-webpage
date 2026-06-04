'use client'

import React from 'react'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const productLinks = [
  { name: 'How It Works', href: '#how' },
  { name: 'Privacy', href: '#privacy' },
  { name: 'Specs', href: '#specs' },
  { name: 'Demo', href: '#try' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]

const Footer = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface border-t border-outline-soft/40">
      <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" onClick={handleScrollToTop} className="flex items-center gap-2 mb-5 group">
              <img
                src="/images/logo.svg"
                alt="quantifAI logo"
                width={32}
                height={32}
                className="w-8 h-8 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-display font-extrabold text-ink">
                quantif<span className="text-brand-deep">AI</span>
              </span>
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
              Build, evaluate, and ship ML models you can trust. The AI writes the code,
              you bring the understanding.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="label-caps text-[11px] text-ink-soft mb-5">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ink hover:text-brand-deep transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="label-caps text-[11px] text-ink-soft mb-5">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-ink hover:text-brand-deep transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="label-caps text-[11px] text-ink-soft mb-5">Connect</h3>
            <Link
              href="https://www.linkedin.com/company/quantifaico/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-surface-high hover:bg-brand text-ink transition-all duration-300 mb-4"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed">
              Built on real, messy data. Honest evaluation on every model.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-outline-soft/40">
          <p className="text-sm text-outline">&copy; {new Date().getFullYear()} QuantifAI LLC. All rights reserved.</p>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-brand-dim via-brand to-brand-deep" />
    </footer>
  )
}

export default Footer
