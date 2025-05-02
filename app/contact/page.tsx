import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Newsletter from "@/components/newsletter"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-br from-maroon-800 to-maroon-900 py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-100">Contact Us</h1>
              <p className="text-amber-200/80">
                Have questions about our artworks or need assistance? We're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-amber-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-6 rounded-lg border border-amber-200/50 shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6">Get in Touch</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-maroon-700">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="border-amber-200/50 focus-visible:ring-maroon-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-maroon-700">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="border-amber-200/50 focus-visible:ring-maroon-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-maroon-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-amber-200/50 focus-visible:ring-maroon-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-maroon-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="border-amber-200/50 focus-visible:ring-maroon-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-maroon-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[120px] border-amber-200/50 focus-visible:ring-maroon-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-maroon-700 hover:bg-maroon-800 text-amber-50">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border border-amber-200/50 shadow-sm">
                  <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-maroon-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-maroon-900">Our Gallery</h3>
                        <p className="text-maroon-700">123 Art Street, Creative District</p>
                        <p className="text-maroon-700">New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-maroon-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-maroon-900">Email Us</h3>
                        <a href="mailto:info@artistry.com" className="text-maroon-700 hover:text-maroon-900">
                          info@artistry.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-maroon-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-maroon-900">Call Us</h3>
                        <a href="tel:+12125551234" className="text-maroon-700 hover:text-maroon-900">
                          +1 (212) 555-1234
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-maroon-900">WhatsApp</h3>
                        <a
                          href="https://wa.me/12125551234"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700"
                        >
                          +1 (212) 555-1234
                        </a>
                        <p className="text-sm text-maroon-600 mt-1">Fastest response time!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-amber-200/50 shadow-sm">
                  <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6">Gallery Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-maroon-700">Monday - Friday</span>
                      <span className="text-maroon-900 font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-maroon-700">Saturday</span>
                      <span className="text-maroon-900 font-medium">11:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-maroon-700">Sunday</span>
                      <span className="text-maroon-900 font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200/30">
                    <p className="text-maroon-700">
                      Private viewings available by appointment. Contact us to schedule.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-maroon-700 to-maroon-800 p-6 rounded-lg text-amber-100 shadow-sm">
                  <h3 className="font-medium text-amber-200 mb-3">Connect Directly</h3>
                  <p className="text-sm mb-4">
                    For the fastest response, connect with our art consultants directly via WhatsApp.
                  </p>
                  <Link
                    href="https://wa.me/12125551234?text=I'm interested in learning more about your art collection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6 text-center">Visit Our Gallery</h2>
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border-4 border-amber-100 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Map"
                alt="Gallery location map"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
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
                <div className="rounded-full bg-amber-200 w-8 h-8 flex items-center justify-center">
                  <span className="text-maroon-800 font-serif text-lg">A</span>
                </div>
                <span className="font-serif text-xl font-medium tracking-wide text-amber-100">Artistry</span>
              </Link>
              <p className="text-sm">
                Connecting art lovers with unique original paintings from talented artists around the world.
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
            <p className="text-sm">© {new Date().getFullYear()} Artistry. All rights reserved.</p>
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
