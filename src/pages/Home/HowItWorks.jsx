import React from 'react';
import { FaPlus, FaSearch, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaPlus className="w-8 h-8" />,
    title: 'Post Your Surplus Food',
    description: 'Have extra meals? Add them with details like quantity, location, and expiry time.',
    color: 'from-orange-100 to-amber-100',
    iconBg: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: 'Browse & Request',
    description: 'Find available food near you and request what you need with a simple click.',
    color: 'from-emerald-50 to-green-50',
    iconBg: 'bg-[#344F1F]',
    textColor: 'text-[#344F1F]',
  },
  {
    icon: <FaHandsHelping className="w-8 h-8" />,
    title: 'Collect & Enjoy',
    description: 'Connect with the donor, pick up the food, and enjoy a fresh, shared meal.',
    color: 'from-amber-50 to-orange-50',
    iconBg: 'bg-primary',
    textColor: 'text-primary',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and meaningful — connect surplus food with those who need it in just 3 steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`bg-linear-to-br ${step.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-2`}>
                <div className={`w-20 h-20 ${step.iconBg} text-white rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <span className={`text-2xl font-bold ${step.textColor}`}>Step {index + 1}</span>
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;