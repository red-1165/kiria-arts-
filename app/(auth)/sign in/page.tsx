import Link from "next/link"
import SignInForm from "@/components/auth/sign-in-form"

export default function SignInPage() {
  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto grid gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-serif font-bold text-maroon-800">Sign in</h1>
          <p className="text-maroon-700">Access your account to track orders and manage favorites.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-amber-200/50 shadow-sm mx-auto">
          <SignInForm />
          <p className="text-sm text-maroon-700 mt-4">
            New here?{" "}
            <Link className="underline underline-offset-2 hover:text-maroon-900" href="/sign-up">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
