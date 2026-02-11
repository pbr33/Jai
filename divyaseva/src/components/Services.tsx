'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { pujaServices, PujaService } from '@/lib/data';

type Category = 'all' | PujaService['category'];

export default function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t.services.categories.all },
    { key: 'grihaPravesh', label: t.services.categories.grihaPravesh },
    { key: 'doshaRemoval', label: t.services.categories.doshaRemoval },
    { key: 'prosperity', label: t.services.categories.prosperity },
    { key: 'health', label: t.services.categories.health },
    { key: 'special', label: t.services.categories.special },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? pujaServices
      : pujaServices.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 relative sacred-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span className="text-sm font-medium text-saffron-dark">Sacred Rituals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.services.subtitle}</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-saffron to-saffron-dark text-white shadow-lg shadow-saffron/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-saffron/30 hover:text-saffron'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-white rounded-3xl border border-gray-100 hover:border-saffron/30 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-saffron to-gold text-white text-xs font-bold rounded-full">
                    {t.services.popular}
                  </div>
                )}

                {/* Icon Header */}
                <div className="p-6 pb-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron/10 to-gold/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-saffron-dark transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-sandalwood font-medium">{service.nameHi}</p>
                </div>

                {/* Content */}
                <div className="p-6 pt-3">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.includes.length} items
                    </span>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-700 mb-2">
                            Benefits:
                          </p>
                          <ul className="space-y-1.5">
                            {service.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-xs text-gray-600">
                                <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs font-semibold text-gray-700 mt-3 mb-2">
                            Includes:
                          </p>
                          <ul className="space-y-1.5">
                            {service.includes.map((inc) => (
                              <li key={inc} className="flex items-start gap-2 text-xs text-gray-600">
                                <Check className="w-3.5 h-3.5 text-saffron mt-0.5 shrink-0" />
                                {inc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() =>
                      setExpandedId(expandedId === service.id ? null : service.id)
                    }
                    className="text-xs text-saffron font-medium mt-3 hover:underline"
                  >
                    {expandedId === service.id ? 'Show Less' : 'View Details'}
                  </button>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-saffron-dark">
                        ₹{service.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">
                        {t.services.perSession}
                      </span>
                    </div>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1 px-5 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all"
                    >
                      {t.services.bookNow}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
