import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, MessageCircle, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Newsletter from "@/components/newsletter"

export default function ArtworkPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const artwork = {
    id: params.id,
    title: "Golden Sunset",
    artist: "Maria Rodriguez",
    price: 850,
    image: "/placeholder.svg?height=1200&width=1000",
    category: "Landscape",
    medium: "Oil on Canvas",
    size: '24" x 36"',
    year: 2023,
    description:
      "A stunning landscape capturing the golden hues of a sunset over rolling hills. This piece evokes a sense of peace and tranquility, with warm colors that bring comfort to any space.",
    artistBio:
      "Maria Rodriguez is a contemporary landscape artist known for her vibrant use of color and emotional depth. Her work has been featured in galleries across Europe and North America.",
    isSold: false,
    isNew: true,
    whatsapp: "+1234567890",
    additionalImages: [
      "/placeholder.svg?height=600&width=500&text=Detail1",
      "/placeholder.svg?height=600&width=500&text=Detail2",
      "/placeholder.svg?height=600&width=500&text=Detail3",
    ],
    relatedArtworks: [
      {
        id: 2,
        title: "Abstract Dreams",
        artist: "James Wilson",
        price: 1200,
        image: "/placeholder.svg?height=600&width=500",
        isSold: false,
      },
      {
        id: 3,
        title: "Crimson Memories",
        artist: "Elena Alvarez",
        price: 950,
        image: "/placeholder.svg?height=600&width=500",
        isSold: false,
      },
      {
        id: 4,
        title: "Autumn Whispers",
        artist: "David Chen",
        price: 1100,
        image: "/placeholder.svg?height=600&width=500",
        isSold: true,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <Link href="/gallery" className="inline-flex items-center text-maroon-700 hover:text-maroon-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-4 border-amber-100 shadow-lg">
                <Image src={artwork.image || "/placeholder.svg"} alt={artwork.title} fill className="object-cover" />
                {artwork.isNew && (
                  <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-500 text-white">New</Badge>
                )}
                {artwork.isSold && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Badge className="bg-maroon-700 hover:bg-maroon-700 text-white text-lg py-1 px-3">Sold</Badge>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {artwork.additionalImages.map((img, i) => (
                  <div key={i} className="aspect-square relative rounded-md overflow-hidden border-2 border-amber-100">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${artwork.title} detail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-maroon-800">{artwork.title}</h1>
                <Link
                  href={`/artist/${artwork.artist.toLowerCase().replace(" ", "-")}`}
                  className="text-maroon-700 hover:text-maroon-900"
                >
                  by {artwork.artist}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-amber-50 text-maroon-700 border-amber-200">
                  {artwork.category}
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-maroon-700 border-amber-200">
                  {artwork.medium}
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-maroon-700 border-amber-200">
                  {artwork.year}
                </Badge>
              </div>

              <div className="text-2xl font-medium text-maroon-900">${artwork.price}</div>

              <div className="space-y-4">
                <h3 className="font-medium text-maroon-800">Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-maroon-600">Size:</div>
                  <div className="text-maroon-900">{artwork.size}</div>
                  <div className="text-maroon-600">Medium:</div>
                  <div className="text-maroon-900">{artwork.medium}</div>
                  <div className="text-maroon-600">Year:</div>
                  <div className="text-maroon-900">{artwork.year}</div>
                  <div className="text-maroon-600">Availability:</div>
                  <div className="text-maroon-900">{artwork.isSold ? "Sold" : "Available"}</div>
                </div>
              </div>

              {!artwork.isSold ? (
                <div className="flex gap-3">
                  <Button className="flex-1 bg-maroon-700 hover:bg-maroon-800 text-amber-50 gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-amber-200/50 text-maroon-600 hover:text-maroon-700 hover:bg-maroon-50"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-amber-200/50 text-maroon-600 hover:text-maroon-700 hover:bg-maroon-50"
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              ) : (
                <Link
                  href={`https://wa.me/${artwork.whatsapp}?text=I'm interested in artworks similar to "${artwork.title}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Inquire via WhatsApp
                  </Button>
                </Link>
              )}

              <Link
                href={`https://wa.me/${artwork.whatsapp}?text=I have a question about "${artwork.title}"`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Contact the artist directly via WhatsApp</span>
              </Link>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="bg-amber-100/50 w-full">
                  <TabsTrigger value="description" className="flex-1">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="artist" className="flex-1">
                    About the Artist
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="flex-1">
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="text-maroon-700">{artwork.description}</p>
                </TabsContent>
                <TabsContent value="artist" className="pt-4">
                  <p className="text-maroon-700">{artwork.artistBio}</p>
                  <Link
                    href={`/artist/${artwork.artist.toLowerCase().replace(" ", "-")}`}
                    className="inline-block mt-4 text-maroon-600 hover:text-maroon-800 underline underline-offset-2"
                  >
                    View all works by this artist
                  </Link>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4">
                  <p className="text-maroon-700">
                    We offer worldwide shipping on all artworks. Shipping costs are calculated at checkout based on your
                    location. All artwork is carefully packaged to ensure safe delivery. For larger pieces, we may use
                    specialized art shipping services.
                  </p>
                  <p className="text-maroon-700 mt-2">
                    Delivery typically takes 5-10 business days for domestic orders and 10-15 business days for
                    international orders.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artwork.relatedArtworks.map((related) => (
                <Link key={related.id} href={`/artwork/${related.id}`} className="group">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-2 border-amber-100 shadow-md">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {related.isSold && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Badge className="bg-maroon-700 hover:bg-maroon-700 text-white">Sold</Badge>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium text-maroon-900">{related.title}</h3>
                    <p className="text-sm text-maroon-700">by {related.artist}</p>
                    <p className="font-medium text-maroon-900 mt-1">${related.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

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
