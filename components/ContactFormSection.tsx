'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, ChevronDown } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, initializeAnalytics } from '@/lib/firebase'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => { initializeAnalytics() }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!db) throw new Error('Firebase is not configured')
      await addDoc(collection(db, 'contact_submissions'), {
        fullName: formData.fullName,
        email: formData.email,
        role: formData.role || 'Not specified',
        message: formData.message || 'No message',
        submittedAt: serverTimestamp(),
        status: 'new',
        source: 'website_contact_form_v2',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      })

      setSubmitStatus('success')
      setTimeout(() => {
        setFormData({ fullName: '', email: '', role: '', message: '' })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error adding document:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block text-sm font-semibold text-amber-600 tracking-widest uppercase mb-4"
            >
              Join the Beta
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Be the First to{' '}
              <span className="gradient-text">Predict Smarter</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re onboarding early users who want data-driven sports predictions built on real science, not hype. Spots are limited.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text" id="fullName" name="fullName"
                      value={formData.fullName} onChange={handleChange}
                      placeholder="Your name" required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-yellow-50/30 focus:bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="you@example.com" required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-yellow-50/30 focus:bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="space-y-2 mb-6">
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
                  How do you plan to use quantifAI?
                </label>
                <div className="relative">
                  <select
                    id="role" name="role"
                    value={formData.role} onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl bg-yellow-50/30 focus:bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Select your interest</option>
                    <option value="sports_bettor">Sports Analysis & Betting</option>
                    <option value="analyst">Data / Sports Analyst</option>
                    <option value="investor">Investor / VC</option>
                    <option value="media">Media / Journalist</option>
                    <option value="curious">Just Curious</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Anything else? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us what sports you follow, what features you'd love, or just say hi..."
                    rows={4}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-yellow-50/30 focus:bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-black shadow-lg hover:shadow-xl hover:scale-[1.02]'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <span>You&apos;re on the list!</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center text-sm"
                >
                  Welcome to the future of sports prediction. We&apos;ll be in touch within 48 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center text-sm"
                >
                  Something went wrong. Please try again or reach out to us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
