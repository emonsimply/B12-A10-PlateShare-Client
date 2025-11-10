import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';
import HowItWorks from './HowItWorks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;