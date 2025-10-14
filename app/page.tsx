import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ArtistSpotlight() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative">
        <div className="aspect-square max-w-md mx-auto relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Pavithra Selvaraj"
            fill
            className="object-cover rounded-full border-8 border-amber-200/30"
          />
        </div>
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex -space-x-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg"
            >
              <Image
                src={`/placeholder.svg?height=200&width=200&text=Artwork${i}`}
                alt={`Artwork ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {/* 🔹 Updated logo section here */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kiria-arts-logo.jpg"
            alt="Kiria Arts Logo"
            width={60}
            height={60}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-2xl font-semibold text-maroon-700">
            Kiria Arts
          </span>
        </Link>

        <div>
          <h3 className="text-2xl font-serif font-bold text-maroon-800">
            Pavithra Selvaraj
          </h3>
        </div>

        <p className="text-maroon-700">
          I’m an artist passionate about blending tradition and creativity through my work.
          I specialize in Thanjavur paintings, resin art, and canvas paintings, bringing vibrant colors and intricate details to life. 
          Each piece I create reflects a balance of cultural richness and modern aesthetics.
          I also design customized refrigerator magnets, adding a personal and artistic touch to everyday spaces. 
          Whether it’s a traditional Thanjavur masterpiece or a contemporary resin creation, my goal is to craft art that tells a story and leaves a lasting impression.
        </p>

        <blockquote className="border-l-4 border-amber-400 pl-4 italic text-maroon-700">
          "Art is my way of translating the invisible emotions we all experience into something tangible and shared."
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/artists/elena-alvarez">
            <Button className="bg-maroon-700 hover:bg-maroon-800 text-amber-50">
              View Artist Profile
            </Button>
          </Link>

          <Link
            href="https://wa.me/918951223940?text=I'm interested in Pavithra Selvaraj's artwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-amber-200/50 text-maroon-700 hover:bg-maroon-50 gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Connect via WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
