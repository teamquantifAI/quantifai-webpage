'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, initializeAnalytics } from '@/lib/firebase'

const GOALS = [
  { value: 'build_end_to_end', label: 'Finally build a model myself — start to finish' },
  { value: 'verify_model', label: 'Check whether my current model is real' },
  { value: 'learn_on_real_data', label: 'Learn ML on real, messy data' },
  { value: 'explore_demo', label: 'Explore a demo dataset first' },
  { value: 'other', label: 'Something else' },
]

const PERKS = [
  'Free account, no credit card',
  'Upload your own data, or use a demo dataset',
  'Honest evaluation on every model — built-in',
]

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ projectGoal: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => { initializeAnalytics() }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!db) throw new Error('Firebase is not configured')
      const goalLabel = GOALS.find(g => g.value === formData.projectGoal)?.label || 'Not specified'
      await addDoc(collection(db, 'contact_submissions'), {
        // fullName kept for back-compat with deployed Firestore rules
        fullName: formData.email,
        email: formData.email,
        projectGoal: goalLabel,
        message: goalLabel,
        submittedAt: serverTimestamp(),
        status: 'new',
        source: 'website_get_started_v3',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      })

      setSubmitStatus('success')
      setTimeout(() => {
        setFormData({ projectGoal: '', email: '' })
        setSubmitStatus('idle')
      }, 4000)
    } catch (error) {
      console.error('Error adding document:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="get-started" className="relative py-20 lg:py-28 bg-cream">
      <div className="absolute inset-0 grid-warm opacity-50" />
      <div className="relative mx-auto max-w-layout px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps text-xs text-brand-ink">Get Started</span>
            <h2 className="mt-4 font-display font-bold text-ink text-3xl sm:text-4xl tracking-tight">
              Build your first model today.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-md">
              Upload a CSV, pick what you want to predict, and walk away with a model you
              actually understand. No credit card. No tutorials to finish first.
            </p>
            <ul className="mt-8 space-y-4">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-ink-soft">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20">
                    <Check className="w-3 h-3 text-brand-ink" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white shadow-soft-lg border border-outline-soft/40 p-7 sm:p-9"
            >
              {/* Project goal */}
              <div className="mb-6">
                <label htmlFor="projectGoal" className="block label-caps text-[11px] text-ink-soft mb-2">
                  Tell us about your first project
                </label>
                <div className="relative">
                  <select
                    id="projectGoal"
                    name="projectGoal"
                    value={formData.projectGoal}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3.5 rounded-lg bg-surface-low border border-outline-soft/60 text-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="" disabled>Select your goal</option>
                    {GOALS.map(g => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-outline">▾</span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-7">
                <label htmlFor="email" className="block label-caps text-[11px] text-ink-soft mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="block w-full px-4 py-3.5 rounded-lg bg-surface-low border border-outline-soft/60 text-ink placeholder-outline focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`group w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full font-bold transition-all duration-300 ${
                  submitStatus === 'success'
                    ? 'bg-brand-deep text-white'
                    : 'bg-brand text-ink shadow-glow hover:shadow-glow-lg hover:scale-[1.02]'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-ink" />
                    Sending…
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    You&apos;re on the list!
                  </>
                ) : (
                  <>
                    Start Building
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center label-caps text-[10px] text-ink-soft">
                Free during beta · Your data stays private · No credit card required
              </p>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-brand/12 border border-brand/30 text-brand-ink text-center text-sm"
                >
                  Welcome aboard. We&apos;ll be in touch within 48 hours with your beta access.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-error-soft/50 border border-error-q/30 text-on-error text-center text-sm"
                >
                  Something went wrong. Please try again or email team@quantifai.co.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
