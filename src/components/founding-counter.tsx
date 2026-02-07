'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const MAX_FOUNDING_MEMBERS = 100
const COUNT_API = 'https://jack-ops.vercel.app/api/subscribers/count?project_slug=acecode'

export function FoundingCounter({ className = '' }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(COUNT_API)
        if (res.ok) {
          const data = await res.json()
          setCount(data.count)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      }
    }
    
    fetchCount()
    // Refresh every 30 seconds
    const interval = setInterval(fetchCount, 30000)
    return () => clearInterval(interval)
  }, [])

  if (error || count === null) {
    // Show nothing while loading or on error
    return null
  }

  const spotsLeft = Math.max(0, MAX_FOUNDING_MEMBERS - count)
  const isFull = spotsLeft === 0
  const percentFilled = Math.min(100, (count / MAX_FOUNDING_MEMBERS) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex flex-col items-center gap-2 ${className}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <Users className="w-4 h-4 text-emerald-400" />
        {isFull ? (
          <span className="text-white/60">Founding member spots filled!</span>
        ) : (
          <span className="text-white/60">
            <span className="text-emerald-400 font-semibold">{spotsLeft}</span> of {MAX_FOUNDING_MEMBERS} founding member spots left
          </span>
        )}
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentFilled}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            percentFilled >= 90 ? 'bg-red-500' : 
            percentFilled >= 70 ? 'bg-amber-500' : 
            'bg-emerald-500'
          }`}
        />
      </div>
    </motion.div>
  )
}
