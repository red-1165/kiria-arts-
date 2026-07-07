import lyingGanesha1 from './assets/lying_ganesha1.jpeg';
import lyingGanesha2 from './assets/lying_ganesha2.jpeg';
import venkat from './assets/venkat.jpeg';
import peacock from './assets/peacock.jpeg';
import radhaJhoola from './assets/radha_jhoola.jpeg';
import radhaKrishna from './assets/radhakrisha.jpeg';
import babyKrishna from './assets/baby_krishna.jpeg';
import buddha from './assets/buddha.jpeg';
import duck from './assets/duck.jpeg';
import elephant from './assets/elephant.jpeg';
import elephant2 from './assets/elephant2.jpeg';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: number;
  category: string;
  medium: string;
  image: string;
  description: string;
  isNew?: boolean;
  isSold?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Bala Ganesha (without gold work)',
    artist: 'Kiria Arts',
    price: 15000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: lyingGanesha1,
    description: 'This Tanjore painting depicts Bala Ganesha in a playful and serene posture, symbolizing wisdom, prosperity, and childlike innocence. The painting features vibrant colors, graceful lines, and delicate detailing that bring warmth and charm to the composition. The balanced design and expressive form reflect the timeless beauty and spiritual essence of traditional Tanjore art.',
    isNew: true
  },
  {
    id: '2',
    title: 'Jhoola Radha Krishna',
    artist: 'Pavithra S',
    price: 25000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: radhaKrishna,
    description: 'This Tanjore painting depicts Radha and Lord Krishna seated on a swing, symbolizing divine love and harmony. The artwork is richly adorned with 22-carat gold work, vibrant colors, and intricate detailing, reflecting the timeless beauty and spiritual essence of this traditional art form.',
  },
  {
    id: '3',
    title: 'The Majestic Peacock',
    artist: 'Kiria Arts',
    price: 12000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: peacock,
    description: 'This Tanjore painting showcases a majestic peacock, a symbol of beauty, pride, and prosperity. Adorned with intricate 22-carat gold work and vibrant jewel tones, the graceful curves and detailed motifs bring the artwork to life, making it a striking and captivating example of traditional Tanjore artistry.',
  },
  {
    id: '4',
    title: 'Regal Walk',
    artist: 'Pavithra S',
    price: 18000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: elephant,
    description: 'This Tanjore painting depicts a graceful royal elephant, symbolizing strength, wisdom, and prosperity. Adorned with traditional ornaments and intricate patterns, the elephant stands proudly against a vibrant background. The rich colors and detailed craftsmanship highlight the timeless elegance and cultural charm of this classic Tanjore art form, making it a striking and auspicious artwork.',
  },
  {
    id: '5',
    title: 'In Yashoda\'s Arms',
    artist: 'Pavithra S',
    price: 22000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: babyKrishna,
    description: 'This Tanjore painting beautifully portrays Mother Yashoda with child Krishna, capturing the warmth of maternal love and devotion. Yashoda holds Krishna close with tenderness, while the child\'s calm expression reflects innocence and divinity. The vibrant colors, traditional ornaments, and intricate detailing highlight the emotional depth and timeless charm of this classic Tanjore art form, making it a heartfelt and spiritually uplifting artwork.',
    isSold: true
  },
  {
    id: '6',
    title: 'Divine Grace of Lord Venkateswara',
    artist: 'Kiria Arts',
    price: 28000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: venkat,
    description: 'This Tanjore painting features the divine face of Lord Venkateswara (Balaji), radiating serenity and grace. The artwork is richly adorned with intricate 22-carat gold work, enhancing the crown, ornaments, and sacred symbols. Set against a deep red background, the detailed craftsmanship and traditional elements highlight the spiritual grandeur and timeless beauty of classical Tanjore art, making it an auspicious and powerful devotional piece.',
    isNew: true
  },
  {
    id: '7',
    title: 'Aura of Peace',
    artist: 'Pavithra S',
    price: 15000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: buddha,
    description: 'This Tanjore painting depicts Lord Buddha seated in a calm meditative posture, symbolizing peace, enlightenment, and inner harmony. The serene expression and balanced composition reflect the essence of spiritual awakening. Intricate 22-carat gold work beautifully enhances the halo, border, and pedestal, adding a rich traditional touch. Set against a soothing blue background, the artwork combines simplicity with elegance, making it a spiritually uplifting and timeless example of classical Tanjore art.',
  },
  {
    id: '8',
    title: 'Radha on Jhoola',
    artist: 'Pavithra S',
    price: 24000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: radhaJhoola,
    description: 'This Tanjore painting beautifully captures Radha seated on a traditional jhoola (swing), surrounded by vibrant colors and intricate detailing. The artwork reflects the grace and devotion of Radha, set against a richly ornamented background that showcases the timeless beauty of classical Tanjore art.',
  },
  {
    id: '9',
    title: 'Bala Ganesha (gold work)',
    artist: 'Kiria Arts',
    price: 35000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: lyingGanesha2,
    description: 'This Tanjore painting portrays Bala Ganesha in a charming reclining pose, symbolizing innocence, joy, and divine blessings. The artwork is enriched with intricate 22-carat gold work, beautifully highlighting the crown, ornaments, borders, and decorative motifs. The soft expressions, harmonious colors, and radiant gold detailing enhance the traditional grandeur of Tanjore art, making this painting an auspicious and captivating devotional piece.',
  },
  {
    id: '10',
    title: 'Peacock',
    artist: 'Pavithra S',
    price: 16000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: elephant2,
    description: 'In Tanjore painting, the peacock is depicted as a symbol of beauty, grace, and prosperity. Painted in a stylized and decorative form, it is highlighted with rich colors, bold outlines, and intricate detailing. The peacock\'s elegant feathers are often enhanced with traditional patterns and ornamental elements, reflecting the grandeur of classical Tanjore art. Set against a vibrant background, the peacock in Tanjore painting represents auspiciousness, joy, and timeless artistic charm.',
  },
  {
    id: '11',
    title: 'Silent Awakening',
    artist: 'Kiria Arts',
    price: 10000,
    category: 'Traditional',
    medium: 'Tanjore Painting',
    image: duck,
    description: 'This artwork presents a serene and contemplative portrayal of Lord Buddha, focusing on calm expression and inner peace. The harmonious blend of vibrant colors and gentle curves evokes a sense of balance and mindfulness. The lotus at the base symbolizes purity and spiritual awakening, while the minimal yet expressive style invites quiet reflection and tranquility.',
  }
];

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Elena Alvarez',
    role: 'Contemporary abstract painter',
    description: 'Exploring color and form through vibrant strokes and emotional depth.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Realist painter',
    description: 'Focusing on serene landscapes and the quiet beauty of nature.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    role: 'Mixed media artist',
    description: 'Combining traditional techniques with digital art for unique perspectives.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Sculptor',
    description: 'Working primarily with reclaimed materials to create organic forms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Watercolor artist',
    description: 'Specializing in botanical illustrations and delicate floral patterns.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    role: 'Digital artist',
    description: 'Creating fantastical, dreamlike scenes inspired by mythology.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sai Krishna Chowdary',
    rating: 5,
    comment: 'The resin is flawlessly transparent, showcasing every detail of the rose, leaves, and portrait like a high-end jewel. The matching cube and keychain are adorable and so well-crafted. This is the perfect meaningful gift for any occasion.',
    date: '2025-02-10'
  },
  {
    id: '2',
    name: 'Vijayalakshmi S',
    rating: 5,
    comment: 'Pavithra has really done a great job with my varmala preservation resin art work. She was very patient with me for all my ideas and changes and the final output was really awesome beyond expectations. Would definitely recommend her work!',
    date: '2025-01-15'
  },
  {
    id: '3',
    name: 'Rechal',
    rating: 5,
    comment: 'I absolutely love the beautiful resin art pieces created for Easter! The craftsmanship is exceptional. The quality of the resin work is top-notch. Highly recommend checking out their work for any occasion!',
    date: '2024-05-20'
  },
  {
    id: '4',
    name: 'Sajitha Sujith',
    rating: 5,
    comment: 'Pavithrra is an exceptionally talented and dedicated person. I have personally attended her resin art workshop, and I must say she is an excellent teacher. Her patience and guidance made the entire experience both enjoyable and incredibly rewarding.',
    date: '2024-05-10'
  },
  {
    id: '5',
    name: 'Praneetha Viswanadham',
    rating: 5,
    comment: 'Amazing handmade clay art by Pavitra. I ordered 100 pieces of south Indian Thali Clay magnet for an event as return gifts and everyone absolutely loved it. Every piece was perfect in their own amazing way.',
    date: '2024-09-15'
  },
  {
    id: '6',
    name: 'Shilpashree Shridhar',
    rating: 5,
    comment: 'I loved the bookmark very much. It looks so professional. Her resin art products are beautiful and reasonably priced. I chose a bookmark for myself and gifted one to my friend. She liked it too.',
    date: '2024-03-20'
  },
  {
    id: '7',
    name: 'Kalyani Golla',
    rating: 5,
    comment: 'Resin art classes were truly lovely and very encouraging for me. I learned some amazing techniques and how to create with Pavitra. The outcome of my work turned out beautifully. Big thank you!',
    date: '2024-09-05'
  },
  {
    id: '8',
    name: 'Mala Gangadhar',
    rating: 5,
    comment: 'Thank you Kiria Arts for preserving the beautiful flowers from my special day! They did an amazing job turning my bouquet into lasting memories. The attention to detail was incredible.',
    date: '2024-03-10'
  },
  {
    id: '9',
    name: 'Meera Sg',
    rating: 5,
    comment: 'For excellent customized magnets, please place order with her — very dedicated, honest and committed. I had placed order for magnets by sharing few pics clicked on mobile, she did edit the photos and gave us best quality. Loved her work!',
    date: '2023-03-15'
  },
  {
    id: '10',
    name: 'Janabai J',
    rating: 5,
    comment: 'I would highly recommend this resin keychain to anyone looking for a stylish and durable accessory for their keys. It combines aesthetic appeal with practical functionality, making it a standout choice.',
    date: '2024-03-01'
  },
  {
    id: '11',
    name: 'Sheela Rani K',
    rating: 5,
    comment: 'Thank you so much for the true love with so much dedication in making students understand the art. The workshop experience was wonderful and the teaching approach is very clear and supportive.',
    date: '2024-02-20'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I place an order?',
    answer: 'You can browse our gallery, add items to your cart, and click "Proceed to Checkout". This will open a WhatsApp chat with your order details, and our team will guide you through the payment and shipping process.'
  },
  {
    id: '2',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship our artworks worldwide. Shipping costs and delivery times vary depending on the destination. Please contact us for a specific quote.'
  },
  {
    id: '3',
    question: 'Are the paintings authentic?',
    answer: 'Absolutely. Every piece in our gallery is an original work of art, and we provide a certificate of authenticity with each purchase.'
  },
  {
    id: '4',
    question: 'Can I request a custom commission?',
    answer: 'Yes, many of our artists accept commissions. If you see a sold piece you like or have a specific vision, please reach out to us via WhatsApp to discuss a custom order.'
  }
];