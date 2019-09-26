import { NextPage } from 'next';
import React from 'react';
import InfoPage from '../components/content/info-page/info-page';
import Layout from '../components/layouts/layout';

const EmployerPage: NextPage = () => {
  const content = require('../articles/employers.md').default;
  return (
    <Layout>
      <InfoPage headline={'Employers'} content={content} />
    </Layout>
  );
};

export default EmployerPage;
