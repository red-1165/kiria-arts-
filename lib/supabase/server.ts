import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export function getSupabaseServerClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anon) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Add them to your env vars.")
  }
  // Server client (no cookie handling here). Use for server-side data ops that don't require user context.
  return createClient(url, anon, { auth: { persistSession: false } })
}
