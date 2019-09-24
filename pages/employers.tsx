import { NextPage } from 'next';
import React from 'react';
import InfoPage from '../components/info-page';
import Layout from '../components/layouts/layout';

const AboutPage: NextPage = () => {
  const content = require('../articles/employers.md').default;
  return (
    <Layout>
      <InfoPage headline={'Employers'} content={content}></InfoPage>
    </Layout>
  );
};

export default AboutPage;
