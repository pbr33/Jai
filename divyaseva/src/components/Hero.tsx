'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Clock, MapPin, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const stats = [
  { number: '50,000+', label: 'Families Blessed' },
  { number: '100+', label: 'Cities Covered' },
  { number: '500+', label: 'Expert Pandits' },
  { number: '4.9', label: 'Average Rating', icon: Star },
];

const features = [
  { icon: Shield, text: 'Verified Pandits' },
  { icon: Clock, text: 'On-time Service' },
  { icon: MapPin, text: 'Pan India Coverage' },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden sacred-pattern"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Mandala */}
        <div className="absolute -top-32 -right-32 w-96 h-96 opacity-[0.04]">
          <div className="w-full h-full rounded-full border-[3px] border-saffron animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border-[2px] border-gold animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-16 rounded-full border-[2px] border-maroon animate-spin-slow" />
        </div>
        {/* Bottom Left Glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-saffron/5 rounded-full blur-3xl" />
        {/* Center Om Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] text-saffron/[0.03] font-serif select-none">
          ॐ
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-saffron-dark">
                {t.hero.trustedBy}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-saffron via-saffron-dark to-maroon bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-medium mt-2 block">
                दिव्यसेवा
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap gap-4 mt-6">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <f.icon className="w-4 h-4 text-saffron" />
                  {f.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold rounded-full text-lg shadow-lg shadow-saffron/25 hover:shadow-xl hover:shadow-saffron/30 transition-all animate-pulse-glow"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-saffron/30 text-saffron-dark font-semibold rounded-full text-lg hover:bg-saffron/5 transition-all"
              >
                <Play className="w-5 h-5" />
                {t.hero.ctaSecondary}
              </motion.a>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 text-sm text-gray-500">
              {t.hero.tagline}
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Sacred Visual */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron/20 via-gold/10 to-maroon/20 blur-2xl animate-pulse" />

              {/* Decorative Ring */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-gold/30 animate-spin-slow" />

              {/* Inner Content Card */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cream to-white shadow-2xl flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                {/* Sacred Symbol */}
                <div className="text-8xl sm:text-9xl mb-2 animate-float">🪔</div>
                <div className="text-2xl sm:text-3xl font-bold text-saffron-dark mt-2">
                  दिव्यसेवा
                </div>
                <div className="text-sm text-sandalwood mt-1">
                  Divine Service
                </div>
                {/* Diya Row */}
                <div className="flex gap-3 mt-4">
                  {['🙏', '🔱', '📿', '🪷', '🕉️'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute top-4 right-0 bg-white rounded-2xl shadow-xl p-4 border border-saffron/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">100% Verified</div>
                    <div className="text-[10px] text-gray-500">Expert Pandits</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-xl p-4 border border-gold/10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-saffron fill-saffron" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">4.9 Rating</div>
                    <div className="text-[10px] text-gray-500">12,000+ Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-saffron/10 hover:border-saffron/30 hover:shadow-lg transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
