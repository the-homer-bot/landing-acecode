import { NextRequest, NextResponse } from 'next/server'

// This API forwards signups to the central jack-ops dashboard
// Signups will appear in the Ideas > Signups tab

const DASHBOARD_API = 'https://jack-ops.vercel.app/api/subscribers'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'landing' } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const projectSlug = process.env.PROJECT_SLUG || 'unknown'
    const ideaId = process.env.IDEA_ID || null

    // Forward to central dashboard API
    const response = await fetch(DASHBOARD_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.toLowerCase(),
        project_slug: projectSlug,
        idea_id: ideaId,
        source,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Dashboard API error:', error)
      // Still return success to user - we don't want to fail signups
      // if the dashboard is temporarily down
    }

    console.log('New subscriber:', { email, projectSlug, source })

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed!'
    })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
