'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Phone } from 'lucide-react';
import { useLanguage, languageNames } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#pandits', label: t.nav.pandits },
    { href: '#products', label: t.nav.products },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-saffron/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white text-xl font-bold">
              ॐ
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
                DivyaSeva
              </span>
              <span className="hidden sm:block text-[10px] text-sandalwood -mt-1">
                दिव्यसेवा — Divine Service
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-saffron/20 text-sm text-gray-600 hover:border-saffron hover:text-saffron transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languageNames[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-saffron/10 overflow-hidden z-50"
                  >
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${
                          language === lang
                            ? 'bg-saffron/10 text-saffron font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-1 text-sm text-saffron font-medium"
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>

            {/* CTA */}
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all animate-pulse-glow"
            >
              {t.nav.bookNow}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-saffron/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-gray-700 hover:text-saffron hover:bg-cream rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold rounded-full"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
