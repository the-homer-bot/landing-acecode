import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AceCode - AI Interview Prep for the New Era',
  description: 'Unlimited AI mock interviews for coding, system design, and behavioral. Built for the AI-aware interview formats companies are adopting in 2026.',
  openGraph: {
    title: 'AceCode - AI Interview Prep for the New Era',
    description: 'Unlimited AI mock interviews for coding, system design, and behavioral. Built for the AI-aware interview formats companies are adopting in 2026.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AceCode - AI Interview Prep for the New Era',
    description: 'Unlimited AI mock interviews for coding, system design, and behavioral. Built for the AI-aware interview formats companies are adopting in 2026.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Script
          defer
          data-website-id="dfid_ufDusyjOxq7Gdcm9pBFIK"
          data-domain="landing-acecode.vercel.app"
          src="https://datafa.st/js/script.js"
        />
      </body>
    </html>
  )
}
