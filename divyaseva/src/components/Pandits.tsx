'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Award, MessageSquare, Languages } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { pandits } from '@/lib/data';

export default function Pandits() {
  const { t } = useLanguage();

  return (
    <section id="pandits" className="py-20 lg:py-28 bg-gradient-to-b from-cream to-white relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-maroon/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-maroon" />
            <span className="text-sm font-medium text-maroon">Vedic Scholars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.pandits.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.pandits.subtitle}</p>
        </motion.div>

        {/* Pandits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pandits.map((pandit, index) => (
            <motion.div
              key={pandit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Profile Header */}
              <div className="relative h-32 bg-gradient-to-br from-saffron/20 via-gold/10 to-maroon/20">
                <div className="absolute -bottom-10 left-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron to-gold shadow-lg flex items-center justify-center text-white text-3xl font-bold">
                    {pandit.name.charAt(0)}
                  </div>
                </div>
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-bold text-gray-800">{pandit.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-14">
                <h3 className="text-lg font-bold text-gray-900">{pandit.name}</h3>
                <p className="text-sm text-saffron-dark font-medium">{pandit.title}</p>

                {/* Location */}
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {pandit.location}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-saffron-dark">{pandit.experience}</div>
                    <div className="text-[10px] text-gray-500">{t.pandits.experience}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-saffron-dark">
                      {pandit.pujasPerformed.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-gray-500">{t.pandits.pujas}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-saffron-dark">{pandit.reviews}</div>
                    <div className="text-[10px] text-gray-500">Reviews</div>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <Languages className="w-3.5 h-3.5" />
                    {t.pandits.languages}:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pandit.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2.5 py-1 bg-cream text-xs text-gray-600 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pandit.specializations.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 bg-saffron/10 text-xs text-saffron-dark font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3 mt-6">
                  <a
                    href="#booking"
                    className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    {t.pandits.bookPandit}
                  </a>
                  <button className="p-2.5 border border-gray-200 rounded-full hover:border-saffron hover:text-saffron transition-all">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
