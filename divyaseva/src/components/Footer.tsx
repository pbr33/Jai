'use client';

import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.pandits, href: '#pandits' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.bookNow, href: '#booking' },
  ];

  const pujaLinks = [
    'Griha Pravesh Puja',
    'Rudra Abhishek',
    'Mahamrityunjay Jaap',
    'Satyanarayan Katha',
    'Mangal Dosh Nivaran',
    'Kaal Sarp Dosh Nivaran',
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      {/* Top Decorative Border */}
      <div className="h-1 gradient-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white text-xl font-bold">
                ॐ
              </div>
              <div>
                <span className="text-xl font-bold text-white">DivyaSeva</span>
                <span className="block text-[10px] text-gold-light">
                  दिव्यसेवा — Divine Service
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map(
                (social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-300 hover:bg-saffron hover:text-white transition-all"
                  >
                    {social.charAt(0)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-saffron-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Pujas */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-6">
              Popular Pujas
            </h3>
            <ul className="space-y-3">
              {pujaLinks.map((puja) => (
                <li key={puja}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-saffron-light transition-colors"
                  >
                    {puja}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-6">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-saffron-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-saffron" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:namaste@divyaseva.in"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-saffron-light transition-colors"
                >
                  <Mail className="w-4 h-4 text-saffron" />
                  namaste@divyaseva.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-saffron mt-0.5" />
                  <span>
                    DivyaSeva Pvt. Ltd.
                    <br />
                    Koramangala, Bangalore
                    <br />
                    Karnataka 560034
                  </span>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            {t.footer.madeWith}{' '}
            <Heart className="w-3.5 h-3.5 text-sacred-red fill-sacred-red" />
          </p>
        </div>
      </div>
    </footer>
  );
}
