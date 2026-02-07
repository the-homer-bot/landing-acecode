'use client'

import { motion } from 'framer-motion'
import { EmailForm } from '@/components/email-form'
import { Code2, Brain, MessageSquare, DollarSign, Zap, Target, ArrowRight, Sparkles, FileText, Building2, HelpCircle, CheckCircle2 } from 'lucide-react'

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
            From someone who just went through it
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            I just landed a job.
            <br />
            <span className="gradient-text">Here&apos;s what actually worked.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            The interview process has completely changed. Companies don&apos;t just test if you can code anymore — 
            they test if you can <span className="text-white">think architecturally</span>, <span className="text-white">use AI effectively</span>, 
            and <span className="text-white">demonstrate product sense</span>.
            <br /><br />
            I built AceCode to help you prep for interviews as they actually are in 2026.
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

      {/* What Changed Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What actually changed?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Companies know everyone uses AI now. So they&apos;re testing differently.
            </p>
          </motion.div>

          {/* Change cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                old: "LeetCode algorithm grind",
                new: "System design and architecture focus",
                desc: "My technical interview wasn't a LeetCode problem. It was a deep-dive into how I'd architect a system. That's where the bar is now."
              },
              { 
                old: "Memorize coding patterns",
                new: "Code in Google Docs (no IDE)",
                desc: "Some companies test coding without any autocomplete or IDE features. They want to see you think, not copy-paste from Copilot."
              },
              { 
                old: "Prove you can code",
                new: "Prove you can use AI effectively",
                desc: "The question isn't 'can you code?' anymore. It's 'can you leverage AI tools while still thinking critically?'"
              },
              { 
                old: "Generic behavioral answers",
                new: "Product sense and critical thinking",
                desc: "They're testing if you can reason about products, make tradeoffs, and think beyond just the code."
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-red-400/80 line-through">{item.old}</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                  <span className="text-sm text-emerald-400 font-medium">{item.new}</span>
                </div>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Did Differently Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What I did differently (and it worked)
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              I didn&apos;t just grind LeetCode. I used AI strategically throughout my entire job search.
            </p>
          </motion.div>

          {/* Strategy cards */}
          <div className="space-y-6">
            {[
              { 
                icon: FileText,
                title: "Tailored my resume for each job", 
                desc: "I didn't send the same resume everywhere. I fed the job description to AI and got specific suggestions for how to position my experience for that exact role."
              },
              { 
                icon: Building2,
                title: "Deep-dived every company before interviews", 
                desc: "AI helped me understand each company's tech stack, recent news, challenges, and culture. I walked in knowing things most candidates didn't."
              },
              { 
                icon: HelpCircle,
                title: "Prepared smart questions to ask", 
                desc: "Instead of generic questions, I had specific, thoughtful questions that showed I'd done my homework. Interviewers noticed."
              },
              { 
                icon: Brain,
                title: "Practiced the NEW interview formats", 
                desc: "System design with real feedback. Behavioral with follow-up questions. Not just coding puzzles — the actual formats companies use now."
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
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What AceCode Does Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AceCode gives you the same playbook
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything I did manually, packaged into one platform. For $12/month.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                icon: Brain,
                title: "System Design Practice", 
                desc: "AI-powered mock interviews focused on architecture. Get real feedback on tradeoffs, scalability, and communication.",
                tag: "Most important"
              },
              { 
                icon: Code2,
                title: "Coding Without Crutches", 
                desc: "Practice in 'Google Docs mode' — no IDE, no autocomplete. Learn to code and think at the same time.",
                tag: "New in 2026"
              },
              { 
                icon: FileText,
                title: "Resume Tailoring", 
                desc: "Paste any job description. Get specific suggestions to position your experience for that exact role.",
                tag: "Coming soon"
              },
              { 
                icon: Building2,
                title: "Company Research", 
                desc: "Get a briefing on any company: tech stack, culture, recent news, and what to expect in their interviews.",
                tag: "Coming soon"
              },
              { 
                icon: MessageSquare,
                title: "Behavioral Practice", 
                desc: "Unlimited behavioral mock interviews with real follow-up questions. Track your weaknesses and improve.",
                tag: "Live now"
              },
              { 
                icon: HelpCircle,
                title: "Smart Question Generator", 
                desc: "Generate thoughtful questions to ask interviewers based on the role and company. Stand out from other candidates.",
                tag: "Coming soon"
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
                <div className="flex items-start justify-between mb-4">
                  <item.icon className="w-8 h-8 text-emerald-400/80" />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.tag === 'Most important' ? 'bg-emerald-500/20 text-emerald-400' :
                    item.tag === 'New in 2026' ? 'bg-amber-500/20 text-amber-400' :
                    item.tag === 'Live now' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-white/10 text-white/50'
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Different Section */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why this is different
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { 
                title: "Built by someone who just did this", 
                desc: "I'm not a company that surveyed engineers. I just went through 5 interview processes and figured out what actually matters."
              },
              { 
                title: "Prep for 2026, not 2020", 
                desc: "Most platforms haven't updated for AI-era interviews. We focus on what companies actually test now."
              },
              { 
                title: "The whole game, not just practice", 
                desc: "Resume tailoring, company research, smart questions — not just mock interviews. Win the entire job search."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop overpaying for outdated prep
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 overflow-hidden"
          >
            <div className="grid grid-cols-5 bg-white/5 p-4 text-sm font-medium text-white/60">
              <div></div>
              <div className="text-center">Coding</div>
              <div className="text-center">System Design</div>
              <div className="text-center">Behavioral</div>
              <div className="text-center">Job Search Tools</div>
            </div>
            {[
              { name: "LeetCode", price: "$35/mo", coding: true, system: false, behavioral: false, tools: false },
              { name: "Educative", price: "$50/mo", coding: true, system: true, behavioral: false, tools: false },
              { name: "Exponent", price: "$99/mo", coding: false, system: true, behavioral: true, tools: false },
              { name: "Human Mocks", price: "$150/ea", coding: true, system: true, behavioral: true, tools: false },
              { name: "AceCode", price: "$12/mo", coding: true, system: true, behavioral: true, tools: true, highlight: true },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`grid grid-cols-5 p-4 text-sm border-t border-white/5 ${item.highlight ? 'bg-emerald-500/10' : ''}`}
              >
                <div className={`font-medium ${item.highlight ? 'text-emerald-400' : 'text-white'}`}>
                  {item.name}
                  <span className="block text-xs text-white/40">{item.price}</span>
                </div>
                <div className="text-center">{item.coding ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-white/20">—</span>}</div>
                <div className="text-center">{item.system ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-white/20">—</span>}</div>
                <div className="text-center">{item.behavioral ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-white/20">—</span>}</div>
                <div className="text-center">{item.tools ? <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-white/20">—</span>}</div>
              </div>
            ))}
          </motion.div>
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
              Ready to prep for how interviews actually work?
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
          © 2026 AceCode. Built by someone who just went through it.
        </div>
      </footer>
    </main>
  )
}
