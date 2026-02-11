export interface PujaService {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  category: 'grihaPravesh' | 'doshaRemoval' | 'prosperity' | 'health' | 'special';
  price: number;
  duration: string;
  icon: string;
  popular: boolean;
  image: string;
  benefits: string[];
  includes: string[];
}

export interface Pandit {
  id: string;
  name: string;
  title: string;
  experience: number;
  pujasPerformed: number;
  rating: number;
  reviews: number;
  languages: string[];
  specializations: string[];
  image: string;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  category: 'pujaKit' | 'rudraksha' | 'yantras' | 'essentials';
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  bestSeller: boolean;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const pujaServices: PujaService[] = [
  {
    id: 'griha-pravesh',
    name: 'Griha Pravesh Puja',
    nameHi: 'गृह प्रवेश पूजा',
    description: 'Sacred housewarming ceremony to invite divine blessings, prosperity, and positive energy into your new home. Includes Vastu Shanti and Ganesh Puja.',
    category: 'grihaPravesh',
    price: 5100,
    duration: '3-4 hours',
    icon: '🏠',
    popular: true,
    image: '/images/griha-pravesh.jpg',
    benefits: [
      'Removes negative energies from the new home',
      'Invites Goddess Lakshmi for prosperity',
      'Vastu Dosha correction',
      'Ensures peace and harmony in the household',
    ],
    includes: [
      'Ganesh Puja & Vastu Shanti',
      'Navagraha Puja',
      'Havan/Homam',
      'All puja samagri included',
      '2 experienced pandits',
    ],
  },
  {
    id: 'rudra-abhishek',
    name: 'Rudra Abhishek Puja',
    nameHi: 'रुद्र अभिषेक पूजा',
    description: 'Powerful Shiva puja with sacred abhishek using milk, honey, curd, and holy water. Removes obstacles and brings divine protection.',
    category: 'special',
    price: 7100,
    duration: '4-5 hours',
    icon: '🔱',
    popular: true,
    image: '/images/rudra-abhishek.jpg',
    benefits: [
      'Removes all doshas and negative karmas',
      'Brings Lord Shiva\'s divine protection',
      'Ensures health, wealth, and prosperity',
      'Destroys fear and anxiety',
    ],
    includes: [
      'Shiv Puja with Rudrabhishek',
      'Rudram chanting by 2 pandits',
      'Abhishek with Panchamrit',
      'Bilva Patra offering',
      'All puja samagri included',
    ],
  },
  {
    id: 'mahamrityunjay',
    name: 'Mahamrityunjay Jaap',
    nameHi: 'महामृत्युंजय जाप',
    description: 'Sacred chanting of the powerful Mahamrityunjay mantra 1,25,000 times for health, longevity, and protection from untimely death.',
    category: 'health',
    price: 11000,
    duration: '5-6 hours',
    icon: '🙏',
    popular: true,
    image: '/images/mahamrityunjay.jpg',
    benefits: [
      'Protection from diseases and health issues',
      'Longevity and vitality blessings',
      'Removes fear of death',
      'Brings mental peace and spiritual growth',
    ],
    includes: [
      '1,25,000 mantra jaap',
      'Shiv Puja & Abhishek',
      'Havan with sacred herbs',
      '4 experienced pandits',
      'All puja samagri included',
    ],
  },
  {
    id: 'satyanarayan-katha',
    name: 'Satyanarayan Katha',
    nameHi: 'सत्यनारायण कथा',
    description: 'Auspicious Vishnu puja with sacred katha for prosperity, success, and fulfillment of wishes. Ideal for special occasions and festivals.',
    category: 'prosperity',
    price: 3100,
    duration: '2-3 hours',
    icon: '📿',
    popular: true,
    image: '/images/satyanarayan.jpg',
    benefits: [
      'Fulfillment of wishes and desires',
      'Brings prosperity and success',
      'Removes obstacles in life',
      'Ideal for auspicious occasions',
    ],
    includes: [
      'Complete Satyanarayan Katha',
      'Vishnu Puja & Aarti',
      'Prasad preparation guidance',
      '1 experienced pandit',
      'All puja samagri included',
    ],
  },
  {
    id: 'mangal-dosh-nivaran',
    name: 'Mangal Dosh Nivaran Puja',
    nameHi: 'मंगल दोष निवारण पूजा',
    description: 'Specialized puja to neutralize the effects of Mangal Dosha (Mars affliction) in the horoscope. Essential before marriage for Mangliks.',
    category: 'doshaRemoval',
    price: 5500,
    duration: '3-4 hours',
    icon: '⭐',
    popular: false,
    image: '/images/mangal-dosh.jpg',
    benefits: [
      'Neutralizes Mangal Dosha effects',
      'Removes obstacles in marriage',
      'Brings harmony in married life',
      'Reduces Mars-related health issues',
    ],
    includes: [
      'Mangal Graha Shanti Puja',
      'Hanuman Puja',
      'Mangal Mantra Jaap (10,000)',
      'Havan',
      'All puja samagri included',
    ],
  },
  {
    id: 'kaal-sarp-dosh',
    name: 'Kaal Sarp Dosh Nivaran',
    nameHi: 'काल सर्प दोष निवारण',
    description: 'Powerful remedy puja for Kaal Sarp Dosha. Removes the malefic effects of Rahu-Ketu axis in the horoscope.',
    category: 'doshaRemoval',
    price: 9100,
    duration: '4-5 hours',
    icon: '🐍',
    popular: false,
    image: '/images/kaal-sarp.jpg',
    benefits: [
      'Removes Kaal Sarp Dosha completely',
      'Brings relief from unexplained problems',
      'Improves career and financial stability',
      'Ensures mental peace',
    ],
    includes: [
      'Nag Puja & Rahu-Ketu Shanti',
      'Sarp Suktam chanting',
      'Navagraha Puja',
      'Havan with special herbs',
      'All puja samagri included',
    ],
  },
  {
    id: 'vastu-shanti',
    name: 'Vastu Shanti Puja',
    nameHi: 'वास्तु शांति पूजा',
    description: 'Complete Vastu correction puja to harmonize the energies of your home or office. Removes Vastu doshas and brings positive vibrations.',
    category: 'grihaPravesh',
    price: 7500,
    duration: '4-5 hours',
    icon: '🏛️',
    popular: false,
    image: '/images/vastu-shanti.jpg',
    benefits: [
      'Corrects all Vastu doshas',
      'Harmonizes home/office energies',
      'Brings prosperity and growth',
      'Ensures family well-being',
    ],
    includes: [
      'Complete Vastu Puja with 45 devatas',
      'Navagraha Puja',
      'Vastu Purush worship',
      'Havan',
      'All puja samagri included',
    ],
  },
  {
    id: 'navgraha-shanti',
    name: 'Navgraha Shanti Puja',
    nameHi: 'नवग्रह शांति पूजा',
    description: 'Pacification puja for all nine planets to bring balance and harmony in life. Recommended during planetary transitions.',
    category: 'doshaRemoval',
    price: 6500,
    duration: '3-4 hours',
    icon: '🪐',
    popular: false,
    image: '/images/navgraha.jpg',
    benefits: [
      'Pacifies all nine planets',
      'Removes planetary doshas',
      'Brings balance in all areas of life',
      'Recommended during Sade Sati',
    ],
    includes: [
      'Individual puja for all 9 planets',
      'Navgraha mantra jaap',
      'Havan',
      '2 experienced pandits',
      'All puja samagri included',
    ],
  },
  {
    id: 'lakshmi-puja',
    name: 'Lakshmi Puja',
    nameHi: 'लक्ष्मी पूजा',
    description: 'Special puja to invoke Goddess Lakshmi for wealth, abundance, and financial growth. Perfect for Diwali and new business ventures.',
    category: 'prosperity',
    price: 3500,
    duration: '2-3 hours',
    icon: '🪷',
    popular: false,
    image: '/images/lakshmi-puja.jpg',
    benefits: [
      'Attracts wealth and abundance',
      'Blesses new business ventures',
      'Removes financial obstacles',
      'Brings prosperity to the family',
    ],
    includes: [
      'Lakshmi Puja & Aarti',
      'Sri Suktam chanting',
      'Kuber Puja',
      'All puja samagri included',
    ],
  },
  {
    id: 'sunderkand-path',
    name: 'Sunderkand Path',
    nameHi: 'सुंदरकांड पाठ',
    description: 'Group recitation of Sunderkand from Ramcharitmanas. Removes obstacles, evil spirits, and brings courage and strength.',
    category: 'special',
    price: 2500,
    duration: '2-3 hours',
    icon: '📖',
    popular: false,
    image: '/images/sunderkand.jpg',
    benefits: [
      'Removes all obstacles in life',
      'Brings courage and strength',
      'Protects from evil energies',
      'Fulfills wishes through Hanuman\'s grace',
    ],
    includes: [
      'Complete Sunderkand recitation',
      'Hanuman Puja',
      'Aarti & Prasad',
      '1 experienced pandit',
      'All puja samagri included',
    ],
  },
];

export const pandits: Pandit[] = [
  {
    id: 'pandit-sharma',
    name: 'Pt. Ramesh Sharma',
    title: 'Vedic Scholar & Jyotish Acharya',
    experience: 25,
    pujasPerformed: 5000,
    rating: 4.9,
    reviews: 1250,
    languages: ['Hindi', 'Sanskrit', 'English'],
    specializations: ['Rudra Abhishek', 'Vastu Shanti', 'Griha Pravesh'],
    image: '/images/pandit-1.jpg',
    location: 'Delhi NCR',
  },
  {
    id: 'pandit-iyer',
    name: 'Sri Venkatesh Iyer',
    title: 'Agama Shastra Expert',
    experience: 20,
    pujasPerformed: 3500,
    rating: 4.8,
    reviews: 890,
    languages: ['Tamil', 'Sanskrit', 'English', 'Kannada'],
    specializations: ['Homam', 'Navagraha Shanti', 'Lakshmi Puja'],
    image: '/images/pandit-2.jpg',
    location: 'Bangalore',
  },
  {
    id: 'pandit-shastri',
    name: 'Acharya Devendra Shastri',
    title: 'Karmakandi & Astrologer',
    experience: 30,
    pujasPerformed: 8000,
    rating: 5.0,
    reviews: 2100,
    languages: ['Hindi', 'Sanskrit', 'Kannada'],
    specializations: ['Mahamrityunjay', 'Kaal Sarp Dosh', 'Mangal Dosh'],
    image: '/images/pandit-3.jpg',
    location: 'Varanasi',
  },
  {
    id: 'pandit-rao',
    name: 'Pt. Subrahmanya Rao',
    title: 'Vedic Rituals Specialist',
    experience: 18,
    pujasPerformed: 2800,
    rating: 4.9,
    reviews: 750,
    languages: ['Telugu', 'Kannada', 'Sanskrit', 'Hindi'],
    specializations: ['Satyanarayan Katha', 'Griha Pravesh', 'Sunderkand'],
    image: '/images/pandit-4.jpg',
    location: 'Hyderabad',
  },
  {
    id: 'pandit-dikshit',
    name: 'Pt. Ananth Dikshit',
    title: 'Tantra & Mantra Specialist',
    experience: 22,
    pujasPerformed: 4200,
    rating: 4.8,
    reviews: 980,
    languages: ['Hindi', 'Sanskrit', 'Tamil'],
    specializations: ['Rudra Abhishek', 'Navagraha Shanti', 'Kaal Sarp Dosh'],
    image: '/images/pandit-5.jpg',
    location: 'Chennai',
  },
  {
    id: 'guruji-anand',
    name: 'Guruji Parameshwar Anand',
    title: 'Spiritual Guide & Vedic Master',
    experience: 35,
    pujasPerformed: 12000,
    rating: 5.0,
    reviews: 3500,
    languages: ['Hindi', 'Sanskrit', 'English', 'Kannada', 'Tamil'],
    specializations: ['All Pujas', 'Spiritual Counseling', 'Dosha Remedies'],
    image: '/images/guruji.jpg',
    location: 'Pan India',
  },
];

export const products: Product[] = [
  {
    id: 'rudraksha-5mukhi',
    name: '5 Mukhi Rudraksha Mala',
    nameHi: '5 मुखी रुद्राक्ष माला',
    description: 'Authentic Nepal 5 Mukhi Rudraksha mala with 108+1 beads. Lab certified. Brings peace, health, and spiritual growth.',
    category: 'rudraksha',
    price: 2499,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 456,
    image: '/images/rudraksha-mala.jpg',
    bestSeller: true,
    tags: ['Certified', 'Nepal Origin', 'Stress Relief'],
  },
  {
    id: 'puja-kit-complete',
    name: 'Complete Puja Kit',
    nameHi: 'संपूर्ण पूजा किट',
    description: 'All-in-one puja kit with brass diya, agarbatti holder, kumkum, chandan, camphor, and 21 essential items.',
    category: 'pujaKit',
    price: 1299,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 789,
    image: '/images/puja-kit.jpg',
    bestSeller: true,
    tags: ['21 Items', 'Brass Quality', 'Gift Pack'],
  },
  {
    id: 'shree-yantra',
    name: 'Shree Yantra (Gold Plated)',
    nameHi: 'श्री यंत्र (स्वर्ण लेपित)',
    description: 'Energized Shree Yantra for wealth and prosperity. Gold plated on copper base. Comes with puja vidhi guide.',
    category: 'yantras',
    price: 3499,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 234,
    image: '/images/shree-yantra.jpg',
    bestSeller: true,
    tags: ['Energized', 'Gold Plated', 'Wealth'],
  },
  {
    id: 'stress-relief-kit',
    name: 'Vedic Stress Relief Kit',
    nameHi: 'वैदिक तनाव मुक्ति किट',
    description: 'Ayurvedic herbs, meditation mala, essential oils, and guided meditation booklet for complete stress management.',
    category: 'essentials',
    price: 1999,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 345,
    image: '/images/stress-relief.jpg',
    bestSeller: false,
    tags: ['Ayurvedic', 'Meditation', 'Stress Relief'],
  },
  {
    id: 'rudraksha-1mukhi',
    name: '1 Mukhi Rudraksha',
    nameHi: '1 मुखी रुद्राक्ष',
    description: 'Rare 1 Mukhi Rudraksha from Nepal. Lab certified with X-Ray report. Brings supreme consciousness and liberation.',
    category: 'rudraksha',
    price: 21000,
    originalPrice: 31000,
    rating: 5.0,
    reviews: 89,
    image: '/images/1-mukhi.jpg',
    bestSeller: false,
    tags: ['Rare', 'Lab Certified', 'Premium'],
  },
  {
    id: 'dhoop-collection',
    name: 'Sacred Dhoop & Agarbatti Collection',
    nameHi: 'पवित्र धूप और अगरबत्ती संग्रह',
    description: 'Premium collection of 12 fragrances - sandalwood, mogra, guggul, loban, and more. Chemical-free, hand-rolled.',
    category: 'essentials',
    price: 599,
    originalPrice: 899,
    rating: 4.7,
    reviews: 567,
    image: '/images/dhoop.jpg',
    bestSeller: false,
    tags: ['12 Fragrances', 'Chemical Free', 'Hand Rolled'],
  },
  {
    id: 'navgraha-yantra-set',
    name: 'Navagraha Yantra Set',
    nameHi: 'नवग्रह यंत्र सेट',
    description: 'Complete set of 9 planetary yantras on copper. Energized and certified. Balances all planetary influences.',
    category: 'yantras',
    price: 4999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 167,
    image: '/images/navgraha-yantra.jpg',
    bestSeller: false,
    tags: ['9 Yantras', 'Copper', 'Energized'],
  },
  {
    id: 'meditation-wellness-pack',
    name: 'Meditation & Wellness Pack',
    nameHi: 'ध्यान और कल्याण पैक',
    description: 'Premium meditation cushion, Tibetan singing bowl, natural incense, and crystal healing stones for daily wellness.',
    category: 'essentials',
    price: 3499,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 213,
    image: '/images/meditation-pack.jpg',
    bestSeller: false,
    tags: ['Singing Bowl', 'Crystals', 'Wellness'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh & Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'The Griha Pravesh puja was beautifully conducted. Pt. Ramesh Sharma made us feel so blessed. The entire family was amazed by the devotion and authenticity. Highly recommended!',
    service: 'Griha Pravesh Puja',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Venkatesh Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'After the Kaal Sarp Dosh Nivaran puja, I noticed remarkable positive changes in my career and health. The pandits were very knowledgeable and the entire ceremony was divine.',
    service: 'Kaal Sarp Dosh Nivaran',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Lakshmi Narayanan',
    location: 'Chennai',
    rating: 5,
    text: 'Excellent service! The Satyanarayan Katha was performed with utmost devotion. The pandit explained every ritual beautifully in Tamil. Our entire family was deeply moved.',
    service: 'Satyanarayan Katha',
    image: '/images/testimonial-3.jpg',
  },
  {
    id: '4',
    name: 'Meera & Abhishek Joshi',
    location: 'Bangalore',
    rating: 5,
    text: 'The Mangal Dosh Nivaran puja gave us immense peace of mind before our wedding. The booking process was smooth and the pandit was very experienced. Thank you DivyaSeva!',
    service: 'Mangal Dosh Nivaran',
    image: '/images/testimonial-4.jpg',
  },
  {
    id: '5',
    name: 'Suresh Kumar',
    location: 'Mumbai',
    rating: 5,
    text: 'The Rudra Abhishek was a life-changing experience. The energy during the puja was incredible. My chronic health issues started improving after the puja. Divine grace!',
    service: 'Rudra Abhishek',
    image: '/images/testimonial-5.jpg',
  },
  {
    id: '6',
    name: 'Kavitha Mohan',
    location: 'Kochi',
    rating: 5,
    text: 'Ordered the Vedic Stress Relief Kit along with a Mahamrityunjay Jaap for my father. The products were authentic and the puja brought so much positivity. Amazing service!',
    service: 'Mahamrityunjay Jaap',
    image: '/images/testimonial-6.jpg',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book a puja on DivyaSeva?',
    answer: 'Simply browse our services, select the puja you need, choose your preferred date, time, and package, fill in your details, and complete the payment. Our team will confirm your booking within 30 minutes.',
  },
  {
    id: '2',
    question: 'Are the pandits verified and experienced?',
    answer: 'Yes, all our pandits are thoroughly verified with a minimum of 15 years of experience. They are scholars in Vedic scriptures and hold certifications from recognized Sanskrit universities and gurukuls.',
  },
  {
    id: '3',
    question: 'What materials/samagri are included in the puja?',
    answer: 'All our puja packages include the complete samagri (materials) required for the ritual. This includes flowers, fruits, sacred herbs, ghee, camphor, and all other items. You don\'t need to arrange anything separately.',
  },
  {
    id: '4',
    question: 'Can I get the puja done in my regional language?',
    answer: 'We offer pujas in Hindi, Kannada, Tamil, Telugu, and Sanskrit. You can select your preferred language during booking, and we\'ll assign a pandit fluent in that language.',
  },
  {
    id: '5',
    question: 'What is your cancellation and refund policy?',
    answer: 'You can cancel up to 24 hours before the scheduled puja for a full refund. Cancellations within 24 hours will receive a 50% refund. In case of any service quality issues, we offer a 100% satisfaction guarantee.',
  },
  {
    id: '6',
    question: 'Do you deliver products across India?',
    answer: 'Yes, we deliver all our sacred products across India. Standard delivery takes 5-7 business days. Express delivery (2-3 days) is available for select pin codes. All products come with authenticity certificates.',
  },
  {
    id: '7',
    question: 'How do online/virtual pujas work?',
    answer: 'For virtual pujas, we connect you via video call with our pandits at a sacred temple. You can participate in the puja live, take blessings, and the prasad is couriered to your address within 3 days.',
  },
  {
    id: '8',
    question: 'Can I customize the puja package?',
    answer: 'Yes! Our Premium packages are fully customizable. You can add extra pandits, extend the duration, include additional rituals, or request specific mantras. Contact our team for custom quotes.',
  },
];

export const cities = [
  'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad',
  'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Varanasi',
  'Lucknow', 'Kochi', 'Chandigarh', 'Indore', 'Bhopal',
  'Mysore', 'Coimbatore', 'Vizag', 'Nagpur', 'Surat',
];

export const timeSlots = [
  { id: 'morning-1', label: '6:00 AM - 8:00 AM', period: 'Brahma Muhurta' },
  { id: 'morning-2', label: '8:00 AM - 10:00 AM', period: 'Morning' },
  { id: 'morning-3', label: '10:00 AM - 12:00 PM', period: 'Mid Morning' },
  { id: 'afternoon', label: '12:00 PM - 2:00 PM', period: 'Afternoon' },
  { id: 'evening-1', label: '4:00 PM - 6:00 PM', period: 'Evening' },
  { id: 'evening-2', label: '6:00 PM - 8:00 PM', period: 'Sandhya Kaal' },
];
