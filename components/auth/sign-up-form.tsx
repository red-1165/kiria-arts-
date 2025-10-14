"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

export default function SignUpForm() {
  const supabase = getSupabaseBrowserClient()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: typeof window !== "undefined" ? `${window.location.origin}/` : undefined,
      },
    })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    if (data.user && !data.session) {
      // Email confirmations enabled: prompt the user to verify email then sign in
      router.push("/sign-in?verify=1")
    } else {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-maroon-700">
          Name
        </label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border-amber-200/50 focus-visible:ring-maroon-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-maroon-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="border-amber-200/50 focus-visible:ring-maroon-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-maroon-700">
          Password
        </label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="border-amber-200/50 focus-visible:ring-maroon-500"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" disabled={loading} className="w-full bg-maroon-700 hover:bg-maroon-800 text-amber-50">
        {loading ? "Creating..." : "Create account"}
      </Button>
    </form>
  )
}
