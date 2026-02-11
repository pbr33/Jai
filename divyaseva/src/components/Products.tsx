'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Tag, Heart, Package } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { products, Product } from '@/lib/data';

type ProductCategory = 'all' | Product['category'];

export default function Products() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: t.products.categories.all },
    { key: 'pujaKit', label: t.products.categories.pujaKit },
    { key: 'rudraksha', label: t.products.categories.rudraksha },
    { key: 'yantras', label: t.products.categories.yantras },
    { key: 'essentials', label: t.products.categories.essentials },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-28 relative sacred-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4">
            <Package className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Sacred Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.products.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.products.subtitle}</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-gold to-saffron text-white shadow-lg shadow-gold/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gold/30 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-cream to-saffron/5 flex items-center justify-center overflow-hidden">
                  {/* Placeholder Sacred Pattern */}
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {product.category === 'rudraksha'
                      ? '📿'
                      : product.category === 'pujaKit'
                      ? '🪔'
                      : product.category === 'yantras'
                      ? '🔯'
                      : '🧘'}
                  </div>

                  {/* Best Seller Badge */}
                  {product.bestSeller && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-sacred-red to-maroon text-white text-xs font-bold rounded-full">
                      {t.products.bestSeller}
                    </div>
                  )}

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}

                  {/* Wishlist */}
                  <button className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white hover:text-sacred-red transition-all">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-saffron-dark transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-sandalwood font-medium">
                    {product.nameHi}
                  </p>

                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-cream text-[10px] text-gray-600 rounded-full"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold fill-gold'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xl font-bold text-saffron-dark">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button className="p-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
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
