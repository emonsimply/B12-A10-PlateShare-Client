import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';
import HowItWorks from './HowItWorks';
import CommunityStats from './CommunityStats';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <CommunityStats></CommunityStats>
    </div>
  );
};

export default Home;