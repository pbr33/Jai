'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 text-[12rem] text-saffron/[0.03] font-serif select-none">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sacred-red/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-sacred-red" />
            <span className="text-sm font-medium text-sacred-red">Happy Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.testimonials.subtitle}</p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-saffron/10 p-8 lg:p-12 relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-saffron/10" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[active].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold fill-gold"
                    />
                  )
                )}
              </div>

              {/* Quote Text */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[active].location}
                  </div>
                  <div className="text-xs text-saffron font-medium">
                    {testimonials[active].service}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-saffron hover:text-saffron transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active === i
                      ? 'bg-saffron w-8'
                      : 'bg-gray-200 hover:bg-saffron/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-saffron hover:text-saffron transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: '🛕', number: '50,000+', label: 'Pujas Completed' },
            { icon: '👨‍👩‍👧‍👦', number: '35,000+', label: 'Happy Families' },
            { icon: '⭐', number: '4.9/5', label: 'Average Rating' },
            { icon: '🏙️', number: '100+', label: 'Cities Served' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-saffron/20 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-saffron-dark">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
