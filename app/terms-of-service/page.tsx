'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Scale, AlertTriangle, UserCheck, Ban, CreditCard, Shield, Globe, FileText, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      {/* Warm grid + amber glow */}
      <div className="fixed inset-0 grid-warm opacity-50 pointer-events-none" />
      <div className="fixed -top-40 -right-40 w-[32rem] h-[32rem] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-brand-dim/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative bg-surface border-b border-outline-soft/40">
        <div className="absolute inset-0 grid-warm opacity-60" />
        <div className="relative z-10 mx-auto max-w-layout px-4 sm:px-6 lg:px-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-outline-soft/60 text-ink-soft hover:text-ink hover:bg-surface-low transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-5"
          >
            <img
              src="/images/logo.svg"
              alt="quantifAI logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">Terms of Service</h1>
              <p className="mt-1 label-caps text-xs text-ink-soft">QUANTIFAI, LLC</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-16 py-16">
        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white border border-outline-soft/40 shadow-soft-lg p-7 md:p-10 mb-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Scale className="w-7 h-7 text-brand-deep" strokeWidth={1.6} />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight">QUANTIFAI, LLC TERMS OF SERVICE</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-brand" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <p className="label-caps text-[11px] text-ink-soft">Last Updated: September 18, 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-ink-soft">
            <p className="text-lg leading-relaxed font-medium text-ink">
              We are QUANTIFAI, LLC ("QUANTIFAI," "we," or "us"), and we appreciate your visiting our website.
            </p>
            <p className="leading-relaxed">
              These Terms of Service ("Terms") govern your access and use of this website and any digital services owned, operated, or offered by QUANTIFAI or its affiliates (collectively, the "Services"). By accessing or using the QUANTIFAI website or Services, you agree to these Terms. If you do not agree, please do not access or use the QUANTIFAI website or Services.
            </p>
            <p className="leading-relaxed">
              We may update these Terms at any time, without prior notice, in our sole discretion. Any changes will be effective immediately upon posting. Please check this page periodically to stay informed.
            </p>
          </div>
        </motion.div>

        {/* Privacy Policy reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Shield className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </div>
        </motion.div>

        {/* License to Use Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <UserCheck className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">License to Use Our Services</h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Check className="w-5 h-5 mr-2 text-brand-ink" />
                License Grant
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                We grant you a limited, nonexclusive, nontransferable, revocable license to access and use the QUANTIFAI website and Services solely for your personal, informational, and noncommercial use.
              </p>
            </div>

            <div className="rounded-xl bg-error-soft/30 border border-error-q/20 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Ban className="w-5 h-5 mr-2 text-error-q" />
                You agree not to:
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft">Resell, redistribute, or commercially exploit the Services.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft">Modify or create derivative works from our content or software.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft">Use data mining, robots, or similar methods to extract data.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft">Use the Services for unlawful, harmful, or abusive purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intellectual Property */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Shield className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Intellectual Property</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              All content, software, trademarks, service marks, trade names, logos, and other intellectual property displayed on or related to the Services are the property of QUANTIFAI or its licensors.
            </p>
            <p className="leading-relaxed">
              Nothing in these Terms grants you rights to use the QUANTIFAI name, logo, or branding, whether or not it is registered as a trademark. Unauthorized use may violate intellectual property and other applicable laws.
            </p>
          </div>
        </motion.div>

        {/* Third-Party Content and Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Globe className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Third-Party Content and Services</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              Our Services may include links to or integrations with third-party websites, applications, or events ("Third-Party Content"). QUANTIFAI does not control, endorse, or assume responsibility for any Third-Party Content. Your interactions with third parties are solely between you and those third parties, and their terms and policies will apply.
            </p>
          </div>
        </motion.div>

        {/* User Content and Conduct */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <UserCheck className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">User Content and Conduct</h2>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-brand-deep" />
                Content License
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                You may have the ability to upload, share, or submit content ("User Content"). By posting User Content, you grant QUANTIFAI a worldwide, royalty-free, nonexclusive license to use, reproduce, distribute, and display that content in connection with the Services.
              </p>
            </div>

            <div className="rounded-xl bg-error-soft/30 border border-error-q/20 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-error-q" />
                You are solely responsible for your User Content and agree not to post or share anything that is:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft text-sm">Unlawful, defamatory, obscene, threatening, harassing, or otherwise objectionable.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft text-sm">Misleading or fraudulent.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft text-sm">Harmful to the security or functioning of the Services (e.g., viruses, malware, spam).</p>
                </div>
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft text-sm">Infringing on the intellectual property or privacy rights of others.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-brand/10 border border-brand/30 p-4">
              <p className="text-ink text-sm leading-relaxed flex items-start">
                <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-ink" />
                We reserve the right, but not the obligation, to remove or restrict User Content at our discretion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer of Warranties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <AlertTriangle className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Disclaimer of Warranties</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              The QUANTIFAI website and Services are provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that the Services will be error-free, secure, or uninterrupted. To the fullest extent permitted by law, we disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>
        </motion.div>

        {/* Fintech Disclaimer (highlighted) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-brand/10 border-2 border-brand/40 shadow-glow p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 border border-brand/40 shrink-0">
              <AlertTriangle className="w-6 h-6 text-brand-ink" strokeWidth={1.7} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Fintech Disclaimer</h2>
          </div>
          <div className="rounded-xl bg-white/70 border border-brand/20 p-6">
            <p className="text-ink font-medium leading-relaxed">
              QUANTIFAI provides technology and analytics tools for informational and educational purposes only. We do not provide financial, investment, legal, accounting, or tax advice. Nothing on the QUANTIFAI website or Services should be considered an offer, solicitation, or recommendation to buy, sell, or hold any security or financial product. You are solely responsible for your own investment decisions. Please consult a licensed financial advisor or other qualified professional before making any financial decisions.
            </p>
          </div>
        </motion.div>

        {/* Liability + Arbitration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-4">
              <AlertTriangle className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-3">Limitation of Liability</h3>
            <div className="space-y-3">
              <p className="text-ink text-sm font-semibold">To the fullest extent permitted by law:</p>
              <div className="rounded-lg bg-brand/10 p-3 border-l-4 border-brand">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <p className="text-ink text-sm">QUANTIFAI and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or loss of business opportunities.</p>
                </div>
              </div>
              <div className="rounded-lg bg-brand/10 p-3 border-l-4 border-brand">
                <div className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <p className="text-ink text-sm">Our total liability to you for any claim arising out of or relating to your use of the Services will not exceed one U.S. dollar (US$1.00).</p>
                </div>
              </div>
              <p className="text-outline text-xs italic">Some jurisdictions do not allow limitations on liability, so these limitations may not apply to you.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-4">
              <Scale className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-3">Arbitration and Dispute Resolution</h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-q-container/50 p-3 border-l-4 border-slate-q">
                <p className="text-ink text-sm">Any dispute arising out of or relating to these Terms or the Services will be resolved exclusively through binding individual arbitration under the rules of the American Arbitration Association.</p>
              </div>
              <div className="rounded-lg bg-error-soft/40 p-3 border-l-4 border-error-q">
                <div className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-error-q mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-ink text-sm font-bold">No Class Actions:</p>
                    <p className="text-ink-soft text-sm">You agree that disputes will be resolved only on an individual basis, not as part of a class, consolidated, or representative action.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-surface-high p-3 border-l-4 border-outline">
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-ink-soft mt-0.5 flex-shrink-0" />
                  <p className="text-ink-soft text-sm">The arbitration will take place in Campbell, California, unless otherwise agreed.</p>
                </div>
              </div>
              <div className="rounded-lg bg-brand/10 p-3 border-l-4 border-brand">
                <div className="flex items-start gap-2">
                  <Scale className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <p className="text-ink text-sm">If arbitration is not enforceable for any reason, disputes will be resolved in the state or federal courts located in California, and you consent to their jurisdiction.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Governing Law / Termination / Children's Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-4">
              <Globe className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-3">Governing Law</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              These Terms will be governed by and interpreted in accordance with the laws of the State of California, without regard to conflict of law principles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-4">
              <Ban className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-3">Termination</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              We may suspend or terminate your access to the Services at any time, for any reason, without notice or liability. You may stop using the Services at any time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-4">
              <Shield className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-3">Children's Privacy</h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              The Services are not directed to individuals under the age of 13. We do not knowingly collect information from children.
            </p>
          </motion.div>
        </div>

        {/* Entire Agreement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <FileText className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Entire Agreement</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and QUANTIFAI regarding the Services. They supersede any prior agreements or understandings.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-surface border-t border-outline-soft/40">
        <div className="mx-auto max-w-layout px-4 sm:px-6 lg:px-16 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/images/logo.svg" alt="quantifAI logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-display font-extrabold text-ink">quantif<span className="text-brand-deep">AI</span></span>
          </div>
          <p className="text-sm text-outline">&copy; {new Date().getFullYear()} QuantifAI LLC. All rights reserved.</p>
        </div>
        <div className="h-1 bg-gradient-to-r from-brand-dim via-brand to-brand-deep" />
      </footer>
    </div>
  )
}
