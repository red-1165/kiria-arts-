import Link from "next/link"
import SignUpForm from "@/components/auth/sign-up-form"

export default function SignUpPage() {
  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto grid gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-serif font-bold text-maroon-800">Create your account</h1>
          <p className="text-maroon-700">Join Kiria to save favorites and purchase artworks.</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-amber-200/50 shadow-sm mx-auto">
          <SignUpForm />
          <p className="text-sm text-maroon-700 mt-4">
            Already have an account?{" "}
            <Link className="underline underline-offset-2 hover:text-maroon-900" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
