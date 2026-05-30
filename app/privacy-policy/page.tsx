'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Users, Database, Globe, FileText, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">Privacy Policy</h1>
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
              <FileText className="w-7 h-7 text-brand-deep" strokeWidth={1.6} />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight">QUANTIFAI, LLC PRIVACY POLICY</h2>
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
              We are QUANTIFAI, LLC ("QUANTIFAI", "we", or "us") and we appreciate your visiting our website.
            </p>
            <p className="leading-relaxed">
              This is our privacy policy ("Privacy Policy"). It is intended to explain our practices concerning the manner and ways in which your information and data, and other information and data concerning you and others, is accessed, gathered, collected, stored and used by us and our affiliated companies (collectively, our "Affiliates") including, without limitation, websites or digital services owned, operated or offered by, through, on behalf of, or in conjunction with QUANTIFAI or its Affiliates, including, without limitation, any website, or digital service through which this Privacy Policy appears (each a "Service," collectively the "Services"). "Users" are persons that access and use the Services.
            </p>
            <p className="leading-relaxed">
              By access and using the QUANTIFAI website and using the Services, you agree to the terms and conditions of this Privacy Policy. If you do not agree to the terms and conditions of this Privacy Policy, please do not access or use the QUANTIFAI website or use the Services.
            </p>
            <p className="leading-relaxed">
              This Privacy Policy is subject to change at any time and from time to time without notice in our sole and absolute discretion and without notice. You can determine when this Privacy Policy was last revised by referring to the "Last Updated" legend at the top of this page. Any changes to our Privacy Policy will become effective upon our posting of the revised Privacy Policy on the QUANTIFAI website. If you don't agree to any changes in our Privacy Policy, please stop using the QUANTIFAI website and the Services. Your access and use of the QUANTIFAI website or use of the Services following such changes constitutes your acceptance of the revised Privacy Policy then in effect. You should in any event periodically review this Privacy Policy to assure that it aligns with your needs and expectations, as they may also change from time to time.
            </p>
          </div>
        </motion.div>

        {/* Privacy Policy Coverage */}
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
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Privacy Policy Coverage</h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p className="leading-relaxed">
              This Privacy Policy covers QUANTIFAI's access, gathering and use of personal identifiable information ("PII") when you access and use the QUANTIFAI website and when you use Services. PII is information that identifies you as an individual. PII is of many different types, but includes information and data about you that is generally not publicly available, or that you may not generally disclose or intend to disclose to others for any one or a number of reasons. In addition, your general attitude and approach to PII may change from time to time.
            </p>
            <p className="leading-relaxed">
              This policy does not apply to the policies, procedures and practices of third parties that QUANTIFAI does not own or control (e.g. third party websites accessible or linked to or through the QUANTIFAI website), or to individuals that QUANTIFAI does not employ, manage or control. We do not monitor their actions, and we are not responsible and will not be liable for their actions or omissions.
            </p>
          </div>
        </motion.div>

        {/* Collection of Data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Database className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">Collection of Data</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-brand-deep" />
                Data You Provide to Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Registration</p>
                    <p className="text-ink-soft">We collect, store and use PII such as name, address, IP address, geo-location, title, phone number, organization name and type, country, field of interest, and credit card that Users voluntarily supply while accessing and using the QUANTIFAI website or using the Services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Social Media</p>
                    <p className="text-ink-soft">If Users access or log-in to one of the Services from or through a social media service, the PII we collect may also include the User ID and/or user name associated with that service and any other information Users have permitted the service to share with us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-brand-deep" />
                Data Automatically or Passively Collected by Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Server Logs</p>
                    <p className="text-ink-soft">When Users access and interact with the Services, we receive and record certain "traffic data" on our server logs such as IP address, time stamp of visit, page visited or service used, geolocation, or unique device identifier.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Cookies</p>
                    <p className="text-ink-soft">We and third-party services may use cookies, pixel tags and other similar technologies to provide content, advertising, functionality, or measure and analyze advertisement and traffic metrics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-brand-deep" />
                Usage Data
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Advertising Networks and Platforms</p>
                    <p className="text-ink-soft">Advertisers and advertising networks may use cookies and similar technologies to deliver targeted ads.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-ink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Analytics and Reporting</p>
                    <p className="text-ink-soft">Server log, cookies, and usage data may be shared with analytics providers to understand and improve user experience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-lg text-ink mb-3 flex items-center">
                <Database className="w-5 h-5 mr-2 text-brand-deep" />
                Other Sources
              </h3>
              <div className="space-y-2 text-sm text-ink-soft">
                <p>• <strong className="text-ink">Third-Party Information Usage</strong> – We may forward your PII to third parties such as payment processors or order fulfillment providers.</p>
                <p>• <strong className="text-ink">Publicly Available Information</strong> – We may supplement information with publicly available data.</p>
                <p>• <strong className="text-ink">Legal Uses of Information</strong> – We may use PII to protect and enforce our rights or comply with applicable laws.</p>
                <p>• <strong className="text-ink">Mergers and/or Sale of Assets</strong> – If QUANTIFAI sells, transfers or merges assets or business, we may transfer User PII as part of that transaction.</p>
                <p>• <strong className="text-ink">Publication of Reports</strong> – We may release aggregated non-PII to show usage trends.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* User Access and Control */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-7 md:p-9 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-low border border-outline-soft/50 shrink-0">
              <Users className="w-6 h-6 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-ink">User Access and Control</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-ink mb-2">Receiving Electronic Communications</h3>
              <p className="text-ink-soft text-sm">Users may opt-out of marketing communications by following unsubscribe instructions.</p>
            </div>
            <div className="rounded-xl bg-surface-low border border-outline-soft/40 p-6">
              <h3 className="font-display font-bold text-ink mb-2">Cancelling the Account</h3>
              <p className="text-ink-soft text-sm">If a User deletes their account, we may retain backup information to comply with applicable laws, technical, contractual, or financial obligations.</p>
            </div>
          </div>
        </motion.div>

        {/* Compact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-3">
              <Shield className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-2">Children's Privacy</h3>
            <p className="text-ink-soft text-xs leading-relaxed">
              The QUANTIFAI website and the Services are not directed to individuals under the age of thirteen (13). You must be thirteen (13) years and older to register on the QUANTIFAI website or use the Services. As a result, QUANTIFAI does not specifically collect information about children.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-3">
              <Lock className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-2">Security Issues</h3>
            <p className="text-ink-soft text-xs leading-relaxed">
              No data transmission over the Internet or data storage system can be guaranteed to be 100% secure. Please do not send us sensitive information through insecure channels. If you have reason to believe that your interaction with us is no longer secure, you must immediately notify us of the problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="lift rounded-2xl bg-white border border-outline-soft/40 shadow-soft p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-low border border-outline-soft/50 mb-3">
              <Globe className="w-5 h-5 text-brand-deep" strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-bold text-lg text-ink mb-2">Jurisdictional Issues</h3>
            <p className="text-ink-soft text-xs leading-relaxed">
              We do not represent that the QUANTIFAI website or the Services, or any part thereof, are appropriate or available for use in any particular jurisdiction. Those who choose to access or use the QUANTIFAI website or use the Services do so on their own initiative and at their own risk, and are responsible for complying with all laws. By accessing or using the QUANTIFAI website or using the Services and submitting any PII, you consent to the transfer of PII to other countries, which may provide a different level of security than your country of residence.
            </p>
          </motion.div>
        </div>
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
