"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

export default function UserMenu() {
  const supabase = getSupabaseBrowserClient()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!mounted) return
      setEmail(user?.email ?? null)
      setLoading(false)
    }

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      load()
    })

    load()
    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [supabase])

  if (loading) {
    return (
      <Button variant="outline" className="hidden md:inline-flex border-amber-200/50 bg-transparent" disabled>
        ...
      </Button>
    )
  }

  if (!email) {
    return (
      <div className="hidden md:flex items-center gap-2">
        <Link href="/sign-in">
          <Button className="bg-maroon-700 hover:bg-maroon-800 text-amber-50">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline" className="border-amber-200/50 bg-transparent">
            Sign Up
          </Button>
        </Link>
      </div>
    )
  }

  async function onSignOut() {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <div className="hidden md:flex items-center gap-3">
      <span className="text-sm text-maroon-700">Hello, {email}</span>
      <Button variant="outline" className="border-amber-200/50 bg-transparent" onClick={onSignOut}>
        Sign out
      </Button>
    </div>
  )
}
