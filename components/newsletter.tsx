import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-br from-maroon-800 to-maroon-900">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-amber-200">Stay Inspired</h2>
          <p className="text-amber-100/80">
            Subscribe to our newsletter to receive updates on new artworks, artist features, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-maroon-700/50 border-amber-200/20 text-amber-100 placeholder:text-amber-100/50 focus-visible:ring-amber-400"
              required
            />
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-maroon-900 font-medium">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-amber-100/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
