'use client'

import { motion } from 'framer-motion'
import { EmailForm } from '@/components/email-form'
import { Code2, Brain, MessageSquare, FileText, Building2, HelpCircle, CheckCircle2, X, ArrowRight, Zap, TrendingUp } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-black">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-emerald-500/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Built for 2026 interviews
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
          >
            Interviews changed.
            <br />
            <span className="gradient-text">Your prep should too.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
          >
            Companies test <span className="text-white font-medium">architecture thinking</span>, <span className="text-white font-medium">AI fluency</span>, and <span className="text-white font-medium">product sense</span> now.
            <span className="block mt-3 sm:mt-4">AceCode prepares you for how interviews actually work in 2026.</span>
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-sm sm:max-w-md mx-auto px-2"
          >
            <EmailForm 
              source="hero" 
              buttonText="Get Early Access"
              placeholder="you@company.com"
            />
          </motion.div>

          {/* Honest social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-white/40 text-xs sm:text-sm"
          >
            🚀 Launching soon · Founding members lock in <span className="text-emerald-400">lifetime pricing</span>
          </motion.p>
        </div>
      </section>

      {/* Comparison Section - Moved Up */}
      <section className="py-16 sm:py-24 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Stop overpaying for outdated prep
            </h2>
            <p className="text-white/60 text-sm sm:text-base">All the prep you need, one price.</p>
          </motion.div>

          {/* Pivoted comparison table - mobile scrollable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <div className="min-w-[600px] sm:min-w-0 rounded-xl border border-white/10 overflow-hidden">
              {/* Header row - competitors */}
              <div className="grid grid-cols-6 bg-white/5 text-xs sm:text-sm font-medium">
                <div className="p-3 sm:p-4 text-white/60"></div>
                <div className="p-3 sm:p-4 text-center bg-emerald-500/10 border-x border-emerald-500/20">
                  <span className="text-emerald-400 font-semibold">AceCode</span>
                  <span className="block text-emerald-400/70 text-[10px] sm:text-xs mt-0.5">All-in-one</span>
                </div>
                <div className="p-3 sm:p-4 text-center text-white/60">
                  <span>LeetCode</span>
                  <span className="block text-white/40 text-[10px] sm:text-xs mt-0.5">$$</span>
                </div>
                <div className="p-3 sm:p-4 text-center text-white/60">
                  <span>Educative</span>
                  <span className="block text-white/40 text-[10px] sm:text-xs mt-0.5">$$</span>
                </div>
                <div className="p-3 sm:p-4 text-center text-white/60">
                  <span>Exponent</span>
                  <span className="block text-white/40 text-[10px] sm:text-xs mt-0.5">$$$</span>
                </div>
                <div className="p-3 sm:p-4 text-center text-white/60">
                  <span>Human Mocks</span>
                  <span className="block text-white/40 text-[10px] sm:text-xs mt-0.5">$$$$</span>
                </div>
              </div>
              {/* Feature rows */}
              {[
                { feature: "Coding Practice", ace: true, leet: true, edu: true, exp: false, human: true },
                { feature: "System Design", ace: true, leet: false, edu: true, exp: true, human: true },
                { feature: "Behavioral", ace: true, leet: false, edu: false, exp: true, human: true },
                { feature: "AI Mock Interviews", ace: true, leet: false, edu: false, exp: false, human: false },
                { feature: "Resume Tools", ace: true, leet: false, edu: false, exp: false, human: false },
                { feature: "Company Research", ace: true, leet: false, edu: false, exp: false, human: false },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-6 text-xs sm:text-sm border-t border-white/5">
                  <div className="p-3 sm:p-4 text-white/70 font-medium">{row.feature}</div>
                  <div className="p-3 sm:p-4 text-center bg-emerald-500/5 border-x border-emerald-500/10">
                    {row.ace ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}
                  </div>
                  <div className="p-3 sm:p-4 text-center">{row.leet ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</div>
                  <div className="p-3 sm:p-4 text-center">{row.edu ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</div>
                  <div className="p-3 sm:p-4 text-center">{row.exp ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</div>
                  <div className="p-3 sm:p-4 text-center">{row.human ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Changed Section - More Visual */}
      <section className="py-16 sm:py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              What actually changed?
            </h2>
            <p className="text-white/60 text-sm sm:text-base px-2">Companies know everyone uses AI. They&apos;re testing differently.</p>
          </motion.div>

          {/* Visual change cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { 
                old: "LeetCode grind",
                new: "System Design Focus",
                icon: Brain,
                color: "emerald"
              },
              { 
                old: "IDE with autocomplete",
                new: "Google Docs Coding",
                icon: Code2,
                color: "amber"
              },
              { 
                old: "Can you code?",
                new: "Can you use AI effectively?",
                icon: Zap,
                color: "blue"
              },
              { 
                old: "Generic answers",
                new: "Product Sense",
                icon: TrendingUp,
                color: "purple"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  item.color === 'emerald' ? 'from-emerald-500/5 to-transparent' :
                  item.color === 'amber' ? 'from-amber-500/5 to-transparent' :
                  item.color === 'blue' ? 'from-blue-500/5 to-transparent' :
                  'from-purple-500/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative flex items-center gap-4">
                  <motion.div 
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${
                      item.color === 'emerald' ? 'bg-emerald-500/10' :
                      item.color === 'amber' ? 'bg-amber-500/10' :
                      item.color === 'blue' ? 'bg-blue-500/10' :
                      'bg-purple-500/10'
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${
                      item.color === 'emerald' ? 'text-emerald-400' :
                      item.color === 'amber' ? 'text-amber-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      'text-purple-400'
                    }`} />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1">
                      <span className="text-xs sm:text-sm text-red-400/70 line-through truncate">{item.old}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 flex-shrink-0" />
                    </div>
                    <h3 className={`text-base sm:text-lg font-semibold ${
                      item.color === 'emerald' ? 'text-emerald-400' :
                      item.color === 'amber' ? 'text-amber-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      'text-purple-400'
                    }`}>{item.new}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Top Candidates Do - Animated */}
      <section className="py-16 sm:py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              What top candidates do differently
            </h2>
            <p className="text-white/60 text-sm sm:text-base px-2">They&apos;re not just grinding — they&apos;re preparing strategically.</p>
          </motion.div>

          {/* Animated strategy cards */}
          <div className="space-y-4 sm:space-y-6">
            {[
              { 
                icon: FileText,
                title: "Tailor resumes for each role", 
                desc: "Position your experience specifically for each job description.",
                delay: 0
              },
              { 
                icon: Building2,
                title: "Research companies deeply", 
                desc: "Know their tech stack, challenges, and culture before you walk in.",
                delay: 0.1
              },
              { 
                icon: HelpCircle,
                title: "Ask smart questions", 
                desc: "Stand out with thoughtful questions that show you've done homework.",
                delay: 0.2
              },
              { 
                icon: Brain,
                title: "Practice new interview formats", 
                desc: "System design, behavioral depth, AI-assisted coding — not just LeetCode.",
                delay: 0.3
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, type: "spring", stiffness: 80 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all cursor-default group"
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-emerald-400 transition-colors flex-shrink-0 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Ordered by status */}
      <section className="py-16 sm:py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Everything you need to land the offer
            </h2>
            <p className="text-white/60 text-sm sm:text-base px-2">Complete interview prep. One simple price.</p>
          </motion.div>

          {/* Live Features */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-400">Available Now</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Brain, title: "System Design Practice", desc: "AI mock interviews focused on architecture, tradeoffs, and scalability." },
                { icon: MessageSquare, title: "Behavioral Practice", desc: "Unlimited mocks with real follow-up questions. Track your weaknesses." },
                { icon: Code2, title: "Coding Without Crutches", desc: "Practice in 'Google Docs mode' — no IDE, no autocomplete." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                >
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coming Soon Features */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6 px-1">
              <span className="w-2 h-2 rounded-full bg-white/40"></span>
              <span className="text-sm font-medium text-white/40">Coming Soon</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: FileText, title: "Resume Tailoring", desc: "Paste any JD, get specific suggestions for that exact role." },
                { icon: Building2, title: "Company Research", desc: "Briefings on any company: tech stack, culture, what to expect." },
                { icon: HelpCircle, title: "Smart Questions", desc: "Generate thoughtful questions that impress interviewers." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/40 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white/70 mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Ready to prep for real interviews?
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-8 sm:mb-10 px-2">
              Join the waitlist. Founding members lock in <span className="text-emerald-400 font-medium">lifetime pricing</span>.
            </p>

            <div className="max-w-sm sm:max-w-md mx-auto px-2">
              <EmailForm 
                source="footer" 
                buttonText="Join the Waitlist"
                placeholder="your@email.com"
              />
            </div>

            <p className="text-white/30 text-xs mt-4 sm:mt-6 px-2">
              No spam. We&apos;ll only email you when we launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-white/30 text-xs sm:text-sm">
          © 2026 AceCode. Interview prep for the AI era.
        </div>
      </footer>
    </main>
  )
}
