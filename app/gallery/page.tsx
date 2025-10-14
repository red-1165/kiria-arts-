import Link from "next/link"
import Image from "next/image"
import { Filter, Heart, MessageCircle, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Newsletter from "@/components/newsletter"

export default function GalleryPage() {
  const artworks = [
    {
      id: 1,
      title: "Ganesha",
      price: 850,
      image: "/ganesha.png",
      category: "Keychain",
      medium: "Oil on Canvas",
      size: '24" x 36"',
      isSold: false,
      isNew: true,
      whatsapp: "+918951223940",
    },
    {
      id: 2,
      title: "Lakshmi",
      price: 1200,
      image: "/lakshmi.png",
      category: "Keychain",
      medium: "Acrylic on Canvas",
      size: '30" x 40"',
      isSold: false,
      isNew: false,
      whatsapp: "+918951223940",
    },
    {
      id: 3,
      title: "flower",
      price: 950,
      image: "/flowers.png?",
      category: "Abstract",
      medium: "Mixed Media",
      size: '24" x 24"',
      isSold: false,
      isNew: true,
      whatsapp: "+918951223940",
    },
    {
      id: 4,
      title: "rakhi gift",
      price: 1100,
      image: "/rakhi.png",
      category: "resin",
      medium: "Oil on Canvas",
      size: '36" x 48"',
      isSold: true,
      isNew: false,
      whatsapp: "+918951223940",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-br from-maroon-800 to-maroon-900 py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-100">Art Gallery</h1>
              <p className="text-amber-200/80">
                Explore our curated collection of original paintings from talented artists around the world.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-3 h-4 w-4 text-amber-100/50" />
                <Input
                  type="search"
                  placeholder="Search artworks, artists, styles..."
                  className="pl-10 bg-maroon-700/50 border-amber-200/20 text-amber-100 placeholder:text-amber-100/50 focus-visible:ring-amber-400"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-amber-50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 space-y-6">
                <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-maroon-800">Filters</h3>
                    <Button variant="ghost" className="h-8 px-2 text-maroon-700">
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-maroon-700 block mb-2">Category</label>
                      <div className="space-y-2">
                        {["Abstract", "Landscape", "Portrait", "Still Life", "Urban"].map((category) => (
                          <div key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`category-${category}`}
                              className="h-4 w-4 rounded border-amber-200 text-maroon-600 focus:ring-maroon-500"
                            />
                            <label htmlFor={`category-${category}`} className="ml-2 text-sm text-maroon-700">
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-maroon-700 block mb-2">Medium</label>
                      <div className="space-y-2">
                        {["Oil", "Acrylic", "Watercolor", "Mixed Media", "Digital"].map((medium) => (
                          <div key={medium} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`medium-${medium}`}
                              className="h-4 w-4 rounded border-amber-200 text-maroon-600 focus:ring-maroon-500"
                            />
                            <label htmlFor={`medium-${medium}`} className="ml-2 text-sm text-maroon-700">
                              {medium}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-maroon-700 block mb-2">Price Range</label>
                      <div className="pt-6 px-2">
                        <Slider defaultValue={[200, 1500]} min={100} max={2000} step={50} />
                        <div className="flex justify-between mt-2 text-sm text-maroon-700">
                          <span>Rs.100</span>
                          <span>Rs.2000+</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-maroon-700 block mb-2">Availability</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="available"
                            className="h-4 w-4 rounded border-amber-200 text-maroon-600 focus:ring-maroon-500"
                          />
                          <label htmlFor="available" className="ml-2 text-sm text-maroon-700">
                            Available
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="sold"
                            className="h-4 w-4 rounded border-amber-200 text-maroon-600 focus:ring-maroon-500"
                          />
                          <label htmlFor="sold" className="ml-2 text-sm text-maroon-700">
                            Sold
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-maroon-700 hover:bg-maroon-800 text-amber-50 gap-2">
                      <Filter className="h-4 w-4" />
                      Apply Filters
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-maroon-700 to-maroon-800 p-4 rounded-lg text-amber-100 shadow-sm">
                  <h3 className="font-medium text-amber-200 mb-3">Need Help?</h3>
                  <p className="text-sm mb-4">
                    Our art consultants are available to help you find the perfect piece for your space.
                  </p>
                  <Link
                    href="https://wa.me/1234567890?text=I need help finding artwork"
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

              <div className="md:w-3/4">
                <div className="bg-white p-4 rounded-lg border border-amber-200/50 shadow-sm mb-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <Tabs defaultValue="all" className="w-full sm:w-auto">
                      <TabsList className="bg-amber-100/50">
                        <TabsTrigger value="all">All Artworks</TabsTrigger>
                        <TabsTrigger value="new">New Arrivals</TabsTrigger>
                        <TabsTrigger value="featured">Featured</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <span className="text-sm text-maroon-700">Sort by:</span>
                      <Select defaultValue="newest">
                        <SelectTrigger className="w-full sm:w-[180px] border-amber-200/50 focus:ring-maroon-500">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="popular">Most Popular</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artworks.map((artwork) => (
                    <Card
                      key={artwork.id}
                      className="overflow-hidden border-amber-200/50 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="relative">
                        <Link href={`/artwork/${artwork.id}`}>
                          <div className="aspect-[4/5] relative overflow-hidden">
                            <Image
                              src={artwork.image || "/placeholder.svg"}
                              alt={artwork.title}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-maroon-600 hover:text-maroon-700 rounded-full"
                        >
                          <Heart className="h-5 w-5" />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                        {artwork.isNew && (
                          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-500 text-white">
                            New
                          </Badge>
                        )}
                        {artwork.isSold && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Badge className="bg-maroon-700 hover:bg-maroon-700 text-white text-lg py-1 px-3">
                              Sold
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link href={`/artwork/${artwork.id}`} className="hover:underline underline-offset-2">
                              <h3 className="font-medium text-maroon-900">{artwork.title}</h3>
                            </Link>
                           {artwork.artist ? (
                            <Link
                              href={`/artist/${artwork.artist.toLowerCase().replace(" ", "-")}`}
                              className="text-sm text-maroon-700 hover:text-maroon-900"
                            >
                              by {artwork.artist}
                            </Link>
                          ) : (
                            <span className="text-sm text-maroon-700">by Unknown Artist</span>
                          )}

                          </div>
                          <p className="font-medium text-maroon-900">${artwork.price}</p>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-amber-50 text-maroon-700 border-amber-200">
                            {artwork.category}
                          </Badge>
                          <Badge variant="outline" className="bg-amber-50 text-maroon-700 border-amber-200">
                            {artwork.medium}
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        {!artwork.isSold ? (
                          <>
                            <Button className="flex-1 bg-maroon-700 hover:bg-maroon-800 text-amber-50 gap-2">
                              <ShoppingCart className="h-4 w-4" />
                              Add to Cart
                            </Button>
                            <Link
                              href={`https://wa.me/${artwork.whatsapp}?text=I'm interested in the artwork "${artwork.title}"`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="outline"
                                size="icon"
                                className="border-amber-200/50 text-green-600 hover:text-green-700 hover:bg-green-50"
                              >
                                <MessageCircle className="h-5 w-5" />
                                <span className="sr-only">Contact via WhatsApp</span>
                              </Button>
                            </Link>
                          </>
                        ) : (
                          <Link
                            href={`https://wa.me/${artwork.whatsapp}?text=I'm interested in artworks similar to "${artwork.title}"`}
                            className="w-full"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                              <MessageCircle className="h-4 w-4" />
                              Inquire via WhatsApp
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 h-9 w-9 p-0"
                    >
                      &lt;
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-200/50 bg-maroon-700 text-white hover:bg-maroon-800 h-9 w-9 p-0"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 h-9 w-9 p-0"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 h-9 w-9 p-0"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 h-9 w-9 p-0"
                    >
                      &gt;
                    </Button>
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
