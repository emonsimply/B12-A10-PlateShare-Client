import React from 'react';
import Banner from './Banner';
import FeaturedFoods from './FeaturedFoods';
import HowItWorks from './HowItWorks';
import CommunityStats from './CommunityStats';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods data={data}></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <CommunityStats></CommunityStats>
    </div>
  );
};

export default Home;