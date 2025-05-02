import Link from "next/link"
import Image from "next/image"
import { Heart, MessageCircle, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedArtworks() {
  const artworks = [
    {
      id: 1,
      title: "Golden Sunset",
      artist: "Maria Rodriguez",
      price: 850,
      image: "/placeholder.svg?height=600&width=500",
      isSold: false,
      isNew: true,
      whatsapp: "+1234567890",
    },
    {
      id: 2,
      title: "Abstract Dreams",
      artist: "James Wilson",
      price: 1200,
      image: "/placeholder.svg?height=600&width=500",
      isSold: false,
      isNew: false,
      whatsapp: "+1234567890",
    },
    {
      id: 3,
      title: "Crimson Memories",
      artist: "Elena Alvarez",
      price: 950,
      image: "/placeholder.svg?height=600&width=500",
      isSold: false,
      isNew: true,
      whatsapp: "+1234567890",
    },
    {
      id: 4,
      title: "Autumn Whispers",
      artist: "David Chen",
      price: 1100,
      image: "/placeholder.svg?height=600&width=500",
      isSold: true,
      isNew: false,
      whatsapp: "+1234567890",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-500 text-white">New</Badge>
            )}
            {artwork.isSold && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Badge className="bg-maroon-700 hover:bg-maroon-700 text-white text-lg py-1 px-3">Sold</Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <Link href={`/artwork/${artwork.id}`} className="hover:underline underline-offset-2">
              <h3 className="font-medium text-maroon-900">{artwork.title}</h3>
            </Link>
            <Link
              href={`/artist/${artwork.artist.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-maroon-700 hover:text-maroon-900"
            >
              by {artwork.artist}
            </Link>
            <p className="font-medium text-maroon-900 mt-2">${artwork.price}</p>
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
  )
}
