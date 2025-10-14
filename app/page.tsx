import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeaturedArtworks from "@/components/featured-artworks"
import ArtistSpotlight from "@/components/artist-spotlight"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden w-8 h-8 flex items-center justify-center">
              <Image
                src="/kiria-arts-logo.jpg"
                alt="Kiria Arts Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl font-medium tracking-wide text-maroon-700">Kiria</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-sm font-medium text-maroon-700 hover:text-maroon-900">
              Home
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-maroon-700 hover:text-maroon-900">
              Gallery
            </Link>
            <Link href="/artists" className="text-sm font-medium text-maroon-700 hover:text-maroon-900">
              Artist
            </Link>
            <Link href="/about" className="text-sm font-medium text-maroon-700 hover:text-maroon-900">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-maroon-700 hover:text-maroon-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search artwork..."
                className="pl-8 bg-background border-amber-200/50 focus-visible:ring-maroon-500"
              />
            </form>
            <Link href="/cart">
              <Button
                variant="outline"
                className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 hover:text-maroon-900"
              >
                Cart (0)
              </Button>
            </Link>
            <Button className="hidden md:flex bg-maroon-700 hover:bg-maroon-800 text-amber-50">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background texture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-amber-100">
                Discover Unique <span className="text-amber-300">Kiria</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-200/90 max-w-md mx-auto md:mx-0">
                Explore our curated collection of original paintings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-maroon-900 font-medium">
                  Explore Gallery
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-300/30 text-amber-100 hover:bg-maroon-700/50"
                >
                  Meet Our Artists
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200/20 transform rotate-3">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Featured artwork"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-100 p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-maroon-100 w-10 h-10 flex items-center justify-center shrink-0">
                    <span className="text-maroon-700 font-serif text-sm">PS</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-maroon-900">"Autumn Whispers"</h3>
                    <p className="text-sm text-maroon-700">by Pavithra Selvaraj</p>
                    <p className="text-sm font-medium text-maroon-900 mt-1">Rs.1,250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-maroon-800">Featured Artworks</h2>
              <Link
                href="/gallery"
                className="group flex items-center text-maroon-700 hover:text-maroon-900 mt-4 md:mt-0"
              >
                View all artworks
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <FeaturedArtworks />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-maroon-50 to-amber-50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-10 text-center">Artist Spotlight</h2>
            <ArtistSpotlight />
          </div>
        </section>

        <section className="py-16 bg-maroon-900 text-amber-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold text-amber-200">Connect Directly With Artists</h2>
              <p className="text-lg text-amber-100/80">
                Have questions about an artwork? Want to commission a custom piece? Connect directly with our artists
                via WhatsApp for a personalized experience.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <MessageCircle className="h-5 w-5" />
                Connect on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-100">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-4">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-maroon-700 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-maroon-900 text-lg">Browse Our Collection</h3>
                      <p className="text-maroon-700">
                        Explore our curated gallery of original artworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-maroon-700 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-maroon-900 text-lg">Purchase Securely</h3>
                      <p className="text-maroon-700">Buy with confidence using our secure payment processing system.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-maroon-700 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-maroon-900 text-lg">Connect With Artists</h3>
                      <p className="text-maroon-700">
                        Message artists directly via WhatsApp for inquiries or custom commissions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-maroon-700 text-amber-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium text-maroon-900 text-lg">Enjoy Your Artwork</h3>
                      <p className="text-maroon-700">Receive your carefully packaged artwork and display it proudly.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-8 border-white">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="Art in home setting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="text-amber-500">★★★★★</div>
                    <p className="text-sm text-maroon-700">"Absolutely love my new painting!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <footer className="bg-maroon-900 text-amber-100/80 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/kiria-arts-logo.jpg"
                    alt="Kiria Arts Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="font-serif text-xl font-medium tracking-wide text-maroon-700">Kiria</span>
              </Link>
              <p className="text-sm">
                Connecting art lovers with unique original paintings.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-amber-200 mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/gallery" className="hover:text-amber-200">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/artists" className="hover:text-amber-200">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-amber-200">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/commissions" className="hover:text-amber-200">
                    Commissions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-amber-200 mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-amber-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-amber-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-amber-200">
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-amber-200 mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <Link href="#" className="text-amber-100/80 hover:text-amber-200">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-amber-100/80 hover:text-amber-200">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-amber-100/80 hover:text-amber-200">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-amber-100/80 hover:text-amber-200">
                  <span className="sr-only">Pinterest</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="12" x2="12" y1="8" y2="16"></line>
                    <line x1="8" x2="16" y1="12" y2="12"></line>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </Link>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Support
                </Button>
                <p className="text-xs">Available Mon-Fri, 9am-5pm</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-100/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Kiria. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm hover:text-amber-200">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm hover:text-amber-200">
                Privacy
              </Link>
              <Link href="/cookies" className="text-sm hover:text-amber-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

