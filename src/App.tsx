import React, { useState, useMemo, useCallback } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Filter,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ChevronLeft,
  Star,
  ChevronDown,
  ChevronUp,
  ZoomIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { artworks, artists, reviews, faqs, Artwork, Artist, Review, FAQ } from './data';
import kiriaLogo from './assets/image.png';
import pavithra from './assets/pavitra.jpeg';
import kala from './assets/kala.jpeg';
import kiriaImg from './assets/kiria.jpeg';

// --- Types ---
interface CartItem extends Artwork {
  quantity: number;
}

// --- Components ---

const ImageZoomModal = ({ image, title, onClose }: { image: string; title: string; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative max-w-4xl max-h-[90vh] w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <p className="text-white text-center mt-4 font-serif text-lg">{title}</p>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white text-neutral-800 rounded-full p-1.5 shadow-lg hover:bg-brand-red hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ 
  currentPage, 
  setCurrentPage, 
  cartCount,
  searchQuery,
  setSearchQuery
}: { 
  currentPage: string, 
  setCurrentPage: (p: string) => void, 
  cartCount: number,
  searchQuery: string,
  setSearchQuery: (q: string) => void
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Classes', id: 'classes' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setCurrentPage('home')}
          >
            <img 
              src={kiriaLogo} 
              alt="Kiria Arts Logo" 
              className="w-12 h-12 object-contain mr-2 group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-serif font-bold text-brand-red">Kiria</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  currentPage === item.id ? 'text-brand-red border-b-2 border-brand-red' : 'text-neutral-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search artwork..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentPage !== 'gallery') setCurrentPage('gallery');
                }}
                className="bg-white border border-neutral-200 rounded-md py-1.5 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red w-48 lg:w-64"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            </div>
            <button 
              onClick={() => setCurrentPage('cart')}
              className={`flex items-center transition-colors hover:text-brand-red ${currentPage === 'cart' ? 'text-brand-red' : 'text-neutral-600'}`}
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">Cart ({cartCount})</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={() => setCurrentPage('cart')}
              className={`relative ${currentPage === 'cart' ? 'text-brand-red' : 'text-neutral-600'}`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-red/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium ${
                    currentPage === item.id ? 'text-brand-red bg-brand-red/5' : 'text-neutral-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  return (
    <footer className="bg-brand-red text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img 
                src={kiriaLogo} 
                alt="Kiria Arts Logo" 
                className="w-10 h-10 object-contain mr-2"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-serif font-bold">Kiria</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Curating exceptional original paintings and crafts to transform your spaces and inspire your soul.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kiria.arts?igsh=MWxjNTF0NzI0aHgwdg==" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors" title="Follow us on Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/kiriaarts.info?mibextid=JRoKGi" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors" title="Follow us on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918951223940" target="_blank" rel="noreferrer" className="hover:text-white/50 transition-colors" title="Chat on WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white/50 transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><button onClick={() => setCurrentPage('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => setCurrentPage('classes')} className="hover:text-white transition-colors">Classes</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Reviews</button></li>
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                <span>Kiria Arts, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <span>+91 89512 23940</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                <a href="mailto:kiriaarts.info@gmail.com" className="hover:text-white transition-colors">kiriaarts.info@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">Subscribe to receive updates on new collections and exhibitions.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:bg-white/20"
              />
              <button className="bg-white text-brand-red px-4 py-2 rounded-r-md text-sm font-bold hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Kiria Arts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const ArtworkCard: React.FC<{ 
  artwork: Artwork, 
  onAddToCart: (a: Artwork) => void,
  onUpdateQuantity: (id: string, qty: number) => void,
  onRemove: (id: string) => void,
  quantity: number,
  onClick?: () => void
}> = ({ artwork, onAddToCart, onUpdateQuantity, onRemove, quantity, onClick }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <>
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card group cursor-pointer"
        onClick={onClick}
      >
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={artwork.image} 
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Zoom overlay on hover */}
          <div 
            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ZoomIn className="w-5 h-5 text-brand-red" />
            </div>
          </div>
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {artwork.isNew && (
              <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New</span>
            )}
            {artwork.isSold && (
              <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Sold</span>
            )}
          </div>
          <button 
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-neutral-400 hover:text-brand-red transition-colors z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg font-bold text-neutral-800 mb-1">{artwork.title}</h3>
          <p className="text-xs text-neutral-500 mb-2">by {artwork.artist}</p>
          {/* Description */}
          {artwork.description && (
            <div className="mb-3">
              <p className={`text-xs text-neutral-600 leading-relaxed ${!showFullDesc ? 'line-clamp-3' : ''}`}>
                {artwork.description}
              </p>
              {artwork.description.length > 120 && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowFullDesc(!showFullDesc); }}
                  className="text-[10px] font-bold text-brand-red mt-1 hover:underline"
                >
                  {showFullDesc ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-brand-red">₹{artwork.price}</span>
            <div className="flex space-x-2 items-center">
              {!artwork.isSold ? (
                quantity > 0 ? (
                  /* Quantity controls */
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); onRemove(artwork.id); }}
                      className="p-1.5 text-neutral-400 hover:text-brand-red hover:bg-red-50 rounded transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center bg-neutral-100 rounded-lg overflow-hidden">
                      <button
                        onClick={(e) => { e.stopPropagation(); onUpdateQuantity(artwork.id, quantity - 1); }}
                        className="px-2 py-1.5 hover:bg-neutral-200 transition-colors text-neutral-600"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 text-xs font-bold text-neutral-800 min-w-[28px] text-center">{quantity}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); onUpdateQuantity(artwork.id, quantity + 1); }}
                        className="px-2 py-1.5 hover:bg-neutral-200 transition-colors text-neutral-600"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(artwork); }}
                    className="p-2 bg-brand-red text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center text-xs font-bold"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                    Add to Cart
                  </button>
                )
              ) : (
                <a 
                  href={`https://wa.me/918951223940?text=${encodeURIComponent(`I am interested in the sold piece: *${artwork.title}* by ${artwork.artist}. Is a similar commission possible?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-brand-green text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center text-xs font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  Inquire
                </a>
              )}
              <a 
                href={`https://wa.me/918951223940?text=${encodeURIComponent(`Hi, I have a question about *${artwork.title}* by ${artwork.artist}.`)}`}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-green" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <ImageZoomModal
            image={artwork.image}
            title={artwork.title}
            onClose={() => setIsZoomed(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Pages ---

const REVIEWS_PER_PAGE = 4;

const ReviewsSection = () => {
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const visibleReviews = reviews.slice(
    currentPage * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  return (
    <section className="bg-brand-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-red mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
              ))}
            </div>
            <span className="font-bold text-neutral-800">4.9</span>
            <span className="text-neutral-500">rating on</span>
            <span className="font-bold text-neutral-700">Google Reviews</span>
          </div>
          <p className="text-neutral-500">Real reviews from our happy customers on Google.</p>
        </div>

        {/* Reviews carousel with arrows */}
        <div className="flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 hover:shadow-lg"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Two-column review grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visibleReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm flex flex-col"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-orange-400 fill-orange-400' : 'text-neutral-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-neutral-600 italic mb-6 flex-grow text-sm leading-relaxed">
                      "{review.comment}"
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50">
                      <span className="font-bold text-neutral-800 text-sm">{review.name}</span>
                      <span className="text-neutral-400 text-xs">{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 hover:shadow-lg"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'bg-brand-red w-7'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-red mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-500">Everything you need to know about our gallery and ordering process.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
              >
                <span className="font-bold text-neutral-800">{faq.question}</span>
                {openId === faq.id ? <ChevronUp className="w-5 h-5 text-brand-red" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-neutral-600 border-t border-neutral-100 bg-neutral-50/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = ({ setCurrentPage, onAddToCart, onUpdateQuantity, onRemove, cart }: { 
  setCurrentPage: (p: string) => void, 
  onAddToCart: (a: Artwork) => void,
  onUpdateQuantity: (id: string, qty: number) => void,
  onRemove: (id: string) => void,
  cart: CartItem[]
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-red leading-tight mb-6">
              Kiria Arts <br />
              <span className="text-brand-olive italic text-4xl md:text-5xl font-light">Original paintings.</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Discover a curated collection of traditional and contemporary masterpieces. 
              Each piece tells a story of heritage, emotion, and artistic excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setCurrentPage('gallery')} className="btn-primary px-8 py-3 text-lg flex items-center">
                Explore Gallery <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-red mb-2">Featured Artworks</h2>
            <p className="text-neutral-500">Handpicked masterpieces from our latest collection.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('gallery')}
            className="text-brand-red font-bold flex items-center hover:underline"
          >
            View all artworks <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.slice(0, 4).map(artwork => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
              quantity={cart.find(item => item.id === artwork.id)?.quantity || 0}
              onClick={() => setCurrentPage(`product_${artwork.id}`)}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-brand-red/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=1000&auto=format&fit=crop" 
                  alt="Gallery Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-cream border-8 border-white rounded-2xl shadow-xl overflow-hidden hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop" 
                  alt="Art Detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-brand-red">Curating Beauty, <br />Connecting Hearts</h2>
              <p className="text-neutral-600 leading-relaxed">
                Kiria Arts was born from a passion for discovering and showcasing exceptional talent. 
                We believe art has the power to transform spaces and inspire souls. 
                Since our founding, we have been dedicated to nurturing a community of artists and collectors.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-brand-red">500+</h4>
                  <p className="text-sm text-neutral-500">Artworks Sold</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif font-bold text-brand-red">50+</h4>
                  <p className="text-sm text-neutral-500">Talented Artists</p>
                </div>
              </div>
              <button onClick={() => setCurrentPage('about')} className="btn-primary">Learn Our Story</button>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection />
    </div>
  );
};

const GalleryPage = ({ onAddToCart, onUpdateQuantity, onRemove, cart, searchQuery, setCurrentPage }: { 
  onAddToCart: (a: Artwork) => void,
  onUpdateQuantity: (id: string, qty: number) => void,
  onRemove: (id: string) => void,
  cart: CartItem[],
  searchQuery: string,
  setCurrentPage: (p: string) => void
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedMedium, setSelectedMedium] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['Abstract', 'Landscape', 'Portrait', 'Still Life', 'Urban', 'Crafts', 'Traditional'];
  const mediums = ['Oil', 'Acrylic', 'Watercolor', 'Mixed Media', 'Digital', 'Clay', 'Tanjore Painting'];

  const filteredArtworks = useMemo(() => {
    return artworks.filter(art => {
      const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(art.category);
      const mediumMatch = selectedMedium.length === 0 || selectedMedium.includes(art.medium);
      const searchMatch = searchQuery === '' || 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && mediumMatch && searchMatch;
    });
  }, [selectedCategory, selectedMedium, searchQuery]);

  const toggleFilter = (list: string[], setList: (l: string[]) => void, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-brand-red mb-4">
          {searchQuery ? `Search: "${searchQuery}"` : 'Art Gallery'}
        </h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          {searchQuery 
            ? `Showing results for your search. Found ${filteredArtworks.length} masterpieces.`
            : 'Explore our curated collection of original paintings and crafts, each piece selected for its unique voice and artistic integrity.'
          }
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-neutral-800 flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </h3>
              <button 
                onClick={() => { setSelectedCategory([]); setSelectedMedium([]); }}
                className="text-xs text-brand-red hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-neutral-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center text-sm text-neutral-600 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedCategory.includes(cat)}
                        onChange={() => toggleFilter(selectedCategory, setSelectedCategory, cat)}
                        className="rounded border-neutral-300 text-brand-red focus:ring-brand-red mr-2" 
                      />
                      <span className="group-hover:text-brand-red transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-700 mb-3">Medium</h4>
                <div className="space-y-2">
                  {mediums.map(med => (
                    <label key={med} className="flex items-center text-sm text-neutral-600 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedMedium.includes(med)}
                        onChange={() => toggleFilter(selectedMedium, setSelectedMedium, med)}
                        className="rounded border-neutral-300 text-brand-red focus:ring-brand-red mr-2" 
                      />
                      <span className="group-hover:text-brand-red transition-colors">{med}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-neutral-700 mb-3">Price Range</h4>
                <div className="px-2">
                  <input type="range" className="w-full accent-brand-red" min="100" max="5000" />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>₹100</span>
                    <span>₹50000+</span>
                  </div>
                </div>
              </div>

              <button className="w-full btn-primary py-2 text-sm">Apply Filters</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-neutral-500">Showing <span className="font-bold text-neutral-800">{filteredArtworks.length}</span> artworks</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-neutral-500">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-neutral-200 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArtworks.map(artwork => (
                <ArtworkCard 
                  key={artwork.id} 
                  artwork={artwork} 
                  onAddToCart={onAddToCart}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                  quantity={cart.find(item => item.id === artwork.id)?.quantity || 0}
                  onClick={() => setCurrentPage(`product_${artwork.id}`)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 italic">No artworks found matching your filters.</p>
              <button 
                onClick={() => { setSelectedCategory([]); setSelectedMedium([]); }}
                className="text-brand-red font-bold mt-4 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const artClasses = [
  {
    id: '1',
    title: 'Tanjore Painting Workshop',
    description: 'Learn the ancient art of Tanjore painting with 22-carat gold foil work, semi-precious stones, and vibrant colors. Master traditional techniques passed down through generations of skilled artisans.',
    duration: '8 Weeks',
    sessions: '16 Sessions (2 per week)',
    level: 'Beginner to Intermediate',
    price: 12000,
    highlights: ['22-carat gold foil technique', 'Stone and bead embellishment', 'Traditional color mixing', 'Complete painting to take home'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: '2',
    title: 'Resin Art Masterclass',
    description: 'Explore the mesmerizing world of resin art — from ocean-inspired pieces to floral preservation and abstract creations. Learn to create stunning functional art and keepsakes.',
    duration: '4 Weeks',
    sessions: '8 Sessions (2 per week)',
    level: 'All Levels',
    price: 6000,
    highlights: ['Resin mixing & pouring techniques', 'Flower & varmala preservation', 'Keychain & coaster making', 'All materials provided'],
    image: 'https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=600&auto=format&fit=crop',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: '3',
    title: 'Mysore Painting Workshop',
    description: 'Discover the elegant Mysore style of painting — known for its muted colors, fine brushwork, and graceful depictions of Hindu gods and goddesses. A royal art tradition from Karnataka.',
    duration: '6 Weeks',
    sessions: '12 Sessions (2 per week)',
    level: 'Beginner to Advanced',
    price: 10000,
    highlights: ['Gesso work preparation', 'Gold leaf application', 'Fine brush detailing', 'Traditional iconography'],
    image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=600&auto=format&fit=crop',
    color: 'from-emerald-500 to-teal-600'
  }
];

const ClassesPage = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-brand-red text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Art Classes & Workshops</h1>
        <p className="text-white/70 italic text-xl max-w-2xl mx-auto">Learn from experienced artists. Unlock your creative potential with our hands-on workshops.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artClasses.map((cls) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Number(cls.id) * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} opacity-60`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-bold px-3 py-1 rounded-full">{cls.level}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-brand-red mb-3">{cls.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{cls.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm text-neutral-500">
                    <span className="font-bold text-neutral-700 w-24">Duration:</span>
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-500">
                    <span className="font-bold text-neutral-700 w-24">Sessions:</span>
                    <span>{cls.sessions}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-neutral-700 mb-2 uppercase tracking-wider">What you'll learn</p>
                  <ul className="space-y-1.5">
                    {cls.highlights.map((h, i) => (
                      <li key={i} className="flex items-center text-xs text-neutral-600">
                        <ChevronRight className="w-3 h-3 text-brand-red mr-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto pt-5 border-t border-neutral-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-brand-red">₹{cls.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-neutral-400 ml-1">/ course</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/918951223940?text=${encodeURIComponent(`Hi! I am interested in enrolling for the *${cls.title}* (₹${cls.price.toLocaleString('en-IN')}). Please share the details regarding upcoming batches, schedule, and enrollment process. Thank you!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-brand-red text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center hover:bg-opacity-90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enroll via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-brand-cream rounded-3xl p-12">
          <h3 className="text-3xl font-serif font-bold text-brand-red mb-4">Not sure which class is right for you?</h3>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">Send us a message and we'll help you choose the perfect workshop based on your interests and skill level.</p>
          <a
            href={`https://wa.me/918951223940?text=${encodeURIComponent('Hi! I am interested in your art classes. Can you help me choose the right workshop for me?')}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with Us
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-brand-red text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Kiria Arts</h1>
        <p className="text-white/70 italic text-xl">Where Passion Meets Creativity.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 space-y-24">
          {/* Company Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-brand-red">Our Story</h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Welcome to Kiria Arts, where passion meets creativity. Founded by Kalavathi G, we offer a curated collection of handcrafted wonders, from personalized artworks to bespoke jewelry. Each creation is a testament to the limitless possibilities of imagination and craftsmanship.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg">
                We are specialized in Tanjavur Paintings, Canvas Painting, Resin Art, customized return gifts and customized Refrigerator Magnets.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img 
                src={kiriaImg} 
                alt="Kiria Arts Gallery"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-cream p-10 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-red">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                At Kiria Arts, our vision is to cultivate a world where creativity flourishes, art binds us, and handmade treasures bring boundless joy. With unwavering dedication to the artistry and a passion for innovation, we honor tradition while embracing the contemporary, guiding individuals on a transformative voyage of exploration and limitless inspiration. As we paint a tapestry of beauty, where every stroke tells a tale and the spirit of creation knows no bounds.
              </p>
            </div>
            <div className="bg-brand-cream p-10 rounded-2xl space-y-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-red">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                At Kiria Arts, our mission is simple: to spread joy through creativity. We offer a diverse selection of handcrafted treasures and artworks that inspire and connect people. With a focus on quality, authenticity, and customer satisfaction, we aim to promote the value of craftsmanship and celebrate the beauty of handmade artistry.
              </p>
            </div>
          </div>

          {/* Art Specializations */}
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-brand-red mb-3">Our Art Specializations</h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">We bring together some of the world's most cherished art traditions under one roof.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tanjore Painting */}
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop" alt="Tanjore Painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Since 16th Century</span>
                  <h3 className="text-xl font-serif font-bold text-brand-red">Tanjore Painting</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Tanjore painting, originating from Tamil Nadu, India, is known for its vibrant colors, intricate details, and embellishment with gold foil. Typically depicting Hindu gods, goddesses, and mythological scenes, these artworks are celebrated for their rich cultural heritage and enduring beauty, blending traditional techniques with religious symbolism.</p>
                  <p className="text-neutral-500 text-xs leading-relaxed border-l-4 border-brand-red pl-3 italic">Originated in the 16th century under the Nayakas of Thanjavur — celebrated for cultural richness and spiritual symbolism.</p>
                </div>
              </div>
              {/* Resin Art */}
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop" alt="Resin Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Mid-20th Century Onward</span>
                  <h3 className="text-xl font-serif font-bold text-brand-red">Resin Art</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Resin art preservation involves carefully layering resin to protect artworks from UV damage, dust, and humidity. This process ensures vibrant colors and durability over time, allowing resin artworks to be enjoyed in various settings with minimal maintenance.</p>
                  <p className="text-neutral-500 text-xs leading-relaxed border-l-4 border-brand-red pl-3 italic">Emerged mid-20th century using epoxy and polyester resins — now celebrated for glossy finishes and vibrant contemporary expression.</p>
                </div>
              </div>
              {/* Canvas Painting */}
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" alt="Canvas Painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Since the Renaissance</span>
                  <h3 className="text-xl font-serif font-bold text-brand-red">Canvas Painting</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Canvas painting, dating back to the Renaissance, uses canvas as a versatile surface for artists to create with oils, acrylics, watercolors, and mixed media. It has evolved through different styles and movements, remaining a timeless medium for artistic expression worldwide.</p>
                  <p className="text-neutral-500 text-xs leading-relaxed border-l-4 border-brand-red pl-3 italic">During the 14th–16th centuries, canvas replaced wooden panels as the preferred support — enabling larger artworks and transformative new techniques.</p>
                </div>
              </div>
              {/* Miniature Art */}
              <div className="border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?q=80&w=800&auto=format&fit=crop" alt="Miniature Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Across Civilizations</span>
                  <h3 className="text-xl font-serif font-bold text-brand-red">Miniature Art</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">Miniature artwork, known for its intricate details and small scale, has been a cultural treasure across civilizations. From illuminated manuscripts in medieval Europe to courtly paintings in Persia and Mughal India, these artworks capture rich narratives and meticulous craftsmanship in compact formats, continuing to inspire artists today.</p>
                  <p className="text-neutral-500 text-xs leading-relaxed border-l-4 border-brand-red pl-3 italic">A living legacy spanning Persian courts, Mughal palaces, and medieval European manuscripts — timeless in its intimacy and detail.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Founders */}
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-brand-red mb-3">Meet the Founders</h2>
              <p className="text-neutral-500 max-w-xl mx-auto">A mother-daughter duo united by their love for art, culture, and creativity.</p>
            </div>

            {/* Kala - Mother */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] max-w-sm mx-auto relative group">
                <img 
                  src={kala} 
                  alt="Kala - Co-Founder"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Founder</span>
                  <h3 className="text-3xl font-serif font-bold text-neutral-800 mt-1">Kalavathi G</h3>
                  <div className="w-16 h-1 bg-brand-red rounded-full mt-3" />
                </div>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Introducing Kalavathi G, the soulful artisan behind Kiria Arts. With a lifelong devotion to art and crafts, she's transformed her passion into a haven for bespoke gifts and mesmerizing handcrafted materials.
                </p>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Inspired by childhood memories of creative exploration, Kalavathi infuses each creation with love and meaning. At Kiria Arts, she curates a collection that speaks to the heart, offering personalized treasures that capture the essence of every relationship.
                </p>
                <p className="text-neutral-500 italic border-l-4 border-brand-red pl-4">
                  "Every stroke of the brush carries the wisdom of our ancestors. Art is how we keep our traditions alive for future generations."
                </p>
              </div>
            </motion.div>

            {/* Pavitra - Daughter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-5 md:order-1 order-2">
                <div>
                  <span className="text-xs font-bold text-brand-olive uppercase tracking-widest">Co-Founder & Lead Artist</span>
                  <h3 className="text-3xl font-serif font-bold text-neutral-800 mt-1">Pavitra</h3>
                  <div className="w-16 h-1 bg-brand-red rounded-full mt-3" />
                </div>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Pavithra is an artist who seamlessly blends tradition with modernity, crafting ethereal visions into tangible realities through physical mediums. Unlike the fleeting nature of digital art, she derives profound fulfillment from the tactile process, where each brushstroke and careful carving represents not just a mark, but the culmination of endless hours of practice and unwavering dedication.
                </p>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Driven by an unwavering passion for art, she made the courageous decision to step away from her corporate career and follow her true calling. With the rich tapestry of history flowing through her hands, she is committed to preserving its legacy while simultaneously pushing its boundaries with a contemporary touch.
                </p>
                <p className="text-neutral-500 italic border-l-4 border-brand-red pl-4">
                  "There is a transcendent magic in creating something deeply personal — a piece imbued with essence, capable of forging profound connections with others."
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] max-w-sm mx-auto relative group md:order-2 order-1">
                <img 
                  src={pavithra} 
                  alt="Pavitra - Co-Founder & Lead Artist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif font-bold text-brand-red mb-4">Contact Kiria Arts</h1>
        <p className="text-neutral-500">We'd love to hear from you. Reach out for inquiries, collaborations, or just to say hello.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Name</label>
                <input type="text" className="w-full bg-white border border-neutral-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Email Address</label>
                <input type="email" className="w-full bg-white border border-neutral-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="Your email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-neutral-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="Your phone" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Subject</label>
                <input type="text" className="w-full bg-white border border-neutral-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="Inquiry subject" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Message</label>
              <textarea rows={5} className="w-full bg-white border border-neutral-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-brand-red" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary py-4 text-lg font-bold">Send Message</button>
            <a href="https://wa.me/918951223940" target="_blank" rel="noreferrer" className="w-full bg-brand-green text-white py-4 rounded-md text-lg font-bold flex items-center justify-center hover:bg-opacity-90 transition-all">
              <MessageCircle className="w-6 h-6 mr-2" /> Connect on WhatsApp
            </a>
          </form>
        </div>

        {/* Visit Us */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-neutral-800">Visit Us</h2>
            <div className="space-y-4 text-neutral-600">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-red mr-4 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-neutral-800">Kiria Arts</p>
                  <p>Bangalore, Karnataka</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-brand-red mr-4 shrink-0" />
                <p>+91 89512 23940</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-brand-red mr-4 shrink-0" />
                <a href="mailto:kiriaarts.info@gmail.com" className="text-brand-red hover:underline font-medium">kiriaarts.info@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-neutral-200 rounded-2xl overflow-hidden relative shadow-inner">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1104!2d77.6508776!3d13.0239236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179acc524d71%3A0x7ddc2771b503bcd0!2sKiria%20Arts!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kiria Arts Location"
                className="w-full h-full"
              />
          </div>
          <a 
            href="https://maps.app.goo.gl/TW7iEJk32z3b1kCY9"
            target="_blank"
            rel="noreferrer"
            className="text-brand-red font-bold flex items-center hover:underline"
          >
            View on Google Maps <ChevronRight className="ml-1 w-4 h-4" />
          </a>

          <div>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Follow Us & Stay Connected</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/kiria.arts?igsh=MWxjNTF0NzI0aHgwdg=="
                target="_blank" 
                rel="noreferrer"
                title="Follow us on Instagram"
                className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-200 cursor-pointer hover:bg-brand-red hover:text-white transition-all text-neutral-600 group"
              >
                <Instagram className="w-6 h-6" />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-brand-red whitespace-nowrap">@kiria.arts</span>
              </a>
              <a 
                href="https://www.facebook.com/kiriaarts.info?mibextid=JRoKGi"
                target="_blank" 
                rel="noreferrer"
                title="Follow us on Facebook"
                className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-200 cursor-pointer hover:bg-brand-red hover:text-white transition-all text-neutral-600 group"
              >
                <Facebook className="w-6 h-6" />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-brand-red whitespace-nowrap">kiriaarts</span>
              </a>
              <a 
                href="https://wa.me/918951223940"
                target="_blank" 
                rel="noreferrer"
                title="Chat on WhatsApp"
                className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-200 cursor-pointer hover:bg-brand-green hover:text-white transition-all text-neutral-600 group"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-brand-green whitespace-nowrap">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = ({ cart, onUpdateQuantity, onRemove, onCheckout, onContinueShopping }: { 
  cart: CartItem[], 
  onUpdateQuantity: (id: string, q: number) => void, 
  onRemove: (id: string) => void,
  onCheckout: () => void,
  onContinueShopping: () => void
}) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <button onClick={onContinueShopping} className="flex items-center text-neutral-500 hover:text-brand-red transition-colors mr-4">
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Continue Shopping</span>
        </button>
        <h1 className="text-3xl font-serif font-bold text-brand-red">Your Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center shadow-sm">
          <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-neutral-300" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-2">Your cart is empty</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">Looks like you haven't added any masterpieces to your collection yet.</p>
          <button onClick={onContinueShopping} className="btn-primary px-8">Explore Gallery</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-xl border border-neutral-200 p-4 flex gap-6 shadow-sm">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg font-bold text-neutral-800">{item.title}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-neutral-400 hover:text-brand-red transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs text-neutral-500">by {item.artist}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-neutral-200 rounded-md">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-neutral-50 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-neutral-600" />
                      </button>
                      <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-neutral-50 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-neutral-600" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-400 line-through">₹{item.price * item.quantity + 500}</p>
                      <p className="text-lg font-bold text-brand-red">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-neutral-800 mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="text-brand-green font-medium">Free</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex justify-between text-xl font-bold text-neutral-800">
                  <span>Total</span>
                  <span className="text-brand-red">₹{subtotal}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full btn-primary py-4 text-lg font-bold shadow-lg shadow-brand-red/20"
              >
                Proceed to Checkout
              </button>
              <p className="text-[10px] text-neutral-400 text-center mt-4 uppercase tracking-widest">Secure Payment Guaranteed</p>
            </div>
            
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-red/5">
              <h4 className="font-bold text-brand-red text-sm mb-2 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" /> Need help?
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our art consultants are available to assist you with your purchase and provide more details about the pieces.
              </p>
              <button className="text-xs font-bold text-brand-red mt-3 hover:underline">Chat with us on WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductDetailsPage = ({ 
  artwork, 
  onAddToCart, 
  onUpdateQuantity, 
  onRemove, 
  quantity,
  onBack
}: { 
  artwork: Artwork, 
  onAddToCart: (a: Artwork) => void,
  onUpdateQuantity: (id: string, qty: number) => void,
  onRemove: (id: string) => void,
  quantity: number,
  onBack: () => void
}) => {
  const [selectedSize, setSelectedSize] = useState('12x15"');
  const sizes = ['12x15"', '16x20"', '20x24"', '24x36"'];
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCustomize = () => {
    const phoneNumber = "918951223940";
    const message = `Hi, I am interested in customizing the artwork: *${artwork.title}* by ${artwork.artist}.\n\nSize preferred: ${selectedSize}\n\nCould you please share the pricing and timeline for this customization?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={onBack}
        className="flex items-center text-neutral-500 hover:text-brand-red transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm">
        {/* Left: Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-50 group">
          <img 
            src={artwork.image} 
            alt={artwork.title}
            className="w-full h-full object-contain p-4 cursor-pointer"
            onClick={() => setIsZoomed(true)}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
            {artwork.isNew && (
              <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New</span>
            )}
            {artwork.isSold && (
              <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Sold</span>
            )}
          </div>
          <button className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm shadow-md rounded-full text-brand-red opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800">{artwork.title}</h1>
              <button className="p-2 text-neutral-400 hover:text-brand-red transition-colors rounded-full hover:bg-neutral-50">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            <p className="text-lg text-neutral-500 mb-4">by <span className="font-bold text-neutral-700">{artwork.artist}</span></p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-brand-red">₹{artwork.price}</span>
              <span className="text-sm text-brand-olive px-2 py-1 bg-brand-olive/10 rounded font-medium">{artwork.category}</span>
              <span className="text-sm text-neutral-600 px-2 py-1 bg-neutral-100 rounded font-medium">{artwork.medium}</span>
            </div>
          </div>

          <div className="prose prose-sm text-neutral-600 mb-8 leading-relaxed">
            <p>{artwork.description}</p>
          </div>

          {!artwork.isSold && (
            <div className="mb-8 p-6 bg-brand-cream border border-brand-red/10 rounded-xl space-y-4">
              <h3 className="font-serif font-bold text-brand-red mb-2 text-lg">Customize Your Art</h3>
              <p className="text-sm text-neutral-600 mb-3">Select a preferred size to commission a variation of this piece.</p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size 
                        ? 'bg-brand-red text-white border-brand-red' 
                        : 'bg-white text-neutral-600 border-neutral-200 hover:border-brand-red/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleCustomize}
                className="w-full sm:w-auto bg-white border-2 border-brand-red text-brand-red py-2.5 px-6 rounded-md font-bold text-sm flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Inquire & Customize
              </button>
            </div>
          )}

          <div className="mt-auto border-t border-neutral-100 pt-6">
            {!artwork.isSold ? (
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {quantity > 0 ? (
                  <div className="flex items-center bg-neutral-100 rounded-lg overflow-hidden h-12">
                    <button
                      onClick={() => onUpdateQuantity(artwork.id, quantity - 1)}
                      className="px-4 h-full hover:bg-neutral-200 transition-colors text-neutral-600 flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 text-base font-bold text-neutral-800 min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(artwork.id, quantity + 1)}
                      className="px-4 h-full hover:bg-neutral-200 transition-colors text-neutral-600 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => onAddToCart(artwork)}
                    className="w-full sm:w-auto flex-1 bg-brand-red text-white h-12 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center font-bold"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                )}
                {quantity > 0 && (
                  <button
                    onClick={() => onRemove(artwork.id)}
                    className="p-3 text-red-500 hover:bg-red-50 border border-red-100 rounded-lg transition-colors flex items-center justify-center h-12"
                    title="Remove from cart"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ) : (
              <a 
                href={`https://wa.me/918951223940?text=${encodeURIComponent(`I am interested in the sold piece: *${artwork.title}* by ${artwork.artist}. Is a similar commission possible?`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-green text-white py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Inquire About Commission
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <ImageZoomModal
            image={artwork.image}
            title={artwork.title}
            onClose={() => setIsZoomed(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (artwork: Artwork) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === artwork.id);
      if (existing) {
        return prev.map(item => item.id === artwork.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...artwork, quantity: 1 }];
    });
    // Optional: Auto-navigate to cart or show a toast
    // setCurrentPage('cart');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const phoneNumber = "918951223940"; // Updated gallery WhatsApp number
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    let message = `*Order Inquiry from Kiria Arts*\n\n`;
    message += `I would like to inquire about the following items:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   Artist: ${item.artist}\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Price: ₹${item.price * item.quantity}\n\n`;
    });
    
    message += `*Total Amount: ₹${subtotal}*\n\n`;
    message += `Please let me know the availability and payment process. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const renderPage = () => {
    if (currentPage.startsWith('product_')) {
      const productId = currentPage.split('_')[1];
      const product = artworks.find(a => a.id === productId);
      if (product) {
        return (
          <ProductDetailsPage
            artwork={product}
            onAddToCart={addToCart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            quantity={cart.find(item => item.id === product.id)?.quantity || 0}
            onBack={() => setCurrentPage('gallery')}
          />
        );
      }
    }

    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} cart={cart} />;
      case 'gallery': return <GalleryPage onAddToCart={addToCart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} cart={cart} searchQuery={searchQuery} setCurrentPage={setCurrentPage} />;
      case 'classes': return <ClassesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'cart': return (
        <CartPage 
          cart={cart} 
          onUpdateQuantity={updateQuantity} 
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
          onContinueShopping={() => setCurrentPage('gallery')}
        />
      );
      default: return <HomePage setCurrentPage={setCurrentPage} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} cart={cart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918951223940"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-brand-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
