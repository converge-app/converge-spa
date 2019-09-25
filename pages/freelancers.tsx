import { NextPage } from 'next';
import React from 'react';
import InfoPage from '../components/content/info-page/info-page';
import Layout from '../components/layouts/layout';

const FreelancerPage: NextPage = () => {
  const content = require('../articles/freelancers.md').default;
  return (
    <Layout>
      <InfoPage headline={'Freelancers'} content={content}/>
    </Layout>
  );
};

export default FreelancerPage;
