'use client'

import React from 'react'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Proof', href: '#proof' },
    { name: 'Sports', href: '#sports' },
    { name: 'Log In', href: 'https://app.quantifai.co/login' },
    { name: 'Sign Up', href: 'https://app.quantifai.co/signup' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <Link href="/" onClick={handleScrollToTop} className="flex items-center space-x-2 mb-6 group">
              <img
                src="/images/logo.svg"
                alt="quantifAI Logo"
                width={32} height={32}
                className="w-8 h-8 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold">quantifAI</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              AI-powered predictive intelligence for sports. Six signal layers fuse ML ensembles, live market odds,
              news sentiment, and real-time intelligence into calibrated predictions. Proven against the market.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://www.linkedin.com/company/quantifaico/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Built with real data, not hype. 95,000+ historical games across Soccer, NFL, NBA, and MLB.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} quantifAI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600" />
    </footer>
  )
}

export default Footer
