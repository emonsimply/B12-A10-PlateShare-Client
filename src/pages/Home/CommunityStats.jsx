import React from 'react';
import { FaUsers, FaHeart, FaLeaf, FaClock } from 'react-icons/fa';

const stats = [
  { icon: <FaUsers className="w-8 h-8" />, value: '2,500+', label: 'Active Community Members', color: 'text-primary' },
  { icon: <FaHeart className="w-8 h-8" />, value: '8,900+', label: 'Meals Shared & Saved', color: 'text-red-500' },
  { icon: <FaLeaf className="w-8 h-8" />, value: '1.2 Ton', label: 'Food Waste Prevented', color: 'text-[#344F1F]' },
  { icon: <FaClock className="w-8 h-8" />, value: '24/7', label: 'Always Ready to Help', color: 'text-primary' },
];

const CommunityStats = () => {
  return (
    <section className="py-16 md:py-20 bg-linear-to-r from-secondary via-[#527734] to-secondary">
      <div className="container mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Impact in <span className="text-primary">Dhaka</span> & Beyond
          </h2>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Every shared meal reduces waste and strengthens our community.
          </p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                index % 2 === 0 ? 'bg-primary/20' : 'bg-white/10'
              }`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-orange-100 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-10">
          <p className="text-orange-200 text-sm italic">
            Proudly connecting donors and families across <span className="font-semibold text-primary">Dhaka Division</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;