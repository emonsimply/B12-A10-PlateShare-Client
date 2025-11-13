import React from 'react';
import { FaUtensils, FaLeaf } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 text-secondary mb-4">
              <FaLeaf className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">Reduce Waste • Feed Community</span>
              <FaLeaf className="w-5 h-5" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Share Food,
              <span className="block text-secondary">Save Lives</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join PlateShare to donate surplus food and help those in need. 
              Every meal shared reduces waste and brings hope to someone's table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="/available-foods"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary transition-all duration-300 group"
              >
                <IoFastFoodOutline className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                View All Foods
              </motion.a>

              <motion.a
                href="/add-food"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-primary font-semibold rounded-full shadow-lg border-2 border-primary transition-all duration-300 group"
              >
                <FaUtensils className="w-5 h-5" />
                Donate Now
              </motion.a>
            </div>

           
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-500">
                <div className="bg-linear-to-br from-yellow-100 to-orange-100 rounded-2xl p-6">
                  <img
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Shared meal"
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </div>

               
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Fresh Today
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1"
                >
                  <FaUtensils className="w-4 h-4" />
                  Serves 4
                </motion.div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Banner;