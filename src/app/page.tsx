'use client'

import { motion } from 'framer-motion'
import { EmailForm } from '@/components/email-form'
import { Code2, Brain, MessageSquare, DollarSign, Zap, Target, ArrowRight, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Built for 2026 Interviews
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Interviews Changed.
            <br />
            <span className="gradient-text">Your Prep Should Too.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Companies are redesigning interviews because candidates use AI. 
            AceCode gives you unlimited mock interviews for the new AI-aware formats — 
            coding, system design, and behavioral. <span className="text-emerald-400 font-medium">Just $12/month.</span>
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <EmailForm 
              source="hero" 
              buttonText="Get Early Access"
              placeholder="you@company.com"
            />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-8 text-white/40 text-sm"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/60 to-teal-500/60 border-2 border-background" />
              ))}
            </div>
            <span>Join 200+ engineers on the waitlist</span>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The interview game changed in 2025
            </h2>
            <p className="text-white/60 text-lg">
              And most prep platforms are still teaching last year&apos;s playbook.
            </p>
          </motion.div>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                icon: Code2, 
                title: "LeetCode won't cut it anymore", 
                desc: "Companies know you can solve algorithms with Copilot. They're adding pair programming, debugging, and system design to every loop."
              },
              { 
                icon: DollarSign, 
                title: "Current options drain your wallet", 
                desc: "Educative at $50/mo, Exponent at $99/mo, human mock interviews at $150+ each. Job hunting is already expensive enough."
              },
              { 
                icon: MessageSquare, 
                title: "Behavioral gets zero attention", 
                desc: "You can grind 500 LeetCode problems but still bomb 'tell me about a conflict' because you never practiced out loud."
              },
              { 
                icon: Brain, 
                title: "AI-aware formats are unknown territory", 
                desc: "Companies are testing new formats: open-internet coding, AI-assisted design, ethical AI questions. Who's prepping for that?"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors"
              >
                <item.icon className="w-8 h-8 text-emerald-400/80 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Practice like it&apos;s the real thing
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              AceCode simulates the exact interview experience — with AI interviewers 
              that adapt, push back, and give real feedback.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-6">
            {[
              { 
                num: "01", 
                title: "Infinite mock interviews, every format", 
                desc: "Coding with live debugging. System design with architecture discussions. Behavioral with follow-up questions. All AI-powered, available 24/7, as many times as you want."
              },
              { 
                num: "02", 
                title: "Built for how companies interview now", 
                desc: "We track the latest interview formats from FAANG, startups, and everyone in between. AI-assisted coding rounds? Open-book system design? We've got mock versions ready."
              },
              { 
                num: "03", 
                title: "Actually affordable at $12/month", 
                desc: "One month of AceCode costs less than a single human mock interview. Practice 50 times, not once. Cancel anytime if you land the job (or if you don't love it)."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors"
              >
                <span className="text-4xl font-bold text-emerald-500/30">{item.num}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Types Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every interview type. One platform.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { 
                icon: Code2,
                title: "Coding", 
                items: ["Algorithm rounds", "Pair programming", "Live debugging", "AI-assisted coding"]
              },
              { 
                icon: Brain,
                title: "System Design", 
                items: ["Architecture deep-dives", "Trade-off discussions", "Scaling scenarios", "Real-time feedback"]
              },
              { 
                icon: MessageSquare,
                title: "Behavioral", 
                items: ["STAR method practice", "Follow-up questions", "Leadership principles", "Cultural fit"]
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors"
              >
                <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/50 text-sm">
                      <Sparkles className="w-3 h-3 text-emerald-400/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop overpaying for interview prep
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 overflow-hidden"
          >
            <div className="grid grid-cols-4 bg-white/5 p-4 text-sm font-medium text-white/60">
              <div></div>
              <div className="text-center">Coding</div>
              <div className="text-center">System Design</div>
              <div className="text-center">Behavioral</div>
            </div>
            {[
              { name: "LeetCode Premium", price: "$35/mo", coding: true, system: false, behavioral: false },
              { name: "Educative", price: "$50/mo", coding: true, system: true, behavioral: false },
              { name: "Exponent", price: "$99/mo", coding: false, system: true, behavioral: true },
              { name: "Human Mocks", price: "$150/each", coding: true, system: true, behavioral: true },
              { name: "AceCode", price: "$12/mo", coding: true, system: true, behavioral: true, highlight: true },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`grid grid-cols-4 p-4 text-sm border-t border-white/5 ${item.highlight ? 'bg-emerald-500/10' : ''}`}
              >
                <div className={`font-medium ${item.highlight ? 'text-emerald-400' : 'text-white'}`}>
                  {item.name}
                  <span className="block text-xs text-white/40">{item.price}</span>
                </div>
                <div className="text-center">{item.coding ? '✓' : '—'}</div>
                <div className="text-center">{item.system ? '✓' : '—'}</div>
                <div className="text-center">{item.behavioral ? '✓' : '—'}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engineers who get it
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Early supporters who&apos;ve been through the new interview gauntlet.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { quote: "I got rejected from 3 FAANGs before realizing my prep was outdated. The interviews have completely changed.", name: "James L.", role: "Senior SWE, ex-Stripe" },
              { quote: "Spent $400 on mock interviews before an Amazon loop. Would've killed for unlimited practice at $12/mo.", name: "Priya M.", role: "Staff Engineer, Google" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-left"
              >
                <p className="text-white/80 mb-4">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/60 to-teal-500/60" />
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-white/40 text-xs">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to prep for interviews that actually exist?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Join the waitlist and be first to access AceCode.
              <br />
              <span className="text-emerald-400">Founding members lock in $9/month forever.</span>
            </p>

            <EmailForm 
              source="footer" 
              buttonText="Join the Waitlist"
              placeholder="your@email.com"
              className="max-w-md mx-auto"
            />

            <p className="text-white/30 text-xs mt-6">
              No spam. Unsubscribe anytime. We&apos;ll only email you when we launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center text-white/30 text-sm">
          © 2025 AceCode. Built for the engineers who refuse to be unprepared.
        </div>
      </footer>
    </main>
  )
}
