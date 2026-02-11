export type Language = 'en' | 'hi' | 'kn' | 'ta' | 'te';

export interface Translations {
  nav: {
    home: string;
    services: string;
    pandits: string;
    products: string;
    bookNow: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    tagline: string;
    trustedBy: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewAll: string;
    bookNow: string;
    perSession: string;
    popular: string;
    categories: {
      all: string;
      grihaPravesh: string;
      doshaRemoval: string;
      prosperity: string;
      health: string;
      special: string;
    };
  };
  pandits: {
    title: string;
    subtitle: string;
    experience: string;
    pujas: string;
    rating: string;
    languages: string;
    viewProfile: string;
    bookPandit: string;
  };
  products: {
    title: string;
    subtitle: string;
    addToCart: string;
    viewDetails: string;
    bestSeller: string;
    categories: {
      all: string;
      pujaKit: string;
      rudraksha: string;
      yantras: string;
      essentials: string;
    };
  };
  booking: {
    title: string;
    subtitle: string;
    selectDate: string;
    selectTime: string;
    selectPackage: string;
    yourDetails: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    specialRequests: string;
    proceedToPayment: string;
    basic: string;
    standard: string;
    premium: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactUs: string;
    followUs: string;
    copyright: string;
    madeWith: string;
  };
  payment: {
    payNow: string;
    securePayment: string;
    orderSummary: string;
    total: string;
    processing: string;
    success: string;
    failed: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Puja Services',
      pandits: 'Our Pandits',
      products: 'Sacred Store',
      bookNow: 'Book Now',
      contact: 'Contact',
    },
    hero: {
      title: 'DivyaSeva',
      subtitle: 'Experience the Divine Grace of Authentic Vedic Pujas at Your Doorstep',
      cta: 'Book Your Puja',
      ctaSecondary: 'Explore Services',
      tagline: 'Trusted by 50,000+ families across India',
      trustedBy: 'Trusted by families in 100+ cities',
    },
    services: {
      title: 'Sacred Puja Services',
      subtitle: 'Choose from our comprehensive range of authentic Vedic rituals performed by experienced pandits',
      viewAll: 'View All Services',
      bookNow: 'Book Now',
      perSession: 'per session',
      popular: 'Most Popular',
      categories: {
        all: 'All Pujas',
        grihaPravesh: 'Griha Pravesh',
        doshaRemoval: 'Dosha Removal',
        prosperity: 'Prosperity',
        health: 'Health & Wellness',
        special: 'Special Pujas',
      },
    },
    pandits: {
      title: 'Our Revered Pandits',
      subtitle: 'Meet our team of learned scholars and experienced Vedic practitioners',
      experience: 'Years Experience',
      pujas: 'Pujas Performed',
      rating: 'Rating',
      languages: 'Languages',
      viewProfile: 'View Profile',
      bookPandit: 'Book This Pandit',
    },
    products: {
      title: 'Sacred Store',
      subtitle: 'Premium spiritual products for your daily sadhana and wellness',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
      bestSeller: 'Best Seller',
      categories: {
        all: 'All Products',
        pujaKit: 'Puja Kits',
        rudraksha: 'Rudraksha',
        yantras: 'Yantras',
        essentials: 'Essentials',
      },
    },
    booking: {
      title: 'Book Your Puja',
      subtitle: 'Schedule your sacred ceremony in just a few steps',
      selectDate: 'Select Auspicious Date',
      selectTime: 'Select Time Slot',
      selectPackage: 'Select Package',
      yourDetails: 'Your Details',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      address: 'Address',
      city: 'City',
      specialRequests: 'Special Requests',
      proceedToPayment: 'Proceed to Payment',
      basic: 'Basic',
      standard: 'Standard',
      premium: 'Premium',
    },
    testimonials: {
      title: 'Blessed Families',
      subtitle: 'Hear from families who experienced divine grace through our services',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our services',
    },
    footer: {
      tagline: 'Bringing divine blessings to your doorstep with authentic Vedic rituals',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      copyright: '© 2026 DivyaSeva. All rights reserved.',
      madeWith: 'Made with devotion in India',
    },
    payment: {
      payNow: 'Pay Now',
      securePayment: 'Secure Payment via Razorpay',
      orderSummary: 'Order Summary',
      total: 'Total',
      processing: 'Processing your payment...',
      success: 'Payment Successful! Your booking is confirmed.',
      failed: 'Payment failed. Please try again.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      services: 'पूजा सेवाएं',
      pandits: 'हमारे पंडित',
      products: 'पवित्र स्टोर',
      bookNow: 'अभी बुक करें',
      contact: 'संपर्क',
    },
    hero: {
      title: 'दिव्यसेवा',
      subtitle: 'अपने घर के द्वार पर प्रामाणिक वैदिक पूजाओं की दिव्य कृपा का अनुभव करें',
      cta: 'पूजा बुक करें',
      ctaSecondary: 'सेवाएं देखें',
      tagline: 'भारत भर में 50,000+ परिवारों का विश्वास',
      trustedBy: '100+ शहरों में परिवारों का विश्वास',
    },
    services: {
      title: 'पवित्र पूजा सेवाएं',
      subtitle: 'अनुभवी पंडितों द्वारा की जाने वाली प्रामाणिक वैदिक अनुष्ठानों की विस्तृत श्रृंखला में से चुनें',
      viewAll: 'सभी सेवाएं देखें',
      bookNow: 'अभी बुक करें',
      perSession: 'प्रति सत्र',
      popular: 'सबसे लोकप्रिय',
      categories: {
        all: 'सभी पूजाएं',
        grihaPravesh: 'गृह प्रवेश',
        doshaRemoval: 'दोष निवारण',
        prosperity: 'समृद्धि',
        health: 'स्वास्थ्य एवं कल्याण',
        special: 'विशेष पूजाएं',
      },
    },
    pandits: {
      title: 'हमारे पूज्य पंडित',
      subtitle: 'हमारे विद्वान और अनुभवी वैदिक पंडितों से मिलें',
      experience: 'वर्ष का अनुभव',
      pujas: 'पूजाएं संपन्न',
      rating: 'रेटिंग',
      languages: 'भाषाएं',
      viewProfile: 'प्रोफाइल देखें',
      bookPandit: 'इस पंडित को बुक करें',
    },
    products: {
      title: 'पवित्र स्टोर',
      subtitle: 'आपकी दैनिक साधना और कल्याण के लिए प्रीमियम आध्यात्मिक उत्पाद',
      addToCart: 'कार्ट में डालें',
      viewDetails: 'विवरण देखें',
      bestSeller: 'बेस्ट सेलर',
      categories: {
        all: 'सभी उत्पाद',
        pujaKit: 'पूजा किट',
        rudraksha: 'रुद्राक्ष',
        yantras: 'यंत्र',
        essentials: 'आवश्यक सामग्री',
      },
    },
    booking: {
      title: 'पूजा बुक करें',
      subtitle: 'कुछ ही कदमों में अपने पवित्र अनुष्ठान की बुकिंग करें',
      selectDate: 'शुभ तिथि चुनें',
      selectTime: 'समय चुनें',
      selectPackage: 'पैकेज चुनें',
      yourDetails: 'आपका विवरण',
      name: 'पूरा नाम',
      phone: 'फोन नंबर',
      email: 'ईमेल पता',
      address: 'पता',
      city: 'शहर',
      specialRequests: 'विशेष अनुरोध',
      proceedToPayment: 'भुगतान करें',
      basic: 'बेसिक',
      standard: 'स्टैंडर्ड',
      premium: 'प्रीमियम',
    },
    testimonials: {
      title: 'धन्य परिवार',
      subtitle: 'उन परिवारों की बात सुनें जिन्होंने हमारी सेवाओं से दिव्य कृपा अनुभव की',
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'हमारी सेवाओं के बारे में सब कुछ जानें',
    },
    footer: {
      tagline: 'प्रामाणिक वैदिक अनुष्ठानों के साथ दिव्य आशीर्वाद आपके द्वार पर',
      quickLinks: 'त्वरित लिंक',
      contactUs: 'संपर्क करें',
      followUs: 'हमें फॉलो करें',
      copyright: '© 2026 दिव्यसेवा। सर्वाधिकार सुरक्षित।',
      madeWith: 'भारत में भक्ति से निर्मित',
    },
    payment: {
      payNow: 'अभी भुगतान करें',
      securePayment: 'रेज़रपे द्वारा सुरक्षित भुगतान',
      orderSummary: 'ऑर्डर सारांश',
      total: 'कुल',
      processing: 'आपका भुगतान प्रोसेस हो रहा है...',
      success: 'भुगतान सफल! आपकी बुकिंग की पुष्टि हो गई है।',
      failed: 'भुगतान विफल। कृपया पुनः प्रयास करें।',
    },
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      services: 'ಪೂಜಾ ಸೇವೆಗಳು',
      pandits: 'ನಮ್ಮ ಪಂಡಿತರು',
      products: 'ಪವಿತ್ರ ಅಂಗಡಿ',
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      contact: 'ಸಂಪರ್ಕ',
    },
    hero: {
      title: 'ದಿವ್ಯಸೇವಾ',
      subtitle: 'ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಲ್ಲೇ ಅಧಿಕೃತ ವೈದಿಕ ಪೂಜೆಗಳ ದಿವ್ಯ ಅನುಗ್ರಹವನ್ನು ಅನುಭವಿಸಿ',
      cta: 'ಪೂಜೆ ಬುಕ್ ಮಾಡಿ',
      ctaSecondary: 'ಸೇವೆಗಳನ್ನು ನೋಡಿ',
      tagline: 'ಭಾರತದಾದ್ಯಂತ 50,000+ ಕುಟುಂಬಗಳ ವಿಶ್ವಾಸ',
      trustedBy: '100+ ನಗರಗಳಲ್ಲಿ ಕುಟುಂಬಗಳ ವಿಶ್ವಾಸ',
    },
    services: {
      title: 'ಪವಿತ್ರ ಪೂಜಾ ಸೇವೆಗಳು',
      subtitle: 'ಅನುಭವಿ ಪಂಡಿತರಿಂದ ನಡೆಸಲ್ಪಡುವ ಅಧಿಕೃತ ವೈದಿಕ ವಿಧಿಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಿ',
      viewAll: 'ಎಲ್ಲಾ ಸೇವೆಗಳನ್ನು ನೋಡಿ',
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      perSession: 'ಪ್ರತಿ ಅವಧಿ',
      popular: 'ಅತ್ಯಂತ ಜನಪ್ರಿಯ',
      categories: {
        all: 'ಎಲ್ಲಾ ಪೂಜೆಗಳು',
        grihaPravesh: 'ಗೃಹ ಪ್ರವೇಶ',
        doshaRemoval: 'ದೋಷ ನಿವಾರಣೆ',
        prosperity: 'ಸಮೃದ್ಧಿ',
        health: 'ಆರೋಗ್ಯ ಮತ್ತು ಕಲ್ಯಾಣ',
        special: 'ವಿಶೇಷ ಪೂಜೆಗಳು',
      },
    },
    pandits: {
      title: 'ನಮ್ಮ ಪೂಜ್ಯ ಪಂಡಿತರು',
      subtitle: 'ನಮ್ಮ ವಿದ್ವಾಂಸ ಮತ್ತು ಅನುಭವಿ ವೈದಿಕ ಪಂಡಿತರನ್ನು ಭೇಟಿಯಾಗಿ',
      experience: 'ವರ್ಷಗಳ ಅನುಭವ',
      pujas: 'ಪೂಜೆಗಳು ನೆರವೇರಿಸಿದ',
      rating: 'ರೇಟಿಂಗ್',
      languages: 'ಭಾಷೆಗಳು',
      viewProfile: 'ಪ್ರೊಫೈಲ್ ನೋಡಿ',
      bookPandit: 'ಈ ಪಂಡಿತರನ್ನು ಬುಕ್ ಮಾಡಿ',
    },
    products: {
      title: 'ಪವಿತ್ರ ಅಂಗಡಿ',
      subtitle: 'ನಿಮ್ಮ ದೈನಂದಿನ ಸಾಧನೆ ಮತ್ತು ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಪ್ರೀಮಿಯಂ ಆಧ್ಯಾತ್ಮಿಕ ಉತ್ಪನ್ನಗಳು',
      addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      bestSeller: 'ಬೆಸ್ಟ್ ಸೆಲ್ಲರ್',
      categories: {
        all: 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು',
        pujaKit: 'ಪೂಜಾ ಕಿಟ್',
        rudraksha: 'ರುದ್ರಾಕ್ಷ',
        yantras: 'ಯಂತ್ರಗಳು',
        essentials: 'ಅಗತ್ಯ ವಸ್ತುಗಳು',
      },
    },
    booking: {
      title: 'ಪೂಜೆ ಬುಕ್ ಮಾಡಿ',
      subtitle: 'ಕೆಲವೇ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಪವಿತ್ರ ಕಾರ್ಯಕ್ರಮವನ್ನು ನಿಗದಿಪಡಿಸಿ',
      selectDate: 'ಶುಭ ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
      selectTime: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
      selectPackage: 'ಪ್ಯಾಕೇಜ್ ಆಯ್ಕೆಮಾಡಿ',
      yourDetails: 'ನಿಮ್ಮ ವಿವರಗಳು',
      name: 'ಪೂರ್ಣ ಹೆಸರು',
      phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
      email: 'ಇಮೇಲ್ ವಿಳಾಸ',
      address: 'ವಿಳಾಸ',
      city: 'ನಗರ',
      specialRequests: 'ವಿಶೇಷ ವಿನಂತಿಗಳು',
      proceedToPayment: 'ಪಾವತಿಗೆ ಮುಂದುವರಿಯಿರಿ',
      basic: 'ಬೇಸಿಕ್',
      standard: 'ಸ್ಟ್ಯಾಂಡರ್ಡ್',
      premium: 'ಪ್ರೀಮಿಯಂ',
    },
    testimonials: {
      title: 'ಧನ್ಯ ಕುಟುಂಬಗಳು',
      subtitle: 'ನಮ್ಮ ಸೇವೆಗಳ ಮೂಲಕ ದಿವ್ಯ ಅನುಗ್ರಹವನ್ನು ಅನುಭವಿಸಿದ ಕುಟುಂಬಗಳ ಅನುಭವ',
    },
    faq: {
      title: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
      subtitle: 'ನಮ್ಮ ಸೇವೆಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ತಿಳಿಯಬೇಕಾದ ಎಲ್ಲವೂ',
    },
    footer: {
      tagline: 'ಅಧಿಕೃತ ವೈದಿಕ ವಿಧಿಗಳೊಂದಿಗೆ ದಿವ್ಯ ಆಶೀರ್ವಾದವನ್ನು ನಿಮ್ಮ ಬಾಗಿಲಿಗೆ ತರುತ್ತಿದ್ದೇವೆ',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contactUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      followUs: 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ',
      copyright: '© 2026 ದಿವ್ಯಸೇವಾ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      madeWith: 'ಭಾರತದಲ್ಲಿ ಭಕ್ತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ',
    },
    payment: {
      payNow: 'ಈಗ ಪಾವತಿಸಿ',
      securePayment: 'ರೇಜ಼ರ್‌ಪೇ ಮೂಲಕ ಸುರಕ್ಷಿತ ಪಾವತಿ',
      orderSummary: 'ಆರ್ಡರ್ ಸಾರಾಂಶ',
      total: 'ಒಟ್ಟು',
      processing: 'ನಿಮ್ಮ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ...',
      success: 'ಪಾವತಿ ಯಶಸ್ವಿ! ನಿಮ್ಮ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ.',
      failed: 'ಪಾವತಿ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      services: 'பூஜை சேவைகள்',
      pandits: 'எங்கள் பண்டிதர்கள்',
      products: 'புனித கடை',
      bookNow: 'இப்போது புக் செய்யுங்கள்',
      contact: 'தொடர்பு',
    },
    hero: {
      title: 'திவ்யசேவா',
      subtitle: 'உங்கள் வீட்டு வாசலிலேயே நம்பகமான வேத பூஜைகளின் தெய்வீக அருளை அனுபவியுங்கள்',
      cta: 'பூஜை புக் செய்யுங்கள்',
      ctaSecondary: 'சேவைகளைப் பாருங்கள்',
      tagline: 'இந்தியா முழுவதும் 50,000+ குடும்பங்களின் நம்பிக்கை',
      trustedBy: '100+ நகரங்களில் குடும்பங்களின் நம்பிக்கை',
    },
    services: {
      title: 'புனித பூஜை சேவைகள்',
      subtitle: 'அனுபவமிக்க பண்டிதர்களால் நடத்தப்படும் நம்பகமான வேத சடங்குகளிலிருந்து தேர்வு செய்யுங்கள்',
      viewAll: 'அனைத்து சேவைகளையும் காண்க',
      bookNow: 'இப்போது புக் செய்யுங்கள்',
      perSession: 'ஒரு அமர்வுக்கு',
      popular: 'மிகவும் பிரபலமான',
      categories: {
        all: 'அனைத்து பூஜைகள்',
        grihaPravesh: 'கிரகப் பிரவேசம்',
        doshaRemoval: 'தோஷ நிவாரணம்',
        prosperity: 'செழிப்பு',
        health: 'ஆரோக்கியம் & நலன்',
        special: 'சிறப்பு பூஜைகள்',
      },
    },
    pandits: {
      title: 'எங்கள் மதிப்பிற்குரிய பண்டிதர்கள்',
      subtitle: 'எங்கள் அறிஞர்கள் மற்றும் அனுபவமிக்க வேத பண்டிதர்களை சந்தியுங்கள்',
      experience: 'ஆண்டுகள் அனுபவம்',
      pujas: 'பூஜைகள் நடத்தியது',
      rating: 'மதிப்பீடு',
      languages: 'மொழிகள்',
      viewProfile: 'சுயவிவரம் காண்க',
      bookPandit: 'இந்த பண்டிதரை புக் செய்யுங்கள்',
    },
    products: {
      title: 'புனித கடை',
      subtitle: 'உங்கள் தினசரி சாதனை மற்றும் நலனுக்கான பிரீமியம் ஆன்மீக பொருட்கள்',
      addToCart: 'கூடையில் சேர்',
      viewDetails: 'விவரங்களைக் காண்க',
      bestSeller: 'பெஸ்ட் செல்லர்',
      categories: {
        all: 'அனைத்து பொருட்கள்',
        pujaKit: 'பூஜை கிட்',
        rudraksha: 'ருத்ராட்சம்',
        yantras: 'யந்திரங்கள்',
        essentials: 'அத்தியாவசியப் பொருட்கள்',
      },
    },
    booking: {
      title: 'பூஜை புக் செய்யுங்கள்',
      subtitle: 'சில படிகளில் உங்கள் புனித சடங்கை திட்டமிடுங்கள்',
      selectDate: 'சுப நாளைத் தேர்வு செய்யுங்கள்',
      selectTime: 'நேரத்தைத் தேர்வு செய்யுங்கள்',
      selectPackage: 'பேக்கேஜைத் தேர்வு செய்யுங்கள்',
      yourDetails: 'உங்கள் விவரங்கள்',
      name: 'முழு பெயர்',
      phone: 'தொலைபேசி எண்',
      email: 'மின்னஞ்சல் முகவரி',
      address: 'முகவரி',
      city: 'நகரம்',
      specialRequests: 'சிறப்பு கோரிக்கைகள்',
      proceedToPayment: 'கட்டணத்திற்கு தொடரவும்',
      basic: 'அடிப்படை',
      standard: 'நிலையான',
      premium: 'பிரீமியம்',
    },
    testimonials: {
      title: 'ஆசீர்வதிக்கப்பட்ட குடும்பங்கள்',
      subtitle: 'எங்கள் சேவைகள் மூலம் தெய்வீக அருளை அனுபவித்த குடும்பங்களின் அனுபவங்கள்',
    },
    faq: {
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      subtitle: 'எங்கள் சேவைகள் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்',
    },
    footer: {
      tagline: 'நம்பகமான வேத சடங்குகளுடன் தெய்வீக ஆசீர்வாதங்களை உங்கள் வாசலில் தருகிறோம்',
      quickLinks: 'விரைவு இணைப்புகள்',
      contactUs: 'எங்களை தொடர்பு கொள்ளுங்கள்',
      followUs: 'எங்களை பின்தொடருங்கள்',
      copyright: '© 2026 திவ்யசேவா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      madeWith: 'இந்தியாவில் பக்தியுடன் உருவாக்கப்பட்டது',
    },
    payment: {
      payNow: 'இப்போது செலுத்துங்கள்',
      securePayment: 'ரேசர்பே மூலம் பாதுகாப்பான கட்டணம்',
      orderSummary: 'ஆர்டர் சுருக்கம்',
      total: 'மொத்தம்',
      processing: 'உங்கள் கட்டணம் செயலாக்கப்படுகிறது...',
      success: 'கட்டணம் வெற்றிகரமாக! உங்கள் புக்கிங் உறுதிப்படுத்தப்பட்டது.',
      failed: 'கட்டணம் தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      services: 'పూజా సేవలు',
      pandits: 'మా పండితులు',
      products: 'పవిత్ర స్టోర్',
      bookNow: 'ఇప్పుడు బుక్ చేయండి',
      contact: 'సంప్రదించండి',
    },
    hero: {
      title: 'దివ్యసేవ',
      subtitle: 'మీ ఇంటి వాకిలిలోనే ప్రామాణిక వేద పూజల దివ్య అనుగ్రహాన్ని అనుభవించండి',
      cta: 'పూజ బుక్ చేయండి',
      ctaSecondary: 'సేవలు చూడండి',
      tagline: 'భారతదేశం అంతటా 50,000+ కుటుంబాల నమ్మకం',
      trustedBy: '100+ నగరాల్లో కుటుంబాల నమ్మకం',
    },
    services: {
      title: 'పవిత్ర పూజా సేవలు',
      subtitle: 'అనుభవజ్ఞులైన పండితుల ద్వారా నిర్వహించబడే ప్రామాణిక వేద విధులలో ఎంచుకోండి',
      viewAll: 'అన్ని సేవలు చూడండి',
      bookNow: 'ఇప్పుడు బుక్ చేయండి',
      perSession: 'ప్రతి సెషన్',
      popular: 'అత్యంత ప్రజాదరణ',
      categories: {
        all: 'అన్ని పూజలు',
        grihaPravesh: 'గృహ ప్రవేశం',
        doshaRemoval: 'దోష నివారణ',
        prosperity: 'సమృద్ధి',
        health: 'ఆరోగ్యం & సంక్షేమం',
        special: 'ప్రత్యేక పూజలు',
      },
    },
    pandits: {
      title: 'మా పూజ్య పండితులు',
      subtitle: 'మా విద్వాంసులు మరియు అనుభవజ్ఞులైన వేద పండితులను కలవండి',
      experience: 'సంవత్సరాల అనుభవం',
      pujas: 'పూజలు నిర్వహించారు',
      rating: 'రేటింగ్',
      languages: 'భాషలు',
      viewProfile: 'ప్రొఫైల్ చూడండి',
      bookPandit: 'ఈ పండితుడిని బుక్ చేయండి',
    },
    products: {
      title: 'పవిత్ర స్టోర్',
      subtitle: 'మీ దైనందిన సాధన మరియు సంక్షేమం కోసం ప్రీమియం ఆధ్యాత్మిక ఉత్పత్తులు',
      addToCart: 'కార్ట్‌కు జోడించండి',
      viewDetails: 'వివరాలు చూడండి',
      bestSeller: 'బెస్ట్ సెల్లర్',
      categories: {
        all: 'అన్ని ఉత్పత్తులు',
        pujaKit: 'పూజా కిట్',
        rudraksha: 'రుద్రాక్ష',
        yantras: 'యంత్రాలు',
        essentials: 'అవసరమైన వస్తువులు',
      },
    },
    booking: {
      title: 'పూజ బుక్ చేయండి',
      subtitle: 'కొన్ని అడుగుల్లో మీ పవిత్ర కార్యక్రమాన్ని షెడ్యూల్ చేయండి',
      selectDate: 'శుభ తేదీ ఎంచుకోండి',
      selectTime: 'సమయం ఎంచుకోండి',
      selectPackage: 'ప్యాకేజీ ఎంచుకోండి',
      yourDetails: 'మీ వివరాలు',
      name: 'పూర్తి పేరు',
      phone: 'ఫోన్ నంబర్',
      email: 'ఇమెయిల్ చిరునామా',
      address: 'చిరునామా',
      city: 'నగరం',
      specialRequests: 'ప్రత్యేక అభ్యర్థనలు',
      proceedToPayment: 'చెల్లింపుకు కొనసాగండి',
      basic: 'బేసిక్',
      standard: 'స్టాండర్డ్',
      premium: 'ప్రీమియం',
    },
    testimonials: {
      title: 'ఆశీర్వదించబడిన కుటుంబాలు',
      subtitle: 'మా సేవల ద్వారా దివ్య అనుగ్రహాన్ని అనుభవించిన కుటుంబాల అనుభవాలు',
    },
    faq: {
      title: 'తరచుగా అడిగే ప్రశ్నలు',
      subtitle: 'మా సేవల గురించి మీరు తెలుసుకోవలసిన అన్ని విషయాలు',
    },
    footer: {
      tagline: 'ప్రామాణిక వేద విధులతో దివ్య ఆశీర్వాదాలను మీ వాకిలికి తీసుకువస్తున్నాము',
      quickLinks: 'శీఘ్ర లింక్‌లు',
      contactUs: 'మమ్మల్ని సంప్రదించండి',
      followUs: 'మమ్మల్ని అనుసరించండి',
      copyright: '© 2026 దివ్యసేవ. అన్ని హక్కులు రక్షించబడ్డాయి.',
      madeWith: 'భారతదేశంలో భక్తితో తయారు చేయబడింది',
    },
    payment: {
      payNow: 'ఇప్పుడు చెల్లించండి',
      securePayment: 'రేజర్‌పే ద్వారా సురక్షిత చెల్లింపు',
      orderSummary: 'ఆర్డర్ సారాంశం',
      total: 'మొత్తం',
      processing: 'మీ చెల్లింపు ప్రాసెస్ అవుతోంది...',
      success: 'చెల్లింపు విజయవంతం! మీ బుకింగ్ నిర్ధారించబడింది.',
      failed: 'చెల్లింపు విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
    },
  },
};
