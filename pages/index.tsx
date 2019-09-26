import { NextPage } from 'next';
import React from 'react';
import HomeContent from '../components/content/home/home.content';
import Layout from '../components/layouts/layout';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <HomeContent></HomeContent>
    </Layout>
  );
};

export default IndexPage;
