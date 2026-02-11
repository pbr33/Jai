'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Shield,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { pujaServices, timeSlots, cities } from '@/lib/data';

type BookingStep = 1 | 2 | 3 | 4;

const packages = [
  {
    id: 'basic',
    multiplier: 1,
    features: ['1 Pandit', 'Standard Samagri', '2-3 Hours', 'Basic Havan'],
    color: 'from-gray-100 to-gray-50',
    border: 'border-gray-200',
    popular: false,
  },
  {
    id: 'standard',
    multiplier: 1.5,
    features: [
      '2 Pandits',
      'Premium Samagri',
      '3-4 Hours',
      'Full Havan',
      'Prasad for 25 people',
    ],
    color: 'from-saffron/10 to-gold/10',
    border: 'border-saffron/30',
    popular: true,
  },
  {
    id: 'premium',
    multiplier: 2.5,
    features: [
      '4 Pandits',
      'Deluxe Samagri',
      '5-6 Hours',
      'Grand Havan',
      'Prasad for 50 people',
      'Video Recording',
      'Flower Decoration',
    ],
    color: 'from-gold/10 to-maroon/10',
    border: 'border-gold/30',
    popular: false,
  },
];

export default function Booking() {
  const { t } = useLanguage();
  const [step, setStep] = useState<BookingStep>(1);
  const [selectedPuja, setSelectedPuja] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    requests: '',
  });
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    'idle' | 'processing' | 'success' | 'failed'
  >('idle');

  const selectedService = pujaServices.find((s) => s.id === selectedPuja);
  const selectedPkg = packages.find((p) => p.id === selectedPackage);
  const totalPrice = selectedService
    ? Math.round(selectedService.price * (selectedPkg?.multiplier || 1))
    : 0;

  const getPackageLabel = (id: string) => {
    switch (id) {
      case 'basic': return t.booking.basic;
      case 'standard': return t.booking.standard;
      case 'premium': return t.booking.premium;
      default: return id;
    }
  };

  const handlePayment = () => {
    setPaymentStatus('processing');
    // Simulate Razorpay integration
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedPuja && selectedDate && selectedTime;
      case 2:
        return selectedPackage;
      case 3:
        return formData.name && formData.phone && formData.city;
      default:
        return true;
    }
  };

  return (
    <section
      id="booking"
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/10 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-saffron" />
            <span className="text-sm font-medium text-saffron-dark">Easy Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.booking.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.booking.subtitle}</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s
                    ? 'bg-gradient-to-r from-saffron to-saffron-dark text-white shadow-lg shadow-saffron/25'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-12 sm:w-20 h-1 rounded-full transition-all ${
                    step > s ? 'bg-saffron' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {/* Step 1: Select Puja, Date, Time */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Select Puja */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Puja Service
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pujaServices.slice(0, 6).map((puja) => (
                    <button
                      key={puja.id}
                      onClick={() => setSelectedPuja(puja.id)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                        selectedPuja === puja.id
                          ? 'border-saffron bg-saffron/5 shadow-md'
                          : 'border-gray-100 hover:border-saffron/30'
                      }`}
                    >
                      <span className="text-2xl">{puja.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">
                          {puja.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ₹{puja.price.toLocaleString()} onwards
                        </div>
                      </div>
                      {selectedPuja === puja.id && (
                        <CheckCircle2 className="w-5 h-5 text-saffron ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {t.booking.selectDate}
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {t.booking.selectTime}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTime(slot.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        selectedTime === slot.id
                          ? 'border-saffron bg-saffron/5'
                          : 'border-gray-100 hover:border-saffron/30'
                      }`}
                    >
                      <div className="text-sm font-semibold text-gray-800">
                        {slot.label}
                      </div>
                      <div className="text-xs text-saffron-dark">{slot.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Package */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-6">
                <Sparkles className="w-4 h-4 inline mr-1" />
                {t.booking.selectPackage}
              </label>
              <div className="grid sm:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative p-6 rounded-3xl border-2 text-left transition-all ${
                      selectedPackage === pkg.id
                        ? `${pkg.border} bg-gradient-to-br ${pkg.color} shadow-xl`
                        : 'border-gray-100 hover:border-saffron/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-saffron to-gold text-white text-xs font-bold rounded-full">
                        Recommended
                      </div>
                    )}

                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {getPackageLabel(pkg.id)}
                    </div>
                    <div className="text-2xl font-bold text-saffron-dark mb-4">
                      ₹
                      {selectedService
                        ? Math.round(
                            selectedService.price * pkg.multiplier
                          ).toLocaleString()
                        : '---'}
                    </div>

                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {selectedPackage === pkg.id && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle2 className="w-6 h-6 text-saffron" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Your Details */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <label className="block text-sm font-semibold text-gray-700 mb-6">
                <User className="w-4 h-4 inline mr-1" />
                {t.booking.yourDetails}
              </label>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      {t.booking.name} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      {t.booking.phone} *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    {t.booking.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    {t.booking.address} *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      rows={2}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all resize-none"
                      placeholder="Enter your full address"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      {t.booking.city} *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      {t.booking.specialRequests}
                    </label>
                    <input
                      type="text"
                      value={formData.requests}
                      onChange={(e) =>
                        setFormData({ ...formData, requests: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                      placeholder="Any special requirements"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              {paymentStatus === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.payment.success}
                  </h3>
                  <p className="text-gray-600">
                    Booking ID: #DS{Date.now().toString().slice(-8)}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    You will receive a confirmation SMS and email shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Order Summary */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {t.payment.orderSummary}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {selectedService?.name}
                        </span>
                        <span className="font-medium">
                          ₹{selectedService?.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Package: {getPackageLabel(selectedPackage)}
                        </span>
                        <span className="font-medium">
                          x{selectedPkg?.multiplier}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date</span>
                        <span className="font-medium">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Time</span>
                        <span className="font-medium">
                          {timeSlots.find((s) => s.id === selectedTime)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Name</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">City</span>
                        <span className="font-medium">{formData.city}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-3 mt-3">
                        <div className="flex justify-between">
                          <span className="text-lg font-bold text-gray-900">
                            {t.payment.total}
                          </span>
                          <span className="text-2xl font-bold text-saffron-dark">
                            ₹{totalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <div className="space-y-4">
                    <button
                      onClick={handlePayment}
                      disabled={paymentStatus === 'processing'}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-saffron to-saffron-dark text-white font-bold text-lg rounded-2xl shadow-lg shadow-saffron/25 hover:shadow-xl transition-all disabled:opacity-70"
                    >
                      {paymentStatus === 'processing' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.payment.processing}
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          {t.payment.payNow} — ₹{totalPrice.toLocaleString()}
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4" />
                      {t.payment.securePayment}
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                      {['Razorpay', 'UPI', 'Cards', 'Net Banking'].map(
                        (method) => (
                          <span
                            key={method}
                            className="px-3 py-1.5 bg-gray-50 text-xs text-gray-500 rounded-lg border border-gray-100"
                          >
                            {method}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {paymentStatus !== 'success' && (
          <div className="flex items-center justify-between mt-12 max-w-2xl mx-auto">
            {step > 1 ? (
              <button
                onClick={() => setStep((step - 1) as BookingStep)}
                className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-medium rounded-full hover:border-saffron hover:text-saffron transition-all"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 && (
              <button
                onClick={() => setStep((step + 1) as BookingStep)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold rounded-full shadow-lg shadow-saffron/25 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
